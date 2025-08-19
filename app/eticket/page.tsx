"use client";
import React from "react";
import Popup from "../components/Popup";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ETicketPage() {
    const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0B1A51] font-poppins flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="w-full max-w-3xl flex items-center justify-between mb-8 px-4 md:mx-0">
        <button onClick={() => router.push(`/checkout`)} className="text-white text-lg cursor-pointer">←</button>
        <h1 className="text-white font-bold text-xl">E-Ticket</h1>
        <div className="w-6" /> {/* spacer */}
      </header>

      {/* Instruction */}
      <div className="w-full max-w-3xl text-white mb-6 px-4 md:px-0">
        <h2 className="font-bold text-base md:text-lg">Instruction</h2>
        <p className="text-gray-300 text-sm mt-1 leading-relaxed">
          Come to the cinema, show and scan the barcode to the space provided.
          Continue to comply with health protocols.
        </p>
      </div>

      {/* Ticket Card */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl overflow-hidden mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row">
          {/* Ticket Details */}
          <div className="flex-1 p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-base md:text-lg text-black">
                Film: <span className="font-normal">Shang-Chi</span>
              </h3>
              <span className="text-pink-500 font-semibold text-sm md:text-base">e-ticket</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
              <div>
                <p className="text-yellow-500 font-semibold">Date</p>
                <p className="text-black">06/09/2021</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">Seats</p>
                <p className="text-black">c4, c5</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">Location</p>
                <p className="text-black">Viva Cinema</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">Time</p>
                <p className="text-black">01.00 PM</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">Payment</p>
                <p className="text-black">Successful</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">Order</p>
                <p className="text-black">1904566</p>
              </div>
            </div>
          </div>

          {/* Barcode Section */}
          <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#F9FAFB] border-t md:border-t-0 md:border-l border-gray-200">
            <div className="border-t border-dashed border-gray-400 w-full my-4 md:hidden" />
            <img
              src="/barcode2.png"
              alt="Barcode"
              className="h-16 md:h-20 object-contain mb-2 md:mb-4"
            />
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button  onClick={() => setShowPopup(true)} className="mt-6 md:mt-8 bg-[#E63946] text-white font-semibold py-2.5 md:py-3 px-5 md:px-6 rounded-lg hover:bg-red-600 transition cursor-pointer mx-4 md:mx-0">
        Download E-Ticket
      </button>
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
           <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
