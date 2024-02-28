import React from "react";

const OurClients = () => {
  return (
    <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
      <div className="overflow-auto" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                tabIndex="0"
                role="region"
                aria-label="scrollable content"
                style={{ height: "auto", overflow: "hidden" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div
                    className="row row-cols-4 g-0 py-3 my-sm-3"
                    style={{ minWidth: "600px" }}
                  >
                    <div className="col">
                      <img
                        className="d-block mx-auto"
                        src="./src/assets/img/landing/shop-2/awards/01.png"
                        width="226"
                        alt="Award"
                      />
                    </div>
                    <div className="col">
                      <img
                        className="d-block mx-auto"
                        src="./src/assets/img/landing/shop-2/awards/02.png"
                        width="226"
                        alt="Award"
                      />
                    </div>
                    <div className="col">
                      <img
                        className="d-block d-dark-mode-none mx-auto"
                        src="./src/assets/img/landing/shop-2/awards/03-light.png"
                        width="226"
                        alt="Award"
                      />
                      <img
                        className="d-none d-dark-mode-block mx-auto"
                        src="./src/assets/img/landing/shop-2/awards/03-dark.png"
                        width="226"
                        alt="Award"
                      />
                    </div>
                    <div className="col">
                      <img
                        className="d-block mx-auto"
                        src="./src/assets/img/landing/shop-2/awards/04.png"
                        width="226"
                        alt="Award"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: `${1068}px`, height: `${164}px` }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: "0px", display: "none" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ height: "0", display: "none" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
