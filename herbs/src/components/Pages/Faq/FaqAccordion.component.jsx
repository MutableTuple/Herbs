import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import Footer from "../../Footer/Footer.component";
import FaqMain from "./FaqMain.component";
const FaqAccordion = () => {
  return (
    <>
      <Navbar />
      <h1 className="pb-2 pb-sm-3">Frequently Asked Questions - FAQ</h1>
      <FaqMain />
      <Footer />
    </>
  );
};

export default FaqAccordion;
