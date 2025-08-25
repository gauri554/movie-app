"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const venues = [
  {
    city: "Ahmedabad",
    places: [
      {
        name: "Auda Auditorium: Shela Ahmedabad",
        date: "Starting from 25 Oct 2025",
        status: "Fast Filling",
      },
    ],
  },
  {
    city: "Vadodara",
    places: [
      { name: "Sayaji Hall: Alkapuri", date: "Coming Soon", status: "" },
    ],
  },
  {
    city: "Udaipur",
    places: [
      { name: "Rajmahal Auditorium", date: "Starting from Nov 2025", status: "" },
    ],
  },
  {
    city: "Jodhpur",
    places: [
      { name: "City Convention Hall", date: "Starting from Dec 2025", status: "" },
    ],
  },
  {
    city: "Bhopal",
    places: [
      { name: "Manas Bhawan", date: "Early 2026", status: "" },
    ],
  },
];

export default function BookTicketPage() {
  const [openCity, setOpenCity] = useState<string | null>("Ahmedabad");

  return (
    <div className="min-h-screen  font-poppins bg-[#0D1B4C] mx-auto px-2 md:px-6 p-4 md:py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold text-white mb-2">
          Comedy Event By Zakir Khan
        </h1>
        <div className="flex items-center space-x-2 text-sm text-white/80 mb-6">
          <span className="font-medium text-yellow-400">1 Venue</span>
          <span>→ Date & Time</span>
          <span>→ Seats</span>
          <span>→ Review & Pay</span>
        </div>

        {/* Venue Selection */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Venue</h2>
        <div className="space-y-4">
          {venues.map((venue) => (
            <div
              key={venue.city}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* City header */}
              <button
                onClick={() =>
                  setOpenCity(openCity === venue.city ? null : venue.city)
                }
                className="flex justify-between items-center w-full px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                {venue.city}
                {openCity === venue.city ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              {/* Places */}
              {openCity === venue.city && (
                <div className="px-4 pb-4 space-y-3 animate-fadeIn">
                  {venue.places.map((place, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition cursor-pointer bg-gray-50"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800">{place.name}</p>
                        {place.status && (
                          <span className="text-xs font-medium text-red-500">
                            {place.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{place.date}</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
                        Know more
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
