"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Languages", "Format", "New Releases"] as const;
type Tab = typeof tabs[number];

const filters: Record<Tab, string[]> = {
  Languages: ["Hindi", "English", "English 3D", "Tamil", "Telugu", "Kannada"],
  Format: ["2D", "3D", "4DX 3D", "7D", "Dolby Cinema 3D", "3D Screen X"],
  "New Releases": ["This Week", "Last Week", "Coming Soon"],
};

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FilterModal({ open, onClose }: FilterModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Languages");
  const modalRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[90%] max-w-md rounded-2xl p-6 shadow-2xl
                       bg-gradient-to-b from-[#0f1c46] to-[#050e28] border border-white/10"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Filters</h2>
                <p className="text-xs text-white/60">Tailored content discovery</p>
              </div>
              <button
                onClick={onClose}
                className="text-sm text-[#ff4655] hover:underline cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-sm font-medium transition-colors
                    ${
                      activeTab === tab
                        ? "text-[#ff4655] border-b-2 border-[#ff596b]"
                        : "text-white/70 hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Options */}
            <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
              {filters[activeTab].map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between px-2 py-2 rounded-md 
                             hover:bg-white/10 cursor-pointer transition"
                >
                  <span className="text-white">{item}</span>
                  <input type="checkbox" className="w-5 h-5 accent-[#ff596b]" />
                </label>
              ))}
            </div>

            {/* Apply button */}
            <div className="mt-6">
              <button
                className="w-full  rounded-xl bg-[#ff4655] text-white font-medium 
                           hover:bg-[#ff2f6d] transition-all shadow-md cursor-pointer sweep-button"
              >
              <span>Apply</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
