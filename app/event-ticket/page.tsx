"use client";
import { useState, useEffect } from "react";

export default function EventBooking() {
  const prices = ["₹7000", "₹8000", "₹9000", "₹10000", "₹11000", "₹12000"];

  // Seat layouts for each price category
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
    "₹10000": Array.from({ length: 8 }, (_, r) =>
      Array.from({ length: 14 }, (_, c) => `10K-R${r + 1}C${c + 1}`)
    ),
    "₹11000": Array.from({ length: 9 }, (_, r) =>
      Array.from({ length: 15 }, (_, c) => `11K-R${r + 1}C${c + 1}`)
    ),
    "₹12000": Array.from({ length: 10 }, (_, r) =>
      Array.from({ length: 16 }, (_, c) => `12K-R${r + 1}C${c + 1}`)
    ),
  };

  const [activePrice, setActivePrice] = useState(prices[0]);
  const [selectedSeats, setSelectedSeats] = useState<Record<string, string[]>>(
    {}
  );
  const [bookedSeats, setBookedSeats] = useState<Record<string, string[]>>({});

  // Generate booked seats only once (on client mount)
  useEffect(() => {
    const generated: Record<string, string[]> = {};
    for (const price of prices) {
      const seats = layouts[price].flat();
      // pick ~10% seats as booked
      generated[price] = seats.filter(() => Math.random() < 0.1);
    }
    setBookedSeats(generated);
  }, []);

  const toggleSeat = (price: string, seat: string) => {
    if (bookedSeats[price]?.includes(seat)) return; // prevent booked
    setSelectedSeats((prev) => {
      const current = prev[price] || [];
      return {
        ...prev,
        [price]: current.includes(seat)
          ? current.filter((s) => s !== seat)
          : [...current, seat],
      };
    });
  };

  // helper for row labels (A, B, C…)
  const getRowLabel = (index: number) =>
    String.fromCharCode("A".charCodeAt(0) + index);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#07133a] via-[#0c2a52] to-[#071133] text-white">
      {/* Header */}
      <header className="border-b border-white/20 p-3 flex justify-center bg-black/20">
        <div className="text-center">
          <h1 className="text-lg font-semibold">Kevin Hart: Acting My Age</h1>
          <p className="text-xs text-gray-300">Sun, 21 Sep | 7PM | Mumbai</p>
        </div>
      </header>

      {/* Stage */}
      <div className="flex justify-center mt-4">
        <div className="bg-gray-300 text-gray-700 px-8 py-1 rounded-md text-sm font-medium">
          STAGE
        </div>
      </div>

      {/* Seat Layout */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-6">
        <h2 className="text-sm mb-4">
          Select seats for <span className="font-semibold">{activePrice}</span>
        </h2>

        <div className="flex flex-col gap-2">
          {layouts[activePrice].map((row, rIdx) => (
            <div key={rIdx} className="flex gap-2 justify-center items-center">
              {/* Row Label */}
              <div className="w-6 text-xs text-gray-300">{getRowLabel(rIdx)}</div>

              {/* Row Seats */}
              {row.map((seat, cIdx) => {
                const seatNum = cIdx + 1;
                const isSelected = selectedSeats[activePrice]?.includes(seat);
                const isBooked = bookedSeats[activePrice]?.includes(seat);

                return (
                  <div
                    key={seat}
                    onClick={() => toggleSeat(activePrice, seat)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-[11px] font-medium cursor-pointer transition 
                      ${
                        isBooked
                          ? "bg-gray-500 text-gray-300 cursor-not-allowed line-through"
                          : isSelected
                          ? "bg-teal-500 text-white shadow-md scale-105"
                          : "bg-white text-gray-800 hover:bg-teal-100"
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

      {/* Sticky Price Buttons */}
      <footer className="sticky bottom-0 bg-white/10 border-t border-white/20 px-2 py-2 overflow-x-auto">
        <div className="flex space-x-2">
          {prices.map((price) => (
            <button
              key={price}
              onClick={() => setActivePrice(price)}
              className={`px-3 py-1 border rounded-full text-xs whitespace-nowrap ${
                activePrice === price
                  ? "bg-red-500 border-red-500"
                  : "hover:bg-red-500"
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
