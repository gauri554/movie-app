"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface PaymentSuccessProps {
  onClose: () => void;
}
  
const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onClose }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 font-poppins">
      <div className="bg-[#1A1B4B] rounded-2xl p-8 max-w-md w-full shadow-lg text-center relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-lg"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#FFD23F] rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-bold mb-2">
          Your payment was successful
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-sm">
          Adele is a Scottish heiress whose extremely wealthy family owns
          estates and grounds. When she was a teenager. Read More
        </p>

        {/* Button */}
        <button  onClick={() => router.push("/eticket")} className="bg-[#E63946] text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition cursor-pointer">
          See E-Ticket
        </button>
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
  
};

export default PaymentSuccess;
