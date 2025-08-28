// components/NewReleasesPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { FiFilter } from "react-icons/fi";
import SidebarFilters from "../components/SidebarFilters";
import { useRouter } from "next/navigation";
import "./new-release.css";
import "../globals.css";
import {X} from "lucide-react";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Filters from "../components/Filters";
import { FaSearch } from "react-icons/fa";
type Movie = {
  title: string;
  rating: string;
  votes: string;
  poster: string;
  tag?: string;
  language:string;
};

const banners = ["/Image 34.png", "/coldplay.png", "/Image 29.png"]; // top carousel banners
const sampleMovies: Movie[] = [
  { title: "Tanvi", rating: "7.9", votes: "10.5k Votes", poster: "/tanvi.png", tag: "New", language: "English" },
  { title: "Joker", rating: "7.9", votes: "10.5k Votes", poster: "/joker.png" ,language: "Hindi"},
  { title: "Inception", rating: "7.9", votes: "10.5k Votes", poster: "/inspection.png", language: "Telugu" },
  { title: "Joker", rating: "7.9", votes: "10.5k Votes", poster: "/joker.png",language: "Malayalam" },
  { title: "Inception", rating: "7.9", votes: "10.5k Votes", poster: "/inspection.png",language:"English" },
  { title: "Tanvi", rating: "7.9", votes: "10.5k Votes", poster: "/tanvi.png",language:"English" },
  
];

const placeholders = [
  "Search movies...",
  "Search events...",
  "Search sports...",
  "Search concerts...",
  "Search comedy shows...",
  "Search workshops...",
];
export default function NewReleasesPage() {
  // carousel state
   const [showSearch, setShowSearch] = useState(false);
  const [slide, setSlide] = useState(0);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const router = useRouter();
const [openFilters, setOpenFilters] = useState(false);
const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


  // auto play
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % banners.length), 3500);
    return () => clearInterval(t);
  }, []);


   const [selectedLang, setSelectedLang] = useState<string>("New Releases");

    const filteredMovies =
    selectedLang === "New Releases"
      ? sampleMovies
      : sampleMovies.filter((movie) => movie.language === selectedLang);



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
    <div className="min-h-screen font-inter bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white ">
      {/* Sidebar */}
          <SidebarFilters isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
    
    
      <div className="max-w-7xl mx-auto px-2 md:px-8 md:py-3 ">
     
       <header className=" px-0  md:gap-5 sm:px-3 md:px-2 py-2 flex flex-row md:mb-6 justify-between md:items-center md:justify-between  md:border-none border-b border-white/10">
          <div className="flex items-center gap-4">
         <button onClick={() => router.push(`/`)} className="w-5 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-base md:text-3xl">
              ‹
            </button>
            <div>
              <h1 className=" text-sm md:text-3xl sm:font-semibold">Film Trade</h1>
         
            </div>
          </div>

 <div className="flex flex-row md:items-center gap-4 md:gap-7 md:mt-0">
          <div className=" hidden md:flex flex flex-col md:flex-row items-center gap-3 md:gap-3">
            <button onClick={() => router.push("/new-release")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#ff4655] hover:bg-white/10 text-sm cursor-pointer">Film Mart</button>
            <button onClick={() => router.push("/events")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#ff4655] bg-white/6 hover:bg-[#ff4655] text-white text-sm cursor-pointer">Events</button>
            <button onClick={() => router.push("/cinemashows")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-white/6 hover:bg-[#ff4655] text-sm cursor-pointer">Book Ticket</button>
          </div>

       
          <div className="flex items-center gap-2 relative">
                   <span   className="text-sm sm:text-xl text-white cursor-pointer hover:text-yellow-400 cursor-pointer"
                onClick={() => setShowModal(true)}    >
             <FaSearch />
           </span>
           
           
                  {/*} <div className="relative w-full sm:w-64">
                     <input
                       type="text"
                       value={value}
                        onChange={(e) => setValue(e.target.value)}
                       className="px-3 py-1 rounded-md text-white bg-white/10 focus:outline-none w-full sm:w-64 shadow-md text-sm placeholder-transparent"
                       placeholder="."
                     />
           

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
                   </div>*/}
                 

       
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
                       <div className="flex items-start gap-2 md:gap-7 mt-6 text-white  text-sm max-sm:overflow-x-auto max-sm:whitespace-nowrap scrollbar-hide">
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
                       <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
                        
                         <h3 className="text-white font-semibold mb-3">
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
                                 <p className="text-sm font-medium text-white">{m.title}</p>
                                 <p className="text-xs text-white">Movie</p>
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
  <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0">
        <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
        <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
        <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/cinemashows" />
      </div>
     
        <div className="mb-8 relative">
          <div className="w-full mx-auto rounded-2xl overflow-hidden bg-[#0b223f]">
            <div className="relative w-full h-[50vw] md:h-[420px]">
              {banners.map((b, i) => (
                <div
                  key={b}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  
                  <Image
                    src={b}
                    alt={`Banner ${i + 1}`}
                    width={1600}
                    height={400}
                    className="relative w-full h-[300px] md:h-[420px] object-contain "
                     style={{
    width: "100%",
    height: "auto",
    objectFit: "contain"
  
  }}
                  />
                </div>
              ))}
            </div>

          
            <button
              onClick={() => setSlide((s) => (s - 1 + banners.length) % banners.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 md:left-5"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % banners.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/10 md:right-5"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          
            <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex md:gap-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`w-3 h-3 rounded-full ${idx === slide ? "bg-white" : "bg-white/10"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        


  {/*<div className="flex gap-3 flex-wrap md-flex:no-wrap items-center mb-6">
        {["New Releases", "English", "Hindi", "Malayalam", "Telugu"].map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg rounded-full cursor-pointer ${
              selectedLang === lang ? "bg-[#ff4655] text-white" : "bg-white/6 hover:bg-[#ff4655]"
            }`}
          >
            {lang}
          </button>

        ))}
         <button
        onClick={() => setIsSidebarOpen(true)}
        className="px-2 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg bg-white/6 hover:bg-[#ff4655] text-white flex items-center gap-1"
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



        
        <div className="mb-8">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-3 md:p-6 flex items-center justify-between">
            <div>
              <div className="text-sm sm:text-lg font-semibold">Coming Soon </div>
            
              <div className="text-xs md:text-sm opacity-90">Explore Upcoming Movies</div>
 </div>
            <button onClick={() => router.push("/details")} className="w-7 h-7 md:h-10 md:w-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      
        <section>
          <h2 className="text-xs md:text-2xl text-[#ff596b] font-semibold mb-4">Recommended Movies</h2>

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {filteredMovies.map((m, i) => (

              <div key={i} onClick={() => router.push(`/details`)} className="rounded-xl overflow-hidden bg-[#0b233f] p-3 cursor-pointer hover:text-white/70 ">
                <div className="relative rounded-md overflow-hidden">
                
                  <Image
                    src={m.poster}
                    alt={m.title}
                    width={400}
                    height={560}
                    className="w-full h-[160px] md:h-[300px] object-cover rounded-md new-release-image " 
                  />

                 
                  {m.tag && (
                    <div className="absolute top-3 left-3 bg-[#ff4655] px-2 py-1 rounded text-xs font-medium">{m.tag}</div>
                  )}
                </div>

                <div className="mt-1 md:mt-3 flex items-center justify-between">
                 
                    <div className="text-[10px] md:text-lg md:font-semibold">{m.title}</div>
                    <div className="text-xm md:text-[10px] ml-3 text-white/70 hidden md:block">{m.rating} <span className=" text-white/60">•</span> <span className=" text-xm md:text-xm text-white/60">{m.votes}</span></div>
                  
                  <button className="bg-white/6 md:px-3 md:py-1 rounded-md text-[10px] md:text-sm">Details</button>
                </div>
              </div>
            ))}
          </div>



    

      

        </section>

        
        <div className="mt-7 sm:mt-10 md:mt-10 flex flex-row items-center gap-10 md:gap-4 md:flex-row md:items-center md:justify-between  ">
          <button onClick={() => router.push(`/details`)} className="w-[140px] md:w-[auto] bg-[#ff4655] text-white rounded-xl cursor-pointer mb-10 sweep-button"><span>Browse By Cinemas</span></button>
       
        </div>
      </div>






  <footer className="bg-white/10 py-6 text-center text-xs sm:text-sm text-white/80 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>


      {/* global styles: font import */}
<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .font-inter {
    font-family: 'Inter', sans-serif;
  }
`}</style>

    </div>
  );
}
