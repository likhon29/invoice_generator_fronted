import React from "react";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import ChargeSummary from "../ChargeSummary/ChargeSummary";
import VehicleInfo from "../VehicleInfo/VehicleInfo";
import AdditionalCharges from "../AdditionalCharges/AdditionalCharges";

const ReservationPage = () => {
  return (
    <div className=" min-h-min">
      <div className="flex justify-between items-center lg:my-3">
        <h3 className="text-[24px] font-semibold">Reservation</h3>
        <button className="px-4 py-3 text-sm font-semibold rounded-md bg-[#5D5CFF] text-white">
          Print/Download
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3.5fr,3.5fr,5fr] gap-5">
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
