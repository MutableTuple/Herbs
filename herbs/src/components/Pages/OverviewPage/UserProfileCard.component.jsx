import React from "react";

const UserProfileCard = () => {
  return (
    <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
          <i className="ai-user text-primary lead pe-1 me-2"></i>
          <h2 className="h4 mb-0">Basic info</h2>
          <a
            className="btn btn-sm btn-secondary ms-auto"
            href="account-settings.html"
          >
            <i className="ai-edit ms-n1 me-2"></i>
            Edit info
          </a>
        </div>
        <div className="d-md-flex align-items-center">
          <div className="d-sm-flex align-items-center">
            <div
              className="rounded-circle bg-size-cover bg-position-center flex-shrink-0"
              style={{
                width: "80px",
                height: "80px",
                backgroundImage: "url(./src/assets/img/avatar/02.jpg)",
              }}
            ></div>
            <div className="pt-3 pt-sm-0 ps-sm-3">
              <h3 className="h5 mb-2">
                Isabella Bocouse
                <i className="ai-circle-check-filled fs-base text-success ms-2"></i>
              </h3>
              <div className="text-body-secondary fw-medium d-flex flex-wrap flex-sm-nowrap align-items-center">
                <div className="d-flex align-items-center me-3">
                  <i className="ai-mail me-1"></i>
                  email@example.com
                </div>
                <div className="d-flex align-items-center text-nowrap">
                  <i className="ai-map-pin me-1"></i>
                  USA, $
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-100 pt-3 pt-md-0 ms-md-auto"
            style={{ maxWidth: "212px" }}
          >
            <div className="d-flex justify-content-between fs-sm pb-1 mb-2">
              Profile completion
              <strong className="ms-2">62%</strong>
            </div>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "62%" }}
                aria-valuenow="62"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="row py-4 mb-2 mb-sm-3">
          <div className="col-md-6 mb-4 mb-md-0">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td className="border-0 text-body-secondary py-1 px-0">
                    Phone
                  </td>
                  <td className="border-0 text-dark fw-medium py-1 ps-3">
                    +1 234 567 890
                  </td>
                </tr>
                <tr>
                  <td className="border-0 text-body-secondary py-1 px-0">
                    Language
                  </td>
                  <td className="border-0 text-dark fw-medium py-1 ps-3">
                    English
                  </td>
                </tr>
                <tr>
                  <td className="border-0 text-body-secondary py-1 px-0">
                    Gender
                  </td>
                  <td className="border-0 text-dark fw-medium py-1 ps-3">
                    Female
                  </td>
                </tr>
                <tr>
                  <td className="border-0 text-body-secondary py-1 px-0">
                    Communication
                  </td>
                  <td className="border-0 text-dark fw-medium py-1 ps-3">
                    Mobile, email
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 d-md-flex justify-content-end">
            <div
              className="w-100 border rounded-3 p-4"
              style={{ maxWidth: "212px" }}
            >
              <img
                className="d-block mb-2"
                src="./src/assets/img/account/gift-icon.svg"
                width="24"
                alt="Gift icon"
              />
              <h4 className="h5 lh-base mb-0">123 bonuses</h4>
              <p className="fs-sm text-body-secondary mb-0">1 bonus = $1</p>
            </div>
          </div>
        </div>
        <div className="alert alert-info d-flex mb-0" role="alert">
          <i className="ai-circle-info fs-xl"></i>
          <div className="ps-2">
            Fill in the information 100% to receive more suitable offers.
            <a className="alert-link ms-1" href="account-settings.html">
              Go to settings!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileCard;
