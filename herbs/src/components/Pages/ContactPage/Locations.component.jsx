import React from "react";

const Locations = () => {
  return (
    <section className="bg-secondary py-5">
      <div className="container py-lg-3 py-xl-4 py-xxl-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-sm-2 py-md-3 py-lg-4">
          <div className="col">
            <h2 className="h4 mb-4">Orlando</h2>
            <ul className="list-unstyled mb-0">
              <li className="nav flex-nowrap mb-3">
                <i className="ai-phone lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="tel:+178632256040"
                >
                  +1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;40
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-mail lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="mailto:orlando@example.com"
                >
                  orlando@example.com
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-map-pin lead text-primary me-2"></i>
                <a className="nav-link fw-normal p-0 mt-n1" href="#">
                  514 S. Magnolia St. Orlando, FL 32806
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="h4 mb-4">Chicago</h2>
            <ul className="list-unstyled mb-0">
              <li className="nav flex-nowrap mb-3">
                <i className="ai-phone lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="tel:+178632256040"
                >
                  +1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;40
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-mail lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="mailto:chicago@example.com"
                >
                  chicago@example.com
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-map-pin lead text-primary me-2"></i>
                <a className="nav-link fw-normal p-0 mt-n1" href="#">
                  76, Industrial Dr, West Chicago, 60185
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="h4 mb-4">New York</h2>
            <ul className="list-unstyled mb-0">
              <li className="nav flex-nowrap mb-3">
                <i className="ai-phone lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="tel:+178632256040"
                >
                  +1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;40
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-mail lead text-primary me-2"></i>
                <a
                  className="nav-link fw-normal p-0 mt-n1"
                  href="mailto:chicago@example.com"
                >
                  newyork@example.com
                </a>
              </li>
              <li className="nav flex-nowrap mb-3">
                <i className="ai-map-pin lead text-primary me-2"></i>
                <a className="nav-link fw-normal p-0 mt-n1" href="#">
                  396 Lillian Blvd, Holbrook, NY 11741
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
