import React from "react";
import { HiOutlineCalendar, HiOutlineChevronDown } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
const ChargeSummary = ({
  reservation,
}: {
  reservation: {
    customerInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
    vehicleInfo: {
      id: string;
      make: string;
      model: string;
      year: number;
      type: string;
      seats: number;
      bags: number;
      imageURL: string;
      rates: {
        daily: number;
        weekly: number;
        hourly: number;
      };
      features: string[];
    };
    additionalCharges: {
      collisonDamageWaiver: boolean;
      liableInsurance: boolean;
    };
    reservationDetails: {
      pickUpDate: string;
      pickUpTime: string;
      returnDate: string;
      returnTime: string;
    };
  };
}) => {
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
            <tr>
              <td className="py-2 px-4 border" colSpan={2}>
                Daily
              </td>
              <td className="py-2 px-4 border ms-3">1</td>
              <td className="py-2 px-4 border">$99.00</td>
              <td className="py-2 px-4 border">$99.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border" colSpan={2}>
                Weekly
              </td>
              <td className="py-2 px-4 border">1</td>
              <td className="py-2 px-4 border">$390.00</td>
              <td className="py-2 px-4 border">$390.00</td>
            </tr>
            <tr>
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
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargeSummary;
