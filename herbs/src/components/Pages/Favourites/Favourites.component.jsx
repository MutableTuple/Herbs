import React from "react";
import OrderSidebar from "../OrdersPage/OrderSidebar.component";
import FavouritesHeader from "./FavouritesHeader.component";
import ProductCardFav from "./ProductCardFav.component";
import Navbar from "../../Navbar/Navbar.component";
import Footer from "../../Footer/Footer.component";
const Favourites = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
        <div className="row pt-sm-2 pt-lg-0">
          <OrderSidebar />
          <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
            <FavouritesHeader />
            <div className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
              <div className="card-body pb-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  <ProductCardFav />
                  <ProductCardFav />
                  <ProductCardFav />
                  <ProductCardFav />
                  <ProductCardFav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
