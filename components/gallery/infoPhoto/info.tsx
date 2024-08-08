import React from "react";
import { IoMdClose } from "react-icons/io";

type InfoProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  title: string
  description: string
};

const Info = ({ toggle, setToggle, title, description }: InfoProps) => {
  return (
    <div className="flex flex-col w-full bg bg-black bg-opacity-80 space-y-6 items-center p-6 rounded-2xl">
      <h1 className="capitalize text-white text-lg text-center font-semibold">
        {title}
      </h1>
      <p className="capitalize text-white text-base font-light  w-[260px] text-justify">
        {description}
      </p>
      <div onClick={() => setToggle(!toggle)} className="text-gray-200 text-sm underline cursor-pointer">Collapse</div>
      

    </div>
  );
};

export default Info;
