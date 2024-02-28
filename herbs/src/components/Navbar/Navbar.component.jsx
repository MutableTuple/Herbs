import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          <span className="text-primary flex-shrink-0 me-2">
            <svg
              version="1.1"
              width="35"
              height="32"
              viewBox="0 0 36 33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
              />
            </svg>
          </span>
          Around
        </NavLink>
        <div className="nav align-items-center order-lg-2 ms-auto">
          <a href="#" className="nav-link fs-4 p-2 mx-sm-1" aria-label="Search">
            <i className="ai-search"></i>
          </a>
          <a
            href="#"
            className="nav-link fs-4 p-2 mx-sm-1"
            aria-label="Account"
          >
            <NavLink className="ai-user" to={"/signin"}></NavLink>
          </a>
          <a
            href="#"
            className="nav-link position-relative fs-4 p-2"
            aria-label="Cart"
          >
            <i className="ai-cart"></i>
            <span
              className="badge bg-primary fs-xs position-absolute end-0 top-0 me-n1"
              style={{ padding: ".25rem .375rem" }}
            >
              3
            </span>
          </a>
          <button
            type="button"
            className="navbar-toggler ms-3"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse3"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <nav className="collapse navbar-collapse" id="navbarCollapse3">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to={"/"} className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/shop"} className={"nav-link"}>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about-us"} className={"nav-link"}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className={"nav-link"}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto"
            data-bs-toggle="mode"
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-mode"
            />
            <label className="form-check-label" for="theme-mode">
              <i className="ai-sun fs-lg"></i>
            </label>
            <label className="form-check-label" for="theme-mode">
              <i className="ai-moon fs-lg"></i>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
