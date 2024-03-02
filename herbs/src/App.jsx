import React from "react";
import { useEffect } from "react";
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
import Register from "./components/Pages/Register/Register.component";
import Overview from "./components/Pages/OverviewPage/Overview.component";
import Orders from "./components/Pages/OrdersPage/Orders.component";
import BillingPage from "./components/Pages/BillingPage/BillingPage.component";
import Settings from "./components/Pages/Settings/Settings.component";
import Favourites from "./components/Pages/Favourites/Favourites.component";
import Faq from "./components/Pages/Faq/Faq.component";
import Chat from "./components/Pages/Chat/Chat.component";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy.component";
import Tnc from "./components/Pages/TNC/tnc.component";
//

const App = () => {
  // useEffect(() => {
  //   const loadScripts = async () => {
  //     // Load external scripts dynamically
  //     const scriptUrls = [
  //       "./src/assets/js/theme-switcher.js",
  //       "./src/assets/vendor/parallax-js/dist/parallax.min.js",
  //       "./src/assets/vendor/aos/dist/aos.js",
  //       "./src/assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js",
  //       "./src/assets/vendor/img-comparison-slider/dist/index.js",
  //       // Add more script URLs here as needed
  //     ];

  //     // Load each script
  //     await Promise.all(
  //       scriptUrls.map((url) => {
  //         return new Promise((resolve, reject) => {
  //           const script = document.createElement("script");
  //           script.src = url;
  //           script.async = true;
  //           script.onload = resolve;
  //           script.onerror = reject;
  //           document.body.appendChild(script);
  //         });
  //       })
  //     );
  //   };

  //   // Call the function to load scripts
  //   loadScripts();

  //   // Cleanup function (optional)
  //   return () => {
  //     // Remove the dynamically added scripts when the component unmounts
  //     const scripts = document.querySelectorAll('script[data-loaded="true"]');
  //     scripts.forEach((script) => {
  //       document.body.removeChild(script);
  //     });
  //   };
  // }, []);
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
          <Route path="register" element={<Register />} />
          <Route path="account" element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="settings" element={<Settings />} />
          {/*  */}
          <Route path="wishlist" element={<Favourites />} />
          <Route path="chat" element={<Chat />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Tnc />} />
          {/* 494 */}
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
