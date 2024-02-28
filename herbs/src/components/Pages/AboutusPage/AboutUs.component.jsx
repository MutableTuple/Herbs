import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import AboutUSHeader from "./AboutUSHeader.component";
import ImageSection from "./ImageSection.component";
import Approach from "./Approach.component";
import KeyToSuccess from "./KeyToSuccess.component";
import Clients from "./Clients.component";
import Services from "./Services.component";
import Footer from "../../Footer/Footer.component";
const AboutUs = () => {
  return (
    <>
      <Navbar />;
      <AboutUSHeader />
      <ImageSection />
      <Approach />
      <KeyToSuccess />
      <Clients />
      <Services />
      <Footer />
    </>
  );
};

export default AboutUs;
