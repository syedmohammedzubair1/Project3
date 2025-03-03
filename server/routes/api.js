import express from "express";
import Cart from "../models/Cart.js";

const cartRouter = express.Router(); // ✅ Create a router instance

cartRouter.post("/cart", async (req, res) => {
    try {
        const cart = new Cart(req.body); // ✅ Correct way to create a new document
        await cart.save();
        res.status(201).json({ message: "Cart item added successfully", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
cartRouter.get("/cart",async(req,res)=>{
    try{
        const cart = await Cart.find();
        res.json(cart);
    }catch(err){
        console.log(err);
        
    }
});
cartRouter.get("/cart/:id",async(req,res)=>{
try{
    const cart = await Cart.findById(req.params.id);
    res.json(cart);
}
catch(err){
    console.log(err);
}
})
cartRouter.delete("/cart/:id",(req,res)=>{
    try{
        Cart.findByIdAndDelete(req.params.id);
        res.json({message:"item deleted successfully"});
    }
    catch(err){
        console.log(err);
    }
})
export default cartRouter; // ✅ Correctly export the router
