import React, { useEffect, useState } from "react";
import { HiOutlineCalendar, HiOutlineChevronDown } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
const ChargeSummary = ({
  additionalCharges,
  reservationDetails,
  vehicleInfo,
}: {
  additionalCharges: any;
  reservationDetails: any;
  vehicleInfo: any;
}) => {
  // filter by true value of additional charges
  const totalCalculation = () => {
    // Calculate total hourly cost
    const totalHourlyCost =
      reservationDetails?.duration?.hours * vehicleInfo?.rates?.hourly;

    // Check if hourly cost exceeds daily rate
    if (totalHourlyCost > vehicleInfo?.rates?.daily) {
      // Charge daily rate if hourly cost is higher

      return (
        reservationDetails?.duration?.days * vehicleInfo?.rates?.daily +
        reservationDetails?.duration?.weeks * vehicleInfo?.rates?.weekly +
        vehicleInfo?.rates?.daily
      );
    } else {
      // Otherwise, use actual hourly cost
      return (
        reservationDetails?.duration?.days * vehicleInfo?.rates?.daily +
        reservationDetails?.duration?.weeks * vehicleInfo?.rates?.weekly +
        totalHourlyCost
      );
    }
  };

  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Charge Summary</h4>
      <hr className="w-100 border-primary" />

      <div className="border border-primary my-6 p-3 rounded-[5px] bg-secondary">
        <table className="table-auto  w-full">
          <thead className="border-2 border-x-0 text-left border-t-0 border-purple-700">
            <tr className="">
              <th className="py-2 px-4 " colSpan={2}>
                Charge
              </th>
              <th className="py-2 px-4 ms-3">Unit</th>
              <th className="py-2 px-4 ">Rate</th>
              <th className="py-2 px-4 ">Total</th>
            </tr>
          </thead>
          <tbody>
            {reservationDetails?.duration?.days > 0 && (
              <tr>
                <td className="py-2 px-4 border" colSpan={2}>
                  Daily
                </td>
                <td className="py-2 px-4 border ms-3">
                  {reservationDetails?.duration?.days}
                </td>
                <td className="py-2 px-4 border">
                  ${vehicleInfo?.rates?.daily}
                </td>
                <td className="py-2 px-4 border">
                  $
                  {reservationDetails?.duration?.days *
                    vehicleInfo?.rates?.daily}
                </td>
              </tr>
            )}

            {reservationDetails?.duration?.weeks > 0 && (
              <tr>
                <td className="py-2 px-4 border" colSpan={2}>
                  Weekly
                </td>
                <td className="py-2 px-4 border ms-3">
                  {reservationDetails?.duration?.weeks}
                </td>
                <td className="py-2 px-4 border">
                  ${vehicleInfo?.rates?.daily}
                </td>
                <td className="py-2 px-4 border">
                  $
                  {reservationDetails?.duration?.weeks *
                    vehicleInfo?.rates?.weekly}
                </td>
              </tr>
            )}
            {reservationDetails?.duration?.hours > 0 && (
              <tr>
                <td className="py-2 px-4 border" colSpan={2}>
                  Hourly
                </td>
                <td className="py-2 px-4 border ms-3">
                  {reservationDetails?.duration?.hours}
                </td>
                <td className="py-2 px-4 border">
                  {vehicleInfo?.rates?.daily &&
                    `$ + {vehicleInfo?.rates?.daily}`}
                </td>
                <td className="py-2 px-4 border">
                  $
                  {reservationDetails?.duration?.hours *
                    vehicleInfo?.rates?.daily}
                </td>
              </tr>
            )}

            {additionalCharges != null &&
              Object.keys(additionalCharges).map((key, index) => {
                if (additionalCharges[key]) {
                  return (
                    <tr key={index}>
                      <td className="py-2 px-4 border" colSpan={3}>
                        {key}
                      </td>

                      <td className="py-2 px-4 border">$9.00</td>
                      <td className="py-2 px-4 border">$9.00</td>
                    </tr>
                  );
                }
              })}
            {/* <tr>
              <td className="py-2 px-4 border" colSpan={3}>
                Collision Damage Waiver
              </td>

              <td className="py-2 px-4 border">$9.00</td>
              <td className="py-2 px-4 border">$9.00</td>
            </tr>
            <tr className="font-bold">
              <td className="py-2 pt-5 px-4 border" colSpan={4}>
                Total
              </td>
              <td className="py-2 px-4 pt-5 border">$498.00</td>
            </tr> */}
            {/* Add more rows as needed */}

            {totalCalculation() > 0 ? (
              <tr className="font-bold">
                <td className="py-2 pt-5 px-4 border" colSpan={4}>
                  Total
                </td>
                <td className="py-2 px-4 pt-5 border">${totalCalculation()}</td>
              </tr>
            ) : (
              <tr className="text-light text-center">
                <td className="py-10  px-4 border" colSpan={6}>
                  No Data Added
                </td>
              </tr>
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargeSummary;
