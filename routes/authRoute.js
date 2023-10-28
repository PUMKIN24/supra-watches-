import express from "express"
import { forgotPassword, loginController, registerController, testController, updateProfileController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"

//router object
const router = express.Router()

//routing
//register 
router.post("/register", registerController)
//LOGIN 
router.post('/login', loginController)
//forgot password
router.post('/forgot-password', forgotPassword)
//test
router.get('/test', requireSignIn, isAdmin, testController)
//protected route auth-user
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})
//protected route auth-admin
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})
//update profile
router.put('/profile', requireSignIn, updateProfileController)

export default router