import React from "react";
import SingleLinks from "./SingleLinks.component";

const linkNames = [
  { id: crypto.randomUUID(), linkName: "Trending" },
  { id: crypto.randomUUID(), linkName: "Sale" },
  { id: crypto.randomUUID(), linkName: "About Us" },
  { id: crypto.randomUUID(), linkName: "Contacts" },
  { id: crypto.randomUUID(), linkName: "Pricing" },
  { id: crypto.randomUUID(), linkName: "Delivery info" },
  { id: crypto.randomUUID(), linkName: "Shipping info" },
];

const FooterLinks = ({ linkName }) => {
  return (
    <div className="col-md-3 col-xl-2 pb-2 pb-md-0">
      <h3 className="h6 text-uppercase d-none d-md-block">{linkName}</h3>
      <a
        className="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none"
        href="#useful"
        data-bs-toggle="collapse"
        role="button"
        aria-expanded="false"
        aria-controls="useful"
        data-show-label="Useful links"
        data-hide-label="Useful links"
        aria-label="Useful links"
      ></a>
      <div className="collapse d-md-block" id="useful" data-bs-parent="#links">
        <ul className="nav flex-column pb-2 pb-md-0">
          {linkNames.map((link) => (
            <SingleLinks name={link.linkName} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
