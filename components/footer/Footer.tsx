import React from "react";
import Menu from "../navbar/menu";
import Icons from "../socialMedia/Icons";
import Container from "../layouts/container/Container";
import Logo from "../logo/Logo";

type FooterProps = {
  name: string | null;
};

const Footer = ({name}:FooterProps) => {
  return (
    <div className="flex flex-col space-y-10 items-stretch w-full max-w-[300px] min-[425px]:max-w-[423px] sm:max-w-[638px] md:max-w-[766px] lg:max-w-[1022px] mx-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full py-8 md:py-24 bg-white space-y-4 ">
          <div className="flex flex-col justify-between items-center space-y-6 bg-white">
            <Logo />
            <p className="w-[250px] text-gray-500 text-base indent-4 text-justify">
              USA based tax-exempt charitable organization (tax-id
              number 86-1626792) under Section 501(c)(3) of the Internal Revenue
              Code. Donations are tax-deductible as allowed by law.
            </p>
          </div>
          <div className="bg-white  space-y-4">
            <h3 className="text-cyan-400 font-medium text-xl text-center md:text-left">
              Register Address
            </h3>
            <p className="w-[200px] text-gray-500 text-justify">
              455 E. Eisenhower Parkway #355 Ann Arbor, Michigan, 48108 USA
            </p>
          </div>
          <div className="bg-white">
            <Menu disposition="flex-col" space="space-y-1" />
          </div>
          <div className="bg-white flex flex-col items-center space-y-4  px-0">
            <h3 className="text-black font-bold text-2xl">Follow Us</h3>
            <div>
              <Icons color="text-cyan-500" name={name} />
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center w-full pb-12">
          <p className="text-gray-500 text-sm">
            Created by <span className="text-cyan-500">Code2Steps</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 Magic Marble Foundation. All rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
