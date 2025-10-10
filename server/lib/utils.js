import jwt from "jsonwebtoken"

// function to genrte token

export const genrateToken = (userId)=> {
    const token = jwt.sign({userId}, process.env.JWT_SECRET)
    return token
}