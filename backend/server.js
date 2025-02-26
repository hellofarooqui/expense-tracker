import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import connectDB from './config/db.js'
import authRouter from './routers/authRouter.js'
import expenseRouter from './routers/expenseRouter.js'
import auth from './middleware/auth.js'

const port = process.env.PORT || 5000

dotenv.config()
console.log(process.env.MONGODB_URI)

const mongo_uri = process.env.MONGODB_URI

const app = express()

app.use(cors())
app.use(express.json())

connectDB(mongo_uri)

app.use("/api/auth",authRouter)
app.use("/api/expense",expenseRouter)

app.get("/api/test", auth, (req, res) => {
    res.json({ message: "You’re authenticated!", userId: req.userId });
  });

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})

