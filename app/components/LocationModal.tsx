"use client";
import { X } from "lucide-react";
import { FaLocationDot , FaBridge, FaMosque} from "react-icons/fa6";
import { FaTreeCity, FaUmbrellaBeach } from "react-icons/fa6";
import { GiElephant, GiIndianPalace } from "react-icons/gi";
import { MdTempleBuddhist } from "react-icons/md";
import { LuLandmark } from "react-icons/lu";
import { GiSoccerField } from "react-icons/gi";
import { useState } from "react";
import "../globals.css";
interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
}

const popularCities = [
  { name: "Ahmedabad", icon: <GiIndianPalace className="text-gray-400" /> },
  { name: "Bengaluru", icon: <FaTreeCity className="text-gray-400" /> },
  { name: "Chandigarh", icon: <GiElephant className="text-gray-400" /> },
  { name: "Chennai", icon: <MdTempleBuddhist className="text-gray-400" /> },
  { name: "Delhi NCR", icon: <FaMosque className="text-gray-400" /> },
  { name: "Goa", icon: <FaUmbrellaBeach className="text-gray-400" /> },
  { name: "Hyderabad", icon: <GiIndianPalace className="text-gray-400" /> },
  { name: "Kolkata", icon: <LuLandmark className="text-gray-400" /> },
  { name: "Mumbai", icon: <FaBridge className="text-gray-400" /> },
  { name: "Pune", icon: <GiSoccerField className="text-gray-400" /> },
];

export default function LocationModal({
  isOpen,
  onClose,
  onSelect,
}: LocationModalProps) {
  const cities = [
    "Abohar", "Abu Road", "Achampet", "Acharapakkam",
    "Addanki", "Adilabad", "Adipur", "Adoni",
    "Agartala", "Agra", "Ahmedabad", "Ahmednagar",
    "Ajmer", "Akbarpur", "Akividu", "Akola",
    "Alakode", "Alangayam", "Alangudi", "Alappuzha",
    "Aligarh", "Allagadda", "Alwar", "Amalapuram",
    "Amangal", "Ambajogai", "Ambala"
  ];

  if (!isOpen) return null;

const [location, setLocation] = useState<string>("");

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
      
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.display_name;

          setLocation(city);
        } catch (err) {
          console.error(err);
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        }
      },
      (error) => {
        alert("Unable to fetch location: " + error.message);
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 font-montserrat flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#0C1B4D] text-white rounded-xl shadow-2xl w-[620px] max-h-[85vh] max-sm:w-[90%] relative flex flex-col">
        
        {/* Sticky Header (only top part fixed) */}
        <div className="sticky top-0 bg-[#0C1B4D] z-10 p-6 pb-3 ">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-4 sm:w-4 md:w-6 md:h-6" />
          </button>

          {/* Title */}
          <h2 className="text-xs sm:text-[20px] font-semibold mb-5">Select Location</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search for area, street name.."
            className="border border-gray-300 rounded-lg px-4 py-2 text-[15px] w-full focus:outline-none focus:ring-2"
          />

          {/* Use current location */}
          <div className="flex items-center gap-2 text-white font-medium text-xs sm:text-[15px] mt-4 cursor-pointer">
            <FaLocationDot  className="text-gray-300 w-4 h-4 sm:w-4 sm:h-4" />
            <span  onClick={getCurrentLocation}  >Use current location</span>
           {location && (
        <p className=" text-gray-400"  onClick={() => {
                  onSelect(location);
                  onClose();
                }}>
           --  Current Location: <strong>{location}</strong>
        </p>
      )}
          </div>
        </div>

        {/* Scrollable Section (Popular + All Cities) */}
        <div
          className="overflow-y-auto px-6 pb-6 hide-scrollbar"
          style={{ maxHeight: "calc(85vh - 140px)" }}
        >
          {/* Popular Cities */}
          <h3 className="text-xs md:text-[16px] font-semibold mt-6 mb-4">Popular Cities</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 md:gap-4 mb-6">
            {popularCities.map((city) => (
              <div
                key={city.name}
                onClick={() => onSelect(city.name)}
                className="rounded-lg flex flex-col items-center justify-center py-1 cursor-pointer hover:shadow-md"
              >
                <span className=" text-lg md:text-[28px] mb-1">{city.icon}</span>
                <span className="text-[8px] md:text-[13px] font-medium text-center">
                  {city.name}
                </span>
              </div>
            ))}
          </div>

          {/* All Cities Alphabet Nav */}
          <h3 className="text-xs md:text-[16px] font-semibold mb-3">All Cities</h3>
          <div className="flex flex-wrap gap-3 text-white text-[10px] md:text-[14px] mb-3">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <span
                key={letter}
                className="cursor-pointer hover:underline"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* All Cities List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-400 text-[10px] md:text-sm">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="hover:text-[#ff4655] cursor-pointer"
                onClick={() => {
                  onSelect(city);
                  onClose();
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Hide scrollbar with CSS */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>

      <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`}</style>

    </div>
  );
}
