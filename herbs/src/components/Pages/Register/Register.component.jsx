import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-lg-flex position-relative h-100">
      {/* Home button */}
      <Link
        className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"
        to={"/"}
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        aria-label="Back to home"
        data-bs-original-title="Back to home"
      >
        <i className="ai-home"></i>
      </Link>

      {/* Sign up form */}
      <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
        <div className="w-100 mt-auto" style={{ maxWidth: "526px" }}>
          <h1>No account? Sign up</h1>
          <p className="pb-3 mb-3 mb-lg-4">
            Have an account already?&nbsp;&nbsp;
            <Link to={"/signin"}>Sign in here!</Link>
          </p>
          <form className="needs-validation" noValidate="">
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col mb-4">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your name"
                  required=""
                />
              </div>
              <div className="col mb-4">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email address"
                  required=""
                />
              </div>
            </div>
            <div className="password-toggle mb-4">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                required=""
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
            <div className="password-toggle mb-4">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Confirm password"
                required=""
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
            <div className="pb-4">
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                />
                <label className="form-check-label ms-1" htmlFor="terms">
                  I agree to <a href="#">Terms & Conditions</a>
                </label>
              </div>
            </div>
            <button className="btn btn-lg btn-primary w-100 mb-4" type="submit">
              Sign up
            </button>

            {/* Sign in with social account */}
            <h2 className="h6 text-center pt-3 pt-lg-4 mb-4">
              Or sign in with your social account
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 gy-3">
              <div className="col">
                <a
                  className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100"
                  href="#"
                >
                  <i className="ai-google fs-xl me-2"></i>
                  Google
                </a>
              </div>
              <div className="col">
                <a
                  className="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100"
                  href="#"
                >
                  <i className="ai-facebook fs-xl me-2"></i>
                  Facebook
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <p
          className="nav w-100 fs-sm pt-5 mt-auto mb-5"
          style={{ maxWidth: "526px" }}
        >
          <span className="text-body-secondary">
            © All rights reserved. Made by
          </span>
          <a
            className="nav-link d-inline-block p-0 ms-1"
            href="https://createx.studio/"
            target="_blank"
            rel="noopener"
          >
            Createx Studio
          </a>
        </p>
      </div>

      {/* Cover image */}
      <div
        className="w-50 bg-size-cover bg-repeat-0 bg-position-center"
        style={{ backgroundImage: "url(./src/assets/img/account/cover.jpg)" }}
      ></div>
    </div>
  );
};

export default Register;
