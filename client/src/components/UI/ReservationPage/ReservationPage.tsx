"use client";
import React, { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Invoice from "../Invoice/Invoice";
import ReservationForm from "./ReservationForm/ReservationForm";
import ChargeSummary from "./ChargeSummary/ChargeSummary";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

const ReservationPage = () => {
  const [reservation, setReservation] = React.useState({
    customerInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    vehicleInfo: {
      id: "",
      make: "",
      model: "",
      year: 0,
      type: "",
      seats: 0,
      bags: 0,
      imageURL: "",
      rates: {
        daily: 0,
        weekly: 0,
        hourly: 0,
      },
      features: [""],
    },
    additionalCharges: {
      collisonDamageWaiver: false,
      liableInsurance: false,
    },
    reservationDetails: {
      pickUpDate: "",
      pickUpTime: "",
      returnDate: "",
      returnTime: "",
    },
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const contentRef = React.useRef(null);
  const handleDownloadPdf = async () => {
    setIsDownloading(true);

    try {
      const input = contentRef.current;
      const canvas = await html2canvas(input as unknown as HTMLElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save("downloaded-page.pdf"); // Custom filename
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Handle errors gracefully (e.g., display error message to user)
    } finally {
      setIsDownloading(false);
    }
  };

  const { customerInfo } = useSelector((state: any) => state?.customer);
  console.log(customerInfo);

  return (
    <div className=" min-h-min">
      <div className="flex justify-between items-center lg:my-3">
        <h3 className="text-[24px] font-semibold">Reservation</h3>
        <button
          onClick={handleDownloadPdf}
          disabled={isDownloading}
          className="px-4 py-3 text-sm font-semibold rounded-md bg-[#5D5CFF] text-white"
        >
          {isDownloading ? "Downloading..." : " Print/Download"}
        </button>
      </div>
      <div className="grid lg:grid-cols-[7fr,5fr] gap-5 items-start">
        <ReservationForm setReservation={setReservation} />
        <ChargeSummary reservation={reservation} />
      </div>

      <div ref={contentRef}>
        <Invoice />
      </div>
    </div>
  );
};

export default ReservationPage;
