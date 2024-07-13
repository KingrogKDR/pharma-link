import jwt from 'jsonwebtoken';
import { getUserById } from '../utils/getUser.js';

const verifyJwt = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if(!token){
            return res.status(400).json({"error": "Unauthorized Request: access token missing!"})
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await getUserById(decodedToken?.id)

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized Request: User not found!' });
        }
        
        req.user = user 
        next()
    } catch (error) {
        res.status(500).json({"error" : `Invalid Access Token: ${error.message}`})
    }
}

export default verifyJwt
