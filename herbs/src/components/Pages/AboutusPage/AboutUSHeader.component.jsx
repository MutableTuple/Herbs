import React from "react";

const AboutUSHeader = () => {
  return (
    <section className="bg-dark position-relative py-5">
      <div
        className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(255,255,255, .03)" }}
      ></div>
      <div
        className="container position-relative z-2 py-5 mb-4 mb-sm-5"
        data-bs-theme="dark"
      >
        <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
          <div className="col-lg-10 col-xl-9">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ol>
            </nav>
            <h1 className="display-2 pb-2 pb-sm-3">
              We believe in the success of every business
            </h1>
            <ul className="list-unstyled d-flex flex-wrap mb-0">
              <li className="d-flex text-body py-1 me-4">
                <i className="ai-check-alt text-primary lead me-2"></i>
                Forecasting and recommendations
              </li>
              <li className="d-flex text-body py-1 me-4">
                <i className="ai-check-alt text-primary lead me-2"></i>
                Identification of patterns, analysis
              </li>
              <li className="d-flex text-body py-1">
                <i className="ai-check-alt text-primary lead me-2"></i>
                Segmentation by various methods
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUSHeader;
