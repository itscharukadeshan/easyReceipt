/** @format */
import { Template, BLANK_PDF } from "@pdfme/common";

export const invoiceTemplate: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    [
      {
        name: "invoiceTitle",
        type: "text",
        position: { x: 10, y: 10 },
        width: 200,
        height: 30,
        style: { fontSize: 24, fontWeight: "bold" },
      },
      {
        name: "customerName",
        type: "text",
        position: { x: 10, y: 50 },
        width: 200,
        height: 20,
        style: { fontSize: 14, fontWeight: "bold" },
      },
      {
        name: "billAmountLabel",
        type: "text",
        position: { x: 10, y: 80 },
        width: 100,
        height: 20,
        style: { fontSize: 14, fontWeight: "bold" },
      },
      {
        name: "billAmount",
        type: "text",
        position: { x: 120, y: 80 },
        width: 100,
        height: 20,
        style: { fontSize: 14 },
      },
      {
        name: "serviceFeeLabel",
        type: "text",
        position: { x: 10, y: 110 },
        width: 100,
        height: 20,
        style: { fontSize: 14, fontWeight: "bold" },
      },
      {
        name: "serviceFee",
        type: "text",
        position: { x: 120, y: 110 },
        width: 100,
        height: 20,
        style: { fontSize: 14 },
      },
      {
        name: "totalAmountLabel",
        type: "text",
        position: { x: 10, y: 140 },
        width: 100,
        height: 20,
        style: { fontSize: 14, fontWeight: "bold" },
      },
      {
        name: "totalAmount",
        type: "text",
        position: { x: 120, y: 140 },
        width: 100,
        height: 20,
        style: { fontSize: 14, fontWeight: "bold" },
      },
    ],
  ],
};
