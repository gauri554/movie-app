"use client";

import { useState, FormEvent } from "react";
import Header from "../components/Header";
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const isFormValid =
    formData.category &&
    formData.name &&
    formData.email &&
    formData.mobile &&
    formData.message;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert("Message submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133]  ">
        <div className="px-4 py-4">
             <Header title="Contact" subtitle=""/>
             <div className="flex flex-col items-center justify-center px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
Get in Touch
        </h1>
        <p className="text-gray-400 mt-2">
          Facing an issue? Reach out and we’ll help you right away.
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5"
        >
          {/* Category Dropdown */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-white/5 border border-gray-600 text-white rounded-lg px-3 py-3 focus:ring-1 focus:ring-red-400 focus:outline-none"
            required
          >
            <option value="">Movies / Events / Shows / Other</option>
            <option className="bg-white/5" value="movies">Movies</option>
            <option className="bg-white/5" value="events">Events</option>
            <option className="bg-white/5" value="dining">Shows</option>
            <option className="bg-white/5" value="other">Other</option>
          </select>

          {/* Full Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name *"
            className="w-full bg-white/5 border border-gray-600 text-white rounded-lg px-3 py-3 placeholder-gray-350 focus:ring-1 focus:ring-red-400 focus:outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address *"
            className="w-full bg-white/5 border border-gray-600 text-white rounded-lg px-3 py-3 placeholder-gray-350 focus:ring-1 focus:ring-red-400 focus:outline-none"
            required
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile number *"
            className="w-full bg-white/5 border border-gray-600 text-white rounded-lg px-3 py-3 placeholder-gray-350 focus:ring-1 focus:ring-red-400 focus:outline-none"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your issue here *"
            rows={4}
            className="w-full bg-white/5 border border-gray-600 text-white rounded-lg px-3 py-3 placeholder-gray-350 focus:ring-1 focus:ring-red-400 focus:outline-none resize-none"
            required
          />

          {/* Submit */}
          <div className="flex justify-center">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full max-w-[150px] items-center  rounded-lg font-semibold transition sweep-button ${
              isFormValid
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:scale-105"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            <span>Submit</span>
          </button>
          </div>
        </form>
      </div>
      </div>
      </div>
       <footer className="bg-white/10 py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
       <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .font-inter {
    font-family: 'Inter', sans-serif;
  }
`}</style>
    </div>
  );
}
