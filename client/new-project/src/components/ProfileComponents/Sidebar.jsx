import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const menuItems = [
  { name: "Profile", path: "ProfileContent" },
  { name: "Photo", path: "Photo" },
  { name: "Account Settings", path: "AccountSettings" },
  { name: "Payment Methods", path: "PaymentMethod" },
  { name: "Subscriptions", path: "SubscriptionsContent" },
  { name: "Purchase History", path: "PurchaseHistory" },
  { name: "Logout", path: "logout" },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="d-flex" style={{ border: "1px solid black", margin: "80px", height: "100vh" }}>
      {/* Left Sidebar */}
      <div className="bg-light p-3 border-end" style={{ width: "20%" }}>
        <h2 className="h5 mb-3">Menu</h2>
        <ul className="list-group">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => (item.path === "logout" ? handleLogout() : navigate(item.path))}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area - Renders Nested Routes using Outlet */}
      <div className="p-3" style={{ width: "80%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
