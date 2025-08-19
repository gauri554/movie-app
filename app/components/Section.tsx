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

    <div className="px-8 mt-8">
      <div className=" flex justify-between items-centre mb-4  ">

        <h2 className="text-xl font-semibold ">{title}</h2>
        <button  onClick={() => router.push(viewAllUrl)} className="text-sm text-yellow-400 cursor-pointer">View All →</button>
     </div>
      
      <div className="grid md:grid-cols-4 gap-6">{children}</div>
    </div>
  
  );
}
