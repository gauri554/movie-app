"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { X } from "lucide-react";
import { navConfig } from "../nav-config";
const placeholders = [
  "Search movies...",
  "Find events...",
  "Look up concerts...",
  "Discover activities..."
];

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


   const {  backPath } = navConfig[pathname] || {
    title: "App",
    subtitle: "",
    backPath: "/",
  };
  return (
    <header className="px-2  sm:px-2 md:gap-5   py-2 sm:py-2 flex justify-between md:items-center md:justify-between md:mb-4 overflow-x-hidden border-b border-white/10 test-white md:border-0">
      {/* Left side: Title & Subtitle */}
      <div className="flex items-center gap-3 sm:gap-4 text-white">
        <button
                  onClick={() => router.push(backPath)}
          className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-base sm:text-3xl"
        >
          ‹
        </button>
        <div>
          <h1 className="text-sm sm:text-2xl md:text-2xl sm:font-semibold">{title}</h1>
        
        </div>
      </div>

      {/* Right side: Buttons + Search */}
      <div className="flex flex-row items-center md:items-center md:gap-7 md:mt-0">
        {/* Nav Buttons */}
        <div className="hidden md:flex md:flex-row items-center gap-3 md:gap-3">
          <button
            onClick={() => router.push("/new-release")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm cursor-pointer ${
              pathname === "/new-release" 
                ? "bg-[#ff4655] text-white"
                : "bg-[#ff4655] hover:bg-white/10"
            }`}
          >
            Film Mart
          </button>
          <button
            onClick={() => router.push("/events")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm cursor-pointer ${
              pathname === "/events" 
                ? "bg-[#ff4655] text-white"
                : "bg-white/6 hover:bg-[#ff4655]" 
               
            }`}
          >
            Events
          </button>
          <button
            onClick={() => router.push("/movieticket")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm cursor-pointer ${
              pathname === "/movieticket"
                ? "bg-[#ff4655] text-white"
                : "bg-white/6 hover:bg-[#ff4655]"
            }`}
          >
            Book Ticket
          </button>
        </div>

        {/* Search / Modal */}
        <div className="flex items-center sm:gap-2 relative">
          <span
            className="text-sm sm:text-xl text-white cursor-pointer hover:text-yellow-400 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <FaSearch />
          </span>

          {/* Search Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 flex items-start justify-center bg-black/60 backdrop-blur-sm z-50"
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
                  className="w-[90%] sm:w-[600px] max-h-[80vh] rounded-2xl shadow-lg mt-15 md:mt-20 p-2 md:p-6 bg-[#0b233f]/95 backdrop-blur-sm z-50 flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Search Header */}
                  <div className="sticky top-0 z-20 pt-6 md:pt-3 pl-3 md:pl-0 md:p-6 pb-3">
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
                        className="px-4 py-2 w-[220px] sm:w-[530px] rounded-xl border border-gray-200 bg-white text-black text-sm focus:outline-none placeholder-transparent"
                        placeholder="."
                      />

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
                    <div className="flex items-start gap-2 md:gap-7 mt-6 text-white text-[10px] md:text-sm max-sm:overflow-x-auto max-sm:whitespace-nowrap scrollbar-hide">
                      {["All", "Concerts", "Events", "Movies", "Activity"].map(
                        (tab, i) => (
                          <button
                            key={i}
                            className={`px-4 py-1 rounded-full ${
                              tab === "All"
                                ? "bg-white/10 text-white"
                                : "hover:bg-white/10 text-white"
                            }`}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Trending Content */}
                  <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
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
                                                { title: "War 2", img: "/movie1.jpeg" },
                        { title: "Coolie The Powerhouse", img: "/movie2.jpeg" },
                        { title: "Nobody 2", img: "/movie3.jpeg" },
                        { title: "Son Of Sardar 2", img: "/movie2.jpeg" },
                      ].map((m, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <img
                            src={m.img}
                            className="w-10 h-10 rounded-md"
                            alt={m.title}
                          />
                          <div>
                            <p className="text-xs md:text-sm font-medium text-white">
                              {m.title}
                            </p>
                            <p className="text-[10px] md:text-xs text-white">Movie</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
