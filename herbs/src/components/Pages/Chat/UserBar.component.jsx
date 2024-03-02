import React from "react";

function Userbar() {
  return (
    <div className="navbar card-header w-100 mx-0 px-4 ">
      <div className="d-flex align-items-center w-100 px-sm-3">
        <button
          className="navbar-toggler d-xl-none me-3 me-sm-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#contactsList"
          aria-controls="contactsList"
          aria-label="Toggle contacts list"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="position-relative flex-shrink-0">
          <img
            className="rounded-circle"
            src="./src/assets/img/avatar/19.jpg"
            width="48"
            alt="Avatar"
          />
          <span
            className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1"
            style={{ width: ".625rem", height: ".625rem" }}
          ></span>
        </div>
        <div className="h6 ps-2 ms-1 mb-0">Mark Virgows</div>
        <div className="dropdown ms-auto">
          <button
            className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2"
            type="button"
            data-bs-toggle="dropdown"
            aria-label="Actions"
          >
            <i className="ai-dots-vertical fs-4 fw-bold"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-end my-1">
            <a className="dropdown-item" href="#">
              <i className="ai-user fs-base opacity-80 me-2"></i>
              View profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="ai-bell-off fs-base opacity-80 me-2"></i>
              Disable notifications
            </a>
            <a className="dropdown-item" href="#">
              <i className="ai-edit fs-base opacity-80 me-2"></i>
              Edit contact
            </a>
            <a className="dropdown-item" href="#">
              <i className="ai-trash fs-base opacity-80 me-2"></i>
              Delete contact
            </a>
            <a className="dropdown-item" href="#">
              <i className="ai-logout fs-base opacity-80 me-2"></i>
              Leave chat
            </a>
            <a className="dropdown-item" href="#">
              <i className="ai-circle-slash fs-base opacity-80 me-2"></i>
              Block user
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userbar;
