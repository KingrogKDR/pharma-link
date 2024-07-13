import { Router } from "express";
import { signUpHandler } from "../controllers/signup.controller.js"
import loginHandler from "../controllers/login.controller.js";
import logoutHandler from "../controllers/logout.controller.js";
import verifyJwt from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../utils/cookies.js";

const userRouter = Router()

userRouter.post('/signup',signUpHandler)
userRouter.post('/login', loginHandler)

//secured routes
userRouter.post('/logout', verifyJwt, logoutHandler)
userRouter.post('/refresh-token', refreshAccessToken)

export {userRouter}