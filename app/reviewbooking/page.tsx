"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Info,
  CreditCard,
  Ticket,
  CircleDollarSign,
  ChevronRight,
  ChevronLeft,
  User,
  X,
} from "lucide-react";
import PaymentSuccess from "../components/PaymentSuccess";
import { useRouter } from "next/navigation";

type Food = {
  id: string;
  name: string;
  price: number;
  img: string;
  veg?: boolean;
};

const SAMPLE_FOODS: Food[] = [
  { id: "f1", name: "Jumbo Cheese Popcorn", price: 680, img: "foodoffer1.jpg", veg: true },
  { id: "f2", name: "Nachos", price: 380, img: "foodoffer2.jpg", veg: false },
  { id: "f3", name: "Nachos Combo (Flavoured)", price: 1160, img: "foodoffer3.jpg", veg: false },
  { id: "f4", name: "Jumbo Butter Salt Popcorn", price: 640, img: "foodoffer4.jpg", veg: true },
    { id: "f5", name: "Jumbo Butter Salt Popcorn", price: 640, img: "foodoffer1.jpg", veg: true }
];

export default function ReviewBookingPage() {
  const [selectedFoods, setSelectedFoods] = useState<Record<string, number>>({});
  const [phone, setPhone] = useState<string>("+91-9657879253");
  const [state, setState] = useState<string>("Maharashtra");
  const [editingContact, setEditingContact] = useState(false);
  const [offerApplied, setOfferApplied] = useState<boolean>(false);
  const [proceedOpen, setProceedOpen] = useState(false);

  // static booking info (mock)
  const bookingInfo = {
    title: "Rockstar (2011)",
    lang: "Hindi",
    format: "2D",
    theatre: "Cinepolis VR Nagpur Mall, Rambagh Road, Nagpur",
    showDate: "Tomorrow, 31 Aug",
    showTime: "09:40 AM",
    ticketCount: 1,
    seatLabel: "EXECUTIV - C6",
    ticketPrice: 150,
    cancellationAllowed: false,
  };

  const addFood = (id: string) => {
    setSelectedFoods((s) => ({ ...s, [id]: (s[id] || 0) + 1 }));
  };
  const removeFood = (id: string) => {
    setSelectedFoods((s) => {
      const nv = { ...s };
      if (!nv[id]) return nv;
      nv[id] -= 1;
      if (nv[id] <= 0) delete nv[id];
      return nv;
    });
  };

  const foodSubtotal = useMemo(() => {
    return Object.entries(selectedFoods).reduce((sum, [id, qty]) => {
      const f = SAMPLE_FOODS.find((x) => x.id === id)!;
      return sum + f.price * qty;
    }, 0);
  }, [selectedFoods]);

  const orderAmount = bookingInfo.ticketPrice + foodSubtotal;
  const taxes = +(orderAmount * 0.106).toFixed(2); // sample ~10.6% taxes
  const discount = offerApplied ? 50 : 0;
  const total = +(orderAmount + taxes - discount).toFixed(2);
const [showPopup, setShowPopup] = useState(false);

  const handlePayNow = () => {
    setShowPopup(true);
  };

  const router =useRouter();
  return (
    <div className="min-h-screen bg-[#0C1B4D] text-white font-inter">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-[#0C1B4D]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
                      <button  onClick={() => router.push(`/seatlayout`)} className="rounded-xl p-1 sm:p-1 md:p-2 hover:bg-white/10 border border-slate-700 cursor-pointer">
            <ChevronLeft className="w-3 h-3 sm:h4 sm:h-4 md:h-5 md:w-5" />
          </button>
           
            <div className="text-sm sm:text-sm md:text-lg font-semibold">Review your booking</div>
          </div>
          <div className="flex items-center gap-3">
            {/* profile circle */}
          
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 py-2 md:px-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT: main content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Movie card */}
          <div className="flex gap-4 items-start border border-white/20 rounded-xl p-4">
            <img src="/rockstar.jpg" alt="poster" className="w-20 h-28 object-cover rounded-md shadow-sm" />
            <div className="flex-1">
              <h2 className="text-[12px] sm:text-sm md:text-xl font-semibold">{bookingInfo.title}</h2>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1">{bookingInfo.lang} • {bookingInfo.format}</div>
              <div className="text-[10px] sm:text-sm md:text-sm text-gray-300 mt-2">{bookingInfo.theatre}</div>

              <div className="mt-4  border border-white/10 bg-white/3 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] sm:text-sm md:text-sm font-medium">{bookingInfo.showDate} <span className="text-gray-300"> • {bookingInfo.showTime}</span></div>
                  <div className="text-[10px] sm:text-sm md:text-sm font-semibold">₹{bookingInfo.ticketPrice.toFixed(0)}</div>
                </div>
                <div className="mt-3 text-[10px] sm:text-sm md:text-sm text-gray-300">{bookingInfo.ticketCount} ticket <span className="font-medium">• {bookingInfo.seatLabel}</span></div>
              </div>

              {/* cancellation notice */}
              <div className="mt-4 rounded-xl border border-white/5 bg-white/3 text-white-800 px-4 py-3 flex items-center gap-3 text-[10px] sm:text-sm md:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-none border rounded-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="16" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div >This theatre doesn't allow cancellation</div>
              </div>
            </div>
          </div>

          {/* Offers */}
          <div className="rounded-xl border border-white/20  p-4">
            <p className="font-semibold mb-3 text-xs sm:text-sm md:text-base">Offers for you</p>
            <button
              onClick={() => setOfferApplied((v) => !v)}
              className="w-full flex items-center justify-between gap-4 px-4 py-3 bg-white/3 border border-white/5 rounded-lg hover:bg-[#13214B]"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="text-[11px] sm:text-sm md:text-sm text-left">
                  <div className="font-medium">View all Offers</div>
                  <div className="text-[10px] text-gray-300">Apply promo codes & cashback</div>
                </div>
              </div>
              <ChevronRight className="text-gray-400 cursor-pointer" />
            </button>
            {offerApplied && <div className="mt-3 text-xs sm:text-sm md:text-sm text-red-500">Offer applied: instant ₹50 off</div>}
          </div>

          {/* Food & Beverages horizontal scroll */}
          <div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xs sm:text-sm md:text-base">Food and beverages</p>
              <a className="text-[10px] sm:text-sm md:text-sm text-gray-200 hover:underline cursor-pointer">See all</a>
            </div>

            <div className="mt-4">
              <div className="overflow-x-auto -mx-2 py-2 scrollbar-hide">
                <div className="flex gap-4 px-2 ">
                  {SAMPLE_FOODS.map((f) => {
                    const qty = selectedFoods[f.id] || 0;
                    return (
                      <div key={f.id} className="basis-1/2 flex-shrink-0 sm:basis-auto sm:w-44 md:w-44 bg-[#13214B] border border-white/5 rounded-xl p-3 flex-shrink-0 shadow-sm ">
                        <div className="h-28 w-full rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img src={f.img} alt={f.name} className="object-contain h-full" />
                        </div>
                        <div className="mt-3 text-[11px] sm:text-sm md:text-sm font-medium">{f.name}</div>
                        <div className="mt-1 text-[10px] sm:text-xs md:text-xs text-gray-500">₹{f.price}</div>
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div className="text-[10px] sm:text-xs md:text-xs text-gray-500 flex items-center gap-2">
                            {f.veg ? <span className="inline-block w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full" /> : <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />}
                            <span>{f.veg ? "Veg" : "Non-veg"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {qty === 0 ? (
                              <button onClick={() => addFood(f.id)} className="text-[10px] sm:text-sm md:text-sm px-3 py-1 border border-gray-200 rounded-full cursor-pointer">Add</button>
                            ) : (
                              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-1">
                                <button onClick={() => removeFood(f.id)} className="px-2 text-sm">-</button>
                                <div className="text-sm w-6 text-center">{qty}</div>
                                <button onClick={() => addFood(f.id)} className="px-2 text-sm">+</button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* spacer */}
          <div className="h-10" />
        </div>

        {/* RIGHT: sticky summary */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-4">
            {/* Payment summary box */}
            <div className=" border border-white/20 rounded-xl p-5 shadow-sm">
              <p className="font-semibold mb-4 text-xs sm:text-sm md:text-base">Payment summary</p>
              <div className="flex justify-between text-[10px] sm:text-sm md:text-sm text-gray-400">
                <div>Order amount</div>
                <div>₹{orderAmount.toFixed(2)}</div>
              </div>
              <div className="flex justify-between text-xs sm:text-sm md:text-sm text-gray-300 mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-[10px] sm:text-xs md:text-xs px-2 py-1 bg-[#13214B] rounded-md">Taxes & fees</div>
                </div>
                <div>₹{taxes.toFixed(2)}</div>
              </div>

              <div className="mt-4 border-t border-white/20 pt-4">
                <div className="flex justify-between items-baseline">
                  <div className="text-[10px] sm:text-xs md:text-xs text-gray-400">To be paid</div>
                  <div className="text-[10px] sm:text-base md:text-lg font-semibold">₹{total.toFixed(2)}</div>
                </div>
              </div>
            </div>

            {/* Your details */}
            <div className=" border border-white/20 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-gray-300">Your details</div>
                </div>
                <div>
                  <button className="text-xs sm:text-sm md:text-sm text-blue-300 cursor-pointer" onClick={() => setEditingContact((v) => !v)}>
                    {editingContact ? "Save" : "Edit"}
                  </button>
                </div>
              </div>

              {!editingContact ? (
                <div className="mt-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <User className="text-gray-500" />
                    <div>
                      <div className="font-medium text-xs sm:text-sm md:text-base">{phone}</div>
                      <div className="text-[10px] sm:text-xs md:text-xs text-gray-500">{state}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-3 space-y-2">
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border border-white/20 rounded-lg text-sm" />
                  <input value={state} onChange={(e) => setState(e.target.value)} className="w-full px-3 py-2 border border-white/20 rounded-lg text-sm" />
                </div>
              )}
            </div>

            {/* Terms */}
            <div className=" border border-white/20 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10">
              <div className="flex items-center gap-3">
                <Info className="text-gray-500" />
                <div className="text-[11px] sm:text-sm md:text-sm">Terms and conditions</div>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>

            {/* Proceed to pay button */}
            <div className="bg-[#13214B] rounded-xl text-white p-4 flex items-center justify-between text-[10px] sm:text-xs  md:text-base ">
              <div>
                <div className="md:text-xs text-gray-300">₹{total.toFixed(2)}</div>
                <div className="md:text-sm font-semibold">TOTAL</div>
              </div>
              <div>
                <button
                  onClick={() => setProceedOpen(true)}
                  className="bg-yellow-400 text-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-lg font-medium flex items-center gap-1 cursor-pointer"
                >
                  <CreditCard /> Proceed To Pay
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Checkout modal */}
      {proceedOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <div className=" bg-[#0C1B4D] rounded-xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs sm:text-base md:text-lg font-semibold">Confirm & Pay</div>
              <button onClick={() => setProceedOpen(false)} className="sm:p-2 md:p-2 rounded-full cursor-pointer"><X /></button>
            </div>

            <div className="space-y-3 text-[10px] sm:text-sm md:text-sm text-gray-300">
              <div className="flex justify-between">
                <div>Ticket</div>
                <div>₹{bookingInfo.ticketPrice.toFixed(2)}</div>
              </div>
              <div className="flex justify-between">
                <div>Food & beverages</div>
                <div>₹{foodSubtotal.toFixed(2)}</div>
              </div>
              <div className="flex justify-between">
                <div>Taxes & fees</div>
                <div>₹{taxes.toFixed(2)}</div>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <div>Offer</div>
                  <div>- ₹{discount.toFixed(2)}</div>
                </div>
              )}
              <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                <div>Total</div>
                <div>₹{total.toFixed(2)}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs sm:text-sm md:text-sm text-gray-300">Payment method</div>
              <div className="flex items-center gap-3 text-xs sm:text-sm md:text-base">
                <div className="px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-2 border border-gray-200 rounded-md flex items-center gap-2 cursor-pointer"><CreditCard className="w-4 h-4 md:w-5 md:h-5"/> Card</div>
                <div className="px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-2 border border-gray-200 rounded-md cursor-pointer">UPI</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setProceedOpen(false)} className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md border border-gray-200 cursor-pointer text-xs sm:text-sm md:text-base ">Cancel</button>
              <button  onClick={handlePayNow} className="px-2 py-1 md:px-5 md:py-2 rounded-md bg-yellow-400 text-black cursor-pointer text-xs sm:text-sm md:text-base">Pay ₹{total.toFixed(2)}</button>
            </div>
             {showPopup && <PaymentSuccess onClose={() => setShowPopup(false)} />}
          </div>
        </div>
      )}
        <footer className="bg-white/10 py-6 text-center text-xs sm:text-sm text-white/70 mt-10">
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
