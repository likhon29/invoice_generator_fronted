import React from "react";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import ChargeSummary from "../ChargeSummary/ChargeSummary";
import VehicleInfo from "../VehicleInfo/VehicleInfo";
import AdditionalCharges from "../AdditionalCharges/AdditionalCharges";
import { Controller, useForm } from "react-hook-form";
const ReservationForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
     
    </div>
  );
};

export default ReservationForm;
