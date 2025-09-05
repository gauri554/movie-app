"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
export default function SummaryPage() {
  const params = useSearchParams();
  const router = useRouter();

  const seats = params.get("seats")?.split(",") || [];
  const price = Number(params.get("price")) || 0;
  const total = seats.length * price;

  return (
    <div className="min-h-screen bg-[#0b233f] text-white  font-inter">
      <div className="px-2 py-3">
       <Header title="Event Booking" subtitle=""/>
        <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0 text-white">
                                <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                                <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                                <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
                              </div>
       <div className="flex flex-col items-center p-6">
      <h1 className="text-sm sm:text-lg md:text-xl font-bold mb-4">Booking Summary</h1>

      {/* Summary Card */}
      <div className="bg-white/10 rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-xs sm:text-base md:text-lg font-semibold">Kevin Hart: Acting My Age</h2>
        <p className="text-[10px] sm:text-sm md:text-sm text-gray-300">Sun, 21 Sep | 7PM | Mumbai</p>

        {/* Selected Seats */}
        <div className="border-b border-white/20 pb-3">
          <p className="text-[10px] sm:text-sm md:text-sm mb-1">Seats Selected</p>
          {seats.length > 0 ? (
            <ul className="text-[10px] sm:text-sm md:text-sm space-y-1">
              {seats.map((s, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{s}</span>
                  <span>₹{price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-[10px] sm:text-sm md:text-sm">No seats selected</p>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 text-[10px] sm:text-sm md:text-sm">
          <div className="flex justify-between">
            <span>Price per Seat</span>
            <span>₹{price}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Seats</span>
            <span>{seats.length}</span>
          </div>
          <div className="flex justify-between font-bold text-xs sm:text-base md:text-lg border-t border-white/20 pt-2">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={() =>
          router.push(
            `/event-payment?seats=${encodeURIComponent(
              seats.join(",")
            )}&price=${price}`
          )
        }
        disabled={seats.length === 0}
        className="mt-6 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base rounded-xl bg-red-500 font-semibold hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Proceed to Payment
      </button>
      </div>
      </div>
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
}
