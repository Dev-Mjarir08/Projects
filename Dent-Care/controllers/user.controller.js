import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
import flashMsg from "../middleware/flashMsg.js"
const userController = {

    loginPage(req, res) {
        res.render('pages/user/login')
    },
    async loginUser(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })

            if (!user) {
                return res.redirect(req.get('Referrer') || '/user/login')
            }
            else {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    const payload = {
                        id: user._id,
                        name: user.name,
                        role: user.role
                    };

                    const token = jwt.sign(payload, 'secret', {
                        expiresIn: '1h'
                    });

                    res.cookie('token', token);

                    if (user.role === 'admin') {
                        req.flash('success', 'Admin logged in successfully');
                        return res.redirect('/admin/dashboard');
                    }
                    else if (user.role === 'doctor') {
                        req.flash('success', 'Doctor logged in successfully');
                        return res.redirect('/doctor/dashboard');

                    } else {
                        req.flash('success', 'Login successful');
                        return res.redirect('/');
                    }
                }
                else {


                    req.flash('error', 'Something went wrong');
                    return res.redirect('/user/login')
                }
            }
        } catch (error) {
            req.flash('error', 'Something went wrong');
            return res.redirect('/user/login')
            return res.status(500).send("Server Error");
        }
    },
    registerPage(req, res) {
        res.render('pages/user/register')
    },
    async registerUser(req, res) {


        try {
            if (req.file) {
                req.body.image = req.file.path;
            }
            console.log(req.file);
            
            const { password } = req.body
            req.body.password = await bcrypt.hash(password, 10)
            req.body.role = 'user'
            const user = await User.create(req.body)
            console.log(user);
            return res.redirect('/user/login')
        } catch (error) {
            console.log(error);

        }
    },

    logout(req, res) {
        res.clearCookie('token');
        return res.redirect('/');
    },
    appointmentPage(req, res) {
        res.render('pages/user/appointment')
    }

}
export default userController;