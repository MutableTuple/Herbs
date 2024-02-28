import React from "react";

const MostPopular = () => {
  return (
    <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
      <h2 className="h1 text-md-center pb-2 pb-sm-3 pb-lg-4">
        Most popular collection
      </h2>
      <div className="row pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-lg-2">
        <div className="col-sm-7 col-md-5 col-lg-6 mb-4 mb-md-0">
          <div
            className="h-100 bg-size-cover bg-position-center rounded-5 me-md-4 me-xl-5"
            style={{
              backgroundImage:
                "url(./src/assets/img/landing/shop-2/popular/preview.jpg)",
            }}
          >
            <div className="ratio ratio-16x9"></div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6 py-md-4">
          <div className="py-xl-2">
            <h3>La Vie En Rose</h3>
            <p>
              These iconic French inspired flavours will delight your senses!
              <br />
              Assorted box of 15 macarons composed of:
            </p>
            <div className="row row-cols-1 row-cols-sm-2 mb-4">
              <ul className="col d-flex flex-column list-unstyled m-0 gap-2 mb-2 mb-sm-0">
                <li className="d-flex align-items-center gap-2">
                  3
                  <div className="text-nowrap">
                    <img
                      src="./src/assets/img/landing/shop-2/popular/th01.png"
                      width="15"
                      alt="Macaron"
                    />
                    <img
                      src="./src/assets/img/landing/shop-2/popular/th01.png"
                      width="15"
                      alt="Macaron"
                    />
                    <img
                      src="./src/assets/img/landing/shop-2/popular/th01.png"
                      width="15"
                      alt="Macaron"
                    />
                  </div>
                  Salted caramel
                </li>
              </ul>
            </div>
            <p className="mb-2">Contains allergens:</p>
            <div className="d-flex gap-4 mb-4">
              <div>
                <svg
                  className="d-block text-body mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  fill="currentColor"
                >
                  <path d="M19.196 6.777c-.607-.954-1.182-1.857-1.234-3.611a.97.97 0 0 0 .64-.91.97.97 0 0 0-.645-.912V.967A.97.97 0 0 0 16.99 0h-6.445a.97.97 0 0 0-.967.967v.377a.97.97 0 0 0-.645.912.97.97 0 0 0 .64.91C9.521 4.92 8.947 5.824 8.34 6.777 7.681 7.812 7 8.881 7 11v8.744A2.26 2.26 0 0 0 9.256 22h9.023a2.26 2.26 0 0 0 2.256-2.256V11c0-2.119-.681-3.188-1.34-4.223zM9.9 1.934c.178 0 .322-.144.322-.322V.967c0-.178.145-.322.322-.322h6.445c.178 0 .322.145.322.322v.322H11.19c-.178 0-.322.144-.322.322s.144.322.322.322h6.445c.178 0 .322.145.322.322s-.145.322-.322.322H9.9c-.178 0-.322-.145-.322-.322s.145-.322.322-.322zm9.99 17.811c0 .889-.723 1.611-1.611 1.611H9.256c-.889 0-1.611-.723-1.611-1.611V11c0-1.931.602-2.876 1.239-3.877.624-.981 1.268-1.993 1.334-3.901h7.102c.066 1.907.709 2.92 1.334 3.901.637 1.001 1.239 1.946 1.239 3.877v8.744z"></path>
                  <path d="M8.611 13.471c-.178 0-.322.144-.322.322v5.951a.97.97 0 0 0 .967.967h9.023a.97.97 0 0 0 .967-.967V11c0-.178-.144-.322-.322-.322-2.66 0-4.007.73-5.31 1.435-1.289.698-2.506 1.358-5.003 1.358zm9.99-2.145v8.418c0 .178-.145.322-.322.322H9.256c-.178 0-.322-.145-.322-.322v-5.632c2.449-.056 3.738-.755 4.988-1.432 1.232-.668 2.399-1.299 4.681-1.354z"></path>
                </svg>
                <span className="fs-sm text-center">Milk</span>
              </div>
            </div>
            <a className="btn btn-dark rounded-pill" href="#">
              Order now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
