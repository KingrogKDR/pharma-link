import express from "express";
import { userRouter } from "./routes/userRouter.js";


const app = express()


// middlewares
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))
app.use(express.json())

// routes
app.use('/users', userRouter)


export default app