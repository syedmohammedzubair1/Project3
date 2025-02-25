import dotenv from "dotenv";
dotenv.config();  // Load .env variables before importing anything else

import express from "express";
import cors from "cors";
import "./database/dbconfig.js"; // Ensure MongoDB connection is established
import cartRouter from "./routes/api.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", cartRouter);



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});

