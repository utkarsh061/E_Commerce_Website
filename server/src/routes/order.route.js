import { Router } from "express";
import verifyUserJWT from "../middlewares/auth.middleware.js";
import { placeOrder } from "../controllers/order.controller.js";

const router = Router()


router.post("/placeOrder",verifyUserJWT,placeOrder)
router.post("/orderHistory",verifyUserJWT)

export default router