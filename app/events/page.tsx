"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Filters from "../components/Filters";
import { FiFilter } from "react-icons/fi";
import "../globals.css";
import {X} from "lucide-react";
import "../components/EventCard.css";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen font-inter bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white">

      <div className="max-w-7xl mx-auto px-2 md:px-8 md:py-3">
        {/* Header */}
 <header className=" px-0  md:gap-5 py-2 flex flex-row justify-between md:items-center md:justify-between mb-4 border-b border-white/10 md:border-0">
          <div className="flex items-center gap-4">
         <button onClick={() => router.push(`/new-release`)} className="w-5 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-base md:text-3xl">
              ‹
            </button>
            <div>
              <h1 className=" text-sm md:text-3xl sm:font-semibold">All Events</h1>
             
            </div>
          </div>

 <div className="flex flex-row md:items-center gap-4 md:gap-7 md:mt-0">
          <div className=" hidden md:flex flex flex-col md:flex-row items-center gap-3 md:gap-3">
            <button onClick={() => router.push("/new-release")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-white/6 hover:bg-[#ff4655] text-sm cursor-pointer">Film Mart</button>
            <button onClick={() => router.push("/events")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#ff4655]  hover:bg-white/10 text-white text-sm cursor-pointer">Events</button>
            <button onClick={() => router.push("/cinemashows")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-white/6 hover:bg-[#ff4655] text-sm cursor-pointer">Book Ticket</button>
          </div>

       
          <div className="flex items-center gap-2 relative">
                   <span   className="text-sm sm:text-xl text-white cursor-pointer hover:text-yellow-400 cursor-pointer"
                onClick={() => setShowModal(true)}    >
             <FaSearch />
           </span>
      
      {/* Search Modal */}
                      <AnimatePresence>
                 {showModal && (
                   <motion.div
                     className="fixed inset-0 flex items-start justify-center    bg-black/60 backdrop-blur-sm z-50   " 
                     onClick={() => setShowModal(false)}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                   >
                     <motion.div
                       initial={{ y: -50, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       exit={{ y: -50, opacity: 0 }}
                       transition={{ duration: 0.4 }}
                       className=" w-[90%] sm:w-[650px] max-h-[80vh] rounded-2xl shadow-lg mt-15 md:mt-20 p-2 md:p-6   bg-[#0b233f]/95  backdrop-blur-sm z-50 flex flex-col  "
                        onClick={(e) => e.stopPropagation()}
                     >

                      <div className="sticky top-0  z-20 pt-6 md:pt-3 pl-3 md:pl-0 md:p-6 pb-3 ">
          {/* Close button */}
          <button
              onClick={() => setShowModal(false)}
            className="absolute top-1 right-1 md:top-1 md:right-1 text-gray-500 hover:text-white cursor-pointer"
          >
            <X size={22} />
          </button>
                       {/* Search Input */}
                       <div className="relative md:w-full">
                         <input
                           type="text"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                           className="px-4 py-2  w-[220px] sm:w-[530px] rounded-xl border border-gray-200 bg-white text-black text-sm focus:outline-none placeholder-transparent"
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
                                 className="text-gray-800 text-sm"
                               >
                                 {placeholders[placeholderIndex]}
                               </motion.span>
                             </AnimatePresence>
                           </div>
                         )}
                       </div>
         
                       {/* Tabs */}
                       <div className="flex items-start gap-2 md:gap-7 mt-6 text-white  text-[10px] md:text-sm max-sm:overflow-x-auto max-sm:whitespace-nowrap scrollbar-hide">
                         {["All", "Concerts", "Events", "Movies", "Activity"].map((tab, i) => (
                           <button
                             key={i}
                             className={`px-4 py-1 rounded-full ${
                               tab === "All" ? "bg-white/10 text-white" : "hover:bg-white/10 text-white"
                             }`}
                           >
                             {tab}
                           </button>
                         ))}
                       </div>
         </div>
       
                       {/* Trending Section */}
                       <div className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-2">
                        
                         <h3 className="text-white text-xs md:text-base font-semibold mb-3">
                           Trending in Ahmedabad
                         </h3>
                         <div className="grid sm:grid-cols-2 gap-4">
                           {[
                             { title: "War 2", img: "/movie1.jpeg" },
                             { title: "Coolie The Powerhouse", img: "/movie2.jpeg" },
                             { title: "Nobody 2", img: "/movie3.jpeg" },
                             { title: "Son Of Sardar 2", img: "/movie2.jpeg" },
                               { title: "War 2", img: "/movie1.jpeg" },
                             { title: "Coolie The Powerhouse", img: "/movie2.jpeg" },
                             { title: "Nobody 2", img: "/movie3.jpeg" },
                             { title: "Son Of Sardar 2", img: "/movie2.jpeg" },
                                { title: "War 2", img: "/movie1.jpeg" },
                             { title: "Coolie The Powerhouse", img: "/movie2.jpeg" },
                             { title: "Nobody 2", img: "/movie3.jpeg" },
                             { title: "Son Of Sardar 2", img: "/movie2.jpeg" },
                           ].map((m, i) => (
                             <div key={i} className="flex items-center gap-3">
                               <img src={m.img} className="w-10 h-10 rounded-md" alt={m.title} />
                               <div>
                                 <p className="text-xs md:text-sm font-medium text-white">{m.title}</p>
                                 <p className="text-[10px] md:text-xs text-white">Movie</p>
                               </div>
                             </div>
                           ))}
                         </div>
                       
                       </div>
        
                       {/* Close button */}
                      
                     </motion.div>
                   </motion.div>
                 )}
                 </AnimatePresence>
          </div></div>
        </header>

<div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12  sm:py-4 pb-3 md:pb-0 mb-4 border-b border-white/10 md:mb-0">
        <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
        <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
        <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/cinemashows" />
      </div>

          <div className="flex gap-3 md:flex-wrap flex-nowrap overflow-x-auto no-scrollbar items-center mb-6">
          {["New Releases", "English", "Hindi", "Malayalam", "Telugu", "Tamil"].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`shrink-0 px-2 md:px-4 py-1 md:py-2 text-[10px] md:text-sm rounded-full cursor-pointer ${
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
            className="shrink-0 px-2 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-sm bg-white/6 hover:bg-[#ff4655] text-white flex items-center gap-1 cursor-pointer"
          >
            <FiFilter className="w-3 h-3 md:w-4 md:h-4" />
            Filter
          </button>
          <Filters open={openFilters} onClose={() => setOpenFilters(false)} />
        </div>

{/* Upcoming Events Banner */}
        <div className="mb-10">
  <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-4 md:p-6 shadow-lg flex flex-row items-center justify-between md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Text Section */}
    <div>
      <div className="text-sm md:text-2xl font-semibold">Upcoming Events</div>
      <div className="text-xs sm:text-sm opacity-90">In Cinemas near you</div>
    </div>

    {/* Button */}
    <button
      onClick={() => router.push(`/eventlist`)}
      className="w-9 h-9 md:w-12 md:h-12  md:mt-0 rounded-full bg-white/20 flex items-center justify-center cursor-pointer self-start md:self-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 md:h-6 md:w-6 text-white"
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

        <section>
  <h2 className="text-sm md:text-2xl text-[#ff596b] font-semibold mb-4 ">
    Shows
  </h2>
  <div className="flex gap-2 md:gap-4 overflow-x-auto sm:hidden no-scrollbar mb-10 ">
  {[...filteredComedy, ...filteredMusic].map((item) => (
    <div
      key={item.title}
      onClick={() => router.push("/eventlist")}
      className="shrink-0 w-[100px] h-[130px] md:w-[180px] md:h-[220px] rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] cursor-pointer basis-1/2 sm:basis-1/4"
    >
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${item.img}')` }}
      />
      <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60">
        <div className="text-sm font-semibold">{item.title}</div>
        <div className="text-xs opacity-80">{item.subtitle}</div>
      </div>
    </div>
  ))}

  {filteredComedy.length + filteredMusic.length === 0 && (
    <p className="text-white/60">No shows available for {selectedLang}</p>
  )}
</div>

{/* Tablet & Desktop view - Grid */}
<div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
  {filteredComedy.map((c) => (
    <div
      key={c.title}
      onClick={() => router.push("/eventlist")}
      className="rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] cursor-pointer"
    >
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${c.img}')` }}
      />
      <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60">
        <div className="text-sm md:text-lg font-semibold">{c.title}</div>
        <div className="text-xs md:text-sm opacity-80">{c.subtitle}</div>
      </div>
    </div>
  ))}
  {filteredMusic.map((m) => (
    <div
      key={m.title}
      onClick={() => router.push("/eventlist")}
      className="rounded-xl overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/20 transition duration-500 hover:border-white/40 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] cursor-pointer"
    >
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${m.img}')` }}
      />
      <div className="p-1 pl-2 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0 bg-black/60">
        <div className="text-sm md:text-lg font-semibold">{m.title}</div>
        <div className="text-xs md:text-sm opacity-80">{m.subtitle}</div>
      </div>
    </div>
  ))}

  {filteredComedy.length + filteredMusic.length === 0 && (
    <p className="text-white/60">No shows available for {selectedLang}</p>
  )}
</div>
</section>


        {/* Events Hero */}
        <section className="mb-10">
          <h2 className="text-sm md:text-2xl text-[#ff596b] font-semibold mb-4">Events</h2>
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
            <a onClick={() => router.push(`/eventlist`)} className="text-xs md:text-sm text-white/80 hover:underline cursor-pointer">View All →</a>
          </div>
          {/* Wrapper */}
<div className="flex overflow-x-auto sm:grid sm:grid-cols-6 gap-5 md:gap-6 no-scrollbar">
  {bestThisWeek.map((b) => (
    <div
      key={b.title}
      onClick={() => router.push(`/eventlist`)}
      className="shine-card shrink-0 w-32 h-60 sm:h-[auto] sm:w-auto rounded-lg overflow-hidden bg-[#0b223f] shadow-md text-center cursor-pointer basis-1/2 sm:basis-1/3"
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
      <div className="p-3 text-[11px] md:text-sm text-center">{b.title}</div>
    </div>
  ))}
</div>

        </section>
      </div>

 <footer className="bg-[#0b223f] py-6 text-center text-xs md:text-sm text-white/90 mt-10">
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
