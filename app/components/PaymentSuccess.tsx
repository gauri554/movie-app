"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface PaymentSuccessProps {
  onClose: () => void;
}
  
const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onClose }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-40 z-50 font-montserrat">
      <div className="bg-[#1A1B4B] rounded-2xl px-6 sm:p-8 max-w-[90%] sm:max-w-md w-full shadow-lg text-center relative mx-4 sm:mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white text-lg cursor-pointer"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#FFD23F] rounded-full p-3 sm:p-4 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
        <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
          Your payment was successful
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-xs sm:text-sm leading-relaxed">
          Adele is a Scottish heiress whose extremely wealthy family owns
          estates and grounds. When she was a teenager. Read More
        </p>

        {/* Button */}
        <button  onClick={() => router.push("/eticket")} className="bg-[#E63946] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-red-600 transition cursor-pointer w-full sm:w-auto mb-3">
          See E-Ticket
        </button>
      </div>
     <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`}</style>
    </div>
  );
  
};

export default PaymentSuccess;
