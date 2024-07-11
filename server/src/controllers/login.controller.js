import {pool, resetIdSequence} from "../db/db.js";
import bcrypt from 'bcrypt';
import { generateAccessandRefreshTokens } from "../utils/cookies.js";
import { getUserByUsername } from "../utils/getUser.js";

const loginHandler = async (req, res) => {
  await resetIdSequence()

  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {

    const user = await getUserByUsername(username)

    if(!user){
      return res.status(400).json({error: "User doesn't exit. Please sign up!"})
    }
    
    const isMatched = await bcrypt.compare(password, user.password)
    
    if(!isMatched){
      return res.status(400).json({"error": "Invalid username or password!"})
    }
    const options = {
      httpOnly: true,
      secure: true
    }
    
    const {accessToken, refreshToken} = generateAccessandRefreshTokens(user)
    
    await pool.query(
      'UPDATE users SET refreshtoken = $1 where id = $2',
      [refreshToken, user.id]
    )
    
    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({"Success" : "User logged in"})

  } catch (error) {
    return res.status(500).json({ error: `Cannot Login User: ${error.message}` });
  }
};

export default loginHandler;
