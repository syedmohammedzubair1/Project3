// import React from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import './profile.css'
// const menuItems = [
//   { name: "Profile", path: "ProfileContent" },
//   { name: "Photo", path: "Photo" },
//   { name: "Account Settings", path: "AccountSettings" },
//   { name: "Payment Methods", path: "PaymentMethod" },
//   { name: "Subscriptions", path: "SubscriptionsContent" },
//   { name: "Purchase History", path: "PurchaseHistory" },
//   { name: "Logout", path: "logout" },
// ];

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/", { replace: true });
//   };

//   return (
//     <div className="d-flex" style={{ border: "1px solid black", margin: "80px", height: "100vh" }}>
//       {/* Left Sidebar */}
//       <div className="bg-light p-3 border-end" style={{ width: "20%" }}>
//         <h2 className="h5 mb-3">Menu</h2>
//         <ul className="list-group">
//           {menuItems.map((item) => (
//             <li
//               key={item.path}
//               className="list-group-item list-group-item-action"
//               style={{ cursor: "pointer" }}
//               onClick={() => (item.path === "logout" ? handleLogout() : navigate(item.path))}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Content Area - Renders Nested Routes using Outlet */}
//       <div className="p-3" style={{ width: "80%" }}>
     
//           <Outlet />
       
        
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './profile.css';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="sidebar-container">
      {/* Hamburger Menu for Screens < 768px */}
      <div className="hamburger d-md-none" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </div>
      
      {/* Sidebar (Visible only on screens >= 768px) */}
      <div className="sidebar d-none d-md-block bg-light p-3 border-end">
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

      {/* Mobile Menu (Visible only when hamburger is clicked) */}
      {isOpen && (
        <div className="mobile-menu d-md-none bg-light p-3">
          <ul className="list-group mt-5">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (item.path === "logout") handleLogout();
                  else navigate(item.path);
                  setIsOpen(false); // Close menu on selection
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Right Content Area */}
      <div className="content-area p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
