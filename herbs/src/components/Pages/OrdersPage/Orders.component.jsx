import React from "react";
import OrderSidebar from "./OrderSidebar.component";
import OrderProduct from "./OrderProduct.component";
import Footer from "../../Footer/Footer.component";
import Navbar from "../../Navbar/Navbar.component";
const Orders = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
        <div className="row pt-sm-2 pt-lg-0">
          <OrderSidebar />
          <OrderProduct />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
