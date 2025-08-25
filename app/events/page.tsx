"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import SidebarFilters from "../components/SidebarFilters";
import Filters from "../components/Filters";
import { FiFilter } from "react-icons/fi";
import "../globals.css";
import Card from "../components/Card";
import "../components/EventCard.css";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Chip = { label: string; active?: boolean };

const languageChips: Chip[] = [
  { label: "All", active: true },
  { label:"English"},
  { label: "Hindi" },
  { label: "Telegu" },
  { label: "Malayalam" },
  { label: "Panjabi" },
];

const comedyShows = [
  { title: "Stand Up", subtitle: "25+ Events", img: "/standup.png" , slug: "stand-up", language:"English"},
  { title: "Roast", subtitle: "2 Events", img: "/roast.png",language:"Hindi" },
  { title: "Open Mic", subtitle: "2 Events", img: "/openmic.png", language:"Telugu" },
];

const musicShows = [
  { title: "Concerts", subtitle: "8 Events", img: "/concerts.png", language:"English" },
  { title: "Music Festival", subtitle: "5 Events", img: "/musicfestival.png", language:"Panjabi" },
  { title: "Club Gigs", subtitle: "1 Events", img: "/clubgigs.png", language:"Malayalam" },
];

const bestThisWeek = [
  { title: "Food Event - KOGU", img: "/food.png" },
  { title: "Comedy by Peter Funk", img: "/comedy.png" },
  { title: "Beat Box", img: "/concerts.png" },
  { title: "Live Music", img: "/musicfestival.png" },
  { title: "Dance Show", img: "/roast.png" },
  { title: "Theatre Play", img: "/standup.png" },
];

const placeholders = [
  "Search movies...",
  "Search events...",
  "Search sports...",
  "Search concerts...",
  "Search comedy shows...",
  "Search workshops...",
];

export default function AllEventsPage() {
   const router = useRouter();
     const [showSearch, setShowSearch] = useState(false);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [openFilters, setOpenFilters] = useState(false);
   // Add showModal state
   const [showModal, setShowModal] = useState(false);

      // NEW: selected language state
  const [selectedLang, setSelectedLang] = useState("All");

  // Filter logic
  const filteredComedy =
    selectedLang === "All" ? comedyShows : comedyShows.filter((c) => c.language === selectedLang);

  const filteredMusic =
    selectedLang === "All" ? musicShows : musicShows.filter((m) => m.language === selectedLang);
  
   const [placeholderIndex, setPlaceholderIndex] = useState(0);
       const [value, setValue] = useState("");
  
    // Cycle through placeholders every 2s
    useEffect(() => {
      if (value) return; // Stop animation when user types
      const interval = setInterval(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [value]);
  
    return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white">


       <SidebarFilters isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
                {/* Overlay */}
                {isSidebarOpen && (
                  <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                  />
                )}
      <div className="max-w-7xl mx-auto px-2 md:px-6 p-4 md:py-10">
        {/* Header */}
        <header className="flex flex-row md:flex-row items-center justify-between md:items-center md:justify-between  md:gap-4 mb-8">
          <div className="flex items-center gap-18 md:gap-4">
           {/* <button className="p-2 rounded-full bg-white/6 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>*/}
            <button onClick={() => router.push(`/new-release`)} className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
              <h1 className="md:text-3xl md:font-semibold">All Events</h1>
              <div className="text-xs md:text-sm text-white/70">Ahmedabad</div>
            </div>
          </div>

         <div className="flex items-center gap-2 relative">
             <span   className="text-sm sm:text-xl text-white cursor-pointer hover:text-yellow-400 cursor-pointer"
         onClick={() => setShowModal(true)}  >
  <FaSearch />
</span>

 
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            onClick={() => setShowModal(true)}
            value={value}
             onChange={(e) => setValue(e.target.value)}
            className="px-3 py-1 rounded-md text-white bg-white/10 focus:outline-none w-full sm:w-64 shadow-md text-sm placeholder-transparent"
            placeholder="."
          />

          {/* Fake placeholder (animated) */}
          {!value &&(
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={placeholderIndex}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                 className="text-gray-400 text-sm"
              >
                {placeholders[placeholderIndex]}
              </motion.span>
            </AnimatePresence>
          </div>)}
        </div>
 




     <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-start justify-center  pt-25  bg-black/60 backdrop-blur-sm z-50   "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className=" w-[90%] sm:w-[700px] rounded-2xl shadow-lg mt-20 p-6   bg-[#0b233f]/95  backdrop-blur-sm z-50  "
             
            >
              {/* Search Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="px-4 py-3  w-[630px] rounded-xl border border-gray-200 bg-white text-black text-sm focus:outline-none placeholder-transparent"
                  placeholder="."
                />

                {/* Animated placeholder */}
                {!value && (
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={placeholderIndex}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-400 text-sm"
                      >
                        {placeholders[placeholderIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* Tabs */}
              <div className="flex justify-around mt-6 text-white  text-sm">
                {["All", "Concerts", "Events", "Movies", "Activity"].map((tab, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1 rounded-full ${
                      tab === "Movies" ? "bg-white/60 text-white" : "hover:bg-white/60 text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Trending Section */}
              <div className="mt-6">
                <h3 className="text-white font-semibold mb-3">
                  Trending in Gurugram
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "War 2", img: "/movie1.jpeg" },
                    { title: "Coolie The Powerhouse", img: "/movie2.jpeg" },
                    { title: "Nobody 2", img: "/movie3.jpeg" },
                    { title: "Son Of Sardar 2", img: "/movie2.jpeg" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img src={m.img} className="w-10 h-10 rounded-md" alt={m.title} />
                      <div>
                        <p className="text-sm font-medium text-white">{m.title}</p>
                        <p className="text-xs text-white">Movie</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-4 text-gray-500 hover:text-white cursor-pointer"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
          </div>
        </header>

        {/* Language chips 
        <div className="flex flex-wrap gap-3 mb-6">
          {languageChips.map((c) => (
            <button key={c.label}  onClick={() => setSelectedLang(c.label)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-pointer ${
                selectedLang === c.label
                  ? "bg-[#ff4655] text-white"
                  : "bg-white/6 text-white/80 hover:bg-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
            <button
        onClick={() => setIsSidebarOpen(true)}
        className="px-4 py-2 rounded-full bg-white/6 text-sm font-medium shadow-sm hover:bg-[#ff4655] text-white flex items-center gap-1"
      >
        <FiFilter size={18} />
        Filter
      </button>
        </div>*/}

          <div className="flex gap-3 md:flex-wrap flex-nowrap overflow-x-auto no-scrollbar items-center mb-6">
          {["New Releases", "English", "Hindi", "Malayalam", "Telugu", "Tamil"].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`shrink-0 px-2 md:px-4 py-1 md:py-2 text-sm md:text-sm rounded-full cursor-pointer ${
                selectedLang === lang
                  ? "bg-[#ff4655] text-white"
                  : "bg-white/6 hover:bg-[#ff4655]"
              }`}
            >
              {lang}
            </button>
          ))}
        
          <button
            onClick={() => setOpenFilters(true)}
            className="shrink-0 px-2 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-sm bg-white/6 hover:bg-[#ff4655] text-white flex items-center gap-1 cursor-pointer"
          >
            <FiFilter size={18} />
            Filter
          </button>
          
        </div>

        {/* Upcoming Events Banner 
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-4 md:p-8 shadow-lg flex flex-row gap-35 md:gap-[auto] md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm md:text-2xl font-semibold">Upcoming Events</div>
              <div className="text-xs sm:text-sm opacity-90">In Cinemas near you</div>
            </div>
            <button onClick={() => router.push(`/eventlist`)} className="md:h-12 md:w-12 w-10 h-10 mt-2 rounded-full bg-white/20 flex items-center justify-center cursor-pointer self-start md:self-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>*/}


        <div className="mb-10">
  <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-4 md:p-8 shadow-lg flex flex-row items-center justify-between md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Text Section */}
    <div>
      <div className="text-base md:text-2xl font-semibold">Upcoming Events</div>
      <div className="text-xs sm:text-sm opacity-90">In Cinemas near you</div>
    </div>

    {/* Button */}
    <button
      onClick={() => router.push(`/eventlist`)}
      className="w-10 h-10 md:w-12 md:h-12  md:mt-0 rounded-full bg-white/20 flex items-center justify-center cursor-pointer self-start md:self-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-6 md:w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>


        {/* Comedy and Music shows side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <section>
            <h2 className="text-sm md:text-2xl text-[#ff596b] font-semibold mb-4 ">Comedy Shows</h2>
            <div className= "flex md:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 overflow-x-auto no-scrollbar cursor-pointer">
              {filteredComedy.map((c) => (
                <div key={c.title}  onClick={() => router.push(`/eventlist`)} className="shrink-0 w-[120px] h-[150px] md:h-[auto] sm:w-[180px] rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"   // default shadow
  >
                  <div className="h-44 bg-cover top bg-center" style={{ backgroundImage: `url('${c.img}')` }}     />
                  <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60 ">
                    <div className="text-sm md:text-lg font-semibold">{c.title}</div>
                    <div className="text-xs md:text-sm opacity-80">{c.subtitle}</div>
                  </div>
                </div>
              ))}
               {filteredComedy.length === 0 && (
                <p className="text-white/60">No comedy shows available for {selectedLang}</p>
              )}
            </div>

           


          </section>

          <section>
            <h2 className="text-sm md:text-2xl text-[#ff596b] font-semibold mb-4">Music Shows</h2>
          {/*  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {filteredMusic.map((c) => (
                <div key={c.title} onClick={() => router.push(`/eventlist`)} className="rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]">
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${c.img}')` }} />
                  <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60">
                    <div className="text-lg font-semibold">{c.title}</div>
                    <div className="text-sm opacity-80">{c.subtitle}</div>
                  </div>
                </div>
              ))}
               {filteredMusic.length === 0 && (
                <p className="text-white/60">No music shows available for {selectedLang}</p>
              )}
            </div>*/}

              <div className= "flex md:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 overflow-x-auto no-scrollbar cursor-pointer">
              {filteredMusic.map((c) => (
                <div key={c.title}  onClick={() => router.push(`/eventlist`)} className="shrink-0 w-[120px] h-[150px] md:h-[auto] md:w-[180px] rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"   // default shadow
  >
                  <div className="h-44 bg-cover top bg-center" style={{ backgroundImage: `url('${c.img}')` }}     />
                  <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60 ">
                    <div className="text-sm md:text-lg font-semibold">{c.title}</div>
                    <div className="text-xs md:text-sm opacity-80">{c.subtitle}</div>
                  </div>
                </div>
              ))}
               {filteredMusic.length === 0 && (
                <p className="text-white/60">No music shows available for {selectedLang}</p>
              )}
            </div>
          </section>
        </div>


    

      







        {/* Events Hero */}
        <section className="mb-10">
          <h2 className="text-sm md:text-2xl text-[#ff596b] font-semibold mb-4">Events</h2>
          {/*<div  onClick={() => router.push(`/eventdetails`)} className=" overflow-hidden relative h-72  object-contain cursor-pointer" style={{ backgroundImage: `url('/coldplay.png')` , backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
     }} >
            <div className="absolute inset-0 " />
            <div className="absolute left-6 bottom-6 text-white">
              <div className="text-xl font-bold">Cricket</div>
              <div className="text-sm opacity-80">20+ Events</div>
            </div>
          </div>*/}

          {/*<div className="flex flex-col md:flex-row gap-4">
 
  <div
    onClick={() => router.push(`/eventdetails`)}
    className="overflow-hidden relative h-32 md:w-full  md:w-1/2 object-contain cursor-pointer"
    style={{
      backgroundImage: `url('/coldplay.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0" />
    <div className="absolute left-6 bottom-6 text-white bg-black/60 p-2 pr-5 rounded-lg">
      <div className="md:text-xl font-bold">Cricket</div>
      <div className="text-sm opacity-80">20+ Events</div>
    </div>
  </div>

  
  <div
    onClick={() => router.push(`/details`)}
    className="overflow-hidden relative h-32 md:w-1/2 object-contain cursor-pointer "
    style={{
      backgroundImage: `url('/Image 29.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",

    }}
  >
    <div className="absolute inset-0  " />
    <div className="absolute left-6 bottom-6 text-white md:text-white/500 bg-black/60 p-2 pr-5 rounded-lg">
      <div className="md:text-xl font-bold z-10">Football</div>
      <div className="text-sm opacity-80">15+ Events</div>
    </div>
  </div>
</div>*/}

{/* Wrapper */}
<div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
  {/* Event 1 */}
  <div
    onClick={() => router.push(`/eventdetails`)}
    className="shrink-0 w-full md:w-auto overflow-hidden relative h-32 md:h-[300px] object-contain cursor-pointer"
    style={{
      backgroundImage: `url('/coldplay.png')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0" />
    <div className="absolute left-4 bottom-4 text-white bg-black/60 p-2 pr-4 rounded-lg">
      <div className="text-sm md:text-xl font-bold">Cricket</div>
      <div className="text-xs md:text-sm opacity-80">20+ Events</div>
    </div>
  </div>

  {/* Event 2 */}
  <div
    onClick={() => router.push(`/details`)}
    className="shrink-0 w-full md:w-auto overflow-hidden relative h-32 md:h-[300px] object-contain cursor-pointer"
    style={{
      backgroundImage: `url('/Image 29.png')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0" />
    <div className="absolute left-4 bottom-4 text-white bg-black/60 p-2 pr-4 rounded-lg">
      <div className="text-sm md:text-xl font-bold">Football</div>
      <div className="text-xs md:text-sm opacity-80">15+ Events</div>
    </div>
  </div>

  {/* Repeat for more cards */}
</div>



        </section>

        {/* Best Event this week */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm md:text-2xl text-[#ff596b] font-bold">Best Event this Week</h2>
            <a onClick={() => router.push(`/eventlist`)} className="text-sm text-white/80 hover:underline cursor-pointer">View All →</a>
          </div>
         {/* <div className="grid grid-cols-1 sm:grid-cols-6 gap-10  ">
            {bestThisWeek.map((b) => (
              <div key={b.title} onClick={() => router.push(`/eventlist`)} className="shine-card rounded-lg overflow-hidden bg-[#0b223f] shadow-md text-center cursor-pointer ">
                <div className="h-40 bg-cover bg-center mt-5 " style={{ backgroundImage: `url('${b.img}')`,  backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center" }} />
                <div className="p-3 text-sm text-center">{b.title}</div>
              </div>
            ))}
          </div>*/}

          {/* Wrapper */}
<div className="flex overflow-x-auto sm:grid sm:grid-cols-6 gap-2 md:gap-6 no-scrollbar">
  {bestThisWeek.map((b) => (
    <div
      key={b.title}
      onClick={() => router.push(`/eventlist`)}
      className="shine-card shrink-0 w-30 h-60 sm:h-[auto] sm:w-auto rounded-lg overflow-hidden bg-[#0b223f] shadow-md text-center cursor-pointer"
    >
      <div
        className="h-40 bg-cover bg-center mt-5"
        style={{
          backgroundImage: `url('${b.img}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="p-3 text-sm text-center">{b.title}</div>
    </div>
  ))}
</div>

        </section>
      </div>

      {/* Desktop footer 
      <footer className="bg-[#f7e7d6] text-[#2b2b2b] py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-4 text-center text-sm">
           <Link href="/">
          <div>Home</div>
          </Link>
            <Link href="/new-release">
          <div>Film Mart</div>
          </Link>
          
          <Link href="/events">
          <div className="text-[#ff4655] font-semibold">Events</div>
          </Link>
          <Link href="/cinemashows">
          <div>Book Ticket</div>
          </Link>
           <Link href="/">
          <div>Profile</div>
          </Link>
        </div>
      </footer>*/}


 <footer className="bg-[#0b223f] py-6 text-center text-xs md:text-sm text-white/90 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
