"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { CreditCard, Wallet, Smartphone, Banknote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

export default function PaymentPage() {
  const params = useSearchParams();
  const router = useRouter();

  // ✅ Get query params safely
  const seats = params.get("seats")?.split(",") || [];
  const pricePerSeat = Number(params.get("price")) || 0;
  const total = seats.length * pricePerSeat;

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const paymentMethods = [
    { id: "upi", name: "UPI (Google Pay, PhonePe)", icon: <Smartphone className="w-5 h-5" /> },
    { id: "card", name: "Credit / Debit Card", icon: <CreditCard className="w-5 h-5" /> },
    { id: "netbanking", name: "Netbanking", icon: <Banknote className="w-5 h-5" /> },
    { id: "wallet", name: "Wallets", icon: <Wallet className="w-5 h-5" /> },
  ];

  const handlePay = () => {
    if (!selectedMethod) {
      alert("Please select a payment method");
      return;
    }
    setShowPopup(true);
  };

  const confirmBooking = () => {
    setShowPopup(false);
    router.push(
      `/event-paymentsuccess?seats=${encodeURIComponent(seats.join(","))}&price=${pricePerSeat}`
    );
  };

  // ✅ Payment method specific UI
  const renderMethodContent = () => {
    switch (selectedMethod) {
      case "upi":
        return (
          <div className="mt-3 space-y-2">
            <label className="text-xs sm:text-sm md:text-sm text-gray-300">Enter UPI ID</label>
            <input
              type="text"
              placeholder="yourname@upi"
              className="w-full md:px-3 md:py-2 px-2 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />
          </div>
        );
      case "card":
        return (
          <div className="mt-3 space-y-2">
            <label className="text-xs sm:text-sm md:text-sm text-gray-300">Card Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white/10 border border-white/20"
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs sm:text-sm md:text-sm text-gray-300">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white/10 border border-white/20"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-300">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white/10 border border-white/20"
                />
              </div>
            </div>
          </div>
        );
      case "netbanking":
        return (
          <div className="mt-3 space-y-2">
            <label className="text-xs sm:text-sm text-gray-300">Select Bank</label>
            <select className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-base">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>State Bank of India</option>
              <option>Axis Bank</option>
            </select>
          </div>
        );
      case "wallet":
        return (
          <div className="mt-3 space-y-2">
            <label className="text-xs sm:text-sm text-gray-300">Choose Wallet</label>
            <select className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-base">
              <option>Paytm</option>
              <option>PhonePe Wallet</option>
              <option>Amazon Pay</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1930] via-[#112d4e] to-[#0a1930] text-white py-2 font-inter">
      <div className="px-2">
        <Header title="Payment" subtitle="" />
        <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0 text-white">
          <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
          <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
          <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
        </div>

        {/* ✅ Layout */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
          {/* Left: Summary */}
          <aside className="lg:col-span-1 bg-white/5 rounded-xl p-6 shadow-lg">
            <h2 className="text-sm text-center sm:text-left sm:text-lg md:text-xl font-bold mb-6">
              Booking Summary
            </h2>

            <div className="bg-white/5 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-xs sm:text-base md:text-base">Selected Seats</h3>
              {seats.length > 0 ? (
                seats.map((seat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-[10px] sm:text-sm md:text-sm border-b border-white/10 pb-1"
                  >
                    <span>Seat {seat}</span>
                    <span>₹{pricePerSeat}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm">No seats selected</p>
              )}
              <div className="flex justify-between font-bold text-xs sm:text-base md:text-lg pt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </aside>

          {/* Right: Payment */}
          <main className="lg:col-span-2 bg-white/5 rounded-xl p-6 shadow-lg space-y-6">
            <h2 className="text-sm text-center sm:text-left sm:text-lg md:text-xl font-bold">
              Choose Payment Method
            </h2>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id}>
                  <button
                    onClick={() => setSelectedMethod(selectedMethod === method.id ? null : method.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition cursor-pointer
                      ${selectedMethod === method.id ? "bg-red-500 text-white shadow-lg" : "bg-white/10 hover:bg-white/20"}`}
                  >
                    <div className="flex items-center gap-3">
                      {method.icon}
                      <span className="text-[11px] sm:text-sm md:text-base">{method.name}</span>
                    </div>
                    {selectedMethod === method.id && (
                      <span className="text-xs sm:text-sm md:text-sm font-bold">✓</span>
                    )}
                  </button>

                  {/* Show extra fields when method is selected */}
                  {selectedMethod === method.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="p-4 bg-white/5 rounded-lg mt-2"
                    >
                      {renderMethodContent()}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Pay Button */}
            <div className="hidden lg:flex justify-end pt-6">
              <button
                onClick={handlePay}
                className="px-8 py-3 rounded-xl bg-red-500 font-semibold hover:bg-red-600 transition cursor-pointer"
              >
                Pay ₹{total}
              </button>
            </div>
          </main>
        </div>

        {/* Mobile Pay Button */}
        <footer className="sticky bottom-0 w-full lg:hidden bg-black/40 border-t border-white/20 p-4 text-xs">
          <button
            onClick={handlePay}
            className="w-full py-3 rounded-xl bg-red-500 font-semibold hover:bg-red-600 transition cursor-pointer"
          >
            Pay ₹{total}
          </button>
        </footer>

        {/* ✅ Popup Modal */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#0b233f] text-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <h2 className="text-xs sm:text-xl md:text-2xl font-bold mb-4">Confirm Payment</h2>
                <p className="text-gray-300 mb-6 text-[10px] sm:text-sm md:text-base">
                  You are about to pay <span className="font-semibold">₹{total}</span> for{" "}
                  <span className="font-semibold">{seats.length}</span> seat(s) using{" "}
                  <span className="font-semibold">{selectedMethod?.toUpperCase()}</span>.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="flex-1 py-2 text-xs sm:text-base sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmBooking}
                    className="flex-1 py-2 sm:py-2 text-xs sm:text-base rounded-lg bg-red-500 hover:bg-red-600 font-semibold cursor-pointer"
                  >
                    Confirm & Pay
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="bg-[#091339] py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
}
