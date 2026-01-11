import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/context/AppContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Let's Shyp",
  description: "package delivery made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-screen h-screen antialiased `}
      >
        <AppProvider>
          <div className="md:min-h-screen md:min-w-screen min-h-screen min-w-[1000] text-black bg-white p-1 bg-[url('/background.png')] bg-no-repeat bg-fixed md:bg-left md:bg-cover">
            <Navbar />
            <main className="">
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
