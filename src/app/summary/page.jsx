"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext.jsx";
import Link from "next/link";
const page = () => {

    const router = useRouter();
    const { user, setUser } = useAppContext();
    const [pickupaddress, setPickupaddress] = useState(user.pickupAddress.Flatinfo + ", " + user.pickupAddress.AreaInfo + ", " + user.pickupAddress.CityStateInfo + ", " + user.pickupAddress.Pincode);
    const [dropaddress, setDropaddress] = useState(user.dropAddress.Flatinfo + ", " + user.dropAddress.AreaInfo + ", " + user.dropAddress.CityStateInfo + ", " + user.dropAddress.Pincode);

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser({
            ...user,
            typePackage: user.typePackage,
            size: user.size,

        })
        router.push("/personal")
    }
    return (
        <>
            <div className={`w-5xl h-5xl p-20 m-auto flex justify-center items-center`}>
                <form onSubmit={handleSubmit} className="backdrop-blur-sm space-y-4 max-w-2xl border-2 p-10 rounded-2xl ">
                    <button type="click"><Link href="/packageDetail" className="p-3 bg-black text-white rounded-2xl font-bold">Back</Link></button>
                    <div className="text-center font-extrabold text-2xl">Summary</div>
                    <label htmlFor="PickupAddress" className="font-bold">Pickup Address</label>
                    <input
                        type="text"
                        name="PickupAddress"
                        id="PickupAddress"
                        placeholder="Pickup Address"
                        value={pickupaddress === ", , , " ? "pickup Address" : pickupaddress}
                        onChange={(e) => (setPickupaddress(e.target.value))}
                        className="w-full border px-3 py-2 rounded"
                        disabled
                        required
                        maxLength={100}

                    />
                    <label htmlFor="dropAddress" className="font-bold">Drop Address</label>
                    <input
                        type="text"
                        name="dropAddress"
                        placeholder="Drop Address"
                        value={dropaddress === ", , , " ? "Drop Address" : dropaddress}
                        onChange={(e) => (setDropaddress(e.target.value))}
                        className="w-full border px-3 py-2 rounded"
                        required
                        disabled
                        maxLength={100}

                    />
                    <div><button className="bg-black text-white p-2 rounded-2xl"><Link href="/">Edit Address</Link></button></div>
                    <label htmlFor="itemType" className="font-bold">Type of Package</label>
                    <input
                        type="text"
                        name="itemType"
                        id="itemType"
                        placeholder="Clothes / Documents / Electronics / Food"
                        value={user.typePackage}
                        onChange={(e) => setUser({ ...user, typePackage: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        disabled
                        required

                    />
                    <label htmlFor="size" className="font-bold">Size/Weight of Package</label>
                    <input
                        type="text"
                        name="size"
                        placeholder="10kg"
                        value={user.size}
                        onChange={(e) => setUser({ ...user, size: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        disabled
                        required

                    />
                    <div><button className="bg-black text-white p-2 rounded-2xl"><Link href="/packageDetail">Edit Package Details</Link></button></div>
                    <label htmlFor="size" className="font-bold">Price To Pay</label>
                    <input
                        type="text"
                        name="size"
                        placeholder="10kg"
                        value={user.price}
                        disabled

                        className="w-full border px-3 py-2 rounded"
                        required
                    />

                    <button
                        type="click"
                        className="w-full bg-black text-white py-2 rounded"

                    >
                        Next
                    </button>

                    <div className="border-2 p-3 rounded-lg bg-gray-100 text-black">
                        Price Calculation:-<br />
                        1)Weight of Package:1kg=Rs.10<br />
                        2)Distance :1km=Rs.10<br />
                        3)Additional Charges: Rs.50<br />
                        4)Final Price= Distance * Weight of Package + Additional Charges
                    </div>
                </form>
            </div>
        </>
    )
}

export default page
