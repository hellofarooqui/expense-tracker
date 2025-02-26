import express from 'express'
import auth from '../middleware/auth.js'
import { addExpense, deleteOneExpense, getAllExpenses, getExpenseDetails } from '../controller/expenseController.js'

const router = express.Router()

router.get("/",auth,getAllExpenses)
router.post("/",auth, addExpense)
router.get("/:id",auth,getExpenseDetails)
router.delete("/:id",auth,deleteOneExpense)

export default router