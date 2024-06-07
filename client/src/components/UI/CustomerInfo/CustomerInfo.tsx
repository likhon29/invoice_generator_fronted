"use client";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  brand: string;
}

const CustomerInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({
    defaultValues: {
      brand: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="border border-">
      <h4 className="text-[18px] font-medium">Customer Information</h4>
      <hr className="w-100 border-primary" />
      <div className="border border-secondary">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="form-control w-full flex flex-col  ">
            <label className="">
              <p className="label-text ">
                Brand <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Brand Name"
                className="input border border-[#DFDFFF] p-2  rounded-[5px] input-bordered w-full my-2 "
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-[red]">Product Brand is required.</p>
              )}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerInfo;
