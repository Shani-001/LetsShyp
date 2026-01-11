"use client"
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SimpleForm() {
    const { user, setUser } = useAppContext();
    const router = useRouter();
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.pickupAddress || !user.dropAddress) {
            alert("fill all the details")
            setError(true)
            return
        }
        else {

            setError(false)
            setUser({
                ...user,
                distance: Math.floor(Math.random() * 10) + 10
            })
            router.push("/packageDetail")
        }
    };

    return (
        <>
            <div className={`w-5xl h-5xl p-20 m-auto flex justify-center items-center`}>
                <form onSubmit={handleSubmit} className="backdrop-blur-sm space-y-4 max-w-2xl border-2 p-10 rounded-2xl ">

                    <div className="text-center font-bold text-2xl">Fill the form for Package Delivery</div>
                    <label htmlFor="PickupAddress" className="font-bold">Pickup Address</label>
                    <input
                        type="text"
                        name="PickupAddress"
                        id="PickupAddress"
                        placeholder="Add Flat no., House no., Building, Company, Apartment"
                        value={user.pickupAddress.Flatinfo}
                        onChange={(e) => setUser({ ...user, pickupAddress: { ...user.pickupAddress, Flatinfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />

                    <input
                        type="text"
                        name="PickupAddress"
                        id="PickupAddress"
                        placeholder="Add Area, Street, Sector, Village"
                        value={user.pickupAddress.AreaInfo}
                        onChange={(e) => setUser({ ...user, pickupAddress: { ...user.pickupAddress, AreaInfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <input
                        type="text"
                        name="PickupAddress"
                        id="PickupAddress"
                        placeholder="Add Town/City and State"
                        value={user.pickupAddress.CityStateInfo}
                        onChange={(e) => setUser({ ...user, pickupAddress: { ...user.pickupAddress, CityStateInfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <input
                        type="number"
                        name="PickupAddress"
                        id="PickupAddress"
                        placeholder="Add pincode"
                        value={user.pickupAddress.Pincode}
                        onChange={(e) => setUser({ ...user, pickupAddress: { ...user.pickupAddress, Pincode: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <label htmlFor="dropAddress" className="font-bold">Drop Address</label>
                    <input
                        type="text"
                        name="dropAddress"
                        placeholder="Add Flat no., House no., Building, Company, Apartment"
                        value={user.dropAddress.Flatinfo}
                        onChange={(e) => setUser({ ...user, dropAddress: { ...user.dropAddress, Flatinfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <input
                        type="text"
                        name="dropAddress"
                        placeholder="Add Area, Street, Sector, Village"
                        value={user.dropAddress.AreaInfo}
                        onChange={(e) => setUser({ ...user, dropAddress: { ...user.dropAddress, AreaInfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <input
                        type="text"
                        name="dropAddress"
                        placeholder="Add Town/City and State"
                        value={user.dropAddress.CityStateInfo}
                        onChange={(e) => setUser({ ...user, dropAddress: { ...user.dropAddress, CityStateInfo: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <input
                        type="number"
                        name="dropAddress"
                        placeholder="Add pincode"
                        value={user.dropAddress.Pincode}
                        onChange={(e) => setUser({ ...user, dropAddress: { ...user.dropAddress, Pincode: e.target.value } })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    {
                        error ? <div className="text-red-600 font-bold font-mono text-center">Fill Full Address</div> : null
                    }
                    <button
                        type="click"
                        className="w-full bg-black text-white py-2 rounded"
                        disabled={!error ? false : true}
                    >
                        Next
                    </button>
                    <div className="border-2 font-bold p-4 rounded-2xl  ">
                        <div>Instruction for filling Address:-</div>
                        <div>1)Add Flat no., House no., Building, Company, Apartment</div>
                        <div>2)Add Area, Street, Sector, Village</div>
                        <div>3)Add Town/City and State</div>
                        <div>4)Add pincode</div>
                    </div>
                </form>
            </div>
        </>
    );
}
