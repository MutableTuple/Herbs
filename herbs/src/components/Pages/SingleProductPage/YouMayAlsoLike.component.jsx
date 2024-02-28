import React from "react";

const YouMayAlsoLike = () => {
  return (
    <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
      <div className="d-flex align-items-center justify-content-between pb-4 mb-2 mb-md-3">
        <h2 className="h1 pt-1 mb-0">You may also like</h2>
        <div className="d-flex">
          <button
            className="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle ms-3"
            type="button"
            id="relevant-prev"
            aria-label="Previous slide"
            tabIndex="0"
            aria-controls="swiper-wrapper-70d290d66410bf4c5"
          >
            <i className="ai-arrow-left"></i>
          </button>
          <button
            className="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle ms-3"
            type="button"
            id="relevant-next"
            aria-label="Next slide"
            tabIndex="0"
            aria-controls="swiper-wrapper-70d290d66410bf4c5"
          >
            <i className="ai-arrow-right"></i>
          </button>
        </div>
      </div>
      <div
        className="swiper pb-sm-2 pb-md-3 swiper-initialized swiper-horizontal swiper-backface-hidden"
        data-swiper-options='{"slidesPerView":1,"spaceBetween":24,"loop":true,"navigation":{"prevEl":"#relevant-prev","nextEl":"#relevant-next"},"breakpoints":{"500":{"slidesPerView":2},"768":{"slidesPerView":3},"1000":{"slidesPerView":4}}}'
      >
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-70d290d66410bf4c5"
          aria-live="polite"
        >
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 5"
            style={{ width: "238px", marginRight: "24px" }}
            data-swiper-slide-index="0"
          >
            <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
              <span className="badge bg-danger bg-opacity-10 text-danger position-absolute top-0 start-0 mt-3 ms-3">
                Sale
              </span>
              <button
                className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
                type="button"
                aria-label="Add to Favorites"
              >
                <i className="ai-heart fs-xl text-nav"></i>
              </button>
              <a className="d-block p-2 p-xl-4" href="shop-single.html">
                <img
                  className="d-block mx-auto"
                  src="./src/assets/img/shop/products/01.png"
                  width="226"
                  alt="Product"
                />
              </a>
            </div>
            <div className="d-flex mb-1">
              <h3 className="h6 mb-0">
                <a href="shop-single.html">Loft style lamp</a>
              </h3>
              <div className="d-flex ps-2 mt-n1 ms-auto">
                <div className="ms-1">
                  <input
                    className="btn-check"
                    type="radio"
                    name="color1"
                    value="Dark gray"
                    checked
                    id="color1-1"
                  />
                  <label
                    className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                    htmlFor="color1-1"
                  >
                    <span
                      className="d-block rounded-circle"
                      style={{
                        width: ".625rem",
                        height: ".625rem",
                        backgroundColor: "#576071",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    className="btn-check"
                    type="radio"
                    name="color1"
                    value="Light gray"
                    id="color1-2"
                  />
                  <label
                    className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                    htmlFor="color1-2"
                  >
                    <span
                      className="d-block rounded-circle"
                      style={{
                        width: ".625rem",
                        height: ".625rem",
                        backgroundColor: "#d5d4d3",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    className="btn-check"
                    type="radio"
                    name="color1"
                    value="Blue"
                    id="color1-3"
                  />
                  <label
                    className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                    htmlFor="color1-3"
                  >
                    <span
                      className="d-block rounded-circle"
                      style={{
                        width: ".625rem",
                        height: ".625rem",
                        backgroundColor: "#a1b7d9",
                      }}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">$21.00</span>
              <del className="fs-sm text-body-secondary">$35.00</del>
              <div
                className="nav ms-auto"
                data-bs-toggle="tooltip"
                data-bs-template='<div class="tooltip fs-xs" role="tooltip"><div class="tooltip-inner bg-light text-body-secondary p-0"></div></div>'
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
          {/* Rest of the slider items */}
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
