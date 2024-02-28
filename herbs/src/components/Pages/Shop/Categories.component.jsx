import React from "react";
import SelectableNames from "./SelectableNames.component";

const Categories = ({ categoryTitle, children }) => {
  return (
    <div className="accordion-item mb-0">
      <h4 className="accordion-header">
        <button
          className="accordion-button fs-xl fw-medium py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#livingRoom"
          aria-expanded="true"
          aria-controls="livingRoom"
        >
          <span className="fs-base">{categoryTitle}</span>
        </button>
      </h4>
      <div
        className="accordion-collapse collapse show"
        id="livingRoom"
        data-bs-parent="#shopCategories"
      >
        <div className="accordion-body py-1 mb-1">{children}</div>
      </div>
    </div>
  );
};

export default Categories;
