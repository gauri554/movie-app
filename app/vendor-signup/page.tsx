"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
export default function VendorSignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API for signup
    if (form.password === form.confirmPassword) {
      router.push("/vendor"); // redirect to vendor dashboard
    }
  };

  return (
    <div className="min-h-screen bg-[#0C1B4D] font-inter">
      <div className="px-4 py-3 mb-15 md:mb-0">
       <Header title="Vendor:Sign up" subtitle=""/>
         <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0">
                       <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                       <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                       <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
                     </div>
       <div className="flex items-center justify-center">
      <div className=" bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] rounded-2xl shadow-2xl p-6 max-w-md w-full mt-15 md:mt-18">
        <div className="text-center mb-6">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-200">Vendor Signup</h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-sm">Create your vendor account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="vendor@domain.com"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="+91 9876543210"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-sm md:text-sm font-medium text-gray-200 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-1 sm:py-2 px-4 md:py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-xs sm:text-sm md:text-base text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            href="/vendor-login"
            className="text-xs sm:text-sm md:text-sm text-gray-500 hover:text-red-500 transition"
          >
            Already have an account? Login
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
