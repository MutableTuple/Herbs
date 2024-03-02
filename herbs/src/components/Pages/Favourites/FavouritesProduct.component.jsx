import React from "react";

function ProductCard({
  imageSrc,
  productName,
  price,
  salePrice,
  isNew,
  isOutOfStock,
}) {
  return (
    <div className="col pb-2 pb-sm-3">
      <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
        {salePrice && (
          <span className="badge bg-danger bg-opacity-10 text-danger position-absolute top-0 start-0 mt-3 ms-3">
            Sale
          </span>
        )}
        {isNew && (
          <span className="badge bg-primary bg-opacity-10 text-primary position-absolute top-0 start-0 mt-3 ms-3">
            New
          </span>
        )}
        {isOutOfStock && (
          <span className="badge bg-gray text-nav position-absolute top-0 start-0 mt-3 ms-3">
            Out of stock
          </span>
        )}
        <button
          className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
          type="button"
          aria-label="Remove"
        >
          <i className="ai-trash fs-xl text-danger"></i>
        </button>
        <div
          className="swiper swiper-nav-onhover swiper-initialized swiper-horizontal swiper-backface-hidden"
          data-swiper-options={`{"loop": true, "navigation": {"prevEl": ".btn-prev", "nextEl": ".btn-next"}}`}
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
                src={imageSrc}
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
          <a href="shop-single.html">{productName}</a>
        </h3>
        <div className="d-flex ps-2 mt-n1 ms-auto">
          {/* Add radio inputs for color selection here if needed */}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2">{price}</span>
        {salePrice && (
          <del className="fs-sm text-body-secondary">{salePrice}</del>
        )}
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
}

export default ProductCard;
