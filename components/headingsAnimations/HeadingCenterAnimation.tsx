"use client"
import React from "react";
import { AnimationsProps } from "@/types/types";
import { motion } from "framer-motion";

const HeadingCenterAnimation = ({ children }: AnimationsProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-col justify-center items-center w-full"
    >
      {children}
    </motion.div>
  );
};

export default HeadingCenterAnimation;
