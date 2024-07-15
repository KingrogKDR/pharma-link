import {resetIdSequence} from '../db/db.js'
import bcrypt from 'bcrypt'
import { createUser, getUserByUsername } from '../utils/getUser.js'

const signUpHandler = async (req, res) => {
    await resetIdSequence()

    const { username, password } = req.body
    if(!username || !password){
        return res.status(400).json({"error": "Username and password are required!"})
    }
    
    try {
        const userExists = await getUserByUsername(username)
    
        if(userExists){
            return res.status(400).json({"error" : "user already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 8)

        const user = await createUser(username, hashedPassword)

        return res.status(201).json({
            "id": user.id,
            "username": user.username
        })
    } catch (error) {
        return res.status(500).json({"error": `Cannot register user: ${error.message}`})
    }
}

export { signUpHandler }