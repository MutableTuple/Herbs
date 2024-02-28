import React from "react";

function PriceSlider() {
  return (
    <div
      className="range-slider pb-3 mb-4"
      data-start-min={10}
      data-start-max={50}
      data-min={0}
      data-max={80}
      data-step={1}
      data-tooltip-prefix="$"
    >
      <div className="range-slider-ui noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
        <div className="noUi-base">
          <div className="noUi-connects">
            <div
              className="noUi-connect"
              style={{ transform: "translate(12.5%, 0px) scale(0.5, 1)" }}
            ></div>
          </div>
          <div
            className="noUi-origin"
            style={{ transform: "translate(-87.5%, 0px)", zIndex: 5 }}
          >
            <div
              className="noUi-handle noUi-handle-lower"
              data-handle={0}
              tabIndex={0}
              role="slider"
              aria-orientation="horizontal"
              aria-valuemin={0.0}
              aria-valuemax={50.0}
              aria-valuenow={10.0}
              aria-valuetext="$10"
            >
              <div className="noUi-touch-area"></div>
              <div className="noUi-tooltip">$10</div>
            </div>
          </div>
          <div
            className="noUi-origin"
            style={{ transform: "translate(-37.5%, 0px)", zIndex: 4 }}
          >
            <div
              className="noUi-handle noUi-handle-upper"
              data-handle={1}
              tabIndex={0}
              role="slider"
              onChange={(e) => {
                e.target.value;
              }}
              aria-orientation="horizontal"
              aria-valuemin={10.0}
              aria-valuemax={80.0}
              aria-valuenow={50.0}
              aria-valuetext="$50"
            >
              <div className="noUi-touch-area"></div>
              <div className="noUi-tooltip">$50</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center w-50">
          <label className="form-label fs-xs me-2 mb-0" htmlFor="price-min">
            From
          </label>
          <input
            className="form-control form-control-sm range-slider-value-min"
            type="number"
            style={{ maxWidth: "6rem" }}
            id="price-min"
          />
        </div>
        <div className="d-flex align-items-center justify-content-end w-50">
          <label className="form-label fs-xs me-2 mb-0" htmlFor="price-max">
            To
          </label>
          <input
            className="form-control form-control-sm range-slider-value-max"
            type="number"
            style={{ maxWidth: "6rem" }}
            id="price-max"
          />
        </div>
      </div>
    </div>
  );
}

export default PriceSlider;
