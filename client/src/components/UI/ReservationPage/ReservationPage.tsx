"use client";
import React, { useState } from "react";

import CustomerInfo from "./CustomerInfo/CustomerInfo";
import ChargeSummary from "./ChargeSummary/ChargeSummary";
import VehicleInfo from "./VehicleInfo/VehicleInfo";
import AdditionalCharges from "./AdditionalCharges/AdditionalCharges";
import ReservationDetails from "./ReservationDetails/ReservationDetails";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Invoice from "../Invoice/Invoice";

const ReservationPage = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-[3.5fr,3.5fr,5fr] gap-5">
        <ReservationDetails />
        <CustomerInfo />
        <ChargeSummary />
        <VehicleInfo />
        <AdditionalCharges />
      </div>
      <div ref={contentRef}>
        <Invoice />
      </div>
    </div>
  );
};

export default ReservationPage;
