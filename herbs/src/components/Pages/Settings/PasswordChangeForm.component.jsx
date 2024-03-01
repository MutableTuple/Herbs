import React from "react";

function PasswordChangeForm() {
  return (
    <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
          <i className="ai-lock-closed text-primary lead pe-1 me-2"></i>
          <h2 className="h4 mb-0">Password change</h2>
        </div>
        <div className="row align-items-center g-3 g-sm-4 pb-3">
          <div className="col-sm-6">
            <label className="form-label" htmlFor="current-pass">
              Current password
            </label>
            <div className="password-toggle">
              <input
                className="form-control"
                type="password"
                value="hidden@password"
                id="current-pass"
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <a
              className="d-inline-block fs-sm fw-semibold text-decoration-none mt-sm-4"
              href="account-password-recovery.html"
            >
              Forgot password?
            </a>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="new-pass">
              New password
            </label>
            <div className="password-toggle">
              <input className="form-control" type="password" id="new-pass" />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="confirm-pass">
              Confirm new password
            </label>
            <div className="password-toggle">
              <input
                className="form-control"
                type="password"
                id="confirm-pass"
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="alert alert-info d-flex my-3 my-sm-4">
          <i className="ai-circle-info fs-xl me-2"></i>
          <p className="mb-0">
            Password must be minimum 8 characters long - the more, the better.
          </p>
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button className="btn btn-secondary" type="button">
            Cancel
          </button>
          <button className="btn btn-primary ms-3" type="button">
            Save changes
          </button>
        </div>
      </div>
    </section>
  );
}

export default PasswordChangeForm;
