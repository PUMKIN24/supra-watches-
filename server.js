import express from "express"
import colors from "colors"
import dotenv from "dotenv"

//rest object
const app = express()

//configure env
dotenv.config()

//rest api
app.get("/", (req, res) => {
    res.send(
        "<h1 >welcome to supra</h1>"
    )
})

//port
const PORT = process.env.PORT || 8080


//server init
app.listen(PORT, () => {
    console.log(`server spinning on port ${PORT}`.bgGreen)
})