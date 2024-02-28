import React from "react";
import "../../../src/index.css";

const NewArrivals = () => {
  return (
    <section className="container pt-5 mt-md-2 mt-lg-4 mt-xl-5">
      <div className="position-relative z-2 d-flex justify-content-end pt-4 pb-4 mt-2 mt-sm-3 mt-md-4 mb-n5 mb-lg-4">
        <button
          className="btn btn-prev btn-icon btn-sm btn-outline-dark rounded-circle ms-3"
          type="button"
          id="new-prev"
          aria-label="Previous slide"
          tabIndex="0"
          aria-controls="swiper-wrapper-d7481107f7027a64b"
        >
          <i className="ai-arrow-left"></i>
        </button>
        <button
          className="btn btn-next btn-icon btn-sm btn-outline-dark rounded-circle ms-3"
          type="button"
          id="new-next"
          aria-label="Next slide"
          tabIndex="0"
          aria-controls="swiper-wrapper-d7481107f7027a64b"
        >
          <i className="ai-arrow-right"></i>
        </button>
      </div>
      <div className="row">
        <div className="col-lg-3 pb-3 mb-3 mb-md-4">
          <h2 className="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">New arrivals</h2>
          <p className="fs-lg mb-4">
            Explore our new mouthwatering selection that we've recently
            introduced.
          </p>
          <a className="btn btn-dark rounded-pill" href="#">
            Shop boxes
          </a>
        </div>

        <div className="col-lg-9">
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
            data-swiper-options='{
        "slidesPerView": 1,
        "spaceBetween": 24,
        "loop": true,
        "navigation": {
          "prevEl": "#new-prev",
          "nextEl": "#new-next"
        },
        "breakpoints": {
          "500": {
            "slidesPerView": 2
          },
          "768": {
            "slidesPerView": 3
          }
        }
      }'
          >
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-84f16b4cffe326b2"
              aria-live="polite"
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 4"
                data-swiper-slide-index="0"
                //   style="width: 275.333px; margin-right: 24px;"
                style={{ width: 275.333 + "px", marginRight: 24 + "px" }}
              >
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
                      src="./src/assets/img/landing/shop-2/products/01.png"
                      alt="Product"
                    />
                  </a>
                </div>
                <div className="d-flex mb-1">
                  <h3 className="h6 mb-0">
                    <a href="#">The Sunshine Box (6)</a>
                  </h3>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">$18.00</span>
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

              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 4"
                data-swiper-slide-index="1"
                style={{ width: 275.333 + "px", marginRight: 24 + "px" }}
              >
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
                      src="./src/assets/img/landing/shop-2/products/02.png"
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

              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 4"
                data-swiper-slide-index="2"
                style={{ width: 275.333 + "px", marginRight: 24 + "px" }}
              >
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
                      src="./src/assets/img/landing/shop-2/products/03.png"
                      alt="Product"
                    />
                  </a>
                </div>
                <div className="d-flex mb-1">
                  <h3 className="h6 mb-0">
                    <a href="#">Rainbow (20)</a>
                  </h3>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">$58.00</span>
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

              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 4"
                data-swiper-slide-index="3"
                style={{ width: 275.333 + "px", marginRight: 24 + "px" }}
              >
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
                      src="./src/assets/img/landing/shop-2/products/02.png"
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
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
