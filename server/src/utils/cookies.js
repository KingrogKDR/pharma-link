import jwt from "jsonwebtoken";
import { getUserById } from "./getUser.js";

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};


const generateAccessandRefreshTokens = (user) => {
    try {
        const accessToken =  generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)
        return { accessToken, refreshToken }
    } catch (error) {
        console.error("error: Can't generate access and refresh tokens", error.message)
    }
}

const refreshAccessToken = async(req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshtoken

    if(!incomingRefreshToken){
        return res.status(401).json({"error": "Unauthorized request: Refresh Token is missing"})
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

        const user = await getUserById(decodedToken?.id)

        if(!user){
            return res.status(401).json({"error": "Invalid refresh token: user not found"})
        }

        if(incomingRefreshToken !== user?.refreshtoken){
            return res.status(401).json({"error": "Refresh token is expired or used!"})
        }

        const options = {
            httpOnly: true,
            secure: true,
        }

        const {accessToken, refreshToken: newRefreshToken} = generateAccessandRefreshTokens(user)

        return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json({
            "accessToken": accessToken,
            "refreshToken": newRefreshToken,
            "Success": "Access Token refreshed!"
        })

    } catch (error) {
        return res.status(401).json({"error": `Invalid refresh token: ${error.message}`})
    }
}

export {generateAccessandRefreshTokens, refreshAccessToken}