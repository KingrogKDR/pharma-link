import pool from "../db/db.js";
import bcrypt from 'bcrypt'

const dbPool = pool;

const loginHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const getUser = await dbPool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    const user = getUser.rows[0];

    const isMatched = await bcrypt.compare(password, user.password)

    if(!isMatched){
        return res.status(400).json({"error": "Invalid username or password!"})
    }
        
    res.status(200).json({"Success" : "Logged in successfully"})

  } catch (error) {
    res.status(500).json({ error: `Cannot Login User: ${error.message}` });
  }
};

export default loginHandler;
