"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import Header from "../components/Header";
import { FaArrowDown } from "react-icons/fa6";
interface Event {
  id: number;
  title: string;
  comedian: string;
  time: string;
  venue: string;
  location: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Event Name part 1",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/standup.png",
  },
  {
    id: 2,
    title: "Event Name part 2",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/concerts.png",
  },
  {
    id: 3,
    title: "Event Name part 3",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/food.png",
  },
  {
    id: 4,
    title: "Event Name part 4",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/comedy.png",
  },
  {
  id: 5,
    title: "Event Name part 4",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/comedy.png",
  },
  {
 id: 6,
    title: "Event Name part 3",
    comedian: "Comedian name",
    time: "2:30 PM",
    venue: "Pune, Maharashtra",
    location: "Ahmedabad",
    image: "/food.png",
  },
];

const EventListPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div className="min-h-screen font-montserrat bg-[#0D1B4C] text-white">
      <div className="  md:px-[auto] md:p-3">
        <Header title="Stand up comedy" subtitle="Ahmedabad" />
</div>
<div className="  px-2 md:px-[auto] md:p-3">
        <h2 className="text-sm md:text-lg md:text-left text-red-500 mt-4 mb-4 font-semibold">
          Stand Up {visibleCount}+ Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.slice(0, visibleCount).map((event) => (
            <div
              key={event.id}
              className="bg-white/5 rounded-2xl overflow-hidden shadow-lg flex md:flex-col"
            >
              <div className="p-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-40 md:h-56 w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[15px] md:text-2xl font-semibold text-lext md:text-left">
                  {event.title}
                </h3>
                <p className="text-xs md:text-base text-gray-300 text-left md:text-left">
                  {event.comedian}
                </p>
                <p className="text-sm md:text-lg mt-2 text-left md:text-left">
                  Time: {event.time}
                </p>
                <p className="text-sm md:text-lg text-left md:text-left">
                  <span className="text-sm md:text-lg font-bold">Venue</span> {event.venue}
                </p>
                <button
                  onClick={() => router.push(`/checkout`)}
                  className="mt-2 bg-red-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg font-semibold 
                          text-xs md:text-base   hover:bg-red-600 transition cursor-pointer"
                >
                  🎟 Buy tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < events.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-4 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-600 to-red-400 text-white 
                         font-semibold rounded-full shadow-lg hover:scale-105 
                         hover:from-red-500 hover:to-red-300 transition-all duration-300 
                         flex items-center gap-2 cursor-pointer text-xs md:text-lg"
            >
            Load More
              <span className="animate-bounce">  <FaArrowDown className="md:text-lg" /></span>
            </button>
          </div>
        )}
      </div>

      <footer className="bg-white/10 py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
    </div>
  );
};

export default EventListPage;
