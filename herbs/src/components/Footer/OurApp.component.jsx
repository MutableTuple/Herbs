import React from "react";

const OurApp = () => {
  return (
    <div className="col-12 col-xl-3 mt-md-2 mt-xl-0 pt-2 pt-md-4 pt-xl-0">
      <h3 className="h6 text-uppercase mb-1 pb-1">Download our app</h3>
      <div className="d-flex d-xl-block d-xxl-flex">
        <a className="btn btn-secondary px-3 py-2 mt-3 me-3" href="#">
          <img
            className="mx-1"
            src="./src/assets/img/market/appstore-light.svg"
            width="120"
            alt="App Store"
          />
        </a>
        <a className="btn btn-secondary px-3 py-2 mt-3" href="#">
          <img
            className="mx-1"
            src="./src/assets/img/market/googleplay-light.svg"
            width="119"
            alt="Google Play"
          />
        </a>
      </div>
    </div>
  );
};

export default OurApp;
