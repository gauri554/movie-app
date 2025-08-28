import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import "./MovieCard.css";
import "../globals.css"; // Ensure global styles are imported
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
type MovieCardProps = {
  img: string;
  title: string;
  rating: number;
  votes: string;

};

export default function MovieCard({ img, title, rating, votes }: MovieCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
   const router = useRouter();

   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);      // trigger once
          observer.unobserve(el);  // stop observing after first reveal
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
    
  return (
    <div   ref={containerRef} onClick={() => router.push(`/new-release`)} className="bg-[#13214B] rounded-lg p-2 md:p-3 flex flex-col items-center overflow-x-auto scroll-smooth no-scrollbar shrink-0  cursor-pointer hover:text-white/70"   
    > 
   
      {/*<Image src={img} alt={title} width={250} height={120} className="rounded-lg  transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50 " />*/}

      <div className={`relative movie-card ${isVisible ? "section-visible" : "section-hidden"}`}   >
  <Image
    src={img}
    alt={title}
    width={250}
    height={120}
    className="rounded-lg w-[120px] h-[150px] sm:w-[200px] sm:h-[240px]"
  />

  {/* Dark overlay */}
  <div className="overlay"></div>

  {/* Eye icon with top & bottom parts */}
  <div className="view-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
      {/* Top half */}
      <path className="eye-top" strokeLinecap="round" strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7" />
      {/* Bottom half */}
      <path className="eye-bottom" strokeLinecap="round" strokeLinejoin="round"
        d="M21.542 12C20.268 16.057 16.477 19 12 19c-4.477 0-8.268-2.943-9.542-7" />
      {/* Pupil */}
      <circle className="eye-pupil" cx="12" cy="12" r="3" />
    </svg>
  </div>
</div>

      <p className="mt-2 text-[10px] sm:text-base sm:font-semibold">{title}</p>
      <p className="text-yellow-400 text-[10px] sm:text-sm ">
        ⭐ {rating} | {votes} Votes
      </p>
    </div>
  );
}
