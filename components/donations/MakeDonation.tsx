"use client";

import { useState } from "react";
import { DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Loader2 } from "lucide-react";

export default function MakeDonation() {
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showPayPal, setShowPayPal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentInitiation = (amount: number) => {
    setSelectedAmount(amount);
    setShowPayPal(true);
    setIsProcessing(true);
  };

  const handleCustomPayment = () => {
    const amount = Number.parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      handlePaymentInitiation(amount);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-2 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-white mb-2">Donate to this project</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
        {[10, 20, 50, 100].map((amount) => (
          <button
            key={amount}
            onClick={() => handlePaymentInitiation(amount)}
            className="border border-white rounded-full text-sm w-[100px] bg-transparent text-white py-2 hover:bg-white hover:text-blue-900 transition-colors mx-auto"
            disabled={isProcessing}>
            {isProcessing && selectedAmount === amount ? (
              <Loader2 className="h-4 w-4 animate-spin mx-auto" />
            ) : (
              `$${amount}`
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full">
        <div className="relative w-full sm:w-2/3">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="number"
            min="1"
            step="0.01"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Custom amount"
            className="pl-10 bg-transparent text-white border-white rounded-full"
            disabled={isProcessing}
          />
        </div>
        <button
          onClick={handleCustomPayment}
          disabled={
            !customAmount ||
            Number.parseFloat(customAmount) <= 0 ||
            isProcessing
          }
          className="border border-white rounded-full w-[100px] text-sm bg-transparent text-white py-2 hover:bg-white hover:text-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {isProcessing ? (
            <Loader2 className="h-4 w-4 animate-spin mx-auto" />
          ) : (
            "Donate"
          )}
        </button>
      </div>

      {showPayPal && (
        <div className="w-full mt-4">
          <PayPalScriptProvider
            options={{
              clientId:
                "AexCIXsRYCnf0s8wmXEQ37db_xsRg0N1h3O6ZTeFunn2HOZxL2qVYxqQyXeQbWyXmqFh4ZNjwIjUUtUb",
            }}>
            <PayPalButtons
              style={{
                layout: "vertical",
                color: "white",
                shape: "pill",
                label: "donate",
                height: 40,
              }}
            createOrder={(data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "invoice",
                      amount: {
                        currency_code: "USD",
                        value: selectedAmount.toString(),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then((details) => {
                  alert(`Transaction completed`);
                  setShowPayPal(false);
                  setIsProcessing(false);
                });
              }}
              onError={(err) => {
                console.error("PayPal error:", err);
                setShowPayPal(false);
                setIsProcessing(false);
              }}
              onCancel={() => {
                setShowPayPal(false);
                setIsProcessing(false);
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}

      <p className="text-xs text-white text-center mt-4">
        Secure payments processed by PayPal. You will be redirected to complete
        your donation.
      </p>
    </div>
  );
}
