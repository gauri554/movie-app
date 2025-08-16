import Image from "next/image";
import { useRouter } from "next/navigation";
type CinemaCardProps = {
  name: string;
  distance: string;
  rating: number;
  time: string;
  imageUrl:string;
};

export default function CinemaCard({ name, distance, rating, time, imageUrl }: CinemaCardProps) {
   const router = useRouter();
  return (
    <div className="bg-[#13214B] rounded-lg p-2 flex items-center gap-2 cursor-pointer">
  {/* Left Image */}
  <Image
    src={imageUrl} // change to your image path
    alt={name}
    width={60}
    height={60}
    className="rounded-md object-cover"
  />
    <div onClick={() => router.push(`/cinemashows`)} className="bg-[#13214B] rounded-lg p-1 flex justify-between items-center gap-2">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm mt-0">{distance} Kilometers</p>
        <p className="text-sm text-gray-300">{time}</p>
      </div>
      <div className="text-yellow-400 font-bold">⭐ {rating}</div>
    </div>
    </div>
  );
}
