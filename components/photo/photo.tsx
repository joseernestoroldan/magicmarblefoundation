import React from "react";
import Image from "next/image";
import { PhotoProps } from "@/types/types";


const Photo = ({width, height, src, alt, borderRadius, objectFit}: PhotoProps) => {
  return (
    <div className={`${width} ${height} relative ${borderRadius}`}>
      <Image
        className={`${objectFit} object-top ${borderRadius}`}
        src={src}
        fill
        alt={alt}
        priority={true}
      />
    </div>
  );
};

export default Photo;
