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

export default function NewReleasesPage() {
  // carousel state
   const [showSearch, setShowSearch] = useState(false);
  const [slide, setSlide] = useState(0);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const router = useRouter();


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
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white">
      {/* Sidebar */}
          <SidebarFilters isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
    
    
      <div className="max-w-7xl mx-auto px-8 py-10">
     
       <header className=" px-4 sm:px-6 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-4">
         <button onClick={() => router.push(`/`)} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Film Trade</h1>
              <div className="text-sm text-white/70">Ahmedabad | 34 Movies</div>
            </div>
          </div>

 <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
          <div className=" flex flex-col md:flex-row items-center gap-3 sm:gap-6">
            <button onClick={() => router.push("/new-release")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#ff4655] hover:bg-white/10 text-sm cursor-pointer">Film Mart</button>
            <button onClick={() => router.push("/events")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#ff4655] bg-white/6 hover:bg-bg-[#ff4655] text-white text-sm cursor-pointer">Events</button>
            <button onClick={() => router.push("/cinemashows")} className="w-full sm:w-auto px-4 py-2 rounded-full bg-white/6 hover:bg-[#ff4655] text-sm cursor-pointer">Book Ticket</button>
          </div>

       
          <div className="flex items-center gap-3">
            <button  onClick={() => setShowSearch(!showSearch) }className="p-2 rounded-full bg-white/6 hover:bg-white/10 cursor-pointer">
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>
              {showSearch && (
          <input
            type="text"
            placeholder="Search movies..."
            className="px-3 py-1 rounded-md text-white bg-white/10 shadow-md focus:outline-none w-48"
          />
        )}
            {/*<button className="p-2 rounded-full bg-white/6 hover:bg-white/10">
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
              </svg>
            </button>*/}
          </div></div>
        </header>

     
        <div className="mb-8 relative">
          <div className="w-full mx-auto rounded-2xl overflow-hidden bg-[#0b223f]">
            <div className="relative w-full h-[45vw] md:h-[420px]">
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

        


  <div className="flex gap-3 flex-wrap md-flex:no-wrap items-center mb-6">
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
      </div>


        
        <div className="mb-8">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-3 md:p-6 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Coming Soon</div>
              <div className="text-sm opacity-90">Explore Upcoming Movies</div>
            </div>
            <button onClick={() => router.push("/details")} className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      
        <section>
          <h2 className="text-2xl text-[#ff596b] font-semibold mb-4">Recommended Movies</h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((m, i) => (

              <div key={i} onClick={() => router.push(`/details`)} className="rounded-xl overflow-hidden bg-[#0b233f] p-3 cursor-pointer hover:text-white/70 ">
                <div className="relative rounded-md overflow-hidden">
                
                  <Image
                    src={m.poster}
                    alt={m.title}
                    width={400}
                    height={560}
                    className="w-full h-[260px] md:h-[300px] object-cover rounded-md new-release-image " 
                  />

                 
                  {m.tag && (
                    <div className="absolute top-3 left-3 bg-[#ff4655] px-2 py-1 rounded text-xs font-medium">{m.tag}</div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{m.title}</div>
                    <div className="text-sm text-white/70">{m.rating} <span className="ml-3 text-white/60">•</span> <span className="ml-3 text-sm text-white/60">{m.votes}</span></div>
                  </div>
                  <button className="bg-white/6 px-3 py-1 rounded-md">Details</button>
                </div>
              </div>
            ))}
          </div>



    

      

        </section>

        
        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <button onClick={() => router.push(`/details`)} className="w-full md:w-[auto] bg-[#ff4655] text-white rounded-xl cursor-pointer sweep-button"><span>Browse By Cinemas</span></button>
          <div className="text-sm text-white/70">Showing {sampleMovies.length} of 34 movies</div>
        </div>
      </div>









      {/* global styles: font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
