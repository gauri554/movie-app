"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EventBooking() {
  const router = useRouter();

  // Store prices as objects: label + numeric
  const prices = [
    { label: "₹7000", value: 7000 },
    { label: "₹8000", value: 8000 },
    { label: "₹9000", value: 9000 },
  
  ];

  const layouts: Record<string, string[][]> = {
    "₹7000": Array.from({ length: 5 }, (_, r) =>
      Array.from({ length: 8 }, (_, c) => `7K-R${r + 1}C${c + 1}`)
    ),
    "₹8000": Array.from({ length: 6 }, (_, r) =>
      Array.from({ length: 10 }, (_, c) => `8K-R${r + 1}C${c + 1}`)
    ),
    "₹9000": Array.from({ length: 7 }, (_, r) =>
      Array.from({ length: 12 }, (_, c) => `9K-R${r + 1}C${c + 1}`)
    ),
  };

  const [activePrice, setActivePrice] = useState(prices[0]);
  const [bookedSeats, setBookedSeats] = useState<Record<string, string[]>>({});
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // generate some booked seats
  useEffect(() => {
    const generated: Record<string, string[]> = {};
    for (const price of prices.map((p) => p.label)) {
      const seats = layouts[price].flat();
      generated[price] = seats.filter(() => Math.random() < 0.1); // ~10% booked
    }
    setBookedSeats(generated);
  }, []);

  const getRowLabel = (index: number) =>
    String.fromCharCode("A".charCodeAt(0) + index);

  // toggle seat select
  const handleSeatClick = (seat: string) => {
    if (bookedSeats[activePrice.label]?.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    router.push(
      `/summary?seats=${encodeURIComponent(
        selectedSeats.join(",")
      )}&price=${activePrice.value}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white font-inter">
      <header className="border-b border-white/20 p-3 flex justify-center bg-black/20">
        <div className="text-center">
          <h1 className="text-xs sm:text-base md:text-lg font-semibold">Kevin Hart: Acting My Age</h1>
          <p className="text-[10px] sm:text-xs md:text-xs text-gray-300">Sun, 21 Sep | 7PM | Mumbai</p>
        </div>
      </header>

      <div className="flex justify-center mt-4">
        <div className="bg-gray-300 text-gray-700 px-8 py-1 rounded-md text-xs sm:text-sm md:text-sm font-medium">
          STAGE
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center px-2 sm:px-4 md:px-4 py-4 sm:py-4 md:py-6">
        <h2 className="text-[11px] sm:text-sm md:text-base mb-3 sm:mb-4 text-center">
          Select seats for <span className="font-semibold">{activePrice.label}</span>
        </h2>

        <div className="flex flex-col gap-1 sm:gap-2 md:gap-2">
          {layouts[activePrice.label].map((row, rIdx) => (
            <div key={rIdx} className="flex gap-1 sm:gap-2 md:gap-2 justify-center items-center">
              <div className="w-3 sm:w-4 md:w-6 text-[9px] sm:text-xs md:text-sm text-gray-300 text-right">{getRowLabel(rIdx)}</div>
              {row.map((seat, cIdx) => {
                const seatNum = cIdx + 1;
                const isBooked = bookedSeats[activePrice.label]?.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <div
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md text-[9px] sm:text-[11px] md:text-sm font-medium cursor-pointer transition 
                      ${
                        isBooked
                          ? "bg-gray-500 text-gray-300 cursor-not-allowed line-through"
                          : isSelected
                          ? "bg-teal-500 text-white"
                          : "bg-white text-gray-800 hover:bg-teal-400 hover:text-white"
                      }`}
                  >
                    {seatNum}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>

      <footer className="sticky bottom-0 bg-white/10 border-t border-white/20 px-2 py-3">
        <div className="flex justify-between items-center">
          
          <div className="flex space-x-2 overflow-x-auto no-scrollbar">
            <p className="text-[8px] sm:text-base md:text-lg">Filter stands by</p>
            {prices.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setActivePrice(p);
                  setSelectedSeats([]);
                }}
                className={`px-2  sm:px-2 sm:py-2 md:px-3 md:py-1 border rounded-full text-[10px] sm:text-xs md:text-xs whitespace-nowrap cursor-pointer ${
                  activePrice.label === p.label
                    ? "bg-red-500 border-red-500"
                    : "hover:bg-red-500"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleProceed}
            className="ml-4 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-red-500 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-red-600 transition cursor-pointer"
          >
            Proceed
          </button>
        </div>
      </footer>
    </div>
  );
}
