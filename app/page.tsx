"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Section from "./components/Section";
import MovieCard from "./components/MovieCard";
import EventCard from "./components/EventCard";
import KidsCard from "./components/KidsCard";
import CinemaCard from "./components/CinemaCard";
import LoginDrawer from "./components/LoginDrawer";
import CategoryButton from "./components/CategoryButton";
import { Menu } from "lucide-react";
import SidebarFilters from "./components/SidebarFilters";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { Navigation, Pagination } from "swiper/modules";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";





export default function HomePage() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [showSearch, setShowSearch] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
   const [showLogin, setShowLogin] = useState(false);


const images = [
   "/carsoul1.webp",
   "/carsoul2.webp",
   "/carsoul3.webp",
   "/carsoul4.webp",
   "/carsoul5.webp",
   "/carsoul6.webp",
   "/carsoul7.webp",
];

    const [isOpen, setIsOpen] = useState<boolean>(false);
 const [selectedCity, setSelectedCity] = useState<string>("Ahmedabad");
  const handleCitySelect = (city: string) => {
     setSelectedCity(city);
    setIsOpen(false);
  };
 const [isOpenBell, setIsOpenBell] = useState(false);
  const notifications = [
    { id: 1, message: "New movie added: Inception", time: "2h ago" },
    { id: 2, message: "Your subscription will expire soon", time: "1d ago" },
    { id: 3, message: "Update available in app", time: "3d ago" },
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
          className="fixed inset-0 bg-black/50 z-40 transform transition-transform duration-300 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 border-b border-white/10 sm:flex-wrap ">
        <div className="flex items-center gap-0 sm:gap-2 cursor-pointer">
            <button
        className="p-1 sm:p-3 m-2 sm:m-4 bg-white/5 text-white rounded-md cursor-pointer "
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu  className="w-3 h-3 sm:w-6 h-6" />
      </button>
      <div  onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 cursor-pointer select-none text-sm sm:text-lg">
          <span className="font-semibold">{selectedCity}</span>
          <span>▼</span></div>
   <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-[#0C1B4D] text-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search for your city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white/10"
              />

              {/* Example City List */}
              <div className="mt-4 flex flex-col gap-2">
                {["Mumbai", "Delhi", "Bengaluru", "Chennai"].map((city) => (
                  <motion.div
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="p-2 hover:bg-white/10 rounded cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        </div>
        <div className="flex items-center gap-3 sm:gap-6 mt-2 sm:mt-0 w-full sm:w-auto justify-end">
          <span   className="text-sm sm:text-xl text-white cursor-pointer hover:text-yellow-400 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}>
  <FaSearch />
</span>

 {showSearch && (
          <input
            type="text"
            placeholder="Search movies..."
            className=" px-2 py-1 rounded-md text-white bg-text-white/10 focus:outline-none w-36 sm:w-48 shadow-md text-sm"
          />
        )}
         <span className="text-sm sm:text-xl cursor-pointer hover:text-yellow-400"  onClick={() => setIsOpenBell(true)}>
  <FaBell />
</span>
    <span
  onClick={() => setShowLogin(true)}
   
  className="relative inline-block text-sm sm:text-base font-medium transition-transform duration-300 hover:text-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300 cursor-pointer sign-in-btn"
>
  Sign In
</span>    
        
        </div>
      </header>


  <LoginDrawer isOpen={showLogin} onClose={() => setShowLogin(false)} />

{isOpenBell && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    onClick={() => setIsOpenBell(false)}
  ></div>
)}
 <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-[#0C1B4D] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpenBell ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-base sm:text-lg font-semibold">Notifications</h2>
          <button
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => setIsOpenBell(false)}
          >
            ✕
          </button>
        </div>

        {/* Notifications List */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className="p-3 bg-white/10 rounded-lg hover:bg-white/5 transition"
              >
                <p className="text-sm">{n.message}</p>
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No notifications</p>
          )}
        </div>
      </div>
      {/* Category Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center ml-2 sm:ml-0 gap-6 sm:gap-12 py-6 border-b border-white/10">
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



         speed={1000}
      
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    
        className="custom-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className={`slide-wrapper transition-all duration-500 ease-out ${
                activeIndex === idx
                  ? "sm:scale-110 opacity-100 "
                  : "sm:scale-90 opacity-70"
              }`}>
              <img
                src={src}
                alt={`slide-${idx}`}
                className="slide-img w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        
        
      {/* Recommended Movies */}
      <Section title="Recommended Movies" viewAllUrl="/new-release">
        <MovieCard img="/movie1.jpeg" title="Joker" rating={7.9} votes="10.5k" />
        <MovieCard img="/movie2.jpeg" title="Inception" rating={7.9} votes="10.5k" />
        <MovieCard img="/movie3.jpeg" title="Dune" rating={7.9} votes="10.5k" />
          <MovieCard img="/movie3.jpeg" title="Dune" rating={7.9} votes="10.5k" />
       
      </Section>



     
      {/* Kids Special */}
      <Section title="Kids’ Special" viewAllUrl="/events">
        <KidsCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
        <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
         <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
          <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
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
      <Section title="Best Event this Week" viewAllUrl="/events">
        <EventCard img="/food.png" title="Food Event - KOGU" />
        <EventCard img="/comedy.png" title="Comedy by Peter Funk" />
        <EventCard img="/concerts.png" title="Beat Box" />
        <EventCard img="/standup.png" title="Beat Box" />
      </Section>

      {/* Cinema Near You */}
      <Section title="Cinema Near You" viewAllUrl="cinemashows">
        <CinemaCard name="Viva Cinema" distance="5.2" rating={4.9} time="Closed 10:00 PM" imageUrl="/img-cinema.png" />
        <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
          <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema.png" />
             <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
      </Section>

      {/* Footer */}
      <footer className="bg-[#091339] py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
        © 2025 Movie App. All Rights Reserved.
      </footer>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}

