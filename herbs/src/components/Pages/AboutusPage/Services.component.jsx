import React from "react";

const Services = () => {
  return (
    <section className="bg-secondary py-5">
      <div className="container py-3 py-sm-4 py-lg-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="fs-sm text-uppercase mb-3 mt-xl-2 mt-xxl-3">
          Work with us
        </div>
        <h2 className="h1 pb-3 mb-lg-4">Our services</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-xl-2 pb-xxl-3">
          <div className="col">
            <div className="card h-100 border-0 rounded-5">
              <div className="card-body pb-3">
                <svg
                  className="d-block mt-1 mt-sm-0 mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="text-info">
                    <path
                      d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <g className="text-primary">
                    <path
                      d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <h3 className="h4">Market shares analysis</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus eget molestie massa. Donec egestas ex et velit
                  egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div className="card-footer border-0 pt-3 mb-3">
                <a
                  className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link"
                  href="#"
                  aria-label="Learn more"
                >
                  <i className="ai-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* More service items */}
        </div>
      </div>
    </section>
  );
};

export default Services;
