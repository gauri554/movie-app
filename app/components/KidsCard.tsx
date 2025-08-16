"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import  "./KidsCard.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import "./MovieCard.css";
type KidsCardProps = {
  img: string;
  title: string;
  date?: string;
};

export default function KidsCard({ img, title, date }: KidsCardProps) {
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
    <div ref={containerRef} onClick={() => router.push(`/events`)} className="bg-[#13214B] rounded-lg overflow-hidden py-4 text-center cursor-pointer hover:text-white/70 stagger-card">
    <div className={`image-wrapper relative movie-card ${isVisible ? "section-visible" : "section-hidden"}`}>
      <Image src={img} alt={title} width={100} height={200} className="w-[220px] h-[200px] mx-auto rounded-lg event-image" /></div>
      <div className="p-3">
        
        <h3 className="text-base font-semibold">{title}</h3>
        {date && <p className="text-sm text-gray-300">{date}</p>}
      </div>
   
    </div>
  );
}
