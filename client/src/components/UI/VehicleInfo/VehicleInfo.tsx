"use client";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

import { HiOutlineCalendar, HiOutlineChevronDown } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
import { PiCurrencyDollarLight } from "react-icons/pi";
const VehicleInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Vehicle Information</h4>
      <hr className="w-100 border-primary" />

      <div className="border border-secondary my-6 p-3 rounded-[5px] ">
        <div className="mb-4 flex flex-col">
          <label htmlFor="vehicleType" className="mb-2 text-gray-700">
            Vehicle Type<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Controller
              control={control}
              name="vehicleType"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  id="vehicleType"
                  className={`border ${
                    errors.vehicleType ? "border-red-500" : "border-gray-300"
                  } p-2 rounded w-full appearance-none`}
                >
                  <option value=""></option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                </select>
              )}
            />
            <HiOutlineChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.vehicleType && (
            <span className="text-red-500 text-sm">
              Vehicle Type is required
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="vehicle" className="mb-2 text-gray-700">
            Vehicle<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="vehicle"
              type="text"
              className={`border ${
                errors.vehicle ? "border-red-500" : "border-gray-300"
              } p-2 rounded w-full`}
              {...register("vehicle", { required: true })}
            />
            <HiOutlineChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.vehicle && (
            <span className="text-red-500 text-sm">Vehicle is required</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
