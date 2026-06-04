import bcrypt from 'bcrypt'
import User from '../models/user.model.js'

const adminController = {
    async registerAdmin(req, res) {
        try {
            const { password } = req.body
            req.body.password = await bcrypt.hash(password, 10)
            req.body.role = 'admin'
            const admin = await User.create(req.body)
            console.log(admin);
            
            return res.json(admin)
        } catch (error) {
            console.log(error);
        }
    },
    dashboard(req,res){
        return res.render('pages/admin/dashboard')
    }
}
export default adminController