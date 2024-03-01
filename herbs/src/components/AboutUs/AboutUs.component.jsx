import React from "react";

const AboutUs = () => {
  return (
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
      <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
        <div className="col-sm-6 col-lg-4">
          <h2 className="display-2">Over ons</h2>
          <p className="fs-xl mb-0">
            Voor Mendu Herbs, een familiebedrijf met zijn oorsprong in India, is
            het gebruik van kruiden niet alleen een bedrijfsactiviteit, maar ook
            een eeuwenoude traditie die van generatie op generatie is
            overgedragen.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/10.png"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/3.png"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/4.png"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center">
          <p className="fs-xl text-center mb-0">
            Onze geschiedenis is diep geworteld in de rijke, vruchtbare gronden
            van India, waar het gebruik van natuurlijke producten zoals Shilajit
            en deel uitmaakt van het dagelijkse leven en welzijn.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/5.png"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/6.png"
            alt="Image"
          />
        </div>
        <div className="col-sm-6 col-lg-4 mb-2 mb-lg-0">
          <img
            className="rounded-5"
            src="./src/assets/img/product/productinfo/7.png"
            alt="Image"
          />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <div className="text-center px-xl-3 px-xxl-5">
            <h3 className="h2 mb-4">
              Bij Mendu Herbs geloven we in de kracht van de natuur om te helen.
            </h3>
            <a className="btn btn-dark rounded-pill" href="#">
              Verken onze collectie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
