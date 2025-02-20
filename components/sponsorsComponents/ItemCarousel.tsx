import Image from "next/image";
import { CarouselItem } from "../ui/carousel";

export const ItemCarousel = ({ image }: { image: string }) => {
    return (
      <CarouselItem>
        
              <div className="w-full relative aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={image}
                  alt="Sponsor at Magic Marble Foundation"
                  fill
                  className="object-cover"
                />
              </div>
            
      </CarouselItem>
    );
  };