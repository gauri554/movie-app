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
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Payment Method */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <button className="text-gray-300 hover:underline">Change</button>
        </div>

        <div className="bg-white/5 rounded-xl p-6 mb-8 relative overflow-hidden">
          <FaCcMastercard size={40} className="text-red-400 mb-4" />
          <p className="text-right text-sm text-gray-300">Balance</p>
          <p className="text-right text-2xl font-bold mb-4">$120,580.00</p>
          <p className="text-gray-300">Card Holder</p>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-300 mt-2">{cardNumber}</p>
        </div>

        {/* Payment Details */}
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Cardholder Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Pay Button */}
          <div className="flex justify-end items-center gap-4 mt-6">
            <p className="text-lg font-semibold">RS. 99.8</p>
            <button
              type="button"  onClick={handlePayNow}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
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
