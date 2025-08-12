"use client";

import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
export default function EnquiryFormDesktop() {
  const [fileName, setFileName] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2547] via-[#152c57] to-[#1f3558] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg">
        {/* Header */}
        <header className="mb-8 border-b border-white/10 pb-4">
          <h1 className="text-3xl font-semibold">Enquiry Now</h1>
          <p className="text-sm text-white/70 mt-1">Tailored content discovery</p>
        </header>

        {/* Form */}
        <form className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Email Address */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="yourname@domainname.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 9999999999"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            />
          </div>

          {/* Purpose of Enquiry */}
          <div className="col-span-1">
            <label className="block text-sm mb-2">Purpose of Enquiry</label>
            <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400">
              <option>Licensing & Distribution</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message / Description */}
          <div className="col-span-2">
            <label className="block text-sm mb-2">Message / Description</label>
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-pink-400"
            ></textarea>
          </div>

          {/* Upload File */}
          <div className="col-span-2">
            <label className="block text-sm mb-2">Upload File</label>
            <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-pink-400">
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
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl mb-2">
                 <FaUpload className="text-xl" />
                </div>
                <span className="text-sm">{fileName || "Upload"}</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-12 py-3 rounded-lg font-semibold text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
