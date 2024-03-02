import React from "react";
import Navbar from "../../Navbar/Navbar.component";
import Footer from "../../Footer/Footer.component";
import TncText from "./TncText.component";
function Tnc() {
  return (
    <>
      <Navbar />
      <section className="container py-5 mb-lg-2 mt-lg-3 my-xl-4 my-xxl-5">
        <div className="d-md-flex align-items-center justify-content-between pt-2 pt-sm-3 pb-3 mt-md-3 mb-3 mb-lg-4">
          <div className="d-flex align-items-center mb-4 mb-md-0">
            <h2 className="h1 mb-0">Terms &amp; Conditions</h2>
          </div>
        </div>
        <div className="tab-content border-top border-bottom mb-3 mb-sm-4 mb-lg-5">
          {/* Day 1 tab */}
          <div
            className="tab-pane fade show active"
            id="dayOne"
            role="tabpanel"
          >
            <TncText />
            <TncText />

            <hr />
            {/* Repeat the above structure for other events */}
          </div>
          {/* Day 2 tab */}
          <div className="tab-pane fade" id="dayTwo" role="tabpanel">
            {/* Similar structure as Day 1 */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Tnc;
