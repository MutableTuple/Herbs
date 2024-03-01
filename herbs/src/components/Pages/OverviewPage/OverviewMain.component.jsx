import React from "react";
import UserProfileCard from "./UserProfileCard.component";
import AddressBillingSection from "./AddressBillingSection.component";
import OrderSection from "./OrdersSection.component";
const OverviewMain = () => {
  return (
    <>
      <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
        <h1 className="h2 mb-4">Overview</h1>
        <UserProfileCard />
        <AddressBillingSection />
        <OrderSection />
      </div>
    </>
  );
};

export default OverviewMain;
