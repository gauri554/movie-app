// app/cinema-shows/page.tsx
"use client";

import { useState } from "react";
import SeatSelection from "../components/seatselection";
interface Cinema {
  name: string;
  timings: string[];
}

export default function CinemaShowsPage() {
  const [selectedDate, setSelectedDate] = useState("21 TUE");
  const [selectedLang, setSelectedLang] = useState("English 2D");

  const dates = ["19 MON", "20 SUN", "21 TUE", "22 WED", "23 THU", "24 FRI"];
  const languages = ["हिन्दी 2D", "English 2D", "ગુજરાતી 2D"];

  const cinemas: Cinema[] = [
    {
      name: "Cinepolis : Nexus Ahmedabad One",
      timings: ["3:20 PM", "6:20 PM", "10:20 PM", "12:20 PM"],
    },
    {
      name: "PVR : Acropolis, Ahmedabad",
      timings: ["3:20 PM", "6:20 PM", "10:20 PM", "12:20 PM"],
    },
    {
      name: "Time Cinema : CG Road Ahmedabad",
      timings: ["3:20 PM", "6:20 PM", "10:20 PM", "12:20 PM"],
    },
  ];

  return (
    <div className="min-h-screen font-poppins bg-[#0D1B4C] px-6 py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Alladin</h1>
          <p className="text-yellow-500 font-medium">⭐ 7.2/10 (20k Votes)</p>
        </div>

        {/* Date Selector */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-full text-sm bg-white/5  text-white font-medium ${
                selectedDate === date
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-4 py-2 rounded-full text-sm bg-white/5 text-white font-medium ${
                selectedLang === lang
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Cinema Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {cinemas.map((cinema) => (
            <div
              key={cinema.name}
              className="bg-white/5 text-white p-5 rounded-xl shadow-sm border"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-white">
                  {cinema.name}
                </h2>
                <div className="flex gap-2">
                  <button className="text-white hover:text-red-500">♡</button>
                  <button className="text-white hover:text-yellow-500">⚠</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {cinema.timings.map((time) => (
                  <span
                    key={time}
                    className="px-4 py-2 rounded-full bg-white/5 text-white text-sm font-medium hover:bg-yellow-400 text-white cursor-pointer"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SeatSelection />
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
