import { LayoutYProps } from "@/types/types";

const LayoutY = ({ children }: LayoutYProps) => {
  return (
    <div className="w-full flex-col justify-center items-center space-y-10 md:space-y-24">
      {children}
    </div>
  );
};

export default LayoutY;
