/** @format */

import React, { useState } from "react";
import { generate } from "@pdfme/generator";
import { text, image, barcodes } from "@pdfme/schemas";
import { invoiceTemplate } from "../templates/invoiceTemplate";
import { createInvoiceInputs } from "../utils/invoiceUtils";

const InvoiceGenerator: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const handleGeneratePDF = async () => {
    const inputs = createInvoiceInputs(customerName, billAmount, serviceFee);
    const pdf = await generate({
      template: invoiceTemplate,
      inputs,
      plugins: {
        text,
        image,
        qrcode: barcodes.qrcode,
      },
    });
    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
    setPdfBlob(blob);
  };

  return (
    <div>
      <h2 className='text-5xl font-bold my-10 mx-5'>Generate Invoice</h2>
      <div className='m-5'>
        <label className='form-control w-full max-w-xs'>
          <span className='label-text'>Customer Name</span>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
      </div>
      <div className='m-5'>
        <label className='form-control w-full max-w-xs'>
          <span className='label-text'>Bill Amount</span>
          <input
            type='number'
            placeholder='Enter amount'
            className='input input-bordered w-full max-w-xs'
            value={billAmount}
            onChange={(e) => setBillAmount(Number(e.target.value))}
          />
        </label>
      </div>
      <div className='m-5'>
        <label className='form-control w-full max-w-xs'>
          <span className='label-text'>Service Fee</span>
          <input
            type='number'
            placeholder='Enter fee'
            className='input input-bordered w-full max-w-xs'
            value={serviceFee}
            onChange={(e) => setServiceFee(Number(e.target.value))}
          />
        </label>
      </div>
      <button
        className='btn btn-outline btn-accent mt-4 mx-5'
        onClick={handleGeneratePDF}>
        Generate Invoice PDF
      </button>
      {pdfBlob && (
        <a
          href={URL.createObjectURL(pdfBlob)}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-outline btn-warning my-4'>
          Download PDF
        </a>
      )}
    </div>
  );
};

export default InvoiceGenerator;
