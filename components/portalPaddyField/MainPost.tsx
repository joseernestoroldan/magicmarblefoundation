import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const MainPost = ({ paddyFields }: { paddyFields: QueryType[] }) => {
  const mainArticle = paddyFields[0];
  const { _id, mainImage, title, description, hotSpotMain } = mainArticle;
  const x = (hotSpotMain?.x ?? 0.5) * 100;
  const y = (hotSpotMain?.y ?? 0.5) * 100;

  return (
    <div className="w-full flex flex-col">
      <Link href={`paddyfield/${_id}`}>
        <div className="relative h-[50vh] w-full rounded-[5px] overflow-hidden group shadow-lg">
          <Image
            src={mainImage ?? "/no-profile.webp"}
            alt="portal paddy field"
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: `${x}% ${y}%` }}
          />
          <div className="absolute bottom-0 w-full sm:w-[500px] bg-green-950 bg-opacity-60 backdrop-blur-sm p-6 rounded-tr-[5px] flex flex-col gap-3">
            <h2 className="text-white text-base sm:text-xl font-bold leading-snug">
              {title}
            </h2>
            <p className="text-white text-sm sm:text-base line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainPost;
