// import LikedVideo from "../models/LikedVideos.js";

// // Upload Liked Video
// export const uploadLikedVideo = async (req, res) => {
//   try {
//     const { title, description, category, price, premium } = req.body;
    
//     // Ensure the video URL is stored with the full path
//     const videoUrl = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

//     const newVideo = new LikedVideo({ title, description, category, videoUrl, price, premium });
//     await newVideo.save();

//     res.status(201).json({ message: "Liked video uploaded successfully", video: newVideo });
//   } catch (error) {
//     res.status(500).json({ message: "Error uploading liked video", error });
//   }
// };


// // Fetch All Liked Videos
// export const getLikedVideos = async (req, res) => {
//   try {
//     const videos = await LikedVideo.find();
//     res.status(200).json(videos);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching liked videos", error });
//   }
// };

// // Delete Liked Video
// export const deleteLikedVideo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await LikedVideo.findByIdAndDelete(id);
//     res.status(200).json({ message: "Liked video deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting liked video", error });
//   }
// };



// // Fetch a single liked video by ID
// export const getLikedVideoById = async (req, res) => {
//   try {
//     const video = await LikedVideo.findById(req.params.id);
//     if (!video) {
//       return res.status(404).json({ message: "Video not found" });
//     }
//     res.status(200).json(video);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching liked video", error });
//   }
// };


import LikedVideo from "../models/LikedVideos.js";

// Upload Liked Video
export const uploadLikedVideo = async (req, res) => {
  try {
    const { title, description, category, price, premium } = req.body;

    const videoUrl = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    const newVideo = new LikedVideo({ title, description, category, videoUrl, price, premium });
    await newVideo.save();

    res.status(201).json({ message: "Liked video uploaded successfully", video: newVideo });
  } catch (error) {
    res.status(500).json({ message: "Error uploading liked video", error });
  }
};

// Fetch All Liked Videos
export const getLikedVideos = async (req, res) => {
  try {
    const videos = await LikedVideo.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching liked videos", error });
  }
};

// Fetch Single Liked Video by ID
export const getLikedVideoById = async (req, res) => {
  try {
    const video = await LikedVideo.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Error fetching video", error });
  }
};

// Delete Liked Video
export const deleteLikedVideo = async (req, res) => {
  try {
    const { id } = req.params;
    await LikedVideo.findByIdAndDelete(id);
    res.status(200).json({ message: "Liked video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting liked video", error });
  }
};
