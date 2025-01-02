import { Router } from "express";
import { addDeliveryAddress, forgotPassword,
     getDeliveryAddress, 
     getUserAccountDetails, 
     loginUser, 
     registerUser, 
     updateAccountDetails,
     postQuery
    } from "../controllers/user.controller.js";
import verifyUserJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/forgotPassword",forgotPassword) 

//secure Routes
router.get("/accountDetails",verifyUserJWT,getUserAccountDetails)
router.get("/allDeliveryAddress",verifyUserJWT,getDeliveryAddress)
router.post("/addDeliveryAddress",verifyUserJWT,addDeliveryAddress)
router.patch("/updateAccountDetails",verifyUserJWT,updateAccountDetails)

//Query
router.post("/query",postQuery)

export default router