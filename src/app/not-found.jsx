import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-50">
      <p className="mt-4 text-lg text-gray-600">
       <Image src='/404.png' alt='404' width={500} height={500}></Image>
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-xl bg-black text-white font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}
