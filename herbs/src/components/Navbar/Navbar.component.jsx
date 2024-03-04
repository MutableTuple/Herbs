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
          <div
            className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto"
            data-bs-toggle="mode"
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-mode"
            />
            <label className="form-check-label" htmlFor="theme-mode">
              <i className="ai-sun fs-lg"></i>
            </label>
            <label className="form-check-label" htmlFor="theme-mode">
              <i className="ai-moon fs-lg"></i>
            </label>
          </div>

          <div className="nav align-items-center order-lg-3 ms-n1 me-3 me-sm-0">
            <NavLink
              className="nav-link fs-4 p-2 mx-sm-1 d-none d-sm-flex"
              to={"/signin"}
              aria-label="Account"
            >
              <i className="ai-user"></i>
            </NavLink>
            <a
              className="nav-link position-relative fs-4 p-2"
              href="#cartOffcanvas"
              data-bs-toggle="offcanvas"
              aria-label="Shopping cart"
            >
              <i className="ai-cart"></i>
            </a>
          </div>
          <button
            className="navbar-toggler ms-sm-3 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav">
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
            {/* <div
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
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
