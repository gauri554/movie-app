"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Info, Minus, Plus, Ticket, X } from "lucide-react";
import { useRouter } from "next/navigation";
type SeatStatus = "available" | "booked" | "blocked" | "selected";

type Seat = {
  id: string; 
  row: string; 
  col: number; 
  price: number; 
  status: SeatStatus;
};

type Row = {
  label: string;
  seats: Seat[];
};

const COLORS = {
  bg: "#0D1B4C", // deep navy background
  card: "#0f1a2b",
  accent: "#ffd54a", // selection highlight
  available: "#71b66aff", // green
  booked: "#a9b6d3ff", // muted slate
  blocked: "#9e9e9e",
  text: "#e5e7eb",
  subtext: "#9ca3af",
  outline: "#243047",
};

const MAX_SELECTABLE = 10;

const SHOW_DETAILS = {
  movieTitle: "Movie Title",
  cert: "UA",
  lang: "Hindi, 2D",
  theatre: "Inox City Gold, Ashram Road",
  date: "Fri, 29 Aug",
  time: "07:30 PM",
};


function buildRow(
  label: string,
  segments: number[], // e.g., [2, 8, 2] => left aisle right
  basePrice: number,
  bookedIds: Set<string> = new Set(),
  blockedIds: Set<string> = new Set()
): Row {
  let colCounter = 1;
  const seats: Seat[] = [];

  segments.forEach((seg, segIdx) => {
    for (let i = 0; i < seg; i++) {
      const id = `${label}${colCounter}`;
      const isBooked = bookedIds.has(id);
      const isBlocked = blockedIds.has(id);
      seats.push({
        id,
        row: label,
        col: colCounter,
        price: basePrice,
        status: isBooked ? "booked" : isBlocked ? "blocked" : "available",
      });
      colCounter++;
    }

    if (segIdx < segments.length - 1) {
      seats.push({ id: `${label}-gap-${segIdx}`, row: label, col: -1, price: 0, status: "blocked" });
    }
  });

  return { label, seats };
}

function buildLayout() {

  const booked = new Set<string>([
    
    "C5", "C6", "C7", "D8", "E3", "F10", "H2",
  ]);
  const blocked = new Set<string>([]);

  const rows: Row[] = [];

  // Premium rows (front)
  const premiumRows = ["A", "B", "C"]; // 12 wide: 3 + 6 + 3 (wider aisles)
  premiumRows.forEach((r) => rows.push(buildRow(r, [3, 6, 3], 280, booked, blocked)));

  // Prime rows (middle)
  const primeRows = ["D", "E", "F", "G"]; // 14 wide: 3 + 8 + 3
  primeRows.forEach((r) => rows.push(buildRow(r, [3, 8, 3], 320, booked, blocked)));

  // Classic rows (back)
  const classicRows = ["H", "I"]; // 12 wide: 2 + 8 + 2
  classicRows.forEach((r) => rows.push(buildRow(r, [2, 8, 2], 220, booked, blocked)));

  return rows;
}

// ---------- Components ----------

function Legend() {
  return (
    <div className="flex items-center gap-5 text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3  md:h-4 md:w-4 rounded grid place-items-center " style={{ background: COLORS.available }}/>
        <span className="text-[10px] sm:text-xs md:text-sm">Available</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 rounded grid place-items-center" style={{ background: COLORS.booked }} />
        <span className="text-[10px] sm:text-xs md:text-sm">Booked</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 rounded grid place-items-center" style={{ background: COLORS.accent }} />
        <span className="text-[10px] sm:text-xs md:text-sm">Selected</span>
      </div>
    </div>
  );
}

function ScreenBanner() {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-4 mb-6">
      <div className="h-2 rounded-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60" />
      <div className="text-center text-xs text-gray-400 mt-1 tracking-widest"></div>
    </div>
  );
}

function SeatPill({ seat, selected, onToggle }: { seat: Seat; selected: boolean; onToggle: (seat: Seat) => void }) {
  if (seat.col === -1) {
  
    return <div className=" sm:w-8" />;
  }

  const status = seat.status;
  const isDisabled = status === "booked" || status === "blocked";

  const bg = selected
    ? COLORS.accent
    : status === "available"
    ? COLORS.available
    : status === "booked"
    ? COLORS.booked
    : COLORS.blocked;

  const aria = isDisabled ? `${seat.id} unavailable` : `${seat.id} ${selected ? "selected" : "available"}`;
 const router = useRouter();

 
  return (
    <button
      aria-label={aria}
      disabled={isDisabled}
      onClick={() => onToggle(seat)}
      className={`h-4 w-4 sm:h-9 sm:w-9 md:w-9 md:h-9 rounded-md font-medium text-[10px] sm:text-xs grid place-items-center transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent`}
      style={{
        background: bg,
        color: selected ? "#101826" : "#0b1220",
        boxShadow: selected ? "0 0 0 2px #ffe07a inset" : "0 0 0 1px rgba(255,255,255,0.06) inset",
      }}
    >
      {seat.id.replace(/^[A-Z]/, "")}
    </button>
  );
}

function RowStrip({ row, selectedMap, onToggle }: { row: Row; selectedMap: Record<string, boolean>; onToggle: (s: Seat) => void }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap  sm:items-center gap-1 md:gap-3 sm:justify-center">
      <div className="w-2 sm:w-7 md:w-5 text-right text-gray-400 text-[10px] sm:text-sm select-none">{row.label}</div>
      <div className="flex flex-wrap justify-center sm:items-center gap-0.5 md:gap-1 sm:gap-2 ">
        {row.seats.map((s) => (
          <SeatPill key={s.id} seat={s} selected={!!selectedMap[s.id]} onToggle={onToggle} />
        ))}
      </div>
      <div className="w-4 md:w-5 text-left text-gray-400 text-[10px] sm:text-sm select-none">{row.label}</div>
    </div>
  );
}

function StickyProceed({
  count,
  total,
  onProceed,
  onClear,
}: {
  count: number;
  total: number;
  onProceed: () => void;
  onClear: () => void;
}) {

  const router=useRouter();
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 5 }}
          animate={{ y: 0, opacity: 20 }}
          exit={{ y: 80, opacity: 5}}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed left-0 right-0 bottom-0 z-50"
        >
          <div
            className="mx-auto max-w-3xl rounded-t-2xl border border-slate-700 p-3 sm:p-4 bg-black/20"
           
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-sm">{count} seat{count > 1 ? "s" : ""} selected</div>
                <div className="text-gray-400 text-[10px] sm:text-xs md:text-xs">Taxes will be applied on next step</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClear}
                  className="hidden sm:inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm border border-slate-600 text-gray-300 hover:bg-slate-800 cursor-pointer"
                >
                  <X className="h-4 w-4" /> Clear
                </button>
                <button
              
               onClick={() => router.push('/reviewbooking')}
                  className="inline-flex items-center gap-2 rounded-xl px-2 py-1 md:px-2 md:py-2 text-[10px] sm:text-xs md:text-sm font-semibold cursor-pointer"
                  style={{ background: COLORS.accent, color: "#111827" }}
                >
                  <Ticket className="w-4 h-4 sm:w-3 sm:h-3 md:h-4 md:w-4" /> Proceed ₹{total}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BookingPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [selected, setSelected] = useState<Record<string, Seat>>({});
  const selectedMap = useMemo(() => Object.fromEntries(Object.keys(selected).map((k) => [k, true])), [selected]);

  useEffect(() => {
    setRows(buildLayout());
  }, []);

  const total = useMemo(() => Object.values(selected).reduce((sum, s) => sum + s.price, 0), [selected]);
  const count = Object.keys(selected).length;

  const handleToggle = (seat: Seat) => {
    if (seat.status === "booked" || seat.status === "blocked") return;

    setSelected((prev) => {
      const next = { ...prev } as Record<string, Seat>;
      if (next[seat.id]) {
        delete next[seat.id];
      } else {
        const currently = Object.keys(prev).length;
        if (currently >= MAX_SELECTABLE) return prev; // silently ignore if max reached
        next[seat.id] = { ...seat, status: "selected" };
      }
      return next;
    });
  };

  const clearAll = () => setSelected({});

  const proceed = () => {
   
    alert(`Proceeding with: ${Object.keys(selected).join(", ")} | Total ₹${total}`);
  };
const router=useRouter();
  return (
    <div className="min-h-[100dvh]" style={{ background: COLORS.bg, color: COLORS.text }}>
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-800" style={{ background: "#0D1B4C" }}>
        <div className="mx-auto max-w-3xl flex items-center gap-3 px-3 py-3">
          <button  onClick={() => router.push(`/movieticket`)} className="rounded-xl p-1 sm:p-1 md:p-2 hover:bg-white/10 border border-slate-700 cursor-pointer">
            <ChevronLeft className="w-3 h-3 sm:h4 sm:h-4 md:h-5 md:w-5" />
          </button>
          <div className="flex flex-col">
            <div className="text-sm sm:text-base font-semibold">{SHOW_DETAILS.movieTitle}</div>
            <div className="text-[10px] sm:text-xs text-gray-400">
              {SHOW_DETAILS.cert} • {SHOW_DETAILS.lang} • {SHOW_DETAILS.theatre}
            </div>
          </div>
        </div>
      </header>

      {/* Show info strip */}
      <section className="mx-auto max-w-3xl px-3 pt-3">
        <div className="rounded-2xl border border-slate-800 p-3 sm:p-4 bg-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-gray-300">
              <div className="text-[10px] md:text-sm font-medium">{SHOW_DETAILS.date}</div>
              <div className="text-[10px] md:text-sm text-gray-400">{SHOW_DETAILS.time}</div>
            </div>
            <Legend />
          </div>
        </div>
      </section>

      {/* Screen */}
      <ScreenBanner />

      {/* Seat grid */}
      <main className="mx-auto max-w-3xl px-3 sm:px-6 md:px-3 pb-20 sm:pb-25 md:pb-28">
        <div className="rounded-2xl border border-slate-800 py-1  sm:pl-0  sm:p-4 md:p-4 bg-white/10">
          <div className="flex flex-col gap-1 sm:gap-6 md:gap-3">
            {rows.map((r) => (
              <RowStrip key={r.label} row={r} selectedMap={selectedMap} onToggle={handleToggle} />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs md:text-xs text-gray-300">
            <span className="rounded-full border border-slate-700 px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1">Classic ₹220</span>
            <span className="rounded-full border border-slate-700 px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1">Premium ₹280</span>
            <span className="rounded-full border border-slate-700 px-3 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1">Prime ₹320</span>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs md:text-xs  text-gray-400 ml-auto">
              <Info className="w-3 h-3 sm:w-3 sm:h-3 md:h-3.5 md:w-3.5" /> Tap a seat to select
            </span>
          </div>
        </div>
      </main>

      {/* Sticky proceed */}
      <StickyProceed count={count} total={total} onProceed={proceed} onClear={clearAll} />
    </div>
  );
}
