"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext.jsx";
import Link from "next/link";
const page = () => {

    const router = useRouter();
    const [typePackage, setTypePackage] = useState("")
    const [size, setSize] = useState("")
    const { user, setUser } = useAppContext();
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const price = user.size * 10 * user.distance + 50;
        setUser({
            ...user,
            typePackage: user.typePackage,
            size: user.size,
            price: price
        })
        router.push("/summary")
    }
    return (
        <>
            <div className={`w-5xl h-5xl p-20 m-auto flex justify-center items-center`}>
                <form onSubmit={handleSubmit} className="backdrop-blur-sm space-y-4 max-w-2xl border-2 p-10 rounded-2xl ">
                    <button type="click"><Link href="/" className="p-3 bg-black text-white rounded-2xl font-bold">Back</Link></button>
                    <div className="text-center font-bold text-2xl ">Fill the Package Details</div>
                    <label htmlFor="itemType" className="font-bold">Type of Package</label>
                    <input
                        type="text"
                        name="itemType"
                        id="itemType"
                        placeholder="Clothes / Documents / Electronics / Food"
                        value={user.typePackage}
                        onChange={(e) => setUser({ ...user, typePackage: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />
                    <label htmlFor="size" className="font-bold">Size/Weight of Package</label>
                    <input
                        type="number"
                        name="size"
                        placeholder="10kg"
                        value={user.size}
                        onChange={(e) => setUser({ ...user, size: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required

                    />

                    <button
                        type="click"
                        className="w-full bg-black text-white py-2 rounded"

                    >
                        Next
                    </button>

                </form>
            </div>
        </>
    )
}

export default page
