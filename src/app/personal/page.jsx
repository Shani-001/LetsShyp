"use client"
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SimpleForm() {
    const [isPaying, setIsPaying] = useState(false);
    const { user, setUser } = useAppContext();
    const router = useRouter();
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.phoneNumber || !user.paymentMethod) {
            alert("fill all the details")
            return
        }
        else {
            if (user.name.trim().length < 10 || user.phoneNumber.trim().length < 10 || user.phoneNumber.trim().length > 10) {

                setError(true)
                return
            }

            setUser({
                ...user,
                name: user.name,
                phoneNumber: user.phoneNumber,
                paymentMethod: user.paymentMethod
            })

            setIsPaying(true);

            setTimeout(() => {
                if (user.paymentMethod == "Cash") {
                    alert("✅ Booking Confirmed!");
                    router.push("/confirmation")
                    return
                }
                else {
                    router.push("/payment")
                }
            }, 4000);

        }
    };

    return (
        <>
            <div className={`w-5xl h-5xl p-20 m-auto flex justify-center items-center `}>
                <form onSubmit={handleSubmit} className="backdrop-blur-sm space-y-4 max-w-2xl border-2 p-10 rounded-2xl ">

                    <h2 className="text-xl font-semibold">Checkout</h2>
                    <label htmlFor="FullName">Full Name</label>
                    <input
                        placeholder="Full Name"
                        value={user.name}
                        id="FullName"
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                        className="w-full border rounded-xl px-3 py-2"
                        required
                    />
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                        placeholder="Phone Number"
                        type="number"
                        value={user.phoneNumber}
                        onChange={(e) =>
                            setUser({ ...user, phoneNumber: e.target.value })
                        }
                        id="PhoneNumber"
                        required
                        className="w-full border rounded-xl px-3 py-2"
                    />
                    <label className="text-sm font-medium">
                        Payment Method *
                    </label>

                    <select
                        value={user.paymentMethod}
                        onChange={(e) => setUser({ ...user, paymentMethod: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        <option value="">Select payment method</option>
                        <option value="upi">UPI</option>
                        <option value="card">Credit / Debit Card</option>
                        <option value="netbanking">Net Banking</option>
                        <option value="Cash">Cash </option>
                    </select>

                    {error ? <div className="text-red-600 font-bold font-mono text-center">Please fill all the details correctly</div> : null}

                    <button
                        disabled={isPaying}
                        type="click"
                        onClick={handleSubmit}
                        className="w-full py-3 rounded-xl font-semibold
      bg-black text-white disabled:bg-gray-300"
                    >
                        {isPaying ? "Processing payment..." : "Pay & Place Booking"}
                    </button>

                </form>
            </div>
        </>
    );
}
