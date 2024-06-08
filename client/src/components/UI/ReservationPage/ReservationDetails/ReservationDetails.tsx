"use client";
import React, { useEffect, useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { HiOutlineCalendar } from "react-icons/hi";
interface IFormInputs {
  reservationId: string;
  pickupDate: Date;
  returnDate: Date;
  discount: string;
  duration: string;
}

const ReservationDetails = ({
  setReservationDetails,
}: {
  setReservationDetails: any;
}) => {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useForm<IFormInputs>();

  const [durationValue, setDurationValue] = useState<string>("");

  const reservationId = watch("reservationId");
  const pickupDate = watch("pickupDate");
  const returnDate = watch("returnDate");
  const duration = watch("duration");
  const discount = watch("discount");

  const handleMinDate = (selectedDate: Date): Date => {
    if (pickupDate && selectedDate < pickupDate) {
      return pickupDate; // Enforce minimum date as pick-up date
    }
    return selectedDate; // Allow any date otherwise
  };

  useEffect(() => {
    const calculateDuration = () => {
      if (pickupDate && returnDate) {
        const diffTime = Math.abs(returnDate.getTime() - pickupDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      }
      return 0;
    };
    const duration = calculateDuration();
    if (duration) {
      setDurationValue(duration.toString());
    }
  }, [pickupDate, returnDate]);

  // calculation from pickup date and return date as 1 week 3 days

  const [weeks, setWeeks] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  useEffect(() => {
    const calculateDuration = () => {
      if (pickupDate && returnDate) {
        const diffTime = Math.abs(returnDate.getTime() - pickupDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;
        setWeeks(weeks);
        setDays(days);

        // calculate hour as well
        // const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
        // const hours = diffHours % 24;

        return `${weeks} week ${days} days`;
      }
      return "";
    };
    const duration = calculateDuration();
    if (duration) {
      setDurationValue(duration);
    }
  }, [pickupDate, returnDate]);

  useEffect(() => {
    setReservationDetails({
      reservationId,
      pickupDate,
      returnDate,
      discount,
      duration: {
        weeks: weeks,
        days: days,
        hours: 0,
      },
    });
  }, [
    reservationId,
    pickupDate,
    returnDate,
    discount,
    durationValue,
    setReservationDetails,
    weeks,
    days,
  ]);

  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Reservation Details</h4>
      <hr className="w-full border-primary" />
      <div className="border border-secondary my-6 p-3 rounded-[5px]">
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
            {errors.reservationId && <p className="text-[red]">Pickup Date</p>}
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
                  minDate={handleMinDate(new Date())}
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
          {/* return date cannot select before pickupdate */}

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
                  minDate={handleMinDate(pickupDate)}
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
            // placeholder="1 week 1 day"
            readOnly
            value={durationValue && `${durationValue} `}
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
      </div>
    </div>
  );
};

export default ReservationDetails;
