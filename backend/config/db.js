import mongoose from "mongoose";

//const mongo_url = process.env.MONGODB_URI

const connectDB = async (url) => {
    await mongoose.connect(url).then(()=>console.log("Database connected")).catch(error => console.log(error))
}

export default connectDB