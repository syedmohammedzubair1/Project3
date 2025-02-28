import Post from "../models/mongoSchema.js";

export const createPost = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Request body must be an array" });
    }

    const newPosts = await Post.insertMany(req.body);
    res.status(201).json({ message: "Data received", newPosts });
  } catch (error) {
    console.error("Error saving posts:", error.message);
    res.status(500).json({ message: "Error saving data", error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Deleted successfully", deletedPost });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete", details: error.message });
  }
};
