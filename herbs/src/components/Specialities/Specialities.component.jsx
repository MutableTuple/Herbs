import React from "react";

const Specialities = () => {
  const dataSwiperOptions = {
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      460: { slidesPerView: 2 },
      700: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
    },
  };

  return (
    <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <div
        className="swiper pt-3 pb-2 py-sm-3 py-md-4 py-xl-5 my-lg-2 swiper-initialized swiper-horizontal swiper-backface-hidden"
        data-swiper-options={JSON.stringify(dataSwiperOptions)}
      >
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-c1f0d110bf134dde6"
          aria-live="polite"
          style={{
            transitionDuration: "0ms",
            transitionDelay: "0ms",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div
            className="swiper-slide text-center swiper-slide-active"
            role="group"
            aria-label="1 / 4"
            style={{ width: "217px", marginRight: "32px" }}
          >
            <img
              className="d-block mx-auto mb-4"
              src="./src/assets/img/landing/shop-2/benefits/glutenfree.svg"
              width="82"
              alt="Icon"
            />
            <h3 className="h4 pb-2 mb-1">Gluten-Free</h3>
            <p className="fs-sm mb-0">
              Made without gluten, offer to savor taste and quality without
              limitations.
            </p>
          </div>

          <div
            className="swiper-slide text-center swiper-slide-next"
            role="group"
            aria-label="2 / 4"
            style={{ width: "217px", marginRight: "32px" }}
          >
            <img
              className="d-block mx-auto mb-4"
              src="./src/assets/img/landing/shop-2/benefits/vegan.svg"
              width="82"
              alt="Icon"
            />
            <h3 className="h4 pb-2 mb-1">Vegan</h3>
            <p className="fs-sm mb-0">
              Made without animal products, they're perfect for vegans.
            </p>
          </div>

          <div
            className="swiper-slide text-center"
            role="group"
            aria-label="3 / 4"
            style={{ width: "217px", marginRight: "32px" }}
          >
            <img
              className="d-block mx-auto mb-4"
              src="./src/assets/img/landing/shop-2/benefits/natural.svg"
              width="82"
              alt="Icon"
            />
            <h3 className="h4 pb-2 mb-1">100% Natural</h3>
            <p className="fs-sm mb-0">
              We have no place for artificial additives and preservatives.
            </p>
          </div>

          <div
            className="swiper-slide text-center"
            role="group"
            aria-label="4 / 4"
            style={{ width: "217px", marginRight: "32px" }}
          >
            <img
              className="d-block mx-auto mb-4"
              src="./src/assets/img/landing/shop-2/benefits/love.svg"
              width="82"
              alt="Icon"
            />
            <h3 className="h4 pb-2 mb-1">Made with Love</h3>
            <p className="fs-sm mb-0">
              Each macaron is meticulously handcrafted with a deep passion for
              detail and quality.
            </p>
          </div>
        </div>

        <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabIndex="0"
            role="button"
            aria-label="Go to slide 1"
            aria-current="true"
          ></span>
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

export default Specialities;
