"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function FilterModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("Show Time");
  const [selected, setSelected] = useState<string[]>([]);

  const tabs = ["Show Time", "Price", "Others"];

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className=" w-[90%] md:w-[700px] rounded-2xl shadow-lg overflow-hidden 
                       bg-gradient-to-b from-[#0f1c46] to-[#050e28] ">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">Filter by</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex">
          {/* Left Tabs */}
          <div className="w-1/3 ">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`px-4 py-3 cursor-pointer text-white text-xs sm:text-base md:text-base ${
                  activeTab === tab
                    ? "bg-white/10 font-semibold border-r-4 border-white/5"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-2/3 p-6 space-y-4 text-white">
            {activeTab === "Show Time" && (
              <>
                <FilterOption
                  label="Early Morning"
                  time="12 AM to 8 AM"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Morning"
                  time="8 AM to 12 PM"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Afternoon"
                  time="12 PM to 4 PM"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Evening"
                  time="4 PM to 7 PM"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Night"
                  time="7 PM to 12 AM"
                  selected={selected}
                  toggle={toggleSelect}
                />
              </>
            )}

            {activeTab === "Price" && (
              <>
                <FilterOption
                  label="Below ₹200"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="₹200 - ₹400"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="₹400 - ₹600"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Above ₹600"
                  selected={selected}
                  toggle={toggleSelect}
                />
              </>
            )}

            {activeTab === "Others" && (
              <>
                <FilterOption
                  label="Premium Seats"
                  selected={selected}
                  toggle={toggleSelect}
                />
                <FilterOption
                  label="Recliners"
                  selected={selected}
                  toggle={toggleSelect}
                />
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={() => setSelected([])}
            className="text-[10px] sm:text-sm md:text-sm underline text-gray-400 cursor-pointer"
          >
            Clear filter
          </button>
          <button className="bg-[#ff4655] hover:bg-[#ff2f6d] text-white  rounded-lg font-medium sweep-button">
           <span> View {selected.length} show</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Filter Option Component
function FilterOption({
  label,
  time,
  selected,
  toggle,
}: {
  label: string;
  time?: string;
  selected: string[];
  toggle: (item: string) => void;
}) {
  return (
    <div
      className="flex items-center space-x-3 cursor-pointer"
      onClick={() => toggle(label)}
    >
      <input
        type="checkbox"
        checked={selected.includes(label)}
        readOnly
        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded border-gray-400"
      />
      <div>
        <p className="font-medium text-[11px] sm:text-sm md:text-base">{label}</p>
        {time && <p className="text-xs sm:text-sm md:text-sm text-gray-500">{time}</p>}
      </div>
    </div>
  );
}
