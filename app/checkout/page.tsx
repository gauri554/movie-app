"use client";
import { useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import PaymentSuccess from "../components/PaymentSuccess";
export default function CheckoutPage() {
  const [email, setEmail] = useState("Milesmorales@gmail.com");
  const [name, setName] = useState("Miles Morales");
  const [cardNumber, setCardNumber] = useState("**** **** **** 51446");
  const [date, setDate] = useState("2021-11-02");
  const [cvv, setCvv] = useState("123");


   const [showPopup, setShowPopup] = useState(false);

  const handlePayNow = () => {
    setShowPopup(true);
  };
  return (
    <div className="min-h-screen bg-[#0D1B4C] font-poppins text-white py-12 px-4 flex justify-center">
      <div className=" p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">Checkout</h1>

        {/* Payment Method */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg sm:text-xl font-semibold">Payment Method</h2>
          <button className="text-gray-300 hover:underline text-sm sm:text-base">Change</button>
        </div>

        <div className="bg-white/5 rounded-xl p-4 sm:p-6 mb-8 relative overflow-hidden">
          <FaCcMastercard size={32} className="text-red-400 mb-4 sm:mb-2" />
          <p className="text-right text-xs sm:text-sm text-gray-300">Balance</p>
          <p className="text-right text-xl sm:text-2xl font-bold mb-4">$120,580.00</p>
          <p className="text-gray-300 text-sm sm:text-base">Card Holder</p>
          <p className="font-semibold text-sm sm:text-base">{name}</p>
          <p className="text-gray-300 mt-2 text-xs sm:text-sm">{cardNumber}</p>
        </div>

        {/* Payment Details */}
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Payment Details</h2>
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-3 sm:px-4 py-2 sm:py-2 focus:outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Cardholder Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border border-gray-400 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full bg-transparent border border-gray-400 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Pay Button */}
          <div className="flex flex-col sm:flex-row justify-between sm:justify-end items-start sm:items-center gap-4 mt-6">
            <p className="text-base sm:text-lg font-semibold">RS. 99.8</p>
            <button
              type="button"  onClick={handlePayNow}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white cursor-pointer text-sm sm:text-base"
            >
              Pay Now
            </button>
          </div>
        </form>
         {/* Show Popup */}
      {showPopup && <PaymentSuccess onClose={() => setShowPopup(false)} />}
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
