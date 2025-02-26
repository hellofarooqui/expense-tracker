import express from 'express'
import auth from '../middleware/auth.js'
import { getAllExpenses } from '../controller/expenseController.js'

const router = express.Router()

router.get("/",auth,getAllExpenses)


export default router