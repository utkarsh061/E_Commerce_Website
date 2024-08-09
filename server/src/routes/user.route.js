import { Router } from "express";
import { changePassword, getUserAccountDetails, loginUser, registerUser } from "../controllers/user.controller.js";
import verifyUserJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/forgotPassword",changePassword)

//secure Routes
router.post("/accountDetails",verifyUserJWT,getUserAccountDetails)


export default router