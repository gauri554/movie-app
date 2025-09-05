"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import jsPDF from "jspdf";
import Header from "../components/Header";
import CategoryButton from "../components/CategoryButton";
import { FaFilm, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  // ✅ Collect details from query params
  const seats = params.get("seats")?.split(",") || [];
  const price = Number(params.get("price")) || 0;
  const total = seats.length * price;

  const handleDownload = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text("🎟️ E-Ticket Receipt", 20, 20);

    // Event Info
    doc.setFontSize(12);
    doc.text("Event: Kevin Hart: Acting My Age", 20, 40);
    doc.text("Date: Sun, 21 Sep | 7PM", 20, 48);
    doc.text("Venue: Mumbai", 20, 56);

    // Seats
    doc.text("Selected Seats:", 20, 74);
    seats.forEach((seat, idx) => {
      doc.text(`- ${seat}  (₹${price})`, 30, 82 + idx * 8);
    });

    // Total
    doc.setFontSize(14);
    doc.text(`Total Paid: ₹${total}`, 20, 110);

    // Footer
    doc.setFontSize(10);
    doc.text("Thank you for booking with us!", 20, 140);

    doc.save("eticket.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1930] via-[#112d4e] to-[#0a1930] text-white font-inter">
      <div className="px-2 py-2 md:py-3">
      <Header title="Payment" subtitle=""/>
                    <div className="md:hidden flex flex-row justify-center items-center gap-2 sm:gap-12 py-3 sm:py-4 border-b border-white/10 mb-4 md:mb-0 text-white">
                                            <CategoryButton icon={<FaFilm />} label="Film Mart" href="/new-release" />
                                            <CategoryButton icon={<FaCalendarAlt />} label="Events" href="/events" />
                                            <CategoryButton icon={<FaTicketAlt />} label="Book Ticket" href="/movieticket" />
                                          </div>
     <div className="flex flex-col items-center justify-center px-4">
      <CheckCircle className="w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20 text-green-400 mb-4" />
      <h1 className="text-xs sm:text-xl md:text-2xl font-bold mb-2">Booking Confirmed!</h1>
      <p className="text-gray-300 mb-6 text-center text-[10px] sm:text-sm md:text-base">
        Your tickets are confirmed. We’ve sent you an email with the details.
      </p>

      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-xs sm:text-base md:text-lg font-semibold">Booking Summary</h2>
        <p className="text-[10px] sm:text-sm md:text-sm text-gray-300">Kevin Hart: Acting My Age</p>
        <p className="text-xs text-gray-400">Sun, 21 Sep | 7PM | Mumbai</p>

        <div className="border-t border-white/20 pt-3 space-y-1">
          {seats.map((seat, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>Seat {seat}</span>
              <span>₹{price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-bold text-xs sm:text-sm md:text-lg pt-3 border-t border-white/20">
          <span>Total Paid</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 px-3 py-2 sm:px-4 md:py-2 md:px-6 md:py-3 rounded-xl bg-red-500 hover:bg-red-600 font-semibold transition text-xs sm:text-sm md:text-base cursor-pointer"
      >
        Download Ticket
      </button>

      <button
        onClick={() => router.push("/")}
        className="mt-3 text-xs sm:text-sm text-gray-400 hover:text-white cursor-pointer"
      >
        Back to Home
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
