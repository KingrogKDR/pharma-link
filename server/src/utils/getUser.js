import { pool } from "../db/db.js";

const getUserById = async(id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1",[id])
    return result.rows[0]
}

const getUserByUsername = async(username) => {
    const result = await pool.query("SELECT * FROM users WHERE username = $1",[username])
    return result.rows[0]
}

const createUser = async(username, password) => {
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',[username, password])
    return result.rows[0]
}

export { getUserById, getUserByUsername, createUser }