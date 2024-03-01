import React from "react";

const OrderSidebar = () => {
  return (
    <aside className="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
      <div className="position-lg-sticky top-0">
        <div
          className="d-none d-lg-block"
          style={{ paddingTop: "105px" }}
        ></div>
        <div className="offcanvas-lg offcanvas-start" id="sidebarAccount">
          <button
            className="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none"
            type="button"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarAccount"
            aria-label="Close"
          ></button>
          <div className="offcanvas-body">
            <div className="pb-2 pb-lg-0 mb-4 mb-lg-5">
              <img
                className="d-block rounded-circle mb-2"
                src="./src/assets/img/avatar/02.jpg"
                width="80"
                alt="Isabella Bocouse"
              />
              <h3 className="h5 mb-1">Isabella Bocouse</h3>
              <p className="fs-sm text-body-secondary mb-0">
                bocouse@example.com
              </p>
            </div>
            <nav className="nav flex-column pb-2 pb-lg-4 mb-3">
              <h4 className="fs-xs fw-medium text-body-secondary text-uppercase pb-1 mb-2">
                Account
              </h4>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-overview.html"
              >
                <i className="ai-user-check fs-5 opacity-60 me-2"></i>
                Overview
              </a>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-settings.html"
              >
                <i className="ai-settings fs-5 opacity-60 me-2"></i>
                Settings
              </a>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-billing.html"
              >
                <i className="ai-wallet fs-5 opacity-60 me-2"></i>
                Billing
              </a>
            </nav>
            <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
              <h4 className="fs-xs fw-medium text-body-secondary text-uppercase pb-1 mb-2">
                Dashboard
              </h4>
              <a
                className="nav-link fw-semibold py-2 px-0 active"
                href="account-orders.html"
              >
                <i className="ai-cart fs-5 opacity-60 me-2"></i>
                Orders
              </a>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-earnings.html"
              >
                <i className="ai-activity fs-5 opacity-60 me-2"></i>
                Earnings
              </a>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-chat.html"
              >
                <i className="ai-messages fs-5 opacity-60 me-2"></i>
                Chat
                <span className="badge bg-danger ms-auto">4</span>
              </a>
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-favorites.html"
              >
                <i className="ai-heart fs-5 opacity-60 me-2"></i>
                Favorites
              </a>
            </nav>
            <nav className="nav flex-column">
              <a
                className="nav-link fw-semibold py-2 px-0"
                href="account-signin.html"
              >
                <i className="ai-logout fs-5 opacity-60 me-2"></i>
                Sign out
              </a>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OrderSidebar;
