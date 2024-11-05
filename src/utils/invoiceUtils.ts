/** @format */
export const createInvoiceInputs = (
  customerName: string,
  billAmount: number,
  serviceFee: number
) => {
  const totalAmount = billAmount + serviceFee;
  return [
    {
      customerName,
      billAmount: `$${billAmount.toFixed(2)}`,
      serviceFee: `$${serviceFee.toFixed(2)}`,
      totalAmount: `$${totalAmount.toFixed(2)}`,
    },
  ];
};
