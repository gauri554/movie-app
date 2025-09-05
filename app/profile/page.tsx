"use client";

import { useState } from "react";
import {
  ArrowLeft,
  HelpCircle,
  Info,
  BookOpen,
  CreditCard,
  LogIn,
  Ticket,
} from "lucide-react";
import LoginDrawer from "../components/LoginDrawer";
import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<
    "main" | "bookings" | "payments" | "faq" | "about"
  >("main");

  const bookings = [
    { id: 1, movie: "Inception", date: "Aug 28, 2025", time: "7:00 PM", seats: "A1, A2" },
    { id: 2, movie: "Oppenheimer", date: "Aug 25, 2025", time: "9:30 PM", seats: "C5, C6" },
  ];

  const payments = [
    { id: 1, method: "Visa **** 4242", status: "Completed", amount: "₹450", date: "Aug 20, 2025" },
    { id: 2, method: "UPI - abc@upi", status: "Pending", amount: "₹299", date: "Aug 18, 2025" },
  ];

  const faqs = [
    { q: "How can I cancel my booking?", a: "Go to 'My Bookings' and select the booking you want to cancel." },
    { q: "Which payment methods are supported?", a: "We support UPI, credit/debit cards, and net banking." },
    { q: "Can I change my seats after booking?", a: "Seat changes are not allowed once booking is confirmed." },
  ];

     const [showLogin, setShowLogin] = useState(false);
const router=useRouter();
  return (
    <div className="min-h-screen bg-[#0C1B4D] text-white flex flex-col font-inter">
      {/* Header */}
     
      <header className="flex items-center justify-between px-6 py-5 border-b border-gray-800 bg-[#0C1B4D]/80 backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-3">

          {activeSection !== "main" && (
            <button
                onClick={() => setActiveSection("main")} 
              className="p-2 hover:bg-white/10 rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          {activeSection === "main" && (
  <button
    onClick={() => router.push("/")}
    className="p-2 hover:bg-white/10 rounded-full"
  >
    <ArrowLeft size={20} />
  </button>
)}
          <h1 className="text-sm sm:text-lg md:text-xl font-semibold">
            {activeSection === "main"
              ? "Profile"
              : activeSection === "bookings"
              ? "My Bookings"
              : activeSection === "payments"
              ? "Payments"
              : activeSection === "faq"
              ? "Frequently Asked Questions"
              : "About Us"}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">
        {activeSection === "main" && (
          <>
            {/* Login card */}
            <div className="rounded-2xl bg-white/3 border border-gray-800 p-6 shadow-lg mb-10 text-center">
              <p className="text-[11px] sm:text-xs md:text-lg text-gray-300 mb-5">
                Sign up or log in to start booking your plans!
              </p>
              <button onClick={() => setShowLogin(true)} className="flex items-center justify-center text-xs sm:text-sm md:text-base gap-2 w-full py-2 sm:py-2 md:py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition cursor-pointer">
                <LogIn className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4"/> Login / Sign up
              </button>
            </div>
<LoginDrawer isOpen={showLogin} onClose={() => setShowLogin(false)} />
            {/* Quick Links */}
            <section>
              <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 mb-4">
                Quick Access
              </h2>
              <div className="space-y-4">
                <ProfileItem
                  label="My Bookings"
                  icon={<BookOpen className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" />}
                  onClick={() => setActiveSection("bookings")}
                />
                <ProfileItem
                  label="Payments"
                  icon={<CreditCard className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" />}
                  onClick={() => setActiveSection("payments")}
                />
              </div>
            </section>

            {/* Support */}
            <section className="mt-10">
              <h2 className="text-xs sm:text-sm font-semibold text-gray-400 mb-4">Support</h2>
              <div className="space-y-4 ">
                <ProfileItem
                  label="Frequently Asked Questions"
                  icon={<HelpCircle className="w-4 h-4" />}
                  onClick={() => setActiveSection("faq")}
                />
              </div>
            </section>

            {/* More */}
            <section className="mt-10">
              <h2 className="text-xs sm:text-sm font-semibold text-gray-400 mb-4">More</h2>
              <div className="space-y-4">
                <ProfileItem
                  label="About Us"
                  icon={<Info className="w-4 h-4" />}
                  onClick={() => setActiveSection("about")}
                />
              </div>
            </section>
          </>
        )}

        {/* My Bookings */}
        {activeSection === "bookings" && (
          <div className="space-y-5">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white/3rounded-xl p-5 border border-white/5 shadow hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Ticket size={20} />
                  <p className="font-semibold text-xs sm:text-sm md:text-base">{b.movie}</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-xs md:text-sm">
                  {b.date} • {b.time}
                </p>
                <p className="text-gray-400 text-xs sm:text-xs md:text-sm mt-1">Seats: {b.seats}</p>
              </div>
            ))}
          </div>
        )}

        {/* Payments */}
        {activeSection === "payments" && (
          <div className="space-y-5">
            {payments.map((p) => (
              <div
                key={p.id}
                className="bg-white/3rounded-xl p-5 border border-white/5 shadow hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard size={20} />
                  <p className="font-semibold text-xs sm:text-sm md:text-base">{p.method}</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-xs md:text-sm">
                  {p.date} • {p.status}
                </p>
                <p className="text-gray-200 text-xs sm:text-xs md:text-sm mt-1">Amount: {p.amount}</p>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        {activeSection === "faq" && (
          <div className="space-y-5">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="bg-white/3 rounded-xl p-5 border border-white/5 shadow hover:bg-white/10 transition"
              >
                <p className="text-xs sm:text-sm md:text-base font-semibold mb-2">{f.q}</p>
                <p className="text-gray-400 text-[10px] sm:text-sm md:text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* About Us */}
        {activeSection === "about" && (
          <div className="bg-white/3 rounded-xl p-6 border border-white/5 shadow leading-relaxed">
            <p className="font-semibold text-lg mb-3 text-xs sm:text-sm md:text-base">About Us</p>
            <p className="text-gray-300 text-[10px] md:text-sm text-justify">
              District is your one-stop destination to discover and book amazing
              experiences, movies, and events around you. Our mission is to
              simplify entertainment booking with a seamless, secure, and
              enjoyable experience.  
              <br /><br />
              Whether you're planning a movie night, a weekend getaway, or a
              live concert, District ensures you get the best options with ease.
            </p>
          </div>
        )}
      </main>

      {/* Footer only on main */}
     <footer className="bg-[#0b223f] py-6 text-center text-xs md:text-sm text-white/90 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
    </div>
  );
}

function ProfileItem({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/3   border border-white/5 hover:bg-white/10 transition cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-[11px] sm:text-sm md:text-sm">{label}</span>
      </div>
      <span className="text-gray-500">{">"}</span>
       <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .font-inter {
    font-family: 'Inter', sans-serif;
  }
`}</style>
    </div>
  );
}
