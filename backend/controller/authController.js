import User from "../model/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const signupController = async (req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(401).json({"error":"Invalid Credentials"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await User({email,password:hashedPassword})

        await newUser.save()
        return res.status(200).json({message:"User created"})
    }
    catch(error){
        return res.status(401).json({"error":"Invalid Credentials"})
    }
}

export const loginRouter = async (req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email:email})

        if(!user){
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn: '24h'})

        return res.status(200).json({token})
    }
    catch(error){
        return res.status(500).json({message:"Server error"})
    }
    
}
