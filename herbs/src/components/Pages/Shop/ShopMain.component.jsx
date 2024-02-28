import React from "react";
import Sidebar from "./SIdebar.component";
import ProductFilter from "./ProductFilter.component";
import ProductCard from "./ProductCard.component";
import Pagination from "./Pagination.component";
import Cart from "./Cart.component";

const ShopMain = () => {
  return (
    <div className="row pb-2 pb-sm-4">
      <Sidebar />

      {/* Product grid */}
      <div className="col-lg-9">
        {/* Active filters + Sorting */}
        <ProductFilter />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {/* Item */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* <Cart /> */}
        </div>
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default ShopMain;
