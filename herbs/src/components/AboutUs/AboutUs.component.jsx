import React from "react";

const AboutUs = () => {
  return (
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
      <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
        <div className="col-sm-6 col-lg-4">
          <h2 className="display-2">About us</h2>
          <p className="fs-xl mb-0">
            These unique macarons have their roots in a love for baking,
            creative craftsmanship, and a quest for perfection.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/01.jpg"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/02.jpg"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/03.jpg"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center">
          <p className="fs-xl text-center mb-0">
            In recent years, we've dedicated ourselves to perfecting macarons,
            creating surprising flavors. Our macarons are made with love to
            provide an exceptional experience.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/04.jpg"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/05.jpg"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4 mb-2 mb-lg-0">
          <img
            className="rounded-5"
            src="./src/assets/img/landing/shop-2/gallery/06.jpg"
            alt="Image"
          />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <div className="text-center px-xl-3 px-xxl-5">
            <h3 className="h2 mb-4">All of our Macarons are gluten-free.</h3>
            <a className="btn btn-dark rounded-pill" href="#">
              Explore our collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
