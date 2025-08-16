// pages/event-details.tsx
"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../globals.css"; // Ensure global styles are imported
import { FaMapMarkerAlt, FaMusic, FaMoneyBillAlt, FaLandmark } from "react-icons/fa";
const EventDetails: NextPage = () => {
   const router = useRouter();

    const [showFull, setShowFull] = useState(false);
 const [showUpdates, setShowUpdates] = useState(false);
  const shortText =
    "Free directories: directories are perfect for customers that are searching for a particular topic...";
  const fullText =
    "Free directories: directories are perfect for customers that are searching for a particular topic. They help improve visibility, increase backlinks, and drive relevant traffic to your site. Submitting to quality directories can also boost your SEO and brand authority over time.";


     const updatesShort =
    "Customers that are searching for a particular topic...";
  const updatesFull =
    "Customers that are searching for a particular topic often rely on targeted content and relevant keywords to find what they need. Providing high-quality, informative, and engaging material can increase trust, boost SEO rankings, and improve overall brand perception.";

  return (
    <div className="bg-[#0B1E47] font-poppins text-white min-h-screen">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
        <button onClick={() => router.push(`/events`)} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
        <h1 className="text-lg font-semibold">Tanvi: The Great</h1>
        <p className="text-sm text-gray-300">Ahmedabad | 34 Movies</p></div></div>
      </header>

      {/* Main Banner */}
      <div className="max-w-6xl mx-auto  ">
        <Image
          src="/coldplay.png" // replace with actual path
          alt="Coldplay Event"
          width={700}
          height={300}
          className="rounded-xl "
        />
      </div>

      {/* Event Info */}
      <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            Coldplay: Music Of The Spheres World Tour
          </h2>
          <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-medium ">
            English
          </span>

          <ul className="mt-4 space-y-2 text-gray-200">
            <li>

Friday, 24 Aug 2019 | 6:30PM - 9:30PM</li>
          <li className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-red-500" />
    Daboi Concert Hall, 5/7 Kolejowa, 01-217 Warsaw
  </li>
            <li className="flex items-center gap-2">
    <FaMusic className="text-blue-500" />
    Indie Rock
  </li>
  <li className="flex items-center gap-2">
    <FaMoneyBillAlt className="text-green-500" />
    $40 - $90
  </li>
  <li className="flex items-center gap-2">
    <FaLandmark className="text-purple-500" />
    Club Kiss
  </li>
          </ul>

          {/* Details */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Details</h3>
           <p className="mt-2 text-gray-300">
        {showFull ? fullText : shortText}
      </p>
      <button
        className="mt-2 text-red-400 cursor-pointer"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "Read less" : "Read more"}
      </button>
          </div>

          {/* Updates */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Updates</h3>
            <p className="mt-1 text-sm text-gray-300">July 24, 2019</p>
            <p className="mt-2 text-gray-300">
          {showUpdates ? updatesFull : updatesShort}
        </p>
        <button
          className="mt-2 text-red-400  cursor-pointer"
          onClick={() => setShowUpdates(!showUpdates)}
        >
          {showUpdates ? "Read less" : "Read more"}
        </button>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Location</h3>
            <Image
              src="/map.png" // replace with actual map image
              alt="Map Location"
              width={800}
              height={300}
              className="rounded-lg mt-2"
            />
            <p className="mt-2 text-gray-300">
              Data Boi Concert Hall, 5/7 Kolejowa, 01-217 Warsaw
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Performers */}
          <div>
            <h3 className="text-lg font-semibold">Performers</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center space-x-3">
                <Image
                  src="/anupm.png"
                  alt="Performer"
                  width={50}
                  height={50}
                  className="w-16 h-16 object-cover top rounded-full"
                />
                <div>
                  <p className="font-medium">Performer Name</p>
                  <p className="text-sm text-gray-400">Indie Rock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-lg font-semibold">Organizers</h3>
            <div className="mt-3 flex items-center space-x-3">
              <Image
                src="/concerts.png"
                alt="Organizer"
                width={50}
                height={50}
                className="w-16 h-16 object-cover rounded-full"
              />
              <p>Club Gigs</p>
            </div>
          </div>

          {/* Also in this venue */}
          <div>
            <h3 className="text-lg font-semibold">Also in this venue</h3>
            <Image
              src="/roast.png"
              alt="Venue Event"
              width={170}
              height={180}
              className="h-[150] rounded-lg mt-2"
            />
          </div>

          {/* More like this */}
          <div>
            <h3 className="text-lg font-semibold">More like this</h3>
            <Image
              src="/musicfestival.png"
              alt="Similar Event"
              width={170}
              height={180}
              className="h-[150] rounded-lg mt-2"
            />
          </div>
        </aside>
      </section>

      {/* Bottom Bar */}
      <footer className="bg-[#FDE9D9] flex justify-between items-center px-6 py-4 mt-10 rounded-t-xl">
        <p className="text-gray-800 font-semibold">$30 - $80</p>
        <button  onClick={() => router.push("/checkout")}className="bg-pink-500 text-white  rounded-lg font-semibold cursor-pointer sweep-button">
         <span> Buy tickets</span>
       </button>
      </footer>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
};

export default EventDetails;
