import React from "react";
import Fixed from "./Fixed.component";
import Form from "./Form.component";
import Navbar from "../../Navbar/Navbar.component";
import ProductCheckout from "./ProductCheckout.component";
const Checkout = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100"
        style={{ width: "52.5%" }}
      ></div>

      <form
        className={
          "needs-validation container position-relative z-2 pt-5 pb-lg-5 pb-md-4 pb-2"
        }
      >
        <div className="row">
          <Form />
          <ProductCheckout />
        </div>
      </form>
    </>
  );
};

export default Checkout;
