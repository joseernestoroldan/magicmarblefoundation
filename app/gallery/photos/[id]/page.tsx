import { getOne } from "@/client";
import Container from "@/components/layouts/container/Container";
import Description from "@/components/gallery/description/Description";
import Image from "next/image";

export default async function PhotoPage({
  params: { id: _Id },
}: {
  params: { id: string };
}) {
  const photo = await getOne(_Id);

  return (
    <Container>
      <div className="flex flex-col items-center p-6 border-card rounded-xl">
        <div className="w-[1000px] h-[600px] rounded-xl">
          <Image
            src={photo[0].mainImage}
            alt={photo[0].title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full p-6 space-y-6">
          <h1 className=" text-xl text-gray-500 font-bold">{photo[0].title}</h1>
          <Description content={photo[0].description} />
        </div>
      </div>
    </Container>
  );
}
