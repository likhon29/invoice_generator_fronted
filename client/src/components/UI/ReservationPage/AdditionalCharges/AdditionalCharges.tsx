"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PiCurrencyDollarLight } from "react-icons/pi";
const AdditionalCharges = ({
  setAdditionalCharges,
}: {
  setAdditionalCharges: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const additionalCharges = {
    option1: false,
    option2: false,
    option3: false,
  };

  const selectedCharges = watch("additionalCharges");

  useEffect(() => {
    setAdditionalCharges(selectedCharges);
  }, [selectedCharges, setAdditionalCharges]);

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
              {...register("additionalCharges.collisonDamageWaiver")}
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
              {...register("additionalCharges.liableInsurance")}
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
              {...register("additionalCharges.rentalTax")}
            />
            <label htmlFor="checkbox" className="text-gray-700">
              Rental Tax
            </label>
          </div>
          <p className="mb-4 flex justify-center items-center">11.5%</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCharges;
