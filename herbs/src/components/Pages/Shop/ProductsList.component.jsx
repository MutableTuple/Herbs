import React from "react";
import Pagination from "./Pagination.component";
import ProductCard from "./ProductCard.component";
import ProductFilter from "./ProductFilter.component";

const ProductsList = () => {
  return (
    <div className="col-lg-9">
      {/* Active filters + Sorting */}
      <ProductFilter />
      <div className="d-flex align-items-start justify-content-between mb-4">
        <div className="d-flex align-items-center flex-shrink-0 mb-2">
          <span className="text-body-secondary text-nowrap fs-sm">
            Sort by:
          </span>
          <select className="form-select form-select-flush py-0">
            <option value="popular">Most popular</option>
            <option value="low-high">Low-High price</option>
            <option value="high-low">High-Low price</option>
            <option value="rating">Average rating</option>
            <option value="az">A-Z order</option>
            <option value="za">Z-A order</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <ProductCard />
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsList;
