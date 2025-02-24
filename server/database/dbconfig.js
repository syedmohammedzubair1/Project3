import mongoose from "mongoose";

const mongooseConnect=async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("mongoose connected")
}
module.exports=mongooseConnect