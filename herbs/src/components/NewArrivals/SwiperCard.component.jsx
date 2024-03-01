import React from "react";

const SwiperCard = () => {
  return (
    <div>
      <div className="card-hover position-relative bg-secondary rounded mb-4">
        <span className="badge bg-primary bg-opacity-10 text-primary position-absolute top-0 start-0 mt-3 ms-3">
          New
        </span>
        <button
          className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
          type="button"
          aria-label="Add to Favorites"
        >
          <i className="ai-heart fs-xl text-nav"></i>
        </button>
        <a className="d-block" href="#">
          <img
            className="d-block mx-auto"
            src="./src/assets/img/product/1_main.png"
            alt="Product"
          />
        </a>
      </div>
      <div className="d-flex mb-1">
        <h3 className="h6 mb-0">
          <a href="#">Fromage (9)</a>
        </h3>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2">$24.00</span>
        <div
          className="nav ms-auto"
          data-bs-toggle="tooltip"
          data-bs-template='<div className="tooltip fs-xs" role="tooltip"><div className="tooltip-inner bg-light text-body-secondary p-0"></div></div>'
          data-bs-placement="left"
          aria-label="Add to cart"
          data-bs-original-title="Add to cart"
        >
          <a
            className="nav-link fs-lg py-2 px-1"
            href="#"
            aria-label="Add to Cart"
          >
            <i className="ai-cart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
