import React from "react";

const KeyToSuccess = () => {
  return (
    <section className="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
      <div className="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
        <div className="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
          <div
            className="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto"
            style={{
              maxWidth: "530px",
              backgroundImage:
                "url(./src/assets/img/about/agency/steps-image.jpg)",
            }}
          >
            <div className="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
            <div className="position-relative z-2 p-4" data-bs-theme="dark">
              <div
                className="text-center mx-auto"
                style={{ maxWidth: "275px" }}
              >
                <span className="d-block text-body fs-sm text-uppercase mb-3">
                  How we work
                </span>
                <h2 className="display-6 mb-0">The key to success</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-5 offset-xl-1">
          <div className="ps-md-4 ps-xl-0">
            <div className="steps steps-hoverable">
              <div className="step py-3 py-xl-4">
                <div className="step-number">
                  <div className="step-number-inner">01</div>
                </div>
                <div className="step-body">
                  <h3 className="h5 pb-1 mb-2">Formulation of the problem</h3>
                  <p className="mb-0">
                    Find aute irure dolor in reprehenderi voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur am luctus.
                  </p>
                </div>
              </div>
              <div className="step py-3 py-xl-4">
                <div className="step-number">
                  <div className="step-number-inner">02</div>
                </div>
                <div className="step-body">
                  <h3 className="h5 pb-1 mb-2">
                    Assessment of the current state
                  </h3>
                  <p className="mb-0">
                    Risus quam quis at euismod vitae dui elementu eu in diam
                    malesuada mattis ut urna integer erat nisi nibh.
                  </p>
                </div>
              </div>
              <div className="step py-3 py-xl-4">
                <div className="step-number">
                  <div className="step-number-inner">03</div>
                </div>
                <div className="step-body">
                  <h3 className="h5 pb-1 mb-2">Business plan creation</h3>
                  <p className="mb-0">
                    A sagittis morbi massa venenatis, egestas viverra ac elit
                    nibh tellus nisi in nec tellus mauris feugiat gravida.
                  </p>
                </div>
              </div>
              <div className="step py-3 py-xl-4">
                <div className="step-number">
                  <div className="step-number-inner">04</div>
                </div>
                <div className="step-body">
                  <h3 className="h5 pb-1 mb-2">Strategy implementation</h3>
                  <p className="mb-0">
                    Elementum purus, nisl ipsum sit. Amet sit praesent proin sit
                    cras. Leo sed praesent nunc vel nec risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyToSuccess;
