import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
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

    
  return (
    <div   ref={containerRef} onClick={() => router.push(`/new-release`)} className="bg-[#13214B] rounded-lg p-3 flex flex-col items-center overflow-x-auto scroll-smooth no-scrollba cursor-pointer hover:text-white/70"   
    > 
      <Image src={img} alt={title} width={250} height={120} className="rounded-lg " />
 
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-yellow-400 text-sm ">
        ⭐ {rating} | {votes} Votes
      </p>
    </div>
  );
}
