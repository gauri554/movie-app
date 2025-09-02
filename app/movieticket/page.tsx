"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, User, Heart } from "lucide-react";
import Image from "next/image";
import Header from "../components/Header";
import FilterModal from "../components/FilterModal";
type Theatre = {
  id: number;
  name: string;
  distance: string;
  cancellation: string;
  logo?: string;
  shows: { time: string; info?: string }[];
  tags:string[];
};

export default function MovieTicketPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("29"); // default date
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // 🎭 Different theatre data per date
  const theatreData: Record<string, Theatre[]> = {
    "29": [
      {
        id: 1,
        name: "INOX Jaswant Tuli Mall, Kamptee Road, Nagpur",
        distance: "2.3 km away",
        cancellation: "Allows cancellation",
        logo: "/cinepolis.png",
        shows: [
          { time: "09:15 AM" },
          { time: "03:55 PM" },
          { time: "10:30 PM" },
        ],
        tags: ["After 5 PM"]
      },
      
      
    ],
    "30": [
      {
        id: 4,
        name: "Cinepolis VR Nagpur Mall, Rambagh Road, Nagpur",
        distance: "3.9 km away",
        cancellation: "Non-cancellable",
        logo: "/cinepolis.png",
        shows: [
          { time: "03:30 PM", info: "DOLBY 7.1" },
          { time: "09:55 PM", info: "DOLBY 7.1" },
        ],
        tags: []
      },
      
    ],
    "31": [
      {
        id: 5,
        name: "MovieMax Eternity, Nagpur",
        distance: "4.4 km away",
        cancellation: "Allows cancellation",
        logo: "/cinepolis.png",
        shows: [
          { time: "03:00 PM", info: "DOLBY 7.1" },
          { time: "11:35 PM", info: "DOLBY 7.1" },
        ],
        tags: []
      },
    ],
  };
const filteredTheatres = selectedFilter
  ? theatreData[selectedDate]?.filter((t) => t.tags.includes(selectedFilter)) || []
  : theatreData[selectedDate] || [];

  return (
    <div className="min-h-screen bg-[#0D1B4C]">
      <div className="px-2 py-3">
        <Header title="Book Ticket" subtitle="" />

        {/* Movie Details */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src="/war2.jpg"
              alt="War 2"
    width={160}
    height={200}
              className="rounded-lg shadow-md object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-sm sm:text-xl md:text-2xl font-semibold text-white">War 2</h2>
              <p className="text-[10px] md:text-lg text-gray-200 mt-1">UA16+ | Hindi | 3 hr 3 min</p>
              <button
                onClick={() => router.push("/details")}
                className="mt-3 px-2 py-1 sm:px-4 sm:py-1 md:px-5 md:py-2 border rounded-lg text-xs sm:text-sm md:text-sm text-white hover:bg-yellow-400 hover:text-white hover:border-0 cursor-pointer transition"
              >
                View details
              </button>
            </div>
          </div>
        </section>

        {/* Date Selector */}
        <section className="max-w-5xl mx-auto px-4 flex gap-4 overflow-x-auto scrollbar-hide ">
          {[
            { day: "29", label: "Fri" },
            { day: "30", label: "Sat" },
            { day: "31", label: "Sun" },
          ].map(({ day, label }) => (
            <div
              key={day}
              onClick={() => setSelectedDate(day)}
              className={`flex flex-col items-center border rounded-lg px-1 py-1 md:px-3 md:py-2 min-w-[60px] cursor-pointer border-0 ${
                selectedDate === day
                  ? "bg-yellow-400 text-white"
                  : "text-white hover:bg-yellow-400 hover:text-white"
              }`}
            >
              <span className="text-[10px] md:text-xs">AUG</span>
              <span className="text-xs md:text-lg font-bold">{day}</span>
              <span className="text-[10px] md:text-sm">{label}</span>
            </div>
          ))}
        </section>

        {/* Filters */}
        <section className="max-w-5xl mx-auto px-4 mt-4 flex flex-wrap gap-3 ">
          {["Filters", "After 5 PM", "Premium Seats", "Recliners"].map((item) => (
            <button
              key={item}
               onClick={() => {
              if (item === "Filters") {setIsOpen(true)} else {

          setSelectedFilter((prev) => (prev === item ? null : item));
        }
            }
          }
              className={`px-2 text-[10px] md:text-base py-1 sm:px-3 sm:py-1 md:px-4 pmd:y-1 border rounded-lg text-white hover:bg-yellow-400 hover:border-0 transition cursor-pointer ${selectedFilter === item ? "bg-yellow-400 border-0" : "hover:bg-yellow-400 hover:border-0"}`}
            >
              {item}
            </button>
          ))}
        </section>
 {isOpen && <FilterModal onClose={() => setIsOpen(false)} />}
        {/* Legend */}
        <section className="max-w-5xl mx-auto px-4 mt-4 flex flex-wrap gap-6 text-[10px] md:text-sm text-white">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span> Available
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Filling fast
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span> Almost full
          </span>
        </section>

        {/* Theatre List */}
        <section className="max-w-5xl mx-auto px-4 mt-6 space-y-6">
          {theatreData[selectedDate]?.map((theatre) => (
            <div key={theatre.id} className="border-t pt-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {theatre.logo && (
                    <Image
                      src={theatre.logo}
                      alt={theatre.name}
                      width={28}
                      height={28}
                    />
                  )}
                  <div>
                    {filteredTheatres.length > 0 ? (
    filteredTheatres.map((theatre) => (
      <div key={theatre.id} className="p-4 rounded-lg text-white text-[10px] sm:text-sm md:text-lg ">
        {theatre.name}
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-[10px] sm:text-sm md:text-lg">No theatres match this filter.</p>
  )}
                  </div>
                </div>
                <Heart className="text-gray-500 cursor-pointer hover:text-red-400" />
              </div>

              {/* Showtimes */}
              <div className="flex flex-wrap gap-4">
                {theatre.shows.map((show, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <button   onClick={() => router.push(`/seatlayout`)} className="px-1 py-1 md:px-2 md:py-1 border text-[10px] md:text-base  rounded-lg shadow-sm text-white hover:bg-yellow-400 hover:border-0 transition cursor-pointer">
                      {show.time}
                    </button>
                    {show.info && (
                      <span className="text-xs text-gray-300 mt-1">{show.info}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white/10 py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
    </div>
  );
}
