"use client";

import React, { useState } from "react";

export default function EnquiryFormDesktop() {
  const [fileName, setFileName] = useState<string>("");

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-[#0f2547] via-[#152c57] to-[#1f3558] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg">
        {/* Header */}
        <header className="mb-6 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">Enquiry Now</h1>
          <p className="text-xs sm:text-sm text-white/70 mt-1">Tailored content discovery</p>
        </header>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Email Address */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="yourname@domainname.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 9999999999"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Purpose of Enquiry */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Purpose of Enquiry</label>
            <select className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400">
              <option className="bg-white/10">Licensing & Distribution</option>
              <option className="bg-white/10">Partnership</option>
              <option className="bg-white/10">Other</option>
            </select>
          </div>

          {/* Message / Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-2">Message / Description</label>
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            ></textarea>
          </div>

          {/* Upload File */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-2">Upload File</label>
            <div className="flex flex-col items-center justify-center w-full h-28 sm:h-32 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-pink-400">
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
              <label htmlFor="fileUpload" className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-lg sm:text-xl mb-2">
                  ⬆️
                </div>
                <span className="text-xs sm:text-sm">{fileName || "Upload"}</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 flex justify-center mt-4 sm:mt-6">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 sm:px-12 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
