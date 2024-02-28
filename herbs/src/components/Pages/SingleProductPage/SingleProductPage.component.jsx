import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import YouMayAlsoLike from "./YouMayAlsoLike.component";
import UserQuery from "./UserQuery.component";
import Footer from "../../Footer/Footer.component";

const SingleProductPage = () => {
  return (
    <>
      <section className="container py-5 mt-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <Navbar />
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-2 pb-md-4 breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="shop-catalog.html">Shop catalog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single product
            </li>
          </ol>
        </nav>
        {/* Title + price shown on screens < 768px */}
        <h2 className="h1 d-md-none">Scented candle</h2>
        <div className="d-flex d-md-none align-items-center pb-3 mb-3">
          <div className="h3 mb-0 me-3">$14.00</div>
          <del className="fs-5 fw-medium text-body-secondary me-3">$19.00</del>
          <span className="badge bg-danger bg-opacity-10 text-danger d-md-none">
            Sale
          </span>
        </div>
        <div className="row pb-sm-1 pb-md-4">
          {/* Gallery */}
          <div className="col-md-6 gallery mb-3 mb-md-0">
            {/* Item */}
            <a
              className="d-block gallery-item card-hover zoom-effect mb-4"
              href="../../src/assets/img/shop/single/gallery/01.png"
              data-lg-id="4fd4ebba-6136-4831-98ce-3363e8ac1b94"
            >
              <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                <i className="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
              </div>
              <div className="zoom-effect-wrapper rounded-1">
                <div className="zoom-effect-img bg-secondary p-4">
                  <img
                    className="d-block mx-auto"
                    src="../src/assets/img/shop/single/gallery/01.png"
                    width="562"
                    alt="Candle image #1"
                  />
                </div>
              </div>
            </a>

            <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
              {/* Item */}
              <div className="col">
                <a
                  className="d-block gallery-item card-hover zoom-effect"
                  href="assets/img/shop/single/gallery/01.png"
                  data-lg-id="e39efcbe-7303-465f-9896-5330d8b06283"
                >
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i className="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                  </div>
                  <div className="zoom-effect-wrapper rounded-1">
                    <div className="zoom-effect-img bg-secondary p-4">
                      <img
                        className="d-block mx-auto"
                        src="../src/assets/img/shop/single/gallery/th01.png"
                        width="226"
                        alt="Candle image #2"
                      />
                    </div>
                  </div>
                </a>
              </div>

              {/* Item */}
              <div className="col">
                <a
                  className="d-block gallery-item card-hover zoom-effect"
                  href="../../assets/img/shop/single/gallery/02.png"
                  data-lg-id="911334f7-1ae4-4e54-a498-1dc354a5cdee"
                >
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i className="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                  </div>
                  <div className="zoom-effect-wrapper rounded-1">
                    <div className="zoom-effect-img bg-secondary p-4">
                      <img
                        className="d-block mx-auto"
                        src="../src/assets/img/shop/single/gallery/th02.png"
                        width="226"
                        alt="Candle image #3"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Item */}
            <a
              className="d-block gallery-item card-hover zoom-effect"
              href="assets/img/shop/single/gallery/03.png"
              data-lg-id="8a8db765-c560-4f9d-96b2-df878f715af0"
            >
              <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                <i className="ai-zoom-in fs-2 text-white position-relative z-2"></i>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
              </div>
              <div className="zoom-effect-wrapper rounded-1">
                <div className="zoom-effect-img bg-secondary p-4">
                  <img
                    className="d-block mx-auto"
                    src="../src/assets/img/shop/single/gallery/03.png"
                    width="460"
                    alt="Candle image #4"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Product details */}
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div
              className="d-none d-md-block"
              style={{ marginTop: "-90px" }}
            ></div>
            <div className="position-md-sticky top-0 ps-md-4 ps-lg-5 ps-xl-0">
              <div
                className="d-none d-md-block"
                style={{ paddingTop: "90px" }}
              ></div>
              <div className="d-flex align-items-center pt-3 py-3">
                <span className="badge bg-danger bg-opacity-10 text-danger d-none d-md-inline-block me-4">
                  Sale
                </span>
                <span className="fs-sm">V00273124</span>
              </div>
              <h1 className="d-none d-md-inline-block pb-1 mb-2">
                Scented candle
              </h1>
              <p className="fs-sm mb-4">
                Find aute irure reprehenderit in voluptate velit esse cillum
                dolore eu fugiatnulla pariatur neque congue aliqua dolor do amet
                sint ovar velit.
              </p>
              <div className="d-none d-md-flex align-items-center pb-3 mb-3">
                <div className="h3 mb-0 me-3">$14.00</div>
                <del className="fs-5 fw-medium text-body-secondary">$19.00</del>
              </div>

              {/* Color button selector */}
              <div className="h6">
                Color:
                <span
                  className="text-body-secondary fw-normal ms-1"
                  id="colorOption"
                >
                  Gray concrete
                </span>
              </div>
              <div className="d-flex pb-3">
                <div className="me-2 mb-2">
                  <input
                    className="btn-check"
                    type="radio"
                    name="color"
                    data-binded-label="colorOption"
                    value="Gray concrete"
                    checked=""
                    id="color1"
                  />
                  <label
                    className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
                    htmlFor="color1"
                  >
                    <span
                      className="d-block bg-size-cover bg-position-center rounded-circle"
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        backgroundColor: "#c0c0c0",
                        backgroundImage:
                          "url(./src/assets/img/shop/pattern/marble.jpg)",
                      }}
                    ></span>
                  </label>
                </div>
                {/* Additional color options */}
              </div>

              {/* Weight button selector */}
              <div className="h6">Weight</div>
              <div className="d-flex">{/* Weight options */}</div>

              {/* Action buttons */}
              <div className="d-sm-flex d-md-block d-lg-flex py-4 py-md-5 my-3 my-md-0 mt-lg-0 mb-lg-4">
                {/* Buttons */}
              </div>

              {/* Sharing */}
              <div className="d-flex align-items-center">
                <h4 className="h6 me-4">Share product:</h4>
                {/* Sharing buttons */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-4 pb-md-5 mb-lg-4">
        <div
          className="bg-size-cover bg-repeat-0 bg-position-center rounded-1 mb-md-2 py-xl-4 py-xxl-5"
          style={{
            backgroundImage: "url(./src/assets/img/shop/single/01.jpg)",
          }}
        >
          <div className="row py-lg-5">
            <div className="col-md-8 offset-md-3 col-lg-6 offset-lg-5 col-xl-5 offset-xl-6 py-5">
              <div className="bg-light rounded-1 mx-4 p-4 p-md-5">
                <div className="py-3 p-sm-3">
                  <h2 className="h3 mb-sm-4">Scented candle</h2>
                  <p className="mb-0">
                    Ut sit at orci cursus gravida pretium proin nulla id purus,
                    placerat eget mauris eu ac volutpat facilisi eget morbi
                    ullamcorper turpis nisi aconsequat cursus malesuada leo
                    ultrices nisl dictumst turpis tortor sem amet, euismod
                    aliquam, lacus laoreet dui facilisi morbi ullamcorper turpis
                    nisi aconsequat cursus volutpat facilisi eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div className="row align-items-center pb-md-3">
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img
              className="rounded-1"
              src="./src/assets/img/shop/single/02.jpg"
              alt="Image"
            />
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              <h2 className="h3 mb-sm-4">Description</h2>
              <p className="mb-4 mb-lg-5">
                Ut sit at orci cursus gravida pretium proin nulla id purus,
                placerat eget mauris eu ac volutpat facilisi eget morbi
                ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices
                nisl dictumst turpis tortor sem eu ac volutpat facilisi eget
                morbi
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  Weight:
                  <span className="text-dark fw-semibold ms-2">
                    140 - 440 grams
                  </span>
                </li>
                <li className="mb-3">
                  Material:
                  <span className="text-dark fw-semibold ms-2">
                    Concrete bowl
                  </span>
                </li>
                <li className="mb-3">
                  Duration:
                  <span className="text-dark fw-semibold ms-2">
                    60 hours of comfort and combustion
                  </span>
                </li>
                <li className="mb-3">
                  Composition:
                  <span className="text-dark fw-semibold ms-2">
                    100% soy wax, cotton wick
                  </span>
                </li>
                <li>
                  Country:
                  <span className="text-dark fw-semibold ms-2">France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <YouMayAlsoLike />
      <UserQuery />
      <Footer />
    </>
  );
};

export default SingleProductPage;
