import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5" data-bs-theme="dark">
      <div className="container pt-md-2 pt-lg-3 pt-xl-4">
        <div className="row pb-5 pt-sm-2 mb-lg-2">
          <div className="col-sm-5 col-md-4 col-xl-3 pb-2 pb-sm-0 mb-4 mb-sm-0">
            <a className="navbar-brand py-0 mb-3 mb-md-4" href="index.html">
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
                  ></path>
                </svg>
              </span>
              <span className="text-light opacity-90">Around</span>
            </a>
            <p className="text-body fs-sm pb-2 pb-md-3 mb-3">
              Tellus non diam morbi quam vel venenatis proin sed. Dolor
              elementum nunc dictum interdum amet arcu aenean eu integer
            </p>
            <div className="d-flex">
              <a
                className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3"
                href="#"
                aria-label="Instagram"
              >
                <i className="ai-instagram"></i>
              </a>
              <a
                className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3"
                href="#"
                aria-label="Facebook"
              >
                <i className="ai-facebook"></i>
              </a>
              <a
                className="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle"
                href="#"
                aria-label="YouTube"
              >
                <i className="ai-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-1 offset-md-2 offset-xl-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
              <div className="col mb-4 mb-md-0">
                <ul className="nav flex-column">
                  <li>
                    <a className="nav-link fw-normal py-1 px-0" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link fw-normal py-1 px-0" href="#">
                      Our boxes
                    </a>
                  </li>
                  <li>
                    <a className="nav-link fw-normal py-1 px-0" href="#">
                      Bestsellers
                    </a>
                  </li>
                  <li>
                    <a className="nav-link fw-normal py-1 px-0" href="#">
                      Sale
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li>
                    <a className="nav-link fw-normal py-1 px-0" href="#">
                      Help center
                    </a>
                  </li>
                  <li>
                    <Link className="nav-link fw-normal py-1 px-0" to="/orders">
                      Delivery info
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link fw-normal py-1 px-0" to="/terms">
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link fw-normal py-1 px-0"
                      to="/privacy-policy"
                    >
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="nav fs-sm mb-0">
          <span className="text-body-secondary">
            © All rights reserved. Made by
          </span>
          <a
            className="nav-link fw-normal p-0 ms-1"
            href="https://createx.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Createx Studio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
