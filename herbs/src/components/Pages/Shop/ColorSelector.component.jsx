import React from "react";

const ColorSelector = () => {
  return (
    <div className="d-flex pb-2 mb-4">
      <div className="me-2 mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Black"
          checked=""
          id="color1"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color1"
        >
          <span
            className="d-block rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#1d211f",
            }}
          ></span>
        </label>
      </div>
      <div className="me-2 mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Soft beige"
          id="color2"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color2"
        >
          <span
            className="d-block rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#d9c9a1",
            }}
          ></span>
        </label>
      </div>
      <div className="me-2 mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Bluish sky"
          id="color3"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color3"
        >
          <span
            className="d-block rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#a1b7d9",
            }}
          ></span>
        </label>
      </div>
      <div className="me-2 mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Green grass"
          id="color4"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color4"
        >
          <span
            className="d-block rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#74947d",
            }}
          ></span>
        </label>
      </div>
      <div className="me-2 mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Woody brown"
          id="color5"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color5"
        >
          <span
            className="d-block bg-size-cover bg-position-center rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#af8352",
              backgroundImage: "url(assets/img/shop/pattern/wood.jpg)",
            }}
          ></span>
        </label>
      </div>
      <div className="mb-2">
        <input
          className="btn-check"
          type="checkbox"
          value="Gray marble"
          id="color6"
        />
        <label
          className="btn btn-icon btn-sm btn-outline-secondary rounded-circle"
          htmlFor="color6"
        >
          <span
            className="d-block bg-size-cover bg-position-center rounded-circle"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: "#c0c0c0",
              backgroundImage: "url(assets/img/shop/pattern/marble.jpg)",
            }}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default ColorSelector;
