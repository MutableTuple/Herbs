import React from "react";

const ShopBanner = () => {
  return (
    <section
      className="rounded-1 overflow-hidden mb-5"
      style={{ backgroundColor: "#e3e5e9" }}
      data-bs-theme="light"
    >
      <div className="row align-items-center g-0">
        <div className="col-md-6 offset-xl-1 text-center text-md-start">
          <div className="py-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
            <p className="text-body fs-xs text-uppercase pt-3 pt-md-0 mb-3 mb-lg-4">
              Best selling
            </p>
            <h2 className="h1 pb-2 pb-xl-3">
              Cozy corner for the living room at a{" "}
              <span className="text-primary">discount up to 40%</span>
            </h2>
            <a
              className="btn btn-sm btn-outline-dark"
              href="#"
              data-bs-theme="light"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="col-md-6 col-xl-5 d-flex justify-content-end">
          <img
            src="./src/assets/img/shop/banner.jpg"
            width="491"
            alt="Banner"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
