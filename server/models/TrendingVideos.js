import mongoose from "mongoose";

const trendingVideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  videoUrl: String,
  price: String,
  premium: Boolean,
}, { timestamps: true });

export default mongoose.model("TrendingVideo", trendingVideoSchema);
