import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import userAuth from "../middleware/userauth.js";

const adminRouter = Router()

adminRouter.post('/register',adminController.registerAdmin)
adminRouter.get('/dashboard',userAuth,adminController.dashboard)

export default adminRouter