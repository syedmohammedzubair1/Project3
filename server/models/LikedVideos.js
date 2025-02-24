import mongoose from "mongoose";

const likedVideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  videoUrl: String,
  price: String,
  premium: Boolean,
}, { timestamps: true });

export default mongoose.model("LikedVideo", likedVideoSchema);
