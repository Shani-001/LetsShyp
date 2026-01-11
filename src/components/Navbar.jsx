"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 w-full rounded-2xl md:w-screen text-black font-bold relative z-50">
      <div className="w-3xl md:w-screen">
        <div className="flex justify-between md:px-30 items-center h-16">

          <Link href="/" className="flex items-center mx-20 md:mx-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={60}
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-cyan-500">Home</Link>
            <Link href="/about" className="hover:text-cyan-500">About</Link>
            <Link href="/services" className="hover:text-cyan-500">Services</Link>
            <Link href="/contact" className="hover:text-cyan-500">Contact</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-gray-300 transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-3">
          <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} href="/services">Services</Link>
          <Link onClick={() => setIsOpen(false)} href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
