import React from "react";
import OrderAccordionItem from "./OrdersAccordionItem.component";
import OrdersPagination from "./OrdersPagination.component";
const OrderProduct = () => {
  return (
    <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
      <div className="d-flex align-items-center mb-4">
        <h1 className="h2 mb-0">Orders</h1>
        <select className="form-select ms-auto" style={{ maxWidth: "200px" }}>
          <option value="All time">For all time</option>
          <option value="Last week">Last week</option>
          <option value="Last month">Last month</option>
          <option value="Last month">Last month</option>
          <option value="In progress">In progress</option>
          <option value="Canceled">Canceled</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <div className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <div className="card-body pb-4">
          <div className="accordion accordion-alt accordion-orders">
            <OrderAccordionItem />
            <OrderAccordionItem />
            <OrderAccordionItem />
            <OrderAccordionItem />
          </div>
          <OrdersPagination />
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
