import React from "react";

const ProductCardFav = () => {
  return (
    <div className="col pb-2 pb-sm-3">
      <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
        <button
          className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
          type="button"
          aria-label="Remove"
        >
          <i className="ai-trash fs-xl text-danger"></i>
        </button>
        <div
          className="swiper swiper-nav-onhover swiper-initialized swiper-horizontal swiper-backface-hidden"
          data-swiper-options='{"loop": true, "navigation": {"prevEl": ".btn-prev", "nextEl": ".btn-next"}}'
        >
          <a
            className="swiper-wrapper"
            href="shop-single.html"
            id="swiper-wrapper-4b234df2ddd24e21"
            aria-live="polite"
          >
            <div
              className="swiper-slide p-2 p-xl-4 swiper-slide-active swiper-slide-next"
              role="group"
              aria-label="1 / 1"
              data-swiper-slide-index="0"
              style={{ width: "207px" }}
            >
              <img
                className="d-block mx-auto"
                src="./src/assets/img/shop/products/03.png"
                width="226"
                alt="Product"
              />
            </div>
          </a>
          <button
            className="btn btn-prev btn-icon btn-sm btn-light bg-light border-0 rounded-circle start-0 swiper-button-lock"
            type="button"
            aria-label="Previous slide"
            tabIndex="0"
            aria-controls="swiper-wrapper-4b234df2ddd24e21"
          >
            <i className="ai-chevron-left fs-xl text-nav"></i>
          </button>
          <button
            className="btn btn-next btn-icon btn-sm btn-light bg-light border-0 rounded-circle end-0 swiper-button-lock"
            type="button"
            aria-label="Next slide"
            tabIndex="0"
            aria-controls="swiper-wrapper-4b234df2ddd24e21"
          >
            <i className="ai-chevron-right fs-xl text-nav"></i>
          </button>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      <div className="d-flex mb-1">
        <h3 className="h6 mb-0">
          <a href="shop-single.html">Dispenser for soap</a>
        </h3>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2">$16.00</span>
        <div
          className="nav ms-auto"
          data-bs-toggle="tooltip"
          data-bs-template="<div class='tooltip fs-xs' role='tooltip'><div class='tooltip-inner bg-light text-body-secondary p-0'></div></div>"
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

export default ProductCardFav;
