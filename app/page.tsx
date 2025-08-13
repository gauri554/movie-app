"use client";
import Image from "next/image";
import Section from "./components/Section";
import MovieCard from "./components/MovieCard";
import EventCard from "./components/EventCard";
import CinemaCard from "./components/CinemaCard";
import CategoryButton from "./components/CategoryButton";
import { Menu } from "lucide-react";
import SidebarFilters from "./components/SidebarFilters";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./globals.css";

export default function HomePage() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [showSearch, setShowSearch] = useState(false);

const images = [
   "/carsoul1.webp",
   "/carsoul2.webp",
   "/carsoul3.webp",
   "/carsoul4.webp",
   "/carsoul5.webp",
   "/carsoul6.webp",
   "/carsoul7.webp",
];

  

{/*const images = [
    "/Group 2529.png",
    "/Image 29.png",
    "/Coldplay.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);*/}

  return (

    <div className="bg-[#0C1B4D] font-poppins text-white min-h-screen font-sans">
      
 

      {/* Sidebar */}
      <SidebarFilters isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
            <button
        className="p-3 m-4 bg-white/5 text-white rounded-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>
          <span className="font-semibold text-lg">Ahmedabad</span>
          <span>▼</span>
        </div>
        <div className="flex items-center gap-6">
          <span   className="text-xl text-white cursor-pointer hover:text-yellow-400"
          onClick={() => setShowSearch(!showSearch)}>
  <FaSearch />
</span>

 {showSearch && (
          <input
            type="text"
            placeholder="Search movies..."
            className="px-3 py-1 rounded-md text-white bg-text-white/10 focus:outline-none w-48 shadow-md"
          />
        )}
         <span className="text-xl">
  <FaBell />
</span>
        
          <span className="text-xl">
  <FaBarcode /></span>
        </div>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center gap-12 py-6 border-b border-white/10">
        <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
        <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
        <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/cinemashows" />
      </div>

      {/* Hero Banner 
      <div className="px-8 mt-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/Group 2529.png"
            alt="Now in Cinema"
            width={900}
            height={200}
            className="w-full h-[320px] "
          />
         
        </div>
      </div>*/}

     {/*} <div className="px-8 mt-6">
      <div className="relative rounded-lg overflow-hidden h-[320px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700w-full overflow-hidden ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
             width={1600}
             height={500}
              className=" w-full h-full ob
              ject-contain"
      
            />
          </div>
        ))}

       
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>*/}


  
      <div className="w-full py-6">
      <Swiper
        modules={[Navigation, Pagination]}
       
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation
       initialSlide={4}
        pagination={{ clickable: true }}
        className="custom-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-wrapper">
              <img
                src={src}
                alt={`slide-${idx}`}
                className="slide-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        
        
      {/* Recommended Movies */}
      <Section title="Recommended Movies">
        <MovieCard img="/movie1.jpeg" title="Joker" rating={7.9} votes="10.5k" />
        <MovieCard img="/movie2.jpeg" title="Inception" rating={7.9} votes="10.5k" />
        <MovieCard img="/movie3.jpeg" title="Dune" rating={7.9} votes="10.5k" />
          <MovieCard img="/movie3.jpeg" title="Dune" rating={7.9} votes="10.5k" />
       
      </Section>

      {/* Kids Special */}
      <Section title="Kids’ Special">
        <EventCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
        <EventCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
         <EventCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
          <EventCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
      </Section>

      {/* Ad Banner 
      <div className="px-8 my-8">
        <Image
          src="/ad-banner.png"
          alt="Recharge Offer"
          width={1200}
          height={200}
          className="rounded-lg"
        />
      </div>*/}

      {/* Best Event This Week */}
      <Section title="Best Event this Week">
        <EventCard img="/movie1.jpeg" title="Food Event - KOGU" />
        <EventCard img="/movie2.jpeg" title="Comedy by Peter Funk" />
        <EventCard img="/movie3.jpeg" title="Beat Box" />
                <EventCard img="/movie3.jpeg" title="Beat Box" />
      </Section>

      {/* Cinema Near You */}
      <Section title="Cinema Near You">
        <CinemaCard name="Viva Cinema" distance="5.2" rating={4.9} time="Closed 10:00 PM" imageUrl="/img-cinema.png" />
        <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
          <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema.png" />
             <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
      </Section>

      {/* Footer */}
      <footer className="bg-[#091339] py-6 text-center text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}

