// components/CategoryButton.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface CategoryButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export default function CategoryButton({ icon, label, href }: CategoryButtonProps) {
  return (
    <Link
      href={href}
      className="flex flex-col sm:flex-row items-center   sm:gap-2 w-[75px] sm:w-auto   sm:px-4 py-2 rounded-full sm:rounded-lg bg-white/5 hover:bg-white/10 transition text-white"
    >
      <span className="text-[10px] sm:text-sm  sm:ml-0 ">{icon}</span>
      <span className="text-[10px] sm:text-sm">{label}</span>
    </Link>
  );
}
