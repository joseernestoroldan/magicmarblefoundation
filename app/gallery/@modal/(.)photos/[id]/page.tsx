import { getOne } from "@/client";
import { Modal } from "./modal";
import Image from "next/image";
import InfoPhoto from "@/components/gallery/infoPhoto/InfoPhoto";

export default async function PhotoModal({
  params: { id: _Id },
}: {
  params: { id: string };
}) {
  const photo = await getOne(_Id);


  return (
    <Modal>
      <Image
        className="object-contain max-w-[1200px] mx-auto"
        src={photo[0].mainImage}
        fill
        alt="magic marble foundation"
      />

      <div className="flex flex-col justify-between absolute z-10 top-[10px] left-[0px] space-y-4 w-full">
        <InfoPhoto title={photo[0].title} description = {photo[0].description} />
      </div>
    </Modal>
  );

  // <Photo width='w-[1000px]' height='h-[800px]' borderRadius='rounded-xl' src={photo[0].mainImage} alt='foto'/>
}
