// components/NewReleasesPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import SidebarFilters from "../components/SidebarFilters";
import { useRouter } from "next/navigation";
type Movie = {
  title: string;
  rating: string;
  votes: string;
  poster: string;
  tag?: string;
};

const banners = ["/Image 34.png", "/coldplay.png", "/Image 29.png"]; // top carousel banners
const sampleMovies: Movie[] = [
  { title: "Tanvi", rating: "7.9", votes: "10.5k Votes", poster: "/tanvi.png", tag: "New" },
  { title: "Joker", rating: "7.9", votes: "10.5k Votes", poster: "/joker.png" },
  { title: "Inception", rating: "7.9", votes: "10.5k Votes", poster: "/inspection.png" },
  { title: "Joker", rating: "7.9", votes: "10.5k Votes", poster: "/joker.png" },
  { title: "Inception", rating: "7.9", votes: "10.5k Votes", poster: "/inspection.png" },
  { title: "Tanvi", rating: "7.9", votes: "10.5k Votes", poster: "/tanvi.png" },
];

export default function NewReleasesPage() {
  // carousel state
   const [showSearch, setShowSearch] = useState(false);
  const [slide, setSlide] = useState(0);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const router = useRouter();
  // auto play
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % banners.length), 3500);
    return () => clearInterval(t);
  }, []);

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
        {/* Header (desktop-friendly) */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
          <button
        className="p-3 m-4 bg-white/5 text-white rounded-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Film Trade</h1>
              <div className="text-sm text-white/70">Ahmedabad | 34 Movies</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => router.push("/new-release")} className="px-4 py-2 rounded-full bg-[#ff4655] hover:bg-white/10 text-sm cursor-pointer">Film Mart</button>
            <button onClick={() => router.push("/events")} className="px-4 py-2 rounded-full bg-[#ff4655] bg-white/6 hover:bg-bg-[#ff4655] text-white text-sm cursor-pointer">Events</button>
            <button onClick={() => router.push("/cinemashows")} className="px-4 py-2 rounded-full bg-white/6 hover:bg-[#ff4655] text-sm cursor-pointer">Book Ticket</button>
          </div>

          {/* right icons (search, bell) */}
          <div className="flex items-center gap-3">
            <button  onClick={() => setShowSearch(!showSearch) }className="p-2 rounded-full bg-white/6 hover:bg-white/10">
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
            <button className="p-2 rounded-full bg-white/6 hover:bg-white/10">
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
              </svg>
            </button>
          </div>
        </header>

        {/* top carousel */}
        <div className="mb-8 relative">
          <div className="w-full mx-auto rounded-2xl overflow-hidden bg-[#0b223f]">
            <div className="relative w-full h-[320px] md:h-[420px]">
              {banners.map((b, i) => (
                <div
                  key={b}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  {/* Use object-contain to keep full banner visible (may letterbox) */}
                  <Image
                    src={b}
                    alt={`Banner ${i + 1}`}
                    width={1600}
                    height={400}
                    className="w-full h-full object-contain "
                     style={{
    width: "100%",
    height: "auto",
    objectFit: "contain"
  
  }}
                  />
                </div>
              ))}
            </div>

            {/* arrows */}
            <button
              onClick={() => setSlide((s) => (s - 1 + banners.length) % banners.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % banners.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/10"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
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

        {/* chips row (keeps same content) */}
        <div className="flex gap-3 flex-wrap items-center mb-6">
          <button className="px-4 py-2 rounded-full bg-[#ff4655] text-white">New Releases</button>
          <button className="px-4 py-2 rounded-full bg-white/6">English</button>
          <button className="px-4 py-2 rounded-full bg-white/6">Hindi</button>
          <button className="px-4 py-2 rounded-full bg-white/6">Telegu</button>
          <button className="px-4 py-2 rounded-full bg-white/6">Malayalam</button>
        </div>

        {/* CTA banner */}
        <div className="mb-8">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-6 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Coming Soon</div>
              <div className="text-sm opacity-90">Explore Upcoming Movies</div>
            </div>
            <button className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* movies grid - desktop view uses multi-column */}
        <section>
          <h2 className="text-2xl text-[#ff596b] font-semibold mb-4">Recommended Movies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleMovies.map((m, i) => (

              <div key={i} onClick={() => router.push(`/details`)} className="rounded-xl overflow-hidden bg-[#0b233f] p-3 cursor-pointer hover:text-white/70">
                <div className="relative rounded-md overflow-hidden">
                  {/* Poster: object-cover to fill the card nicely */}
                  <Image
                    src={m.poster}
                    alt={m.title}
                    width={400}
                    height={560}
                    className="w-full h-[260px] md:h-[300px] object-cover rounded-md"
                  />

                  {/* optional small play icon / tag in top-right */}
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

        {/* desktop footer-like actions */}
        <div className="mt-10 flex items-center justify-between">
          <button onClick={() => router.push(`/details`)} className="bg-[#ff4655] text-white px-6 py-3 rounded-xl cursor-pointer">Browse by Cinemas</button>
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
