import { Router } from "express";
import { signUpHandler } from "../controllers/signup.controller.js"
import loginHandler from "../controllers/login.controller.js";
import logoutHandler from "../controllers/logout.controller.js";
import verifyJwt from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../utils/cookies.js";

const userRouter = Router()

userRouter.route('/sign-up').post(signUpHandler)
userRouter.route('/login').post(loginHandler)

//secured routes
userRouter.route('/logout').post(verifyJwt, logoutHandler)
userRouter.route('/refresh-token').post(refreshAccessToken)

export {userRouter}