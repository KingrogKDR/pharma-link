import express from "express";
import { userRouter } from "./routes/userRouter.js";
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
}));
app.use(cookieParser())


// middlewares
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))
app.use(express.json())

// routes
app.use('/users', userRouter)


export default app