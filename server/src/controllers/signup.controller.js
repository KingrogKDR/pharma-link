import pool from '../db/db.js'
import bcrypt from 'bcrypt'

const dbPool = pool

const signUpHandler = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password){
        return res.status(400).json({"error": "Username and password are required!"})
    }
    
    try {
        const getUser = await dbPool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        )
        const userExists = getUser.rows[0]
    
        if(userExists){
            return res.status(400).json({"error" : "user already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 8)
        const result = await dbPool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
            [username, hashedPassword]
        )
        const user = result.rows[0]
        res.status(201).json({
            "id": user.id,
            "username": user.username
        })
    } catch (error) {
        res.status(500).json({"error": `Cannot register user: ${error.message}`})
    }
}

export { signUpHandler }