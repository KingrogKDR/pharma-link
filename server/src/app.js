import express from "express";

const app = express()

app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))


// routes


export default app