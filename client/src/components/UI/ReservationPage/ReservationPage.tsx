"use client";
import React, { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Invoice from "../Invoice/Invoice";
import ReservationForm from "./ReservationForm/ReservationForm";
import ReservationDetails from "./ReservationDetails/ReservationDetails";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import VehicleInfo from "./VehicleInfo/VehicleInfo";
import AdditionalCharges from "./AdditionalCharges/AdditionalCharges";
import ChargeSummary from "./ChargeSummary/ChargeSummary";
import { useForm } from "react-hook-form";

const ReservationPage = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [vehicleInfo, setVehicleInfo] = useState({});

  const [reservationDetails, setReservationDetails] = useState({
    reservation_id: "",
    pickupDate: Date.now(),
    returnDate: Date.now(),
    duration: {
      weeks: 0,
      days: 0,
      hours: 0,
    },
    discount: 0,
  });

  const [additionalCharges, setAdditionalCharges] = useState({
    collisionDamageWaiver: false,
    personalAccidentInsurance: false,
    roadsideAssistance: false,
  });

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
      <div className="grid lg:grid-cols-[7fr,5fr] gap-5 items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-white  rounded-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ReservationDetails setReservationDetails={setReservationDetails} />
            <CustomerInfo setCustomerInfo={setCustomerInfo} />
            <VehicleInfo setVehicleInfo={setVehicleInfo} />
            <AdditionalCharges setAdditionalCharges={setAdditionalCharges} />
          </div>
        </form>
        <ChargeSummary
          additionalCharges={additionalCharges}
          vehicleInfo={vehicleInfo}
          reservationDetails={reservationDetails}
        />
      </div>

      <div style={{ position: "absolute", top: 0, overflow: "hidden" }}>
        <div
          className="absolute left-[1000px] overflow-x-hidden"
          ref={contentRef}
        >
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
