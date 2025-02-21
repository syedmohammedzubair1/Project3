import React from "react";
import { useCart } from "../context/CartContext";

const ItemCard = ({ item }) => {
  const { cart, addToCart, incrementItem, decrementItem } = useCart();
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="card item-card shadow-lg p-3 mb-4 bg-white rounded">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{item.title}</h5>
        <p className="card-text text-muted">Price: <strong>${item.price}</strong></p>

        {cartItem && cartItem.quantity > 0 ? (
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-danger btn-sm me-2 scale-effect" onClick={() => decrementItem(item.id)}>-</button>
            <span className="fw-bold fs-5">{cartItem.quantity}</span>
            <button className="btn btn-outline-success btn-sm ms-2 scale-effect" onClick={() => incrementItem(item.id)}>+</button>
          </div>
        ) : (
          <button className="btn btn-primary btn-lg add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;


// import React from "react";
// import { useCart } from "../context/CartContext";

// const ItemCard = ({ item }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="card shadow-sm p-3">
//       <h5 className="fw-bold">{item.title}</h5>
//       <p>{item.body}</p>
      
//       <p className="fw-bold text-success">Price: ${item.price}</p>
//       <button className="btn btn-primary" onClick={() => addToCart(item)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ItemCard;
