import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../globals.css";
type RatingModalProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  onSubmit: (rating: number, feedback: string) => void;
};
export default function RatingModal({ isOpen, setIsOpen, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRate = () => {
    console.log("Rated:", rating);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-gradient-to-br from-[#0C1B4D] via-[#162A70] to-[#0C1B4D] text-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl border border-white/10"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-center tracking-wide">Rate This Event</h2>
            <p className="text-white/70 text-center mb-6">Your feedback helps us improve!</p>

            {/* Star Rating */}
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  whileHover={{ scale: 1.2 }}
                  className="focus:outline-none"
                >
                  <FaStar
                    size={35}
                    className={`transition-colors duration-200 ${
                      star <= (hover || rating) ? "text-yellow-400" : "text-gray-400"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Rate Now Button */}
            <motion.button
              onClick={handleRate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold  rounded-xl shadow-lg transition-colors cursor-pointer sweep-button"
            >
            <span>Rate Now</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
