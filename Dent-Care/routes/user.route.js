import { Router } from "express";
import userController from "../controllers/user.controller.js";
import userAuth from "../middleware/userauth.js";
import upload from "../middleware/imageUpload.js";

const userRouter = Router();


userRouter.get('/register',upload,userController.registerPage)
userRouter.post('/register',upload,userController.registerUser)
userRouter.get('/login',userController.loginPage)
userRouter.post('/login',userController.loginUser)

userRouter.get('/logout',userController.logout)

userRouter.get('/appointment',userAuth ,userController.appointmentPage)

export default userRouter