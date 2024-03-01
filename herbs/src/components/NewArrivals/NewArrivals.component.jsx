import React from "react";
import "../../../src/index.css";
import NewSwiper from "./NewSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "./SwiperCard.component";
import "swiper/css";
const NewArrivals = () => {
  return (
    <section className="container pt-5 mt-md-2 mt-lg-4 mt-xl-5">
      <div className="row">
        <div className="col-lg-3 pb-3 mb-3 mb-md-4">
          <h2 className="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">nieuwe aankomsten</h2>
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
