import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Post from "./models/mongoSchema.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Hello Team</h1>`);
});


app.post("/post", async (req, res) => {
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
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find(); 
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});
app.delete('/posts/:id', async (req, res) => {
  try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);

      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({ message: "Deleted successfully", deletedPost });
  } catch (error) {
      res.status(500).json({ error: "Failed to delete", details: error.message });
  }
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
