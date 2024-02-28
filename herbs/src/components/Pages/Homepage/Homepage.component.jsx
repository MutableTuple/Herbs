import React from "react";
// components
import Navbar from "../../Navbar/Navbar.component";
import Hero from "../../Hero/Hero.component";
import MostPopular from "../../MostPopular/MostPopular.component";
import NewArrivals from "../../NewArrivals/NewArrivals.component";
import OurClients from "../../OurClients/OurClients.component";
import Specialities from "../../Specialities/Specialities.component";
import Social from "../../Social/Social.component";
import Footer from "../../Footer/Footer.component";
import Collection from "../../CollectionSpecial/Collection.component";
import AboutUs from "../../AboutUs/AboutUs.component";
//
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <AboutUs />
      <OurClients />
      <Collection />
      <Specialities />
      <MostPopular />
      <Social />
      <Footer />
    </>
  );
};

export default Homepage;
