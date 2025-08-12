"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function NewReleases() {
  return (
    <div className="bg-[#0D1B4C] min-h-screen text-white px-6 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Film Trade</h1>
        <button>
          <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
        </button>
      </div>
      <p className="text-sm text-gray-300">Ahmedabad | 34 Movies</p>

      {/* Banner */}
      <div className="mt-4">
        <Image
          src="/images/inception-banner.jpg"
          alt="Inception"
          width={1200}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["New Releases", "English", "Hindi", "Telegu"].map((tag) => (
          <span
            key={tag}
            className="bg-red-500 text-white text-sm px-3 py-1 rounded-full cursor-pointer"
          >
            {tag} ✕
          </span>
        ))}
      </div>

      {/* Coming Soon Card */}
      <div className="bg-[#E83F5B] rounded-lg p-4 mt-4 flex items-center justify-between cursor-pointer">
        <div>
          <h2 className="text-lg font-semibold">Coming Soon</h2>
          <p className="text-sm">Explore Upcoming Movies</p>
        </div>
        <span className="text-2xl">➡️</span>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {[
          { title: "Tanvi", img: "/images/tanvi.jpg" },
          { title: "Joker", img: "/images/joker.jpg" },
          { title: "Inception", img: "/images/inception.jpg" },
          { title: "Joker", img: "/images/joker.jpg" },
          { title: "Inception", img: "/images/inception.jpg" },
        ].map((movie, i) => (
          <div key={i} className="bg-[#13225B] rounded-lg p-2">
            <Image
              src={movie.img}
              alt={movie.title}
              width={300}
              height={400}
              className="rounded-lg"
            />
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm">7.9</span>
              <span className="ml-auto text-xs text-gray-300">10.5k Votes</span>
            </div>
            <p className="mt-1 text-sm font-medium">{movie.title}</p>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center bg-red-500 px-4 py-2 rounded-lg">
          📍 Browse by Cinemas
        </button>
        <button className="flex items-center bg-pink-500 px-4 py-2 rounded-lg">
          ⚙️
        </button>
      </div>
    </div>
  );
}
