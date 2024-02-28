import React from "react";

const Pagination = () => {
  return (
    <div className="row gy-3 align-items-center pt-3 pt-sm-4 mt-md-2">
      <div className="col col-md-4 col-6 order-md-1 order-1">
        <div className="d-flex align-items-center">
          <span className="text-body-secondary fs-sm">Show</span>
          <select className="form-select form-select-flush w-auto">
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="col col-md-4 col-12 order-md-2 order-3 text-center">
        <button className="btn btn-primary w-md-auto w-100" type="button">
          Load more products
        </button>
      </div>
      <div className="col col-md-4 col-6 order-md-3 order-2">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-sm justify-content-end">
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
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
