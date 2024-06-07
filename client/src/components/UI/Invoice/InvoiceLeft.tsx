import React from "react";
import logo from "@/assets/images/logo/logo.png";
import Image from "next/image";
import assets from "@/assets";

const InvoiceLeft = () => {
  return (
    <div className="md:w-1/2">
      <div className="flex gap-4 mb-4">
        <div>
          <Image
            src={assets?.images?.logo}
            alt="logo"
            className="w-36 ml-12 mb-8"
          />
          <h2 className="font-bold text-lg">RENTER INFO</h2>
          <div className="leading-tight">
            <p>Shihab Ahmed</p>
            <p>test@gmail.com</p>
            <p>PH: 05195469</p>
          </div>
        </div>
        <div className="leading-normal">
          <p>CH Car Place Inc</p>
          <p>162 Bergen st</p>
          <p>Brooklyn, NY 11213</p>
          <p>PH#</p>
          <br />
          <p>Monday 9:00 AM-6:00 PM</p>
          <p>Tuesday 9:00 AM-6:00 PM</p>
          <p>Wednesday 9:00 AM-6:00 PM</p>
          <p>Thursday 9:00 AM-6:00 PM</p>
          <p>Friday 9:00 AM-6:00 PM</p>
          <p>Saturday 9:00 AM-6:00 PM</p>
          <p>Sunday 9:00 AM-6:00 PM</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-4">
          ADDITIONAL AUTHORIZED DRIVER(S)
        </h2>
        <h2 className="font-bold text-lg">UNIT DETAILS</h2>
        <p>Unit: NISSAN ROGUE BLACK</p>
        <p>Make & Model: NISSAN ROGUE BLACK</p>
        <br />
        <p>BILL TO:</p>
        <p>Payment Type: Unpaid</p>
        <p>AUTH: $0.00</p>
        <br />
        <p>Referral:</p>
        <p>NOTICE: Collision Insurance (CDW)- $7 per day</p>
        <p>
          Limits liability of damages to one&apos;s own vehicle up to $100 in
          event of an accident,
        </p>
        <p>
          by waiving this coverage renter agrees to be hold liable for damages
          up to the entire value of the vehicle.
        </p>
        <br />
        <div className="flex items-center justify-around">
          <p>Accept</p>
          <p>Reject</p>
        </div>
        <br />
        <p>
          Rental service may be refused anyone when done in the best interest of
          the renting company or customer
        </p>
        <p>
          - Rates do not include gasoline. - Reserves the right to collect
          deposit covering estimated rental charges.
        </p>
      </div>
    </div>
  );
};

export default InvoiceLeft;
