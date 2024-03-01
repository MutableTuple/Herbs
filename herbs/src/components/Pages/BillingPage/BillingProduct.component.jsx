import React from "react";
import PaymentMethodsSection from "./PaymentMethodsSection.component";
import BillingAddressSection from "./BillingAddressSection.component";
const BillingProduct = () => {
  return (
    <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
      <h1 class="h2 mb-4">Billing</h1>
      <PaymentMethodsSection />
      <BillingAddressSection />
    </div>
  );
};

export default BillingProduct;
