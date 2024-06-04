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
      <h1 className="capitalize text-white text-xl font-bold">
        {title}
      </h1>
      <p className="capitalize text-white text-lg font-semibold  w-full text-justify indent-6">
        {description}
      </p>
      <div onClick={() => setToggle(!toggle)} className="text-gray-200 text-sm underline cursor-pointer">Collapse</div>
      

    </div>
  );
};

export default Info;
