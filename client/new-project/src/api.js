import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const uploadTrendingVideo = async (formData) =>
  axios.post(`${API_BASE_URL}/trending-videos/upload`, formData);

export const getTrendingVideos = async () =>
  axios.get(`${API_BASE_URL}/trending-videos`);

export const uploadLikedVideo = async (formData) =>
  axios.post(`${API_BASE_URL}/liked-videos/upload`, formData);

export const getLikedVideos = async () =>
  axios.get(`${API_BASE_URL}/liked-videos`);
