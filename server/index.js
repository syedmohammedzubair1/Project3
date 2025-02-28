import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/dbconfig.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Hello Team</h1>`);
});

app.use("/posts", postRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
