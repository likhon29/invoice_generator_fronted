"use client";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ICar } from "@/types/car";
import Image from "next/image";
const VehicleInfo = ({ setVehicleInfo }: { setVehicleInfo: any }) => {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const [cars, setCars] = useState([]);
  const [filterCar, setFilterCar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedCars = await fetchData(
          `https://exam-server-7c41747804bf.herokuapp.com/carsList`
        );
        if (fetchedCars?.status) {
          setCars(fetchedCars?.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  //  unique types of cars

  const uniqueCarsType = cars
    .map((car: ICar) => car.type)
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );

  // filter product based on user selected  type

  const selectedCarType = watch("vehicleType");

  useEffect(() => {
    const filteredCars = cars.filter(
      (car: ICar) => car.type === selectedCarType
    );
    setFilterCar(filteredCars);
  }, [cars, selectedCarType]);

  const selectedCar = cars.find((car: ICar) => car.id === watch("vehicle"));

  useEffect(() => {
    setVehicleInfo(selectedCar);
  }, [cars, setVehicleInfo, selectedCar]);

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
                  <option value="">Select Vehicle Type</option>
                  {uniqueCarsType?.map((carType: any, index: any) => (
                    <option key={index} value={carType}>
                      {carType}
                    </option>
                  ))}
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
            <Controller
              control={control}
              name="vehicle"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  id="vehicle"
                  className={`border ${
                    errors.vehicle ? "border-red-500" : "border-gray-300"
                  } p-2 rounded w-full appearance-none`}
                >
                  
                  {filterCar?.length ? (
                    filterCar?.map((car: ICar, index: any) => (
                      <option
                        className="flex items-center justify-between"
                        key={index}
                        value={car.id}
                      >
                        {car.make} {car.model} {car.year}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Select Vehicle
                    </option>
                  )}
                </select>
              )}
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
