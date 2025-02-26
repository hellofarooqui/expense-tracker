import express from 'express'
import { loginRouter, signupController } from '../controller/authController.js'


const router = express.Router()

router.post("/signup",signupController)

router.post("/login", loginRouter)

export default router