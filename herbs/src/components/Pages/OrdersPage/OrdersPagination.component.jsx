import React from "react";

const OrdersPagination = () => {
  return (
    <div className="d-sm-flex align-items-center pt-4 pt-sm-5">
      <nav
        className="order-sm-2 ms-sm-auto mb-4 mb-sm-0"
        aria-label="Orders pagination"
      >
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item active" aria-current="page">
            <span className="page-link">
              1<span className="visually-hidden">(current)</span>
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="btn btn-primary w-100 w-sm-auto order-sm-1 ms-sm-auto me-sm-n5"
        type="button"
      >
        Load more orders
      </button>
    </div>
  );
};

export default OrdersPagination;
