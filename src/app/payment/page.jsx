"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext.jsx";

export default function MockPaymentPage() {
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAppContext();
  const router = useRouter();
  const handlePay = () => {
    setLoading(true);

    setUser({
      ...user,
      paymentMethod: method
    })
    setTimeout(() => {
      setLoading(false);
      alert("✅ Payment Successful!!!!");
      router.push("/confirmation");

    }, 1500);
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Choose Payment Method
        </h2>

        <PaymentOption
          label="Google Pay"
          value="gpay"
          selected={method}
          onSelect={setMethod}
        />

        <PaymentOption
          label="PhonePe"
          value="phonepe"
          selected={method}
          onSelect={setMethod}
        />

        <PaymentOption
          label="Paytm"
          value="paytm"
          selected={method}
          onSelect={setMethod}
        />

        <PaymentOption
          label="Credit / Debit Card"
          value="card"
          selected={method}
          onSelect={setMethod}
        />
        <PaymentOption
          label="Net Banking"
          value="netbanking"
          selected={method}
          onSelect={setMethod}
        />



        <button
          disabled={!method || loading}
          onClick={handlePay}
          className="w-full py-3 rounded-xl font-semibold
                     bg-black text-white disabled:bg-gray-300"
        >
          {loading ? "Processing payment..." : "Pay Now"}
        </button>

        <p className="text-xs text-center text-gray-500">
          This is a mock payment screen. No real transaction.
        </p>
      </div>
    </div>
  );
}


function PaymentOption({ label, value, selected, onSelect }) {
  const isActive = selected === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`w-full flex items-center justify-between
                  border rounded-xl px-4 py-3 text-sm
                  ${isActive
          ? "border-black bg-gray-100"
          : "border-gray-200"
        }`}
    >
      <span>{label}</span>
      {isActive && <span>✔</span>}
    </button>
  );
}
