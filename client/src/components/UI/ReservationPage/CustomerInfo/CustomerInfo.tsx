"use client";
import { updateField } from "@/redux/reducers/customerReducer";
import { RootState } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const CustomerInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>();

  const dispatch = useDispatch();

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const phone = watch("phone");

  useEffect(() => {
    dispatch(updateField({ name: "firstName", value: firstName }));
  }, [firstName, dispatch]);

  useEffect(() => {
    dispatch(updateField({ name: "lastName", value: lastName }));
  }, [lastName, dispatch]);

  useEffect(() => {
    dispatch(updateField({ name: "email", value: email }));
  }, [email, dispatch]);

  useEffect(() => {
    dispatch(updateField({ name: "phone", value: phone }));
  }, [phone, dispatch]);

  const { customerInfo } = useSelector((state: any) => state?.customer);

  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Customer Information</h4>
      <hr className="w-100 border-primary" />
      <div className="border border-secondary my-6 p-3 rounded-[5px]">
        <div className="form-control w-full flex flex-col rounded-[5px] ">
          <label className="">
            <p className="text-[14px] text-light">
              First Name <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Brand Name"
              className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-[red]">First Name is required.</p>
            )}
          </label>
        </div>

        <div className="form-control w-full flex flex-col rounded-[5px] ">
          <label className="">
            <p className="text-[14px] text-light">
              Last Name <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Brand Name"
              className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="text-[red]">Last Name is required.</p>
            )}
          </label>
        </div>

        <div className="form-control w-full flex flex-col rounded-[5px] ">
          <label className="">
            <p className="text-[14px] text-light">
              Email <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Brand Name"
              className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-[red]">Email address is required.</p>
            )}
          </label>
        </div>

        <div className="form-control w-full flex flex-col rounded-[5px] ">
          <label className="">
            <p className="text-[14px] text-light">
              Phone <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Brand Name"
              className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-[red]">Phone Number is required.</p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
