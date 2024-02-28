import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import Locations from "./Locations.component";
import Footer from "../../Footer/Footer.component";
const Contact = () => {
  return (
    <>
      <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5">
        <Navbar />
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contacts v.2
            </li>
          </ol>
        </nav>

        <div className="row pb-1 pb-sm-3 pb-lg-4">
          <div className="col-lg-4 pe-xxl-4">
            {/* Page title */}
            <h1 className="display-2">Contacts</h1>
            <p className="fs-lg pb-4 mb-0 mb-sm-2">
              Get in touch with us by completing the below form or call us now
            </p>
          </div>
          <div className="col-lg-8 col-xl-7 offset-xl-1">
            {/* Contact form */}
            <form className="row g-4 needs-validation" noValidate>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your name"
                  required
                  id="name"
                />
                <div className="invalid-feedback">Please enter your name!</div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email address"
                  required
                  id="email"
                />
                <div className="invalid-feedback">
                  Please provide a valid email address!
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="location">
                  Location
                </label>
                <select className="form-select form-select-lg" id="location">
                  <option value="All locations">All locations</option>
                  <option value="Asia and Pacific">Asia and Pacific</option>
                  <option value="Central Europe">Central Europe</option>
                  <option value="Eastern Europe">Eastern Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label fs-base" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Enter your message here..."
                  required
                  id="message"
                ></textarea>
                <div className="invalid-feedback">
                  Please enter your message!
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree to the{" "}
                    <a
                      className="nav-link d-inline fs-normal text-decoration-underline p-0"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-sm-12 pt-2">
                <button className="btn btn-lg btn-primary" type="submit">
                  Send a request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Locations />
      <Footer />
    </>
  );
};

export default Contact;
