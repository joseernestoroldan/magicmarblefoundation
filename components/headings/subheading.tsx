import React from "react";

type SubHeadingProps = {
  title: string;
};

const SubHeading = ({ title }: SubHeadingProps) => {
  return <h1 className="text-4xl font-bold text-cyan-500 flex justify-center items-center">{title}</h1>;
};

export default SubHeading;
