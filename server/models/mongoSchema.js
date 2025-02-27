import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  type: String,
  author_id: mongoose.Schema.Types.ObjectId,
  publish_date: Date,
  tags: [String],
  status: String,
  video_url: String,
  image_url: String,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
