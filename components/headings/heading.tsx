"use client"
import React from "react";
import { AnimatedWords } from "../animatedWords/AnimatedWords";
import type { headingProps } from "@/types/types";

const Heading = ({textSize, color, shadow, title, center}: headingProps) => {
  return (
    <div className={`w-full ${center}`}>
      <h1
      className={`${textSize} font-bold w-auto max-w-[40rem] ${color} text-wrap ${center} leading-none m-0 p-0`}
        style={{ textShadow: `${shadow}` }}
      >
        <AnimatedWords title={title}></AnimatedWords>
      </h1>
    </div>
  );
};

export default Heading;
