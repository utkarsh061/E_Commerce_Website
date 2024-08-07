import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req,res) => {
    const { fullName, username , password , phoneNumber , email } = req.body

    //If All the fields are coming 
    if(!(username && password && email && fullName && phoneNumber)){
        throw new ApiError(400,"All fields are required")
    }

    //If User is already Present
    const userAlreadyPresent = await User.findOne({username})
    if(userAlreadyPresent){
        throw new ApiError(400,"User already Registered")
    }
    
    //Saving Data in Database
    const user = await User.create({
        fullName,
        username,
        email,
        password,
        phoneNumber
    })

    const createdUser = await User.findById(user._id).select("-password")

    //Checking if User is created Successfully
    if(!createdUser){
        throw new ApiError(500,"Internal Server Error, Unable to Register User")
    }

    //sending Response to UI
    res.status(200).json(
        new ApiResponse(
            200,
            createdUser,
            "User Registered Successfully"
        )
    ) 
})

export {registerUser}