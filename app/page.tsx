"use client";
import { useState, useEffect, useRef } from "react";
import Section from "./components/Section";
import MovieCard from "./components/MovieCard";
import EventCard from "./components/EventCard";
import KidsCard from "./components/KidsCard";
import CinemaCard from "./components/CinemaCard";
import LoginDrawer from "./components/LoginDrawer";
import CategoryButton from "./components/CategoryButton";
import { FaSearch } from "react-icons/fa";
import {X} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import LocationModal from "./components/LocationModal";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"; 
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


const placeholders = [
  "Search movies...",
  "Search events...",
  "Search sports...",
  "Search concerts...",
  "Search comedy shows...",
  "Search workshops...",
];


export default function HomePage() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [showSearch, setShowSearch] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
   const [showLogin, setShowLogin] = useState(false);
const router=useRouter();
const [showModal, setShowModal] = useState(false);
 const [openProfile, setOpenProfile] = useState(false);
 
const images = [
   "/carsoul1.webp",
   "/carsoul2.webp",
   "/carsoul3.webp",
   "/carsoul4.webp",
   "/carsoul5.webp",
   "/carsoul6.webp",
   "/carsoul7.webp",
];

 const [messages, setMessages] = useState(5); // unread count
  
  const handleBellClick = () => {
    setIsOpenBell(true);
    setMessages(0); // clear messages when opened
  };

    const [isOpen, setIsOpen] = useState(false);
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


   const [hasNew, setHasNew] = useState(false);

  useEffect(() => {
    // simulate incoming notifications after 3s
    const timer = setTimeout(() => setHasNew(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  
  return (

    <div className="bg-[#0C1B4D] font-inter text-white min-h-screen ">

      {/* Navbar */}
      <header className=" sticky top-0 z-50  bg-[#0C1B4D] flex justify-between md:items-center sm:gap-10 md:gap-10 lg:gap-30 lg:items-center px-2 py-4 sm:px-8 sm:py-4 border-b border-white/10     tablet:px-10 tablet:py-6 tablet:gap-6">
        <div className="flex items-center gap-0 sm:gap-2 cursor-pointer">
         
      <div 
       onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 cursor-pointer select-none text-sm sm:text-lg">
           <FaLocationDot className="w-3 h-3 sm:w-5 sm:h-5 md:w-5 md:h-5 " />
          <span className="text-xs sm:text-lg sm:font-semibold">{selectedCity}</span>
       </div>
         <LocationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={(city: string) => setSelectedCity(city)} 
      />
  
        </div>
        <div className="flex items-center gap-2 sm:gap-46  md:gap-10 lg:gap-46 sm:w-[auto] md:w-[auto]  ">
           <div className="flex items-center gap-2 relative">
           
                 <div className= "hidden md:block relative w-full sm:w-full md:w-full ">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5"  />
                   <input
                     type="text"
                     onClick={() => setShowModal(true)}
                     value={value}
                      onChange={(e) => setValue(e.target.value)}
                     className="px-3 py-2 rounded-md text-white bg-white/10 focus:outline-none w-full sm:w-[600px] shadow-md text-sm placeholder-transparent"
                     placeholder="."
                   />
          
                   {/* Fake placeholder (animated) */}
                   {!value &&(
                   <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
                     <AnimatePresence mode="wait">
                       <motion.span
                         key={placeholderIndex}
                         initial={{ y: "-100%", opacity: 0 }}
                         animate={{ y: "0%", opacity: 1 }}
                         exit={{ y: "100%", opacity: 0 }}
                         transition={{ duration: 0.4 }}
                          className="text-gray-300 text-sm"
                       >
                         {placeholders[placeholderIndex]}
                       </motion.span>
                     </AnimatePresence>
                   </div>)}
                 </div>
         
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
                       <div className="flex items-start gap-2 md:gap-7 mt-6 text-white  text-[10px] md:text-sm  max-sm:overflow-x-auto max-sm:whitespace-nowrap scrollbar-hide">
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
                        
                         <p className="text-white text-xs md:text-base font-semibold mb-3">
                           Trending in Ahmedabad
                         </p>
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
      </div>
      <div className="flex flex-row gap-2 md:gap-5 items-end">
         <span   onClick={() => setShowModal(true)} className="md:hidden text-xs cursor-pointer "><FaSearch/></span>
        <div className="relative inline-block">
         
         <span    onClick={handleBellClick} className="-top-2 text-xs sm:text-xl cursor-pointer hover:text-yellow-400"  >
  <FaBell   
         /></span>
       {messages > 0 && (
    <span
      className=" absolute -top-3 md:-top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-1 py-0.1 md:px-1.5 md:py-0.5 rounded-full inline-flex items-center justify-center sm:animate-badge-pulse"
    aria-live="polite" >
      {messages}
    </span>
  )}
       
     
</div>
    <span
  onClick={() => setShowLogin(true)}
   
  className=" relative md:inline-block text-[10px] md:text-base md:font-medium transition-transform duration-300 hover:text-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300 cursor-pointer md:sign-in-btn"
>
  Sign In
</span>  
<div className="relative">
 <span
       
     onClick={() => router.push("/profile")}   className="flex items-center gap-2 cursor-pointer select-none hover:text-yellow-400"
      >
        <FaUserCircle  className=" w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
      </span>

      {openProfile && (
        <div
          onClick={() => setOpenProfile(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0b233f]/95 text-white shadow-lg z-50 transform transition-transform duration-300 ${
          openProfile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button onClick={() => setOpenProfile(false)} className="cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 flex flex-col gap-4">
          <span className="cursor-pointer hover:text-yellow-400 transition">
            My Bookings
          </span>
          <span className="cursor-pointer hover:text-yellow-400 transition">
            Watchlist
          </span>
          <span className="cursor-pointer hover:text-yellow-400 transition">
            Account Settings
          </span>
          <span className="cursor-pointer hover:text-yellow-400 transition">
            Logout
          </span>
        </div>
      </div>
    </div>
</div>  
        
        </div>
      </header>


  <LoginDrawer isOpen={showLogin} onClose={() => setShowLogin(false)} />


{/*Notification drawer*/}
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
          <h2 className="text-sm sm:text-lg font-semibold">Notifications</h2>
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
                <p className="text-xs md:text-sm">{n.message}</p>
                <span className="text-xs md:text-xs text-gray-400">{n.time}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No notifications</p>
          )}
        </div>
      </div>


      {/* Category Buttons */}
      <div className="flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10">
        <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
        <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
        <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
      </div>

      <div className="w-full py-6">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
       
      spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation
    
     initialSlide={4}



         speed={2000}
      
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
          <SwiperSlide key={idx}  >
            <div className={`slide-wrapper transition-all duration-500 ease-out ${
                activeIndex === idx
                  ? "sm:scale-110 opacity-100 "
                  : "sm:scale-90 opacity-70"
              }`}>
              <img
                src={src}
                alt={`slide-${idx}`}
                className="slide-img w-full h-48 sm:h-64 md:h-75  lg:h-96  object-cover rounded-lg"
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
          <MovieCard img="/movie2.jpeg" title="Inception" rating={7.9} votes="10.5k" />
             <MovieCard img="/movie1.jpeg" title="Joker" rating={7.9} votes="10.5k" />
      </Section>



     
      {/* Kids Special */}
      <Section title="Kid's Special" viewAllUrl="/events">
        <KidsCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
        <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
         <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
          <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
           <KidsCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
            <KidsCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
              <KidsCard img="/movie1.jpeg" title="Pemberton Music Festival" date="Thurs 19 Oct Onwards" />
        <KidsCard img="/movie2.jpeg" title="Bothica Music Festival" date="Thurs 20 Oct Onwards" />
      </Section>

    

      {/* Best Event This Week */}
      <Section title="Best Event this Week" viewAllUrl="/events">
        <EventCard img="/icon1.jpg" title="Music Event - KOGU" />
        <EventCard img="/icon2.jpg" title="Comedy by Peter Funk" />
        <EventCard img="/icon3.jpg" title="Beat Box" />
        <EventCard img="/icon4.jpg" title="Beat Box" />
          <EventCard img="/icon5.jpg" title="sports by Peter Funk" />
            <EventCard img="/icon6.jpg" title="Food Event - KOGU" />
             <EventCard img="/icon7.jpg" title="Food Event - KOGU" />
              <EventCard img="/icon8.jpg" title="Food Event - KOGU" />
      </Section>

      {/* Cinema Near You */}
      <Section title="Cinema Near You" viewAllUrl="cinemashows">
        <CinemaCard name="Viva Cinema" distance="5.2" rating={4.9} time="Closed 10:00 PM" imageUrl="/img-cinema.png" />
        <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
          <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema.png" />
             <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema (1).png" />
              <CinemaCard name="EbonyLife Cinema" distance="6.5" rating={5.0} time="Closed 09:00 PM" imageUrl="/img-cinema.png" />
      </Section>

      {/* Footer */}
      <footer className="bg-[#091339] py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
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

