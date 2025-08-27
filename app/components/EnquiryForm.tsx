"use client";

import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [fileName, setFileName] = useState<string>("");

  if (!isOpen) return null; // ⬅️ prevents empty screen issue

  return (
    <div
      onClick={onClose}
      className="fixed inset-0  backdrop-blur-md flex items-center justify-center z-50 "
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className="max-w-3xl w-[570px] mx-2 h-[590px] bg-gradient-to-b from-[#0f2547] via-[#152c57] to-[#1f3558] backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-fadeIn"
      >
        {/* Header */}
        <header className="mb-6 border-b border-white/20 pb-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Enquiry Now</h1>
            <p className="text-xs text-white/70">Tailored content discovery</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </header>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ff4655]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="yourname@domainname.com"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ff4655]"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm mb-2">Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 9999999999"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ff4655]"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm mb-2">Purpose of Enquiry</label>
            <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ff4655]">
              <option>Licensing & Distribution</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-sm mb-2">Message / Description</label>
            <textarea
              placeholder="Description"
              rows={2}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ff4655]"
            ></textarea>
          </div>

          {/* Upload */}
          <div className="col-span-2">
            <label className="block text-sm mb-2">Upload File</label>
            <div className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#ff4655]">
        
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    setFileName(e.target.files[0].name);
                  }
                }}
              />
              <label
                htmlFor="fileUpload"
                className="flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 bg-[#ff4655] rounded-full flex items-center justify-center text-xl mb-2">
                  <FaUpload className="text-xl" />
                </div>
                <span className="text-sm">{fileName || "Upload"}</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="text-white rounded-lg font-semibold text-lg sweep-button"
            >
            <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
