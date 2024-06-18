"use client";
import React from "react";
import { ButtonProps } from "@/types/types";

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-white bg-cyan-500 rounded-full hover:bg-cyan-400 text-lg font-semibold flex w-32  h-12 justify-center items-center">
      {children}
    </button>
  );
};

export default Button;
