import React from "react";

const ProductCheckout = () => {
  return (
    <div className="col-lg-5 offset-lg-1 pt-1">
      <h2 className="pb-2 pt-md-2 my-4 mt-lg-5">
        Order summary{" "}
        <span className="fs-base fw-normal text-body-secondary">(4 items)</span>
      </h2>

      {/* Item */}
      <div className="d-sm-flex align-items-center border-top py-4">
        <a
          className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0"
          href="shop-single.html"
        >
          <img
            src="./src/assets/img/shop/cart/01.png"
            width="110"
            alt="Product"
          />
        </a>
        <div className="w-100 pt-1 ps-sm-4">
          <div className="d-flex">
            <div className="me-3">
              <h3 className="h5 mb-2">
                <a href="shop-single.html">Candle in concrete bowl</a>
              </h3>
              <div className="d-sm-flex flex-wrap">
                <div className="text-body-secondary fs-sm me-3">
                  Color: <span className="text-dark fw-medium">Gray night</span>
                </div>
                <div className="text-body-secondary fs-sm me-3">
                  Weight: <span className="text-dark fw-medium">140g</span>
                </div>
              </div>
            </div>
            <div className="text-end ms-auto">
              <div className="fs-5 mb-2">$11.00</div>
              <del className="text-body-secondary ms-auto">$15.00</del>
            </div>
          </div>
          <div className="count-input ms-n3">
            <button
              className="btn btn-icon fs-xl"
              type="button"
              data-decrement=""
            >
              -
            </button>
            <input className="form-control" type="number" value="2" readOnly />
            <button
              className="btn btn-icon fs-xl"
              type="button"
              data-increment=""
            >
              +
            </button>
          </div>
          <div className="nav justify-content-end mt-n5 mt-sm-n3">
            <a
              className="nav-link fs-xl p-2"
              href="#"
              data-bs-toggle="tooltip"
              aria-label="Remove"
              data-bs-original-title="Remove"
            >
              <i className="ai-trash"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Rest of the items */}

      <div className="border-top pt-4 mb-3">
        <div
          className="input-group input-group-sm border-dashed"
          style={{ maxWidth: "310px" }}
        >
          <input
            className="form-control text-uppercase"
            type="text"
            placeholder="Your coupon code"
          />
          <button className="btn btn-secondary" type="button">
            Apply coupon
          </button>
        </div>
      </div>
      <ul className="list-unstyled py-3 mb-0">
        <li className="d-flex justify-content-between mb-2">
          Subtotal:<span className="fw-semibold ms-2">$92.00</span>
        </li>
        <li className="d-flex justify-content-between mb-2">
          Taxes:<span className="fw-semibold ms-2">$8.00</span>
        </li>
        <li className="d-flex justify-content-between mb-2">
          Shipping cost:<span className="fw-semibold ms-2">$15.00</span>
        </li>
      </ul>
      <div className="d-flex align-items-center justify-content-between border-top fs-xl pt-4">
        Total:<span className="fs-3 fw-semibold text-dark ms-2">$115.00</span>
      </div>
    </div>
  );
};

export default ProductCheckout;
