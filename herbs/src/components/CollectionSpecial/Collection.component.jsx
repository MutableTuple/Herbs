import React from "react";

const Collection = () => {
  return (
    <section
      className="py-5 bg-size-cover bg-position-center"
      style={{
        backgroundImage: "url(./src/assets/img/landing/shop-2/cta-bg.jpg)",
      }}
    >
      <div className="container py-md-3 py-lg-5 my-xl-3 my-xxl-5">
        <div className="row pt-2 pb-3 py-sm-4 py-md-5">
          <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <h2 className="h1 mb-md-4" data-bs-theme="light">
              Craft Your Custom Macaron Collection
            </h2>
            <p
              className="fs-lg text-dark opacity-70 pb-3 pb-sm-4 mb-3"
              data-bs-theme="light"
            >
              Indecisive about our delightful flavors? Craft your custom box
              with your favorites. Enjoy it alone or share with others—it's all
              up to you!
            </p>
            <a
              className="btn btn-dark rounded-pill"
              href="#"
              data-bs-theme="light"
            >
              Create your own box
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
