import React from "react";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import ChargeSummary from "../ChargeSummary/ChargeSummary";
import VehicleInfo from "../VehicleInfo/VehicleInfo";
import AdditionalCharges from "../AdditionalCharges/AdditionalCharges";

const ReservationPage = () => {
  return (
    <div className="border border-primary min-h-min">
      <h3 className="text-[24px] font-semibold">Reservation</h3>

      <div className="grid grid-cols-3 gap-2">
        <ReservationDetails />
        <CustomerInfo />
        <ChargeSummary />
        <VehicleInfo />
        <AdditionalCharges />
      </div>
    </div>
  );
};

export default ReservationPage;
