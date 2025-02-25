import dotenv from "dotenv";
dotenv.config();  // Load .env variables before importing anything else

import express from "express";
import cors from "cors";
import "./database/dbconfig.js"; // Ensure MongoDB connection is established

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
    res.send(`<h1>Hello Team</h1>`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
