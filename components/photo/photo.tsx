import React from "react";
import Image from "next/image";
import { PhotoProps } from "@/types/types";


const Photo = ({width, height, src, alt, borderRadius, objectFit}: PhotoProps) => {
  return (
    <div className={`${width} ${height} relative overflow-hidden rounded-2xl`}>
      <Image
        className={`${objectFit} object-top rounded-2xl`}
        src={src}
        fill
        alt={alt}
        priority={true}
      />
    </div>
  );
};

export default Photo;
