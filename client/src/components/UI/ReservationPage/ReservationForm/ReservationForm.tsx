import React from "react";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import ChargeSummary from "../ChargeSummary/ChargeSummary";
import VehicleInfo from "../VehicleInfo/VehicleInfo";
import AdditionalCharges from "../AdditionalCharges/AdditionalCharges";
import { Controller, useForm } from "react-hook-form";
import { ICar } from "@/types";
const ReservationForm = ({
  setReservation,
}: {
  setReservation: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [customerInfo, setCustomerInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [vehicleInfo, setVehicleInfo] = React.useState<ICar>({
    id: "",
    make: "",
    model: "",
    year: 0,
    type: "",
    seats: 0,
    bags: 0,
    imageURL: "",
    rates: {
      daily: 0,
      weekly: 0,
      hourly: 0,
    },
    features: [""],
  });

  const [additionalCharges, setAdditionalCharges] = React.useState({
    collisonDamageWaiver: false,
    liableInsurance: false,
  });

  const [reservationDetails, setReservationDetails] = React.useState({
    pickUpDate: "",
    pickUpTime: "",
    returnDate: "",
    returnTime: "",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    data.customerInfo = customerInfo;
    data.vehicleInfo = vehicleInfo;
    data.additionalCharges = additionalCharges;
    data.reservationDetails = reservationDetails;
    setReservation(data);
  };

  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)} className=" bg-white  rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ReservationDetails setReservationDetails={setReservationDetails} />
          <CustomerInfo setCustomerInfo={setCustomerInfo} />
          <VehicleInfo setVehicleInfo={setVehicleInfo} />
          <AdditionalCharges setAdditionalCharges={setAdditionalCharges} />
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
