import React from "react";

const SelectableNames = ({ categoryName, categoryNumberofProducts }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="lr-all" />
      <label
        className="form-check-label d-flex align-items-center"
        htmlFor="lr-all"
      >
        <span className="text-nav fw-medium">{categoryName}</span>
        <span className="fs-xs text-body-secondary ms-auto">
          {categoryNumberofProducts}
        </span>
      </label>
    </div>
  );
};

export default SelectableNames;
