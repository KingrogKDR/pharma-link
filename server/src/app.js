import express from "express";
import pool from '../db/db.js'

const app = express()
const dbPool = pool

// middlewares
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))
app.use(express.json())

// routes


export default app