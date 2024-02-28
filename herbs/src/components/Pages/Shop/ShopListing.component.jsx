import React from "react";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs.component";
import ShopBanner from "../../ShopBanner/ShopBanner.component";
import Navbar from "../../Navbar/Navbar.component";
import Sidebar from "./SIdebar.component";
import ProductsList from "./ProductsList.component";
// import FooterSub from "../../Footer/FooterSub.component";
import ShopMain from "./ShopMain.component";
import Footer from "../../Footer/Footer.component";
const ShopListing = () => {
  return (
    <>
      <div className="container py-5 mt-5 mb-lg-4 mb-xl-5">
        <Navbar />
        <BreadCrumbs />
        <ShopBanner />
        <div className="row pt-xl-3 mt-n1 mt-sm-0">
          <div className="col-lg-9 offset-lg-3 pt-lg-3">
            <h1 className="pb-2 pb-sm-3">Home decoration</h1>
          </div>
          <ShopMain />
        </div>
      </div>
      <Footer />
      {/* <FooterSub /> */}
    </>
  );
};

export default ShopListing;
