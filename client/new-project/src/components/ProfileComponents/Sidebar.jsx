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
    <div className="sidebar-container" >
      <div className="hamburger d-md-none" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </div>
    
      <div className="sidebar d-none d-md-block bg-light p-3 border-end" style={{position:"sticky", marginBottom:-300 , height:400}}>
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
                  setIsOpen(false); 
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="content-area p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
// import React, { useState, useEffect } from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import "./profile.css"; // Custom styles

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
//   const [isOpen, setIsOpen] = useState(false);
//   const [contentHeight, setContentHeight] = useState("auto");

//   useEffect(() => {
//     const updateHeight = () => {
//       const sidebar = document.querySelector(".sidebar");
//       const content = document.querySelector(".content-area");

//       if (sidebar && content) {
//         const sidebarHeight = sidebar.scrollHeight;
//         setContentHeight(`${sidebarHeight}px`);
//       }
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   const handleLogout = () => {
//     navigate("/", { replace: true });
//   };

//   return (
//     <div className="container-fluid d-flex flex-column min-vh-100">
//       <div className="row flex-grow-1" >
//         {/* Toggle Button for Mobile */}
//         <button className="btn btn-dark d-md-none my-3" onClick={() => setIsOpen(!isOpen)}>
//           <FaBars size={24} />
//         </button>

//         {/* Sidebar */}
//         <div
//           className={`col-md-3 col-lg-2 sidebar bg-light p-3 ${isOpen ? "d-block" : "d-none d-md-block"}`}
//           >
//           <h5 className="mb-3">Menu</h5>
//           <ul className="list-group">
//             {menuItems.map((item) => (
//               <li
//                 key={item.path}
//                 className="list-group-item list-group-item-action"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => {
//                   if (item.path === "logout") {
//                     handleLogout();
//                   } else {
//                     navigate(item.path);
//                     setIsOpen(false);
//                   }
//                 }}
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div
//           className="col-md-9 col-lg-10 content-area p-3"
//           style={{ minHeight: contentHeight  }}
//         >
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

