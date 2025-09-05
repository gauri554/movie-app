"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
const steps = [
  "Basic Info",
  "Plan Purchase",
  "KYC",
  "Bank Details",
  "Review",
  "Under Review",
];

export default function VendorOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  // All form data stored in one state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    plan: "",
    panCard: "",
    aadhaar: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    gstNumber: "",
     panFile: null as File | null,
  aadhaarFile: null as File | null,
  termsAccepted:false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] font-inter">
        <div className="px-4 py-2 md:py-3   ">
        <Header title="Vendor" subtitle=""/>
          <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0 text-white">
                        <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                        <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                        <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
                      </div>
        <div className="flex flex-col items-center mb-33">
      {/* Stepper */}
      <div className="grid grid-cols-2  mt-5 md:flex md:flex-row items-start md:items-center gap-3 md:gap-0 justify-center mb-12 w-full max-w-4xl">
        {steps.map((label, i) => {
          const isActive = i === currentStep;
          const isCompleted = i < currentStep;

          return (
            <div key={i} className="flex items-center w-full">
              <div
                className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 transition
                  ${isCompleted ? "bg-green-500 border-green-500 text-white" : ""}
                  ${isActive ? "bg-[#ff4655]  border-[#ff4655] text-white" : ""}
                  ${!isActive && !isCompleted ? "border-gray-300 text-gray-400" : ""}
                `}
              >
                {isCompleted ? <Check size={18} /> : i + 1}
              </div>
              <span
                className={`ml-2 text-xs sm:text-sm md:text-sm font-medium ${
                  isActive ? "text-[#ff4655]" : "text-gray-500"
                }`}
              >
                {label}
              </span>
              {i !== steps.length - 1 && (
                <div className="hidden md:flex flex-1 h-0.5 bg-gray-300 mx-4"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0C1B4D] text-gray-200 shadow-xl rounded-2xl p-6 md:p-8 w-full max-w-lg md:max-w-2xl "
      >
        <h2 className="text-sm sm:text-sm md:text-xl font-semibold mb-6 text-gray-200">
          {steps[currentStep]}
        </h2>

        {/* Step forms */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Business / Vendor Name"
              className="w-full border rounded-lg px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2"
            />
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-[#0C1B4D] "
            >
              <option value="">Select Business Type</option>
              <option value="cinema">Cinema</option>
              <option value="event">Event Organizer</option>
              <option value="venue">Venue</option>
            </select>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <label className="flex items-center space-x-3 border p-3 rounded-lg">
              <input
                type="radio"
                name="plan"
                value="basic"
                onChange={handleChange}
                checked={formData.plan === "basic"}
              />
              <span className="text-xs sm:text-sm md:text-base">Basic Plan – ₹999/month</span>
            </label>
            <label className="flex items-center space-x-3 border p-3 rounded-lg">
              <input
                type="radio"
                name="plan"
                value="premium"
                onChange={handleChange}
                checked={formData.plan === "premium"}
              />
              <span className="text-xs sm:text-sm md:text-base">Premium Plan – ₹4999/month</span>
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <input
              type="text"
              name="panCard"
              value={formData.panCard}
              onChange={handleChange}
              placeholder="PAN Card Number"
              className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2"
            />
              <div>
      <label className="block text-gray-300 mb-1 text-xs font-semibold sm:text-sm md:text-sm">Upload PAN Card</label>
      <input
        type="file"
        name="panFile"
        accept="image/*,.pdf"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFormData({ ...formData, panFile: file });
          }
        }}
        className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2 bg-[#0C1B4D] text-gray-300 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#ff4655] file:text-white hover:file:bg-red-700 file:cursor-pointer"
      />
    </div>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="Aadhaar Number"
              className="w-full border rounded-lg px-4 py-1 sm:py-1 md:py-2"
            />
             <div>
      <label className="block text-gray-300 mb-1 text-xs font-semibold sm:text-sm md:text-sm ">Upload Aadhaar</label>
      <input
        type="file"
        name="aadhaarFile"
        accept="image/*,.pdf"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFormData({ ...formData, aadhaarFile: file });
          }
        }}
        className="w-full border rounded-lg px-4 py-2 bg-[#0C1B4D] text-gray-300 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#ff4655] file:text-white hover:file:bg-red-700 file:cursor-pointer"
      />
    </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Bank Name"
              className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2"
            />
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Account Number"
              className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2"
            />
            <input
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              placeholder="IFSC Code"
              className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2"
            />
              <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="GST Number"
              className="w-full border rounded-lg px-4 py-1 sm:py-2 md:py-2"
            />
          </div>
        )}

     

        {currentStep === 4 && (
          <div className="space-y-4 text-gray-300 text-[11px] sm:text-sm md:text-base">
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>Phone:</b> {formData.phone}</p>
            <p><b>Business Type:</b> {formData.businessType}</p>
            <p><b>Plan:</b> {formData.plan}</p>
            <p><b>PAN:</b> {formData.panCard}</p>
            <p><b>Aadhaar:</b> {formData.aadhaar}</p>
            <p><b>Bank:</b> {formData.bankName}</p>
            <p><b>Account:</b> {formData.accountNumber}</p>
            <p><b>IFSC:</b> {formData.ifsc}</p>
            <p><b>GST:</b> {formData.gstNumber}</p>
             <div className="flex items-start gap-2 mt-4">
      <input
        type="checkbox"
        id="terms"
        checked={formData.termsAccepted || false}
        onChange={(e) =>
          setFormData({ ...formData, termsAccepted: e.target.checked })
        }
        className="mt-1"
      />
      <label htmlFor="terms" className="text-xs sm:text-sm md:text-base text-gray-300">
        I agree to the{" "}
        <a href="/terms" target="_blank" className="text-[#ff4655] underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" target="_blank" className="text-[#ff4655] underline">
          Privacy Policy
        </a>.
      </label>
    </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center space-y-4">
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-green-600">✅ Submitted!</h3>
            <p className="text-gray-300 text-[10px] sm:text-sm md:text-base">
              Your vendor application is under review. You will be notified once approved.
            </p>
          </div>
        )}

        {/* Buttons */}
        {currentStep < steps.length - 1 && (
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg border text-gray-200 disabled:opacity-40 hover:bg-gray-100 hover:text-[#0b233f] transition cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg bg-[#ff4655]  text-white hover:bg-red-700 transition cursor-pointer"
            >
              {currentStep === steps.length - 2 ? "Submit" : "Continue"}
            </button>
          </div>
        )}
      </motion.div>
      </div>
      </div>
       <footer className="bg-[#091330] py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
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
