"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
type Chip = { label: string; active?: boolean };

const languageChips: Chip[] = [
  { label: "English", active: true },
  { label: "Hindi" },
  { label: "Telegu" },
  { label: "Malayalam" },
  { label: "Punjabi" },
];

const comedyShows = [
  { title: "Stand Up", subtitle: "25+ Events", img: "/standup.png" , slug: "stand-up"},
  { title: "Roast", subtitle: "2 Events", img: "/roast.png" },
  { title: "Open Mic", subtitle: "2 Events", img: "/openmic.png" },
];

const musicShows = [
  { title: "Concerts", subtitle: "8 Events", img: "/concerts.png" },
  { title: "Music Festival", subtitle: "5 Events", img: "/musicfestival.png" },
  { title: "Club Gigs", subtitle: "1 Events", img: "/clubgigs.png" },
];

const bestThisWeek = [
  { title: "Food Event - KOGU", img: "/food.png" },
  { title: "Comedy by Peter Funk", img: "/comedy.png" },
  { title: "Beat Box", img: "/concerts.png" },
  { title: "Live Music", img: "/musicfestival.png" },
  { title: "Dance Show", img: "/roast.png" },
  { title: "Theatre Play", img: "/standup.png" },
];

export default function AllEventsPage() {
   const router = useRouter();
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
           {/* <button className="p-2 rounded-full bg-white/6 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>*/}
            <div>
              <h1 className="text-3xl font-semibold">All Events</h1>
              <div className="text-sm text-white/70">Ahmedabad</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-white/6 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Language chips */}
        <div className="flex flex-wrap gap-3 mb-6">
          {languageChips.map((c) => (
            <button key={c.label} className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${c.active ? "bg-[#ff4655] text-white" : "bg-white/6 text-white/80 hover:bg-white/10"}`}>
              {c.label}
              {c.active && <span className="ml-2 inline-block bg-white/10 px-2 py-0.5 rounded-md text-xs">x</span>}
            </button>
          ))}
        </div>

        {/* Upcoming Events Banner */}
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff5a6b] to-[#ff2f6d] p-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="text-2xl font-semibold">Upcoming Events</div>
              <div className="text-sm opacity-90">In Cinemas near you</div>
            </div>
            <button className="mt-4 md:mt-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Comedy and Music shows side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <section>
            <h2 className="text-2xl text-[#ff596b] font-semibold mb-4">Comedy Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comedyShows.map((c) => (
                <div key={c.title}  onClick={() => router.push(`/eventlist`)} className="rounded-xl overflow-hidden relative">
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${c.img}')` }} />
                  <div className="p-4 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0">
                    <div className="text-lg font-semibold">{c.title}</div>
                    <div className="text-sm opacity-80">{c.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-[#ff596b] font-semibold mb-4">Music Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicShows.map((c) => (
                <div key={c.title} onClick={() => router.push(`/eventlist`)} className="rounded-xl overflow-hidden relative">
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${c.img}')` }} />
                  <div className="p-4 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0">
                    <div className="text-lg font-semibold">{c.title}</div>
                    <div className="text-sm opacity-80">{c.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Events Hero */}
        <section className="mb-10">
          <h2 className="text-2xl text-[#ff596b] font-semibold mb-4">Events</h2>
          <div  onClick={() => router.push(`/eventdetails`)} className=" overflow-hidden relative h-72  object-contain" style={{ backgroundImage: `url('/coldplay.png')` , backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
     }} >
            <div className="absolute inset-0 " />
            <div className="absolute left-6 bottom-6 text-white">
              <div className="text-xl font-bold">Cricket</div>
              <div className="text-sm opacity-80">20+ Events</div>
            </div>
          </div>
        </section>

        {/* Best Event this week */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-[#ff596b] font-semibold">Best Event this Week</h2>
            <a className="text-sm text-white/80 hover:underline">View All →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-10">
            {bestThisWeek.map((b) => (
              <div key={b.title} className="rounded-lg overflow-hidden bg-[#0b223f] shadow-md text-center">
                <div className="h-40 bg-cover bg-center mt-5" style={{ backgroundImage: `url('${b.img}')`,  backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center" }} />
                <div className="p-3 text-sm text-center">{b.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Desktop footer */}
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
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
