import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="px-8 mt-8">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-semibold ">{title}</h2>
        <button className="text-sm text-yellow-400">View All →</button>
      </div>
      <div className="grid md:grid-cols-4 gap-6">{children}</div>
    </div>
  );
}
