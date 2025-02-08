import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { CarouselItem } from "../ui/carousel";

export const ItemCarousel = ({ image }: { image: string }) => {
    return (
      <CarouselItem>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <div className="w-full relative aspect-square bg-red-300">
                <Image
                  src={image}
                  alt="Sponsor at Magic Marble Foundation"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    );
  };