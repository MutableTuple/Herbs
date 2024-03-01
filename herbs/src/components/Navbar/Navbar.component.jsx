import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwithcer/ThemeSwitcher.component";
import Cart from "../Pages/Shop/Cart.component";
const Navbar = () => {
  function toggleCart() {
    const cartOffcanvas = document.getElementById("cartOffcanvas");
    if (cartOffcanvas.classList.contains("show")) {
      cartOffcanvas.classList.remove("show");
    } else {
      cartOffcanvas.classList.add("show");
    }
  }

  return (
    <>
      <ThemeSwitcher />

      <header className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand">
            <span className="text-primary flex-shrink-0 me-2">
              {/* <img
                src="./src/assets/img/logo/MH_Logo_file-02.png"
                alt=""
                style={{ width: "2rem", zoom: 3 }}
              /> */}
              Mendu Herbs
            </span>
          </NavLink>
          <div className="nav align-items-center order-lg-2 ms-auto">
            <a
              href="#"
              className="nav-link fs-4 p-2 mx-sm-1"
              aria-label="Account"
            >
              <NavLink className="ai-user" to={"/signin"}></NavLink>
            </a>
            {/* CART BTN */}
            {/* <a
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
            </a> */}
            <a
              href="#"
              className="nav-link position-relative fs-4 p-2"
              aria-label="Cart"
              onClick={toggleCart}
            >
              <i className="ai-cart"></i>
              <span
                className="badge bg-primary fs-xs position-absolute end-0 top-0 me-n1"
                style={{ padding: ".25rem .375rem" }}
              >
                0
              </span>
            </a>

            {/*  */}
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
    </>
  );
};

export default Navbar;
