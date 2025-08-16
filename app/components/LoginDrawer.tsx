"use client";

import { useEffect } from "react";
import "../globals.css";
export default function LoginDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96
                    bg-[#0b233f]/95 text-white backdrop-blur-xl shadow-2xl
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-semibold">Sign In</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-white/70 hover:text-white cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <form className="p-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50
                       focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50
                       focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <button
            type="submit"
            className=
          
"w-full mt-6 rounded-xl  font-semibold bg-[#ff4655] text-white cursor-pointer sweep-button "
          >
         <span className="relative z-10">Sign In</span>
          </button>
        </form>
      </div>
    </>
  );
}
