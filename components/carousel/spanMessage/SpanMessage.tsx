import React from "react";
import { SpanMessageProps } from "@/types/types";

const SpanMessage = ({ children }: SpanMessageProps) => {
  return (
    <span className="text-3xl font-bold w-fit text-center text-white  bg-black bg-opacity-50 p-4 rounded-xl -translate-y-[50%]">
      {children}
    </span>
  );
};

export default SpanMessage;
