import { ContainerProps } from "@/types/types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[320px] w-full min-[375px]:max-w-[374px] min-[426px]:max-w-[424px] md:max-w-[760px] lg:max-w-[1023px] mx-auto flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
