type CinemaCardProps = {
  name: string;
  distance: string;
  rating: number;
  time: string;
};

export default function CinemaCard({ name, distance, rating, time }: CinemaCardProps) {
  return (
    <div className="bg-[#13214B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm">{distance} Kilometers</p>
        <p className="text-sm text-gray-300">{time}</p>
      </div>
      <div className="text-yellow-400 font-bold">⭐ {rating}</div>
    </div>
  );
}
