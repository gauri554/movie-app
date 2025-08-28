import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import "../globals.css"; // Ensure global styles are imported
type SectionProps = {
  title: string;
  children: ReactNode;
  viewAllUrl: string;
};


export default function Section({ title, children, viewAllUrl }: SectionProps) {
  const router = useRouter();
  
  return (

    <div className="px-2 sm:px-8 mt-8">
      <div className=" flex justify-between items-centre mb-4  ">

        <h2 className="text-xs sm:text-xl sm:font-semibold ">{title}</h2>
        <button  onClick={() => router.push(viewAllUrl)} className="text-[10px] sm:text-sm text-yellow-400 cursor-pointer">View All →</button>
     </div>
      
      <div className="gap-2 md:gap-6 flex  overflow-x-auto no-scrollbar">{children}</div>
    </div>
  
  );
}
