import React from "react";

const BreadCrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="pt-lg-3 pb-2 breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Shop catalog
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
