import React from "react";
import FooterLinks from "./FooterLinks.component";
import Tnc from "./Tnc.component";
import OurApp from "./OurApp.component";
const FooterSub = () => {
  return (
    <footer className="footer bg-dark position-relative pb-4 pt-md-3 py-lg-4 py-xl-5">
      <div
        className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(255,255,255, .03)" }}
      ></div>
      <div
        className="container position-relative z-2 pt-5 pb-2"
        data-bs-theme="dark"
      >
        <div className="d-sm-flex align-items-end justify-content-between border-bottom mt-2 mt-sm-1 pt-4 pt-sm-5">
          <FooterLinks linkName={"Useful Links"} />
          <FooterLinks linkName={"Sub Links"} />
          <FooterLinks linkName={"Sub Links"} />
          <FooterLinks linkName={"Sub Links"} />
          <FooterLinks linkName={"Sub Links"} />
          <OurApp />
          <Tnc />

          {/* Language / currency switcher */}
          <div className="dropdown mb-4">
            {/* Dropdown content omitted for brevity */}
          </div>
        </div>

        {/* Logo + Socials + Cards */}
        <div className="d-sm-flex align-items-center pt-4">
          {/* Logo and social links omitted for brevity */}
          <img
            className="ms-sm-auto"
            src="./src/assets/img/shop/footer-cards.png"
            width="187"
            alt="Accepted cards"
          />
        </div>
      </div>
      <div className="pt-5 pt-lg-0"></div>
    </footer>
  );
};

export default FooterSub;
