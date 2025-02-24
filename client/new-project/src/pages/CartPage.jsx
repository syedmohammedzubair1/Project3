// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const CartPage = () => {
//   const { cart, incrementItem, decrementItem } = useCart();

//   // Calculate total amount
//   const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center fw-bold mb-4">🛒 Your Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <div className="alert alert-warning text-center p-4 fw-bold shadow-sm">
//           Your cart is empty! 😕
//         </div>
//       ) : (
//         <div className="row">
//           {/* Left Side - Cart Items */}
//           <div className="col-md-7">
//             <div className="row justify-content-center">
//               {cart.map((item) => (
//                 <div key={item.id} className="col-md-12">
//                   <div className="card p-3 shadow-sm mb-3 d-flex flex-row justify-content-between align-items-center">
//                     <div>
//                       <h5 className="fw-bold">{item.name}</h5>
//                       <p className="text-muted mb-0">Price: <strong>${item.price}</strong></p>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <button 
//                         className="btn btn-outline-danger btn-sm me-2" 
//                         onClick={() => decrementItem(item.id)}
//                       >
//                         -
//                       </button>
//                       <span className="fw-bold fs-5">{item.quantity}</span>
//                       <button 
//                         className="btn btn-outline-success btn-sm ms-2" 
//                         onClick={() => incrementItem(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Total Amount & Checkout */}
//           <div className="col-md-5">
//             <div className="card p-4 shadow-lg text-center bg-light">
//               <h4 className="fw-bold">Total Payment</h4>
//               <h2 className="text-success my-3">${totalAmount.toFixed(2)}</h2>
//               <button className="btn btn-primary btn-lg w-100 fw-bold">Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="text-center mt-4">
//         <Link to="/" className="btn btn-dark px-4 py-2 fw-bold">⬅️ Back to Shop</Link>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
// import { useCart } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, incrementItem, decrementItem } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-4">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center p-4 fw-bold shadow-sm">
          Your cart is empty! 😕
        </div>
      ) : (
        <div className="row">
          <div className="col-md-7">
            <div className="row justify-content-center">
              {cart.map((item) => (
                <div key={item.id} className="col-md-12">
                  <div className="card p-3 shadow-sm mb-3 d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted mb-0">Price: <strong>${item.price}</strong></p>
                    </div>
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-outline-danger btn-sm me-2" 
                        onClick={() => decrementItem(item.id)}
                      >
                        -
                      </button>
                      <span className="fw-bold fs-5">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-success btn-sm ms-2" 
                        onClick={() => incrementItem(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Total Amount & Checkout */}
          <div className="col-md-5">
            <div className="card p-4 shadow-lg text-center bg-light">
              <h4 className="fw-bold">Total Payment</h4>
              <h2 className="text-success my-3">${totalAmount.toFixed(2)}</h2>
              <button className="btn btn-primary btn-lg w-100 fw-bold">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-dark px-4 py-2 fw-bold">⬅️ Back to Shop</Link>
      </div>
    </div>
  );
};

export default CartPage;
