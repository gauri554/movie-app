// components/Card.tsx
"use client";

import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  subtitle?: string;
  img: string;
  href: string;
}

export default function Card({ title, subtitle, img, href }: CardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="rounded-xl overflow-hidden relative cursor-pointer group"
    >
      {/* Image */}
      <div
        className="h-44 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url('${img}')` }}
      />

      {/* Gradient overlay */}
      <div className="p-2 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0">
        <div className="text-lg font-semibold text-white">{title}</div>
        {subtitle && <div className="text-sm text-white/80">{subtitle}</div>}
      </div>
    </div>
  );
}
