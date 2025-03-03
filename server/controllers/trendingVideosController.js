// import TrendingVideo from "../models/TrendingVideos.js";

// // Upload Trending Video
// export const uploadTrendingVideo = async (req, res) => {
//   try {
//     const { title, description, category, price, premium } = req.body;
    
//     // Ensure the video URL is stored with the full path
//     const videoUrl = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

//     const newVideo = new TrendingVideo({ title, description, category, videoUrl, price, premium });
//     await newVideo.save();

//     res.status(201).json({ message: "Trending video uploaded successfully", video: newVideo });
//   } catch (error) {
//     res.status(500).json({ message: "Error uploading trending video", error });
//   }
// };


// // Fetch All Trending Videos
// export const getTrendingVideos = async (req, res) => {
//   try {
//     const videos = await TrendingVideo.find();
//     res.status(200).json(videos);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching trending videos", error });
//   }
// };

// // Delete Trending Video
// export const deleteTrendingVideo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await TrendingVideo.findByIdAndDelete(id);
//     res.status(200).json({ message: "Trending video deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting trending video", error });
//   }
// };

// // Fetch a single trending video by ID
// export const getTrendingVideoById = async (req, res) => {
//   try {
//     const video = await TrendingVideo.findById(req.params.id);
//     if (!video) {
//       return res.status(404).json({ message: "Video not found" });
//     }
//     res.status(200).json(video);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching video", error });
//   }
// };

import TrendingVideo from "../models/TrendingVideos.js";

// Upload Trending Video
export const uploadTrendingVideo = async (req, res) => {
  try {
    const { title, description, category, price, premium } = req.body;
    
    // Ensure the video URL is stored with the full path
    const videoUrl = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    const newVideo = new TrendingVideo({ title, description, category, videoUrl, price, premium });
    await newVideo.save();

    res.status(201).json({ message: "Trending video uploaded successfully", video: newVideo });
  } catch (error) {
    res.status(500).json({ message: "Error uploading trending video", error });
  }
};

// Fetch All Trending Videos
export const getTrendingVideos = async (req, res) => {
  try {
    const videos = await TrendingVideo.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trending videos", error });
  }
};

// Fetch Single Trending Video by ID
export const getTrendingVideoById = async (req, res) => {
  try {
    const video = await TrendingVideo.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Error fetching video", error });
  }
};

// Delete Trending Video
export const deleteTrendingVideo = async (req, res) => {
  try {
    const { id } = req.params;
    await TrendingVideo.findByIdAndDelete(id);
    res.status(200).json({ message: "Trending video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trending video", error });
  }
};
