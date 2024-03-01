import React from "react";
// import "../../assets/around-src/scss/_components.scss/";
// import "../../assets/around-src/scss/_reboot.scss/";
// import "../../assets/around-src/scss/_root.scss/";
// import "../../assets/around-src/scss/_user-variables.scss/";
// import "../../assets/around-src/scss/_user.scss/";
// import "../../assets/around-src/scss/_utilities.scss/";
// import "../../assets/around-src/scss/_variables-dark.scss/";
// import "../../assets/around-src/scss/_variables.scss/";
// import "../../assets/around-src/scss/theme.scss/";

const Hero = () => {
  return (
    <section className="position-relative mt-5">
      <div
        className="position-absolute w-100 h-100 top-0 start-0 bg-size-cover bg-position-center mt-4"
        style={{
          backgroundImage: "url(./src/assets/img/bg/bg.png)",
        }}
      ></div>
      {/* <div className="container position-relative z-2 text-center pt-2 pt-sm-4 pt-lg-5">
        <h1 className="display-1 text-white pt-5 mt-3">
          All you need is
          <span className="d-inline-flex align-items-center">
            macar
            <img
              className="mx-1"
              src="./src/assets/img/landing/shop-2/hero-img.png"
              width="85"
              alt="Macaron"
            />
            n
          </span>
        </h1>
        <p
          className="text-white fs-xl opacity-90 mx-auto pb-3 pb-md-0 mb-4 mb-md-5"
          style={{ maxWidth: 640 + "px" }}
        >
          Every macaron is a little delight waiting to brighten your day. Dive
          into macarons world and let your taste buds dance with delight.
        </p>
        <a className="btn btn-light rounded-pill" href="#">
          Go to Shop
        </a>
      </div> */}
      <div className="d-none d-lg-block" style={{ height: 360 + "px" }}></div>
      <div
        className="d-none d-md-block d-lg-none"
        style={{ height: 260 + "px" }}
      ></div>
      <div className="d-md-none" style={{ height: 160 + "px" }}></div>
    </section>
  );
};

export default Hero;
