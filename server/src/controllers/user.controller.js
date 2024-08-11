import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { options } from "../constants.js";
import { Address } from "../models/address.model.js";
import mongoose from "mongoose";

const generateAccessTokenController = async (userID) => {
    try {
        const user = await User.findById(userID)
        const accessToken = user.generateAccessToken()
        return accessToken
    } catch (error) {
        throw new ApiError(500,"Error While creating Access Token")
    }
}

const registerUser = asyncHandler(async (req,res) => {
    const { fullName, username , password , phoneNumber , email } = req.body

    //If All the fields are coming 
    if(!(username && password && email && fullName && phoneNumber)){
        throw new ApiError(400,"All fields are required")
    }

    //If User is already Present
    const userAlreadyPresent = await User.findOne({
        $or:[{email},{username},{phoneNumber}]
    })
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
    return res.status(200).json(
        new ApiResponse(
            200,
            createdUser,
            "User Registered Successfully"
        )
    ) 
})

const loginUser = asyncHandler(async (req,res) =>{
    const {email , password, username } = req.body

    //Checking If Data is Coming 
    if(!((email || username) && password)){
        throw new ApiError(400,"All fields are complusary")
    }

    //Find The user in DB 
    const user = await User.findOne({
        $or:[{email},{username}]
    })
    
    //Checking if User data is fetched successfully
    if(!user){
        throw new ApiError(404,"User Not Found, Please register")
    }

    //Checking if Password entered by user is correct
    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid Credentials")
    }

    const accessToken = await generateAccessTokenController(user._id)
    const loggedInUser = await User.findById(user._id).select("-password")

    //sending the response to UI
    return res.status(200).cookie("accessToken",accessToken,options).json(
        new ApiResponse(
            200,
            loggedInUser,
            "User Logged In successfully"
        )
    )
})

const getUserAccountDetails = asyncHandler(async (req,res) =>{
    
    const userDetails = await User.findById(req.user._id).select("-password -address")
    if(!userDetails){
        throw new ApiError(500,"Unable to fetch User Data")
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            userDetails,
            "User Data fetched Successfully"
        )
    )

}) 

const forgotPassword = asyncHandler(async (req,res) => { 
    const { email, newPassword, confirmNewPassword} = req.body

    if(!(confirmNewPassword && newPassword && email)){
        throw new ApiError(400,"All fields are Required")
    }  

    if(newPassword != confirmNewPassword){
        throw new ApiError(400,"Password should match")
    }
    
    const user = await User.findOne({email})
    if(!user){
        throw new ApiError(400,"User Not Found !!")
    } 
    user.password = newPassword
    user.save({validateBeforeSave:false})
   
    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Password changed Successfully"
        )
    )
})

const getDeliveryAddress = asyncHandler(async (req,res) => {

    const userAddresses = await Address.aggregate([
        {
            $match:{
                userId:new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $project:{
                addressLine1:1,
                addressLine2:1,
                city:1,
                district:1,
                state:1,
                country:1,
                pinCode:1
        }
        }
    ])
    return res.status(200).json(
        new ApiResponse(
            200,
            userAddresses,
            "User Address Fetched Successfully"
        )
    )
})

const addDeliveryAddress = asyncHandler(async (req,res) => {
    const  {addressLine1,addressLine2,city,district,state,country,pinCode} = req.body

    if([addressLine1,city,district,state,country,pinCode].some((item) => {
        item?.trim === ""
    })){
        throw new ApiError(400,"All fields are Mandatory")
    }

    const address = await Address.create({
        addressLine1,
        addressLine2,
        city,
        district,
        state,
        country,
        pinCode,
        userId:req.user._id
    })

    return res.status(200).json(
        new ApiResponse(
            200,
            address,
            "New Address Added"
        )
    )

})

export {registerUser,loginUser,getUserAccountDetails,forgotPassword,getDeliveryAddress,addDeliveryAddress}