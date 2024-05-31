"use client";
import { Parallax } from "react-parallax";
import type { ParallaxProps } from "@/types/types";

const ParallaxContainer = ({ children, bgImage, opacity }: ParallaxProps) => (
  <div className="w-full overflow-hidden relative py-64 bg-cyan-100">
    <div className="absolute w-[2600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <Parallax
        className="w-full bg-cover bg-top flex items-center justify-center"
        bgImageStyle={{ opacity: `${opacity}` }}
        bgImage={bgImage}
        bgImageAlt="dog parallax"
        strength={-600}
      >
        {children}
      </Parallax>
    </div>
  </div>
);
export default ParallaxContainer;
