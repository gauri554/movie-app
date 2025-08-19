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
      className="flex items-center gap-1 sm:gap-2 w-[150px] sm:w-auto ml-7 sm:ml-0  sm:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-white-100"
    >
      <span className="text-lg ml-6 sm:ml-0">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
