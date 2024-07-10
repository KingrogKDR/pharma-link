import { Router } from "express";
import { signUpHandler } from "../controllers/signup.controller.js"
import loginHandler from "../controllers/login.controller.js";
import logoutHandler from "../controllers/logout.controller.js";

const userRouter = Router()

userRouter.route('/sign-up').post(signUpHandler)
userRouter.route('/login').post(loginHandler)

//secured routes
userRouter.route('/logout').post(logoutHandler)

export {userRouter}