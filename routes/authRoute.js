import express from "express"
import { loginController, registerController } from "../controllers/authController.js"

//router object
const router = express.Router()

//routing
//register 
router.post("/register", registerController)
//LOGIN 
router.post('/login', loginController)

export default router