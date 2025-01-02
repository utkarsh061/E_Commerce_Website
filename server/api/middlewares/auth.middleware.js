import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import asyncHandler from "../utils/asyncHandler.js"

const verifyUserJWT = asyncHandler(async (req,res,next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token){
            throw new ApiError(401, "Unauthorized Request")
        }
        const decodedToken = jwt.verify(token,process.env.JWT_KEY)
        const user = await User.findById(decodedToken?.id)
        
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user = user
        next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Error while Verifying Token")
    }
}) 

export default verifyUserJWT;