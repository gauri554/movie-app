import Image from "next/image";

type MovieCardProps = {
  img: string;
  title: string;
  rating: number;
  votes: string;
};

export default function MovieCard({ img, title, rating, votes }: MovieCardProps) {
  return (
    <div className="bg-[#13214B] rounded-lg p-3 flex flex-col items-center">
      <Image src={img} alt={title} width={250} height={120} className="rounded-lg " />
      <h3 className="mt-2">{title}</h3>
      <p className="text-yellow-400 text-sm">
        ⭐ {rating} | {votes} Votes
      </p>
    </div>
  );
}
