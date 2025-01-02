import { Router } from "express";
import verifyUserJWT from "../middlewares/auth.middleware.js";
import { orderHistory, placeOrder } from "../controllers/order.controller.js";

const router = Router()


router.post("/placeOrder",verifyUserJWT,placeOrder)
router.get("/orderHistory",verifyUserJWT,orderHistory)

export default router