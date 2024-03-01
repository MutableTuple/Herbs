import React from "react";

const Fixed = () => {
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
            required=""
            id="c-fn"
          />
        </div>
        {/* Rest of the form fields... */}
      </div>

      {/* Shipping method */}
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
      {/* Rest of the shipping methods... */}

      {/* Payment method */}
      <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
        3.<span className="text-decoration-underline ms-1">Payment method</span>
      </h3>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="payment"
          defaultChecked
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
      {/* Rest of the payment methods... */}

      {/* Place an order button visible on screens > 991px */}
      <div className="d-none d-lg-block pt-5 mt-n3">
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
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

export default Fixed;
