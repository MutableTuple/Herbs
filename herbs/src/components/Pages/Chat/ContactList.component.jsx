import React from "react";

function ContactsList() {
  return (
    <div className="col-xl-4">
      <div
        className="offcanvas-xl offcanvas-start position-absolute position-xl-relative h-100 bg-light rounded-5 border border-xl-0"
        id="contactsList"
        data-bs-scroll="true"
        data-bs-backdrop="false"
      >
        <div className="rounded-5 overflow-hidden">
          <div className="card-header w-100 border-0 px-4 pt-4 pb-3">
            <div className="d-flex d-xl-none justify-content-end mt-n2 mb-2">
              <button
                className="btn btn-outline-secondary border-0 px-3 me-n2"
                type="button"
                data-bs-dismiss="offcanvas"
                data-bs-target="#contactsList"
              >
                <i className="ai-cross me-2"></i>
                Close
              </button>
            </div>
            <div className="position-relative">
              <input
                className="form-control pe-5"
                type="text"
                placeholder="Search by name or email"
              />
              <i className="ai-search fs-lg text-nav position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
          </div>
          <div className="card-body px-0 pb-4 pb-xl-0 pt-1">
            {/* Contacts */}
            <div className="contact">
              {/* Contact 1 */}
              <a
                className="d-flex align-items-center text-decoration-none px-4 py-3"
                href="#"
              >
                <div className="position-relative flex-shrink-0 my-1">
                  <img
                    className="rounded-circle"
                    src="./src/assets/img/avatar/06.jpg"
                    width="48"
                    alt="Avatar"
                  />
                  <span
                    className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1"
                    style={{ width: ".625rem", height: ".625rem" }}
                  ></span>
                </div>
                <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
                  <div className="me-3">
                    <div className="h6 mb-1">Mikaela Collins</div>
                    <p className="text-body fs-sm mb-0">Thank you for ...</p>
                  </div>
                  <div className="text-end">
                    <span className="d-block fs-xs text-body-secondary">
                      15:01
                    </span>
                    <span className="badge bg-danger fs-xs lh-1 py-1 px-2">
                      2
                    </span>
                  </div>
                </div>
              </a>
              {/* Contact 2 */}
              {/* Add more contacts following the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsList;
