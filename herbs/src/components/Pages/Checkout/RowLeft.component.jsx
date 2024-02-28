import React from "react";

const RowLeft = () => {
  return (
    <div className="col-lg-6">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="mt-5 pt-lg-3 pb-md-1 pb-lg-3 breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="shop-catalog.html">Shop</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Checkout
          </li>
        </ol>
      </nav>

      <h1 className="h2 pb-3">Checkout</h1>

      {/* Checkout form fields */}
      <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
        1.
        <span className="text-decoration-underline ms-1">Shipping details</span>
      </h3>
      <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-fn">
            First name
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Your first name"
            required
            id="c-fn"
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-ln">
            Last name
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Your last name"
            required
            id="c-ln"
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-email">
            Email
          </label>
          <div className="position-relative">
            <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              className="form-control form-control-lg ps-5"
              type="email"
              placeholder="Email address"
              required
              id="c-email"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px",
                backgroundPosition: "97% center",
                cursor: "auto",
              }}
              data-temp-mail-org="0"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-phone">
            Phone
          </label>
          <div className="position-relative">
            <i className="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              className="form-control form-control-lg ps-5"
              type="tel"
              data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
              placeholder="+1 ___ ___ __"
              required
              id="c-phone"
            />
          </div>
        </div>
        <div className="col-12">
          <label className="form-label fs-base" htmlFor="c-country">
            Country
          </label>
          <select
            className="form-select form-select-lg"
            required
            id="c-country"
          >
            <option value="" selected disabled>
              Select a country
            </option>
            <option value="Australia">Australia</option>
            <option value="Belgium">Belgium</option>
            <option value="Canada">Canada</option>
            <option value="Denmark">Denmark</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-city">
            City
          </label>
          <select className="form-select form-select-lg" required id="c-city">
            <option value="" selected disabled>
              Select a city
            </option>
            <option value="Sydney">Sydney</option>
            <option value="Brussels">Brussels</option>
            <option value="Toronto">Toronto</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="New York">New York</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="c-zip">
            Zip code
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            data-format='{"delimiter": "-", "blocks": [3, 4], "uppercase": true}'
            placeholder="XXX-XXXX"
            required
            id="c-zip"
          />
        </div>
        <div className="col-12">
          <label className="form-label fs-base" htmlFor="c-address">
            Address line
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            required
            id="c-address"
          />
        </div>
        <div className="col-12">
          <label className="form-label fs-base" htmlFor="c-notes">
            Order notes <span className="text-body-secondary">(optional)</span>
          </label>
          <textarea
            className="form-control form-control-lg"
            rows="5"
            id="c-notes"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="same-address"
            />
            <label
              className="form-check-label text-dark fw-medium"
              htmlFor="same-address"
            >
              Billing address same as delivery
            </label>
          </div>
        </div>
      </div>
      <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
        2.
        <span className="text-decoration-underline ms-1">Shipping method</span>
      </h3>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="shipping"
          id="standard"
        />
        <label
          className="form-check-label d-flex justify-content-between"
          htmlFor="standard"
        >
          <span>
            <span className="d-block fs-base text-dark fw-medium mb-1">
              Standard Delivery
            </span>
            <span className="text-body">Delivery in 5 - 8 working days</span>
          </span>
          <span className="fs-base text-dark fw-semibold">$8.00</span>
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="shipping"
          checked
          id="express"
        />
        <label
          className="form-check-label d-flex justify-content-between"
          htmlFor="express"
        >
          <span>
            <span className="d-block fs-base text-dark fw-medium mb-1">
              Express Shipping
            </span>
            <span className="text-body">Delivery in 3 - 5 working days</span>
          </span>
          <span className="fs-base text-dark fw-semibold">$15.00</span>
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="shipping"
          id="local"
        />
        <label
          className="form-check-label d-flex justify-content-between"
          htmlFor="local"
        >
          <span>
            <span className="d-block fs-base text-dark fw-medium mb-1">
              Local Pickup
            </span>
            <span className="text-body">Delivery in 1 - 2 working days</span>
          </span>
          <span className="fs-base text-dark fw-semibold">Free</span>
        </label>
      </div>
      <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
        3.
        <span className="text-decoration-underline ms-1">Payment method</span>
      </h3>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="payment"
          checked
          id="card"
        />
        <label className="form-check-label" htmlFor="card">
          <span>
            <span className="d-block fs-base text-dark fw-medium mb-1">
              Credit Card
            </span>
            <span className="text-body">
              Mastercard, Maestro, American Express, Visa are accepted
            </span>
          </span>
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="payment"
          id="cash"
        />
        <label className="form-check-label" htmlFor="cash">
          <span>
            <span className="d-block fs-base text-dark fw-medium mb-1">
              Cash on Delivery
            </span>
            <span className="text-body">Pay with cash upon the delivery</span>
          </span>
        </label>
      </div>

      {/* Place an order button visible on screens > 991px */}
      <div className="d-none d-lg-block pt-5 mt-n3">
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked
            id="save-info"
          />
          <label className="form-check-label" htmlFor="save-info">
            <span className="text-body-secondary">
              Your personal information will be used to process your order, to
              support your experience on this site and for other purposes
              described in the{" "}
            </span>
            <a className="fw-medium" href="#">
              privacy policy
            </a>
          </label>
        </div>
        <button className="btn btn-lg btn-primary" type="submit">
          Place an order
        </button>
      </div>
    </div>
  );
};

export default RowLeft;
