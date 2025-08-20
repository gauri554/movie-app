"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./EventCard.css";
import "./MovieCard.css";
import { FaEye } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
type EventCardProps = {
  img: string;
  title: string;
  date?: string;
};

export default function EventCard({ img, title, date }: EventCardProps) {
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
    <div ref={containerRef} onClick={() => router.push(`/events`)} className="bg-[#13214B] rounded-lg overflow-hidden py-4 shrink-0 text-center cursor-pointer flex-col justify-center items-center">
    <div className={`mx-auto relative movie-card ${isVisible ? "section-visible" : "section-hidden"} w-[120px] h-[150px] md:w-[220px] md:h-[260px]`}>
      <Image src={img} alt={title} fill className=" rounded-lg object-cover" />
        <div className="icon">
          <FaEye />
        </div>
      </div>
     
      <div className="p-2">
        
        <h3 className="text-base font-semibold">{title}</h3>
        {date && <p className="text-sm text-gray-300">{date}</p>}
      </div>
    </div>
  );
}
