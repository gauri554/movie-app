"use client";
import React from 'react';
import { useRouter } from "next/navigation";
interface EventItem {
  id: number;
  title: string;
  comedian: string;
  time: string;
  venue: string;
  location: string;
  image: string;
}

const events: EventItem[] = [
  {
    id: 1,
    title: 'Event Name part 1',
    comedian: 'Comedian name',
    time: '2:30 PM',
    venue: 'Pune, Maharashtra',
    location: 'Ahmedabad',
    image: '/standup.png',
  },
  {
    id: 2,
    title: 'Event Name part 2',
    comedian: 'Comedian name',
    time: '2:30 PM',
    venue: 'Pune, Maharashtra',
    location: 'Ahmedabad',
    image: '/concerts.png',
  },
  {
    id: 3,
    title: 'Event Name part 3',
    comedian: 'Comedian name',
    time: '2:30 PM',
    venue: 'Pune, Maharashtra',
    location: 'Ahmedabad',
    image: '/food.png',
  },
  {
    id: 4,
    title: 'Event Name part 4',
    comedian: 'Comedian name',
    time: '2:30 PM',
    venue: 'Pune, Maharashtra',
    location: 'Ahmedabad',
    image: '/comedy.png',
  },
];

const EventListPage: React.FC = () => {
   const router = useRouter();
  return (
    <div className="min-h-screen font-poppins bg-[#0D1B4C] text-white p-4 px-2 md:px-[auto] md:p-8">
      <header className="mb-8">
          <div className="flex items-center gap-4">
        <button onClick={() => router.push(`/events`)} className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-3xl">
              ‹
            </button>
            <div>
        <h1 className="md:text-4xl md:font-semibold">Stand Up Comedy</h1>
        <p className="text-xs md:text-lg">Ahmedabad</p></div></div>
        <h2 className="text-sm md:text-lg md:text-left text-red-500 mt-4">Stand Up 25+ Events</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white/5 rounded-2xl overflow-hidden shadow-lg flex md:flex-col"
          >
            <div className="p-4 md:p-[auto]">
            <img
              src={event.image}
              alt={event.title}
              className="h-40 md:h-56 w-full rounded-lg object-cover"
            /></div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className=" md:text-2xl font-semibold text-center md:text-left">{event.title}</h3>
              <p className="text-gray-300 text-center md:text-left">{event.comedian}</p>
              <p className="mt-2 text-center md:text-left">Time: {event.time}</p>
              <p className="text-center md:text-left">
                <span className="font-bold">Venue</span> {event.venue}
              </p>
              <button onClick={() => router.push(`/checkout`)} className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
                Buy tickets
              </button>
            </div>
          </div>
        ))}
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
};

export default EventListPage;
