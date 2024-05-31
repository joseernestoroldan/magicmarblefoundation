"use client";
import React from "react";
import { motion } from "framer-motion";
import { EnterElementProps } from "@/types/types";

const EnterElement = ({ children }: EnterElementProps) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{ y: -50 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "linear", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default EnterElement;
