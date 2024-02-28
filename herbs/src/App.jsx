import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import Hero from "./components/Hero/Hero.component";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import OurClients from "./components/OurClients/OurClients.component";
import Collection from "./components/CollectionSpecial/Collection.component";
import Specialities from "./components/Specialities/Specialities.component";
import MostPopular from "./components/MostPopular/MostPopular.component";
import Social from "./components/Social/Social.component";
import Footer from "./components/Footer/Footer.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage.component";
import ShopListing from "./components/Pages/Shop/ShopListing.component";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import SingleProductPage from "./components/Pages/SingleProductPage/SingleProductPage.component";
import Contact from "./components/Pages/ContactPage/Contact.component";
import SignIn from "./components/Pages/SignIn/SignIn.component";
import AboutUs from "./components/Pages/AboutusPage/AboutUs.component";
import Checkout from "./components/Pages/Checkout/Checkout.component";
//
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopListing />} />
          <Route path="product" element={<SingleProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
