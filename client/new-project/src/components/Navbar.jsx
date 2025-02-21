import React from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-light bg-light justify-content-between p-3">
      <h3 className="ms-3">Online Store</h3>
      <Link to="/cart" className="btn btn-outline-primary position-relative me-3">
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
