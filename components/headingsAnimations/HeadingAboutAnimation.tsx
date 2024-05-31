"use client";
import React from "react";
import { AnimationsProps } from "@/types/types";
import { motion } from "framer-motion";

const HeadingAboutAnimation = ({ children }: AnimationsProps) => {
  return (
    <motion.div
      className="flex w-full justify-around items-center"
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default HeadingAboutAnimation;
