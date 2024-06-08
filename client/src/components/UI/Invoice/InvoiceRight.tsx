import React from "react";

const InvoiceRight = ({ total }: { total: any }) => {
  return (
    <div className="md:w-1/2 text-justify">
      <h1 className="md:text-3xl font-bold mb-3">Reservation</h1>
      <h2 className="md:text-xl font-bold mb-2">RA #0121</h2>
      <p className="md:text-lg mb-2">REPAIR ORDER:</p>
      <p className="md:text-lg">CLAIM:</p>
      <p>Date/Time Out: 03/29/2024 AM</p>
      <p>Date/Time In: 03/29/2024 01:33 AM</p>

      <div className="bg-gray-200 p-2 mb-5 mt-2">
        <h2 className="md:text-lg font-bold mb-2">CHARGE SUMMARY</h2>
        <div className="">
          <table className="w-full text-center">
            <thead>
              <tr className="">
                <th className="w-[250px]"></th>
                <th className="">Unit</th>
                <th className="">Price</th>
                <th className="">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="text-start">Hourly</td>
                <td>1</td>
                <td>$0.50</td>
                <td>$0.50</td>
              </tr>
              <tr>
                <td className="text-start">NYS State Tax</td>
                <td></td>
                <td>11.5%</td>
                <td>$0.06</td>
              </tr>
              <tr>
                <td className="text-start">EST TOTAL TIME & MILAGE</td>
                <td></td>
                <td></td>
                <td>$0.56</td>
              </tr>
              <tr>
                <td className="text-start">Discount</td>
                <td></td>
                <td></td>
                <td>$-0.00</td>
              </tr>
              <tr>
                <td className="text-start">Damages</td>
                <td></td>
                <td></td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td className="text-start">Traffic Tickets</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="text-start">TOTAL ESTIMATED CHARGES</td>
                <td></td>
                <td></td>
                <td>$0.56</td>
              </tr>
              <tr>
                <td className="text-start">Renter Payments</td>
                <td></td>
                <td></td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <p>
          Your rental agreement offers, for an additional charge, an optional
          waiver to cover all or a part of your responsibility for damage to or
          loss of the vehicle; Before deciding whether to purchase the walver,
          you may wish to determine whether your own automobile insurance or
          credit card agreement provides you coverage for rental vehicle damage
          or loss and determine the amount of the deductible under your own
          insurance coverage. The purchase of the waiver is not mandatory. The
          waiver is not insurance. I acknowledge that I have received and read a
          copy of this.
        </p>
        <br />
        <p className="mt-4">Renters Signature</p>
        <p className="mb-5 mt-2">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _
        </p>
        <p>Additional Driver 1</p>
        <p className="mb-5 mt-2">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _
        </p>
      </div>
    </div>
  );
};

export default InvoiceRight;
