"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import RatingModal from "../components/RatingModal";
import { useState } from "react";
import "../new-release/new-release.css";
import "../globals.css"; // Ensure global styles are imported
// MovieDetailsDesktop.tsx
// A single-file Next.js (App Router compatible) React + TypeScript component
// styled with Tailwind CSS to convert the provided mobile Figma details screen into
// a website (desktop) view while keeping the same content.

type Person = {
  name: string;
  role: string;
  img?: string;
};

export default function MovieDetailsDesktop() {
  const title = "Tanvi: The Great";
  const subtitle = "Ahmedabad | 34 Movies";
  const director = "Anupam Kher";
  const producer = "Anupam Kher Studio and NFDC";
  const productionCost = "50 crore";
  const rating = 4.6;
  const reviews = 135;
  const duration = "2h 39m | Drama | U | 24 Jul 2025";
  const trending = "9.95K Tickets booked in last 24 hours";

  const cast: Person[] = [
    { name: "Anupam Kher", role: "Actor", img: "/anupm.png" },
    { name: "Shubhangi Dutt", role: "Actor", img: "/shubhangi.png" },
    { name: "Jackie Shroff", role: "Actor", img: "/jackie.png" },
  ];

  const crew: Person[] = [
    { name: "Anupam Kher", role: "Director, Writer", img: "/anupm.png" },
    { name: "M.M Keeravani", role: "Musician", img: "/keeravani.png" },
    { name: "Kausar Munir", role: "Lyricist", img: "/kausar.png" },
  ];

  const images = [
  "/joker.png",
  "/inspection.png",
  "/tanvi.png",
  "/joker.png"
];

  const [showDetails, setShowDetails] = useState(false);
 const [showFullText, setShowFullText] = useState(false);

  const shortText =
    "In a world that saw her through a different lens, she kept shining with a light that could not be undone.";
  const fullText =
    shortText +
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur obcaecati officiis, quia repellat dolorem ratione deleniti sint unde maxime libero, fugiat aliquid officia consequatur sapiente ipsum numquam nihil placeat.";

const [isModalOpen, setIsModalOpen] = useState(false);

   const router = useRouter();
  return (
    <div className="min-h-screen  font-poppins bg-gradient-to-b from-[#0f2547] via-[#152c57] to-[#1f3558] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push(`/new-release`)} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-sm text-white/70">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/10">⟳</button>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left column: Poster & details */}
          <aside className="col-span-4">
            <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#233e6a] to-[#1b2b4a]">
              {/* Use the uploaded mobile screenshot as a hero banner fallback */}
              <img
                src="/Image 29.png"
                alt="poster"
                className="w-full h-auto object-contain"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853 1.417 8.279L12 19.771 4.583 23.88 6 15.6 0 9.747l8.332-1.73z" />
                    </svg>
                    <span className="font-medium">{rating}/5</span>
                    <span className="text-sm text-white/70">| {reviews} Reviews</span>
                  </span>

                  <button   onClick={() => setIsModalOpen(true)} className="ml-auto bg-yellow-400 text-black  hover:bg-yellow-300 px-3 py-1 rounded-full font-semibold cursor-pointer">Rate Now</button>
                   <RatingModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onSubmit={(rating: number, feedback: string) => {
          console.log("Rating:", rating, "Feedback:", feedback);
          alert(`Thanks for rating! You gave ${rating} stars.`);
        }}
      />
                </div>

                <div className="mt-4 space-y-2 text-sm text-white/80">
                  <p><strong>Director</strong> · {director}</p>
                  <p><strong>Producer</strong> · {producer}</p>
                  <p><strong>Production cost</strong> · {productionCost}</p>
                </div>

                <div className="mt-4">
                  <div className="inline-flex items-center gap-3 bg-white/5 px-3 py-2 rounded-lg">
                    <span className="px-3 py-1 bg-white/8 rounded-full">2D</span>
                    <span className="px-3 py-1 bg-white/8 rounded-full">Hindi</span>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{duration}</p>
                </div>
                <Link href="/enquiryform">
                <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold cursor-pointer sweep-button"><span>Enquiry Now</span></button>
            </Link>
              </div>
            </div>

            {/* Trending & Offers */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/70">Trending</div>
                <div className="font-semibold mt-1">{trending}</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <h3 className="font-semibold">Top offers for you</h3>
                <div className="mt-3 text-sm text-white/70">Buy 1 ticket and Get 1 Free!+ for Tanvi The Great</div>
             
                  <button
        className="mt-2 text-pink-400 text-sm underline cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Tap to view details"}
      </button>

      {showDetails && (
        <div className="mt-3 p-3 rounded-lg bg-white/10 text-sm text-white/80">
          This offer is valid for a limited period. Applicable only on selected
          shows of “Tanvi The Great”. Maximum 1 free ticket per transaction.
          Terms and conditions apply.
        </div>
      )}
              </div>
            </div>
          </aside>

          {/* Right column: Content */}
          <main className="col-span-8">
            {/* Description card 
            <section className="mb-6 p-6 rounded-xl bg-white/5">
              <p className="text-white/80">
                In a world that saw her through a different lens, she kept shining with a light that could not be undone. Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                <button className="ml-2 text-sm text-pink-300">more</button>
              </p>
            </section>*/}

             <section className="mb-6 p-6 rounded-xl bg-white/5">
      <p className="text-white/80">
        {showFullText ? fullText : shortText}
        <button
          className="ml-2 text-sm text-pink-300 cursor-pointer"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "less" : "more"}
        </button>
      </p>
    </section>

            {/* Reviews summary */}
            <section className="mb-6 flex items-center gap-6">
              <div className="flex-1 p-4 rounded-xl bg-[#11243b] shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">4.6/5</div>
                    <div className="text-sm text-white/70">135 Reviews</div>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-full font-semibold cursor-pointer">Rate Now</button>
                </div>
              </div>

              <div className="w-64 p-4 rounded-xl bg-[#11243b]">
                <div className="text-sm text-white/70">Badges</div>
                <div className="mt-2 flex gap-2">
                  <span className="px-3 py-1 bg-white/6 rounded-full text-sm">#Hit</span>
                  <span className="px-3 py-1 bg-white/6 rounded-full text-sm">#Epic</span>
                  <span className="px-3 py-1 bg-white/6 rounded-full text-sm">#Legend</span>
                </div>
              </div>
            </section>

            {/* Cast */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Cast</h3>
              <div className="grid grid-cols-3 gap-6">
                {cast.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                     <div className="relative group w-40 h-40 cursor-pointer">
                    <img src={c.img} alt={c.name} className="w-40 h-40 rounded-full object-cover border-2 border-white/10" />
                    <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-white/70">{c.role}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Crew */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Crew</h3>
              <div className="grid grid-cols-3 gap-6">
                {crew.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                    <div className="relative group w-40 h-40 cursor-pointer">
                    <img src={c.img} alt={c.name} className="w-40 h-40 rounded-full object-cover border-2 border-white/10" />
                      <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-white/70">{c.role}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* You might also like */}
            <section className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">You might also like</h3>
                <button className="text-sm text-white/70 underline">View All</button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {/* sample cards */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="min-w-[160px] rounded-xl overflow-hidden bg-white/5 ">
                     <Image
                             src={images[i]}
                             alt="Inception"
                             width={300}
                             height={300}
                             className="rounded-lg new-release-image"
                           />
                       
                  

                    <div className="p-3">
                      <div className="font-semibold">Movie {i + 1}</div>
                      <div className="text-sm text-white/70 mt-1">⭐ 7.9 · 10.5k Votes</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Company Detail */}
            <section className="mb-6 p-6 rounded-xl bg-white/5">
              <h3 className="text-xl font-semibold mb-4">Company Detail</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div>
                  <div className="flex items-center gap-2"> <FaHome className="text-xl" /><strong>Production House</strong></div>
                  <div className="mt-1 text-white/70">{producer}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-xl" /><strong>Address</strong></div>
                  <div className="mt-1 text-white/70">4140 Parker Rd. Allentown, Mumbai 31134</div>
                </div>

                <div>
                  <div className="flex items-center gap-2"><FaPhone className="text-xl" /><strong>Phone No</strong></div>
                  <div className="mt-1 text-white/70">+91 9999999999</div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
<FaGlobe className="text-xl" /><strong>Website</strong></div>
                  <div className="mt-1 text-white/70">www.yourdomainname.com</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
