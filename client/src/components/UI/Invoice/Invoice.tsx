import React from "react";
import InvoiceLeft from "./InvoiceLeft";
import InvoiceRight from "./InvoiceRight";

const Invoice = ({ total }: { total: any }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mx-6 lg:mx-20 my-16 md:px-20 py-8 border border-black  ">
      <InvoiceLeft />
      <InvoiceRight total={total} />
    </div>
  );
};

export default Invoice;
