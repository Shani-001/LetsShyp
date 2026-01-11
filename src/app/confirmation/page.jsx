"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext.jsx";
import Link from "next/link";


export default function PaymentConfirmationPage() {
  const bookingRef = "LS-" + Math.floor(100000 + Math.random() * 900000);
  const router = useRouter();
  const { user } = useAppContext();

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl">✔</span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-green-600">
          Booking Confirmed!
        </h1>

        <p className="text-gray-600 text-sm">
          Your booking has been confirmed successfully.
        </p>


        <div className="bg-gray-100 rounded-xl p-4 text-sm space-y-2">
          <DetailRow label="Booking ID" value={bookingRef} />
          <DetailRow label="Amount Paid" value={`₹${user.price}`} />
          <DetailRow label="Payment Method" value={user.paymentMethod} />
          <DetailRow label="Status" value={user.paymentMethod == "Cash" ? "pending" : "completed"} />
        </div>

    
        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl bg-black text-white font-semibold">
            Track Booking
          </button>

          <button className="w-full py-3 rounded-xl bg-gray-200 font-semibold">
            <Link href="/">New Booking</Link>
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Thank you for choosing us. A confirmation has been sent to your phone.
        </p>
      </div>
    </div>
  );
}


function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

