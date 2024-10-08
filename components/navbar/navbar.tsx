"use client";
import React, { useState } from "react";
import Menu from "./menu";
import Button from "../button/Button";
import Infobar from "../infoBar/Infobar";
import Container from "../layouts/container/Container";
import Link from "next/link";
import Logo from "../logo/Logo";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import Sidebar from "../sidebar/Sidebar";
import { IoMdClose } from "react-icons/io";

type NavbarProps = {
  name?: string;
};

const Navbar = ({name,}:NavbarProps ) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="w-full sticky top-0 left-0 right-0 z-20 bg-white">
      <Infobar name={name}/>

      <Container>
        <div className="w-full flex justify-between items-center">
          <Logo />

          <div className="flex space-x-8 items-center">
            <Menu disposition="flex-row" space="space-x-3"></Menu>
            <div className="w-min hidden md:flex flex-col justify-center items-center space-y-2">
              {name && <p className="text-nowrap text text-cyan-500 capitalize">Hello {name} - <Link className="underline font-medium" href={"/profile"}>your profile</Link> </p>}
            
            <Link className="hidden md:inline" href={"/donations"}>
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
                  <IoMdClose className="text-2xl" />
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
