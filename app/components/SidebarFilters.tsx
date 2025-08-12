"use client";

import { useState } from "react";
interface SidebarFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function SidebarFilters({ isOpen, onClose }: SidebarFiltersProps) {
  const [selectedLang, setSelectedLang] = useState<string[]>(["Hindi"]);
  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

  const toggleSelection = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const languages = ["Hindi", "English", "English 3D", "Tamil", "Telugu", "Kannada"];
  const formats = ["2D", "3D", "4DX 3D", "7D", "Dolby Cinema 3D", "3D Screen X"];

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#0C1B4D] text-white z-50 p-4 border-r border-white/10 transition-transform duration-300">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>

          {/* Filters Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Filters</h2>
            <button className="text-xs text-gray-300"></button>
          </div>

          {/* New Releases */}
          <h3 className="text-yellow-400 font-semibold mb-4">New Releases</h3>

          {/* Languages */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Languages</h4>
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  className="accent-[#FFB800] w-4 h-4"
                  checked={selectedLang.includes(lang)}
                  onChange={() => toggleSelection(selectedLang, setSelectedLang, lang)}
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>

          {/* Formats */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Format</h4>
            {formats.map((fmt) => (
              <label key={fmt} className="flex items-center gap-2 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  className="accent-[#FFB800] w-4 h-4"
                  checked={selectedFormat.includes(fmt)}
                  onChange={() => toggleSelection(selectedFormat, setSelectedFormat, fmt)}
                />
                <span>{fmt}</span>
              </label>
            ))}
          </div>

          {/* Apply Button */}
          <button className="bg-[#E91E63] text-white px-4 py-2 rounded-lg w-full font-semibold">
            Apply
          </button>
        </div>
      )}
    </>
  );
}
