"use client"
import React from "react";
import { motion } from "framer-motion";
import { EnterSectionProps } from "@/types/types";

const EnterSection = ({ children }: EnterSectionProps) => {
  return (
    <motion.div
      className="w-full h-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default EnterSection;
