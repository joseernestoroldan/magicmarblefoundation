"use client";
import React from "react";
import { motion } from "framer-motion";

type BannerAnimationProps = {
  times: number[];
  opacity: number[];
  initial: number;
  duration: number;

  children: React.ReactNode;
};

const BannerAnimation = ({
  times,
  opacity,
  children,
  initial,
  duration,
}: BannerAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: initial }}
      animate={{ opacity: opacity }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        times: times,
        repeat: Infinity,
        repeatDelay: 0,
        delay: 0,
      }}
      className="w-full absolute flex flex-row flex-shrink-0"
    >
      {children}
    </motion.div>
  );
};

export default BannerAnimation;
