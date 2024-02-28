import React from "react";
import Categories from "./Categories.component";
import SelectableNames from "./SelectableNames.component";
import PriceSlider from "./PriceSlider.component";
import ColorSelector from "./ColorSelector.component";
const Sidebar = () => {
  return (
    // //////////////////////////////////////////////
    // ! ERRORS == DROPDOWNS CLOSING TOGETHTER
    // //////////////////////////////////////////////

    <aside className="col-lg-3">
      <div className="offcanvas-lg offcanvas-start" id="shopSidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filters</h5>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="offcanvas"
            data-bs-target="#shopSidebar"
            aria-label="Close"
          ></button>
        </div>

        {/* Body */}
        <div className="offcanvas-body pt-2 pt-lg-0 pe-lg-4">
          <h3 className="h5">Categories</h3>
          <div
            className="accordion accordion-alt pb-2 mb-4"
            id="shopCategories"
          >
            <Categories categoryTitle={"Home"}>
              <SelectableNames
                categoryName={"Homes"}
                categoryNumberofProducts={200}
              />
            </Categories>

            <Categories categoryTitle={"Office"}>
              <SelectableNames
                categoryName={"chairs"}
                categoryNumberofProducts={100}
              />
            </Categories>

            {/* More accordion items... */}
          </div>

          {/* Price range slider */}
          <h3 className="h5">Price</h3>
          <PriceSlider />
          {/* Color options */}
          <h3 className="h5">Color</h3>
          <ColorSelector />

          {/* Brand options */}
          <h3 className="h5">Brand</h3>
          {/* Brand checkboxes */}
          <div className="pb-2">
            <SelectableNames
              categoryName={"Pazolinni"}
              categoryNumberofProducts={22}
            />{" "}
            <SelectableNames
              categoryName={"Tither Room"}
              categoryNumberofProducts={10}
            />{" "}
            <SelectableNames
              categoryName={"Moissy Decor"}
              categoryNumberofProducts={55}
            />{" "}
            <SelectableNames
              categoryName={"Victorio Via"}
              categoryNumberofProducts={19}
            />
            {/* More brand options... */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
