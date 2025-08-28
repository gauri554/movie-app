// pages/event-details.tsx
"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../components/Header";
import "../globals.css"; // Ensure global styles are imported
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
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
    <div className="bg-[#0B1E47] font-inter text-white min-h-screen">
      {/* Header 
      <header className="max-w-6xl mx-auto px-2 md:px-4 p-4 md:p-[auto] md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
        <button onClick={() => router.push(`/events`)} className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
        <h1 className="md:text-lg md:font-semibold">Tanvi: The Great</h1>
        <p className="text-xs md:text-sm text-gray-300">Ahmedabad | 34 Movies</p></div></div>
      </header>

      {/* Main Banner */}

      
      <div className="max-w-7xl mx-auto  md:px-4 md:py-3 ">
         <Header title="Tanvi: The Great" subtitle="Ahmedabad"/>
          <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0">
                         <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                         <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                         <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/cinemashows" />
                       </div>
        <Image
          src="/coldplay.png" // replace with actual path
          alt="Coldplay Event"
          width={700}
          height={300}
          className="rounded-xl px-2"
        />
      </div>

      {/* Event Info */}
      <section className="max-w-7xl mx-auto px-2 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-sm md:text-2xl md:font-bold mb-4">
            Coldplay: Music Of The Spheres World Tour
          </h2>
          <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs md:text-sm font-medium ">
            English
          </span>

          <ul className="mt-4 space-y-2 text-gray-200">
            <li className="text-xs md:text-sm md:text-base">

Friday, 24 Aug 2019 | 6:30PM - 9:30PM</li>
          <li className="flex items-center gap-2 text-xs md:text-sm md:text-base ">
    <FaMapMarkerAlt className="text-red-500" />
    Daboi Concert Hall, 5/7 Kolejowa, 01-217 Warsaw
  </li>
            <li className="flex items-center gap-2 text-xs md:text-sm md:text-base">
    <FaMusic className="text-blue-500" />
    Indie Rock
  </li>
  <li className="flex items-center gap-2 text-xs md:text-sm md:text-base">
    <FaMoneyBillAlt className="text-green-500" />
    $40 - $90
  </li>
  <li className="flex items-center gap-2 text-xs md:text-sm md:text-base">
    <FaLandmark className="text-purple-500" />
    Club Kiss
  </li>
          </ul>

          {/* Details */}
          <div className="mt-6">
            <h3 className="text-sm md:text-lg font-semibold">Details</h3>
           <p className="mt-2 text-gray-300 text-xs md:text-sm md:text-base">
        {showFull ? fullText : shortText}
      </p>
      <button
        className="mt-2 text-red-400 cursor-pointer text-xs md:text-base"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "Read less" : "Read more"}
      </button>
          </div>

          {/* Updates */}
          <div className="mt-6">
            <h3 className="text-sm md:text-sm md:text-lg font-semibold">Updates</h3>
            <p className="mt-1 text-xs md:text-sm text-gray-300">July 24, 2019</p>
            <p className="mt-2 text-gray-300 mt-1 text-xs md:text-sm md:text-base ">
          {showUpdates ? updatesFull : updatesShort}
        </p>
        <button
          className="mt-2 text-red-400  cursor-pointer text-xs md:text-base"
          onClick={() => setShowUpdates(!showUpdates)}
        >
          {showUpdates ? "Read less" : "Read more"}
        </button>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="text-sm md:text-lg font-semibold">Location</h3>
          <div className="rounded-lg mt-2 overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.814729889317!2d20.9781228158001!3d52.229675179757996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6696377a0b%3A0x2b44e6f4c4e8ed07!2sKolejowa%205%2F7%2C%2001-217%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sin!4v1693153547991!5m2!1sen!2sin"
      className="w-full h-42 md:h-60 md:w-[680px] rounded-lg"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
            <p className="mt-2 text-gray-300 text-xs md:text-lg">
              Data Boi Concert Hall, 5/7 Kolejowa, 01-217 Warsaw
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 ">
          {/* Performers */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold">Performers</h3>
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
                  <p className="text-sm md:text-lg font-medium">Performer Name</p>
                  <p className="text-xs md:text-sm text-gray-400">Indie Rock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold">Organizers</h3>
            <div className="mt-3 flex items-center space-x-3">
              <Image
                src="/concerts.png"
                alt="Organizer"
                width={50}
                height={50}
                className="w-16 h-16 object-cover rounded-full "
              />
              <p className="text-sm md:text-lg">Club Gigs</p>
            </div>
          </div>

          {/* Also in this venue */}
          <div>
            <h3 className="text-lg font-semibold text-sm md:text-lg">Also in this venue</h3>
            <Image
              src="/roast.png"
              alt="Venue Event"
              width={170}
              height={180}
              className="h-[150] w-[150] md:w-[180] md:h-[150] rounded-lg mt-2"
            />
          </div>

          {/* More like this */}
          <div>
            <h3 className="text-lg font-semibold text-sm md:text-lg">More like this</h3>
            <Image
              src="/musicfestival.png"
              alt="Similar Event"
              width={170}
              height={180}
              className="h-[150] w-[150] md:w-[180] md:h-[150]  rounded-lg mt-2"
            />
          </div>
            <button  onClick={() => router.push("/checkout")}className="bg-pink-500 text-white  rounded-lg font-semibold cursor-pointer sweep-button">
         <span> Buy tickets</span>
       </button>
        </aside>
      </section>

      {/* Bottom Bar */}
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
};

export default EventDetails;
