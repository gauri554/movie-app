"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
type SeatStatus = "available" | "reserved" | "selected";

interface Seat {
  id: string;
  status: SeatStatus;
}


export default function ChooseSeats() {
   const router = useRouter();
  const initialSeats: Seat[] = [
    { id: "A1", status: "available" }, { id: "A2", status: "available" }, { id: "A3", status: "reserved" },
    { id: "A4", status: "available" }, { id: "A5", status: "available" }, { id: "A6", status: "available" },
    { id: "B1", status: "available" }, { id: "B2", status: "available" }, { id: "B3", status: "reserved" },
    { id: "B4", status: "available" }, { id: "B5", status: "reserved" }, { id: "B6", status: "available" },
    { id: "C1", status: "available" }, { id: "C2", status: "available" }, { id: "C3", status: "reserved" },
    { id: "C4", status: "available" }, { id: "C5", status: "available" }, { id: "C6", status: "available" },
    { id: "D1", status: "reserved" }, { id: "D2", status: "available" }, { id: "D3", status: "reserved" },
    { id: "D4", status: "available" }, { id: "D5", status: "reserved" }, { id: "D6", status: "available" },
    { id: "E1", status: "reserved" }, { id: "E2", status: "available" }, { id: "E3", status: "reserved" },
    { id: "E4", status: "available" }, { id: "E5", status: "available" }, { id: "E6", status: "available" },
    { id: "F1", status: "available" }, { id: "F2", status: "reserved" }, { id: "F3", status: "available" },
    { id: "F4", status: "available" }, { id: "F5", status: "available" }, { id: "F6", status: "available" },
    { id: "G1", status: "available" }, { id: "G2", status: "available" }, { id: "G3", status: "available" },
    { id: "G4", status: "available" }, { id: "G5", status: "reserved" }, { id: "G6", status: "available" }
  ];

  const [seats, setSeats] = useState(initialSeats);
  const [selectedDate, setSelectedDate] = useState("Feb 25");
  const [selectedTime, setSelectedTime] = useState("3:15");

  const toggleSeat = (id: string) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === id
          ? {
              ...seat,
              status:
                seat.status === "available"
                  ? "selected"
                  : seat.status === "selected"
                  ? "available"
                  : seat.status,
            }
          : seat
      )
    );
  };

  const dates = ["Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28"];
  const times = ["11:15", "3:15", "6:15", "10:15"];

  return (
    <div className="min-h-screen bg-[#0D1B4C] font-poppins text-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Choose Your Seat&apos;s</h1>

      {/* Screen
      <div className="w-3/4 h-6 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-t-full mb-8"></div> */}

      {/* Seat Grid */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(6, 60px)" }}>
        {seats.map((seat) => (
          <div
            key={seat.id}
            onClick={() => toggleSeat(seat.id)}
            className={`w-14 h-14 flex items-center justify-center rounded-md text-sm font-bold cursor-pointer transition
              ${
                seat.status === "available"
                  ? "bg-white/5 text-yellow-300 hover:bg-yellow-400 hover:text-white"
                  : seat.status === "reserved"
                  ? "bg-white text-gray-600 cursor-not-allowed  hover:bg-yellow-400 hover:text-white "
                  : "bg-yellow-600 text-white"
              }`}
          >
            {seat.id}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white/5 text-yellow-300 rounded-sm"></div> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm"></div> Reserved
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-300 rounded-sm"></div> Selected
        </div>
      </div>

      {/* Date Selection */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Select Date &amp; Time</h2>
      <div className="flex gap-3 flex-wrap justify-center">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-md ${
              selectedDate === date ? "bg-yellow-500 text-black" : "bg-gray-700"
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Time Selection */}
      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`px-4 py-2 rounded-md ${
              selectedTime === time ? "bg-yellow-500 text-black" : "bg-gray-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Price and Button */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-lg mb-3">Price: <span className="font-bold">Rs.2340</span></p>
        <button onClick={() => router.push("/checkout")} className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold text-white text-lg cursor-pointer">
          Buy Ticket
        </button>
      </div>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
