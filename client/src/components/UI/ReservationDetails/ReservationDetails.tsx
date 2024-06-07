"use client";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import { HiOutlineCalendar } from "react-icons/hi";
interface IFormInputs {
  reservationId: string;
  pickupDate: Date;
  returnDate: Date;
  discount: string;
  duration: string;
}

const ReservationDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    defaultValues: {
      reservationId: "",

      discount: "",
      duration: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Reservation Details</h4>
      <hr className="w-full border-primary" />
      <div className="border border-secondary my-6 p-3 rounded-[5px]">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="form-control w-full flex flex-col rounded-[5px] ">
            <label className="">
              <p className="text-[14px] text-light">
                Reservation ID <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                id="reservationId"
                type="text"
                placeholder=""
                className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
                {...register("reservationId", { required: true })}
              />
              {errors.reservationId && (
                <p className="text-[red]">Pickup Date</p>
              )}
            </label>
          </div>

          <div className="mb-4 flex w-full flex-col">
            <label htmlFor="pickupDate" className="mb-2 text-gray-700">
              Pickup Date<span className="text-red-500">*</span>
            </label>
            <div className="relative border  w-full">
              <Controller
                control={control}
                name="pickupDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    className={`relative ${
                      errors.pickupDate ? "border-red-500" : "border-gray-300"
                    } p-2 rounded w-[395px]`}
                    placeholderText="Select Date and Time"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              <HiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {errors.pickupDate && (
              <span className="text-red-500 text-sm">
                Pickup Date is required
              </span>
            )}
          </div>

          <div className="mb-4 relative w-full flex-col">
            <label htmlFor="returnDate" className="mb-2 text-gray-700">
              Return Date<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mt-2 border">
              <Controller
                control={control}
                name="returnDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    className={`${
                      errors.returnDate ? "border-red-500" : ""
                    } p-2 rounded w-[395px]`}
                    placeholderText="Select Date and Time"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              <HiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {errors.returnDate && (
              <span className="text-red-500 text-sm">
                Return Date is required
              </span>
            )}
          </div>

          <div className="mb-4 flex justify-between items-center ">
            <label htmlFor="duration" className="mb-2 text-gray-700">
              Duration
            </label>
            <input
              id="duration"
              type="text"
              placeholder="1 week 1 day"
              readOnly
              className="border border-gray-300 p-2 rounded"
              {...register("duration")}
            />
          </div>

          <div className="form-control w-full flex flex-col rounded-[5px] ">
            <label className="">
              <p className="text-[14px] text-light">
                Discount <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
                {...register("discount", { required: true })}
              />
              {errors.discount && (
                <p className="text-[red]">Product Brand is required.</p>
              )}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationDetails;
