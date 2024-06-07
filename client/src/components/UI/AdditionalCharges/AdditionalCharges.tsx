"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { PiCurrencyDollarLight } from "react-icons/pi";
const AdditionalCharges = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Additional Charges</h4>
      <hr className="w-100 border-primary" />
      <div className="border border-secondary my-6 p-3 rounded-[5px] ">
        <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="mr-2"
              defaultValue={"9"}
              {...register("additionalCharge")}
            />
            <label htmlFor="checkbox" className="text-gray-700">
              Collision Damage Waiver
            </label>
          </div>
          <p className="mb-4 flex justify-center items-center">
            <PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight>{" "}
            9.00
          </p>
        </div>
        <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="mr-2"
              defaultValue={"15"}
              {...register("additionalCharge")}
            />
            <label htmlFor="checkbox" className="text-gray-700">
              Liability Insurance
            </label>
          </div>
          <p className="mb-4 flex justify-center items-center">
            <PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight>{" "}
            15.00
          </p>
        </div>
        <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="mr-2"
              defaultValue={"11.5"}
              {...register("Rental Tax")}
            />
            <label htmlFor="checkbox" className="text-gray-700">
              Liability Insurance
            </label>
          </div>
          <p className="mb-4 flex justify-center items-center">
            <PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight>{" "}
            11.5%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCharges;
