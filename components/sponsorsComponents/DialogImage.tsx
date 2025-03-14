import { DialogImageProps } from "@/types/types";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "next/image";

export const DialogImage = ({ image, hotSpot }: DialogImageProps) => {
  const x = (hotSpot?.x ?? 0.5) * 100;
  const y = (hotSpot?.y ?? 0.5) * 100;
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-[30%]">
        <div className="w-full aspect-square  rounded-[10px]  bg-gray-400 relative overflow-hidden">
          <Image
            src={image ?? "/no-profile.webp"}
            alt="Sponsor at Magic Marble Foundation"
            fill
            className={`object-cover`}
            style={{ objectPosition: `${x}% ${y}%` }}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="w-full aspect-square  rounded-[10px]  bg-gray-400 relative overflow-hidden">
          <Image
            src={image ?? "/no-profile.webp"}
            alt="Sponsor at Magic Marble Foundation"
            fill
            className={`object-cover`}
            style={{ objectPosition: `${x}% ${y}%` }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
