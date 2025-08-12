import Image from "next/image";

type EventCardProps = {
  img: string;
  title: string;
  date?: string;
};

export default function EventCard({ img, title, date }: EventCardProps) {
  return (
    <div className="bg-[#13214B] rounded-lg overflow-hidden py-4 text-center">
      <Image src={img} alt={title} width={100} height={200} className="w-[220px] h-[200px] mx-auto rounded-lg" />
      <div className="p-3">
        <h3 className="text-base font-semibold">{title}</h3>
        {date && <p className="text-sm text-gray-300">{date}</p>}
      </div>
    </div>
  );
}
