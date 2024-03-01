import React from "react";

const BillingAddressSection = () => {
  return (
    <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
      <div className="card-body">
        <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
          <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
          <h2 className="h4 mb-0">Billing address</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Address (primary) */}
          <div className="col">
            <div className="card h-100 rounded-3 p-3 p-sm-4">
              <div className="d-flex align-items-center pb-2 mb-1">
                <h3 className="h6 text-nowrap text-truncate mb-0">
                  Billing address #1
                </h3>
                <span className="badge bg-primary bg-opacity-10 text-primary fs-xs ms-3">
                  Primary
                </span>
                <div className="d-flex ms-auto">
                  <button
                    className="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Edit"
                    data-bs-original-title="Edit"
                  >
                    <i className="ai-edit-alt"></i>
                  </button>
                  <button
                    className="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Trash"
                    data-bs-original-title="Delete"
                  >
                    <i className="ai-trash"></i>
                  </button>
                </div>
              </div>
              <p className="mb-0">
                314 Robinson Lane,
                <br />
                Wilmington, DE 19805,
                <br />
                USA
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="col">
            <div className="card h-100 rounded-3 p-3 p-sm-4">
              <div className="d-flex align-items-center pb-2 mb-1">
                <h3 className="h6 text-nowrap text-truncate mb-0">
                  Billing address #2
                </h3>
                <div className="d-flex ms-auto">
                  <button
                    className="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Edit"
                    data-bs-original-title="Edit"
                  >
                    <i className="ai-edit-alt"></i>
                  </button>
                  <button
                    className="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Delete"
                    data-bs-original-title="Delete"
                  >
                    <i className="ai-trash"></i>
                  </button>
                </div>
              </div>
              <p className="mb-0">
                401 Magnetic Drive Unit 2,
                <br />
                Toronto, Ontario, M3J 3H9
                <br />
                Canada
              </p>
            </div>
          </div>

          {/* Add address */}
          <div className="col">
            <div className="card h-100 justify-content-center align-items-center border-dashed rounded-3 py-5 px-3 px-sm-4">
              <a
                className="stretched-link d-flex align-items-center fw-semibold text-decoration-none my-sm-3"
                href="#addAddress"
                data-bs-toggle="modal"
              >
                <i className="ai-circle-plus fs-xl me-2"></i>
                Add new address
              </a>
            </div>
          </div>
        </div>
        <div className="py-4 mt-sm-2 mt-md-3">
          <h3 className="h6 mb-1">Tax location</h3>
          <p className="mb-0">United States - 10% VAT</p>
        </div>
        <div className="alert alert-info d-flex mb-0">
          <i className="ai-circle-info fs-xl me-2"></i>
          <p className="mb-0">
            Your text location determines the taxes that are applied to your
            bill.{" "}
            <a href="#" className="alert-link">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BillingAddressSection;
