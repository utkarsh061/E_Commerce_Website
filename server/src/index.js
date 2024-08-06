import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/database.js"

dotenv.config({
    path:'./.env'
})


connectDB().then(() => {
    app.on("error", (error) => {
        console.log("App Connected to DB but unable to Communicate" , error)
    })

    app.listen(process.env.PORT, () => {
        console.log(`App Listening on Port:${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("MonoDB Connection failed:",error)
})