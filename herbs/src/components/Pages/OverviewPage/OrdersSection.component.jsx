import React from "react";

const OrdersSection = () => {
  return (
    <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
      <div className="card-body">
        <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
          <i className="ai-cart text-primary lead pe-1 me-2"></i>
          <h2 className="h4 mb-0">Orders</h2>
          <a
            className="btn btn-sm btn-secondary ms-auto"
            href="account-orders.html"
          >
            View all
          </a>
        </div>

        {/* Orders accordion */}
        <div className="accordion accordion-alt accordion-orders" id="orders">
          {/* Order One */}
          <div className="accordion-item border-top mb-0">
            <div className="accordion-header">
              <a
                className="accordion-button d-flex fs-4 fw-normal text-decoration-none py-3 collapsed"
                href="#orderOne"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="orderOne"
              >
                <div
                  className="d-flex justify-content-between w-100"
                  style={{ maxWidth: "440px" }}
                >
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary">
                      #78A6431D409
                    </div>
                    <span className="badge bg-info bg-opacity-10 text-info fs-xs">
                      In progress
                    </span>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="d-none d-sm-block fs-sm text-body-secondary mb-2">
                      Order date
                    </div>
                    <div className="d-sm-none fs-sm text-body-secondary mb-2">
                      Date
                    </div>
                    <div className="fs-sm fw-medium text-dark">
                      Jan 27, 2023
                    </div>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary mb-2">Total</div>
                    <div className="fs-sm fw-medium text-dark">$16.00</div>
                  </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex ms-auto">
                  <div className="mx-1">
                    <img
                      src="./src/assets/img/account/orders/01.png"
                      width="48"
                      alt="Product"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div
              className="accordion-collapse collapse"
              id="orderOne"
              data-bs-parent="#orders"
            >
              <div className="accordion-body">
                <div className="table-responsive pt-1">
                  <table
                    className="table align-middle w-100"
                    style={{ minWidth: "450px" }}
                  >
                    <tbody>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <a
                              className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3"
                              href="shop-single.html"
                            >
                              <img
                                src="./src/assets/img/shop/cart/01.png"
                                width="110"
                                alt="Product"
                              />
                            </a>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <a href="shop-single.html">
                                  Candle in concrete bowl
                                </a>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color:{" "}
                                <span className="text-dark fw-medium">
                                  Gray night
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">
                            Quantity
                          </div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">
                            Price
                          </div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">
                            Total
                          </div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-secondary rounded-1 p-4 my-2">
                  <div className="row">
                    <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">
                        Payment:
                      </div>
                      <div className="fs-sm">Upon the delivery</div>
                      <a className="btn btn-link py-1 px-0 mt-2" href="#">
                        <i className="ai-time me-2 ms-n1"></i>
                        Order history
                      </a>
                    </div>
                    <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">
                        Delivery address:
                      </div>
                      <div className="fs-sm">
                        401 Magnetic Drive Unit 2,
                        <br />
                        Toronto, Ontario, M3J 3H9, Canada
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-3 text-md-end">
                      <button
                        className="btn btn-sm btn-outline-primary w-100 w-md-auto"
                        type="button"
                      >
                        <i className="ai-star me-2 ms-n1"></i>
                        Leave a review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;
