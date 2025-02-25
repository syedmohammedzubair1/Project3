const Cart = require("../models/Cart");

// 📌 Get all cart items
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 📌 Add item to cart
exports.addToCart = async (req, res) => {
  const { title, price } = req.body;
  try {
    let item = await Cart.findOne({ title });

    if (item) {
      item.quantity += 1;
    } else {
      item = new Cart({ title, price, quantity: 1 });
    }

    await item.save();
    res.status(200).json({ message: "Item added to cart", item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 📌 Increment item quantity
exports.incrementItem = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item) {
      item.quantity += 1;
      await item.save();
      res.status(200).json({ message: "Item incremented", item });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 📌 Decrement item quantity
exports.decrementItem = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        await Cart.findByIdAndDelete(req.params.id);
      } else {
        await item.save();
      }
      res.status(200).json({ message: "Item decremented", item });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 📌 Remove item from cart
exports.removeItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// 📌 Checkout (Clear Cart)
exports.checkout = async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.status(200).json({ message: "Checkout successful. Cart cleared." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
