import React from "react";

const Clients = () => {
  return (
    <section className="pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5  mb-5">
      <div className="container pt-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
        <div className="fs-sm text-uppercase mb-3">Testimonials</div>
        <h2 className="display-6 pb-3 mb-lg-4">What our clients say</h2>
        <div className="card border-0 bg-secondary overflow-hidden">
          <div className="card-body position-relative z-2 px-lg-0 py-lg-5">
            <div className="row py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <div className="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0">
                <div className="binded-content">
                  <div className="binded-item active" id="author1">
                    <img
                      className="d-block rounded-circle mb-3"
                      src="./src/assets/img/avatar/21.jpg"
                      width="86"
                      alt="Lilianna Bocouse"
                    />
                    <h4 className="mb-0">Lilianna Bocouse</h4>
                    <p className="fs-lg text-body-secondary mb-0">
                      Head of Marketing
                    </p>
                  </div>
                  <div className="binded-item" id="author2">
                    <img
                      className="d-block rounded-circle mb-3"
                      src="./src/assets/img/avatar/33.jpg"
                      width="86"
                      alt="Darell Steward"
                    />
                    <h4 className="mb-0">Darell Steward</h4>
                    <p className="fs-lg text-body-secondary mb-0">
                      Project Manager
                    </p>
                  </div>
                  <div className="binded-item" id="author3">
                    <img
                      className="d-block rounded-circle mb-3"
                      src="./src/assets/img/avatar/34.jpg"
                      width="86"
                      alt="Annette Black"
                    />
                    <h4 className="mb-0">Annette Black</h4>
                    <p className="fs-lg text-body-secondary mb-0">
                      Lead Designer
                    </p>
                  </div>
                  <div className="binded-item" id="author4">
                    <img
                      className="d-block rounded-circle mb-3"
                      src="./src/assets/img/avatar/35.jpg"
                      width="86"
                      alt="Ralph Edwards"
                    />
                    <h4 className="mb-0">Ralph Edwards</h4>
                    <p className="fs-lg text-body-secondary mb-0">
                      CEO, Co-Founder
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-7">
                <div
                  className="swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden"
                  data-swiper-options='{ "spaceBetween": 40, "loop": true, "autoHeight": true, "bindedContent": true, "pagination": { "el": "#testimonials-bullets", "clickable": true } }'
                >
                  <div className="swiper-wrapper" style={{ height: "180px" }}>
                    <div
                      className="swiper-slide swiper-slide-active"
                      data-swiper-binded="#author1"
                      role="group"
                      aria-label="1 / 4"
                    >
                      <p className="text-dark lead mb-0">
                        “Around provides us with the detailed and accurate data
                        we need to make strategic decisions. All tools are
                        constantly being improved and contain a lot of useful
                        and interesting information. Thanks to Around, we can
                        constantly analyze our big data quickly and
                        efficiently.”
                      </p>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      data-swiper-binded="#author2"
                      role="group"
                      aria-label="2 / 4"
                    >
                      <p className="text-dark lead mb-0">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Integer ac pretium dui. Aliquam rutrum justo
                        lorem, in efficitur odio efficitur vel. Integer mattis,
                        neque malesuada sagittis porttitor, enim tortor
                        ullamcorper diam, id eleifend sem mauris at turpis.
                        Curabitur sed nisi nec ligula dictum maximus eu ut
                        ante.”
                      </p>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-binded="#author3"
                      role="group"
                      aria-label="3 / 4"
                    >
                      <p className="text-dark lead mb-0">
                        “Quisque rutrum sit amet magna sit amet tristique.
                        Vivamus rhoncus ac purus vitae convallis. Aliquam erat
                        volutpat. Proin egestas, mauris ut semper semper, ipsum
                        felis mattis ligula, et porttitor ante arcu nec ante.
                        Aliquam congue est eu turpis sollicitudin, et
                        ullamcorper tortor aliquam.”
                      </p>
                    </div>
                    <div
                      className="swiper-slide"
                      data-swiper-binded="#author4"
                      role="group"
                      aria-label="4 / 4"
                    >
                      <p className="text-dark lead mb-0">
                        “Vestibulum faucibus lectus eget augue pharetra, quis
                        semper lectus gravida. Vestibulum pretium in elit sed
                        iaculis. Curabitur elementum turpis at ipsum molestie,
                        id maximus odio tincidunt. Praesent id lacinia orci.
                        Phasellus at varius arcu. Ut nec lobortis velit. Mauris
                        vel risus quis lacus placerat fringilla.”
                      </p>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-pagination position-relative bottom-0 pt-4 mt-2 mt-md-3 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
          id="testimonials-bullets"
        >
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabIndex="0"
            role="button"
            aria-label="Go to slide 1"
            aria-current="true"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabIndex="0"
            role="button"
            aria-label="Go to slide 2"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabIndex="0"
            role="button"
            aria-label="Go to slide 3"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabIndex="0"
            role="button"
            aria-label="Go to slide 4"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
