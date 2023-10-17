import express from "express"
import { loginController, registerController } from "../controllers/authController.js"

//router object
const router = express.Router()

//routing
//register 
router.post("/register", registerController)
//LOGIN 
router.post('/login', loginController)
//protected route auth
router.post('/user-auth', (req, res) => {
    res.status(200).send({ ok: true })
})

export default router