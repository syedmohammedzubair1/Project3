
import React, { useState } from "react";
import { IoCartOutline, IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";



const NicheFlare = ({ totalItems }) => {
  const navigate = useNavigate(); // ✅ Initialize navigation


  return (
    <div className="d-flex flex-column">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow">
        <div className="container-fluid">
          <button className="navbar-brand fw-bold text-light">
            NicheFlare
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="icons ms-auto d-flex align-items-center">
            <button className="btn btn-outline-light me-2" onClick={() => navigate("/liked-videos")}>


              <IoHeartOutline size={24} />
            </button>

            {/* 🛒 Cart Button with Badge for Item Count */}
            <button className="btn btn-outline-light me-2 position-relative" onClick={() => navigate("/cart", { replace: true })}>
              <IoCartOutline size={24} />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </button>


            {/* Person Icon - Click to Navigate to Sidebar */}
            <button
              className="btn btn-outline-light"
              onClick={() => navigate("/subscribe/profile")}
            >

              <IoPersonOutline size={24} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NicheFlare;

