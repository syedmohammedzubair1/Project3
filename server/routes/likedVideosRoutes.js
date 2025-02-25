// import express from "express";
// import multer from "multer";
// import path from "path";
// import Video from "../models/LikedVideos.js";

// const router = express.Router();

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// const upload = multer({ storage });

// // Upload Video
// router.post("/upload", upload.single("video"), async (req, res) => {
//   try {
//     const { title, description, category, price, isPremium } = req.body;

//     const newVideo = new Video({
//       title,
//       description,
//       category,
//       price,
//       isPremium: isPremium === "true",
//       videoPath: `/uploads/${req.file.filename}`,
//     });

//     await newVideo.save();
//     res.status(201).json({ message: "Video uploaded successfully!", newVideo });
//   } catch (error) {
//     res.status(500).json({ message: "Upload failed", error });
//   }
// });

// // Get all Liked Videos
// router.get("/liked-videos", async (req, res) => {
//   try {
//     const videos = await Video.find();
//     res.json(videos);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching videos", error });
//   }
// });

// export default router;
import express from "express";
import { uploadLikedVideo, getLikedVideos, deleteLikedVideo } from "../controllers/likedVideosController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/upload", upload.single("video"), uploadLikedVideo);
router.get("/", getLikedVideos);
router.delete("/:id", deleteLikedVideo);

export default router;
