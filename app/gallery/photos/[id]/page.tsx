import { getOne } from "@/client";
import Container from "@/components/layouts/container/Container";
import Description from "@/components/gallery/description/Description";
import Image from "next/image";
import { QueryType } from "@/types/types";

export default async function PhotoPage({
  params: { id: _Id },
}: {
  params: { id: string };
}) {
  const query: QueryType[] | null = await getOne(_Id);
  const [photo] = query;
  const { mainImage, description, title } = photo;

  return (
    <Container>
      <div className="flex flex-col items-center p-6 border-card rounded-xl">
        <div className="w-[1000px] h-[600px] rounded-xl">
          <Image
            src={mainImage ?? "/no-profile.webp"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        {description && (
          <div className="flex flex-col items-center justify-between w-full p-6 space-y-6">
            <h1 className=" text-xl text-gray-500 font-bold">{title}</h1>
            <Description content={description} />
          </div>
        )}
      </div>
    </Container>
  );
}
