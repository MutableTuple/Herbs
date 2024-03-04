import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import SwiperCard from "./SwiperCard.component";

const NewArrivals = () => {
  const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="container pt-5 mt-md-2 mt-lg-4 mt-xl-5">
      <div className="position-relative z-2 d-flex justify-content-end pt-4 pb-4 mt-2 mt-sm-3 mt-md-4 mb-n5 mb-lg-4">
        <button
          className="btn btn-prev btn-icon btn-sm btn-outline-dark rounded-circle ms-3"
          type="button"
          id="new-prev"
          aria-label="Previous slide"
          tabIndex="0"
          aria-controls="swiper-wrapper-122fae807f4b0341"
          onClick={goToPrevSlide}
        >
          <i className="ai-arrow-left"></i>
        </button>
        <button
          className="btn btn-next btn-icon btn-sm btn-outline-dark rounded-circle ms-3"
          type="button"
          id="new-next"
          aria-label="Next slide"
          tabIndex="0"
          aria-controls="swiper-wrapper-122fae807f4b0341"
          onClick={goToNextSlide}
        >
          <i className="ai-arrow-right"></i>
        </button>
      </div>
      <div className="row">
        <div className="col-lg-3 pb-3 mb-3 mb-md-4">
          <h2 className="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">New Arrivals</h2>
          <p className="fs-lg mb-4">
            Explore our new mouthwatering selection that we've recently
            introduced.
          </p>
          <a className="btn btn-dark rounded-pill" href="#">
            nu winkelen
          </a>
        </div>

        <div className="col-lg-9">
          <Swiper
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: "#new-prev",
              nextEl: "#new-next",
            }}
          >
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
