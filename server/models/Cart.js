import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, required: true, enum: ["article", "video", "webinar"] }, // Add other types if needed
  author_id: { type: Number, required: true },
  publish_date: { type: Date, required: true },
  tags: { type: [String], default: [] },
  status: { type: String, required: true, enum: ["published", "draft", "archived"] }, // Restrict valid statuses
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 }, // Keeping quantity for cart logic
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
