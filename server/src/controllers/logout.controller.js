import { pool } from "../db/db.js"
import { getUserById } from "../utils/getUser.js"

const logoutHandler = async (req, res) => {
    try {
        if(!req.user){
            return res.status(401).json({error : "Unauthorized request: req.user is missing"})
        } 
        const user = await getUserById(req.user.id)
        await pool.query("UPDATE users SET refreshtoken = NULL where id = $1", [user.id])
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            Success: "User logged out!"
        })
    } catch (error) {
        return res.status(500).json({error : `Server error: ${error.message}`})
    }
}

export default logoutHandler