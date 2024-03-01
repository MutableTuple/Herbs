import React from "react";
import OrderSidebar from "../OrdersPage/OrderSidebar.component";
import Navbar from "../../Navbar/Navbar.component";
import Footer from "../../Footer/Footer.component";
import SettingsMain from "./SettingsMain.component";
const Settings = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
        <div className="row pt-sm-2 pt-lg-0">
          <OrderSidebar />
          <SettingsMain />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
