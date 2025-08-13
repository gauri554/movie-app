"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      {/* Popup Container */}
      <div className="bg-[#101B42] rounded-2xl shadow-lg p-6 w-[350px] relative text-center">
        {/* Icon */}
        <div className="flex justify-center -mt-14 mb-4">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <div className="bg-[#FFC107] rounded-full p-3">
              
              <FaCheckCircle className="text-white-800" size={30} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-lg font-semibold mb-2">
          Your ticket has been downloaded
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">
          Adele is a Scottish heiress whose extremely wealthy family owns estates and grounds. When she was a teenager. Read More
        </p>

        {/* Button */}
        <button
          onClick={() => {
            onClose();
            router.push("/"); // navigate to home
          }}
          className="bg-[#E91E63] text-white font-medium px-6 py-3 rounded-lg w-full cursor-pointer"
        >
          Back To Home
        </button>
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
