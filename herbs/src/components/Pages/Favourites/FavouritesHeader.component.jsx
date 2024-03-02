import React from "react";

function FavoritesHeader() {
  return (
    <div className="d-flex align-items-center mb-4">
      <h1 className="h2 mb-0">
        Favorites{" "}
        <span className="fs-base fw-normal text-body-secondary">(6 items)</span>
      </h1>
      <button className="btn btn-sm btn-outline-danger ms-auto" type="button">
        <i className="ai-trash ms-n1 me-2"></i>
        Clear all
      </button>
    </div>
  );
}

export default FavoritesHeader;
