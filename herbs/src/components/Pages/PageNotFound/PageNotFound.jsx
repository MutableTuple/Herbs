import React from "react";

const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100 py-5">
      <lottie-player
        src="assets/json/animation-404-light.json"
        className="d-dark-mode-none mt-n5"
        background="transparent"
        speed="1"
        loop=""
        autoplay=""
      ></lottie-player>
      <lottie-player
        className="d-none d-dark-mode-block mt-n5"
        src="assets/json/animation-404-dark.json"
        background="transparent"
        speed="1"
        loop=""
        autoplay=""
      ></lottie-player>
      <div className="text-center pt-4 mt-lg-2">
        <h1 className="display-5">Page not found</h1>
        <p className="fs-lg pb-2 pb-md-0 mb-4 mb-md-5">
          The page you are looking for was moved, removed, or might never have
          existed.
        </p>
        <a className="btn btn-lg btn-primary" href="index.html">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
