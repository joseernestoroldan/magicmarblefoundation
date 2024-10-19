import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { donationCompleted } from "@/actions/donation";

type PaypalButtonProps = {
  totalValue: string;
  invoice: string;
  email: string;
  firstName: string;
  secondName: string;
  address: string;
  telephone: string;
  country: string;
};

const PaypalButton = ({
  totalValue,
  invoice,
  email,
  firstName,
  secondName,
  address,
  telephone,
  country,
}: PaypalButtonProps) => {

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: invoice,
              amount: {
                currency_code: "USD",
                value: totalValue,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        donationCompleted(email, totalValue, firstName, secondName, country, address, telephone,);
      }}
    />
  );
};

export default PaypalButton;
