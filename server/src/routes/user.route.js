import { Router } from "express";
import { getUserAccountDetails, loginUser, registerUser } from "../controllers/user.controller.js";
import verifyUserJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/register",registerUser)
router.post("/login",loginUser)

//secure Routes
router.post("/AccountDetails",verifyUserJWT,getUserAccountDetails)


export default router