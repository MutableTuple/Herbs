import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import Footer from "../../Footer/Footer.component";
function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row py-2 py-sm-4 py-md-5 mt-lg-2">
          <div className="col-sm-9 col-md-4 col-lg-5 mb-5 mb-md-0">
            <div className="position-relative mb-sm-2">
              <div
                className="position-absolute top-0"
                style={{ right: "37.26%" }}
              >
                <img
                  className="position-relative z-2 d-dark-mode-none"
                  src="./src/assets/img/landing/insurance/faq/staff-light.png"
                  width="330"
                  alt="Support staff"
                />
                <img
                  className="position-relative z-2 d-none d-dark-mode-block"
                  src="./src/assets/img/landing/insurance/faq/staff-dark.png"
                  width="330"
                  alt="Support staff"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none"></div>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
                  style={{ backgroundColor: "#202327" }}
                ></div>
              </div>
              <img
                src="./src/assets/img/landing/insurance/faq/preview.jpg"
                style={{ WebkitClipPath: "url(#mask)", clipPath: "url(#mask)" }}
                alt="Image"
              />
              <svg
                width="0"
                height="0"
                viewBox="0 0 526 410"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath
                    id="mask"
                    clipPathUnits="objectBoundingBox"
                    transform="scale(0.001901140684, 0.00243902439)"
                  >
                    <path d="M0 392V119.598C0 109.648 8.0717 101.586 18.021 101.598L331.979 101.964C341.928 101.976 350 93.9133 350 83.964V18.3667C350 8.44183 358.033 0.389727 367.958 0.366699L507.958 0.0418617C517.916 0.0187578 526 8.08438 526 18.0418V392C526 401.941 517.941 410 508 410H18C8.05887 410 0 401.941 0 392Z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="h5">Need more info?</h3>
            <p className="mb-sm-4">
              That's ok. Just drop a message and we will get back to you ASAP.
            </p>
            <a className="btn btn-primary" href="#">
              Contact us
            </a>
          </div>
          <div className="col-md-8 col-lg-7">
            <div className="ps-md-3 ps-lg-4 ps-xl-5">
              <h2 className="h1 pb-sm-1 pb-md-3">Privacy &amp; Policy</h2>

              {/* Accordion */}
              <div className="accordion" id="faq">
                <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button fs-6 py-3 px-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#real-estate"
                      aria-expanded="false"
                      aria-controls="real-estate"
                    >
                      How we use your data?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="real-estate"
                    data-bs-parent="#faq"
                    style={{}}
                  >
                    <div className="accordion-body fs-sm">
                      <p>
                        It's essential to periodically review and update your
                        insurance coverage to ensure it meets your current
                        needs. Here are some guidelines for different types of
                        insurance:
                      </p>
                      <ul className="mb-0">
                        <li>
                          <strong>Car insurance:</strong> Review your policy
                          annually or when you experience significant life
                          changes, such as buying a new vehicle, moving to a new
                          location, or a change in your driving habits.
                        </li>
                        <li>
                          <strong>Health insurance:</strong> Review your health
                          insurance coverage during your open enrollment period
                          or after major life events like marriage, having a
                          child, or experiencing a change in income.
                        </li>
                        <li>
                          <strong>Life Insurance:</strong> Review your life
                          insurance coverage whenever you have a significant
                          life change, such as marriage, the birth of a child,
                          or when you have new financial responsibilities.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
