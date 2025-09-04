"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
export default function VendorLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) router.push("/vendor");
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] font-inter">
      <div className="px-4 py-3 mb-25 md:mb-0">
         <Header title="Vendor Login" subtitle="Ahmedabad"/>
         <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0">
                         <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                         <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                         <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
                       </div>
         <div className="flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] rounded-2xl shadow-2xl p-8 max-w-md w-full mt-20 md:mt-18  ">
        <div className="text-center mb-6">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-200">Vendor Portal</h2>
          <p className="text-gray-200"></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Email or Phone
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="name@domain.com"
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base  hover:bg-red-700 transition cursor-pointer"
          >
            Login as Vendor
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            href="/vendor-signup"
            className="text-xs sm:text-sm md:text-sm text-gray-400 hover:text-red-500 transition"
          >
            New vendor? Sign up
          </Link>
        </div>
      </div>
      </div>
      </div>
       <footer className="bg-[#091339] py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
     <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .font-inter {
    font-family: 'Inter', sans-serif;
  }
`}</style>
    </div>
  );
}
