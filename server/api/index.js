import express from "express"
import cors from "cors"
import userRouter from "../src/routes/user.route.js";
import orderRouter from "../src/routes/order.route.js"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
)) 

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
app.use(cookieParser())


app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)

export default app;