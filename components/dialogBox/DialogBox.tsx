import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export const DialogBox = ({ children, width }: { children: React.ReactNode, width: string }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={`flex items-center justify-center ${width}`}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 border-none">
        <div className="flex items-center justify-center w-full p-0 m-0 object-cover text-white">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
