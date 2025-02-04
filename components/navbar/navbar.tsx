"use client";
import { useState } from "react";
import Button from "../button/Button";
import Infobar from "../infoBar/Infobar";
import Container from "../layouts/container/Container";
import Link from "next/link";
import Logo from "../logo/Logo";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import Sidebar from "../sidebar/Sidebar";
import { IoMdClose as CloseIcon} from "react-icons/io";
import MenuDropdowns from "./menuDropdowns";
import { QueryType } from "@/types/types";
import Badge from "../badge/Badge";

type NavbarProps = {
  name: string | null;
  chimpData: QueryType[] | null;
};

const Navbar = ({ name, chimpData }: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="w-full sticky top-0 left-0 right-0 z-20 bg-white">
      <Infobar name={name} chimpData={chimpData} />

      <Container>
        <div className="w-full flex justify-between items-center">
          <Logo />
          <Badge mode="navbar"/>
          <div className="flex items-center justify-center">
            <MenuDropdowns />
            <div className="w-min hidden md:flex flex-col justify-center items-center space-y-2 bg-red-300">
              <Link className="hidden md:inline mx-4" href={"/donations"}>
                <Button>Donate</Button>
              </Link>
            </div>

            {!toggle && (
              <div onClick={() => setToggle(!toggle)}>
                <HamburgerMenu />
              </div>
            )}

            {toggle && (
              <div className="absolute -top-4  -left-8 bottom-0 right-0">
                <div
                  onClick={() => setToggle(!toggle)}
                  className="text-white text-xl absolute right-4 top-4"
                >
                  <CloseIcon className="text-2xl" />
                </div>
                <Sidebar toggle={toggle} setToggle={setToggle} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
