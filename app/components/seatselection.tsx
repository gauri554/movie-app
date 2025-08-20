// components/SeatSelection.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SeatSelection() {
  const [type, setType] = useState("VIP");
  const [seats, setSeats] = useState(2);
 const [showChooseSeats, setShowChooseSeats] = useState(false);

   const router = useRouter();
  const seatTypes = [
    { name: "RECLINER", price: 480, status: "ALMOST FULL", statusColor: "text-orange-500" },
    { name: "PRIME PLUS", price: 240, status: "ALMOST FULL", statusColor: "text-orange-500" },
    { name: "PRIME", price: 190, status: "AVAILABLE", statusColor: "text-green-500" },
    { name: "CLASSIC", price: 170, status: "AVAILABLE", statusColor: "text-green-500" },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border p-4 sm:p-10 mt-12">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">How many seats?</h2>
      <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Choose your type of person, seat count, and preferred class.</p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* LEFT: Selection Controls */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          {/* Type of Person */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-500 mb-1">
              Type of Person <span className="text-gray-400">(Normal / VIP / VVIP)</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full sm:w-60 lg:w-72 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-700 focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
            >
              <option value="Normal">Normal</option>
              <option value="VIP">VIP</option>
              <option value="VVIP">VVIP</option>
            </select>
          </div>

          {/* Seat Count */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">Number of Seats</p>
          {/* <div className="flex items-center gap-4">
              <button
                onClick={() => setSeats((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold"
              >
                −
              </button>
              <span className="text-xl font-semibold w-10 text-center">{seats}</span>
              <button
                onClick={() => setSeats((prev) => Math.min(10, prev + 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold"
              >
                +
              </button>
            </div>*/}

               <div className="flex flex-wrap gap-2 sm:gap-3">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setSeats(num)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-xs sm:text-sm font-medium flex items-center justify-center border transition cursor-pointer ${
                    seats === num
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Seat Type Table */}
        <div className="flex-1">
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full bg-white text-sm sm:text-base">
              <thead className="bg-gradient-to-r from-red-500 to-red-400 text-white">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-sm font-medium">Seat Type</th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-sm font-medium">Price</th>
                  <th className="px-6 py-3 text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {seatTypes.map((seat) => (
                  <tr
                    key={seat.name}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-3 sm:px-6 py-4 font-medium text-gray-800">{seat.name}</td>
                    <td className="px-3 sm:px-6 py-4 text-gray-600">₹{seat.price}</td>
                    <td className={`px-3 sm:px-6 py-4 font-medium ${seat.statusColor}`}>
                      {seat.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 sm:mt-8">
        <p className="text-xs sm:text-sm text-gray-600">
          Book the{" "}
          <span className="border border-yellow-400 bg-yellow-100 px-1 rounded">
            Bestseller
          </span>{" "}
          Seats in this cinema at no extra cost!
        </p>
      </div>

      {/* Select Seats Button */}
      <div className="mt-8 sm:mt-10">
        <button  onClick={() => router.push("/chooseseats")} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 sm:py-4 rounded-lg text-base sm:text-lg shadow-md transition cursor-pointer">
          Select Seats
        </button>
      </div>
      
    </div>
  );
}
