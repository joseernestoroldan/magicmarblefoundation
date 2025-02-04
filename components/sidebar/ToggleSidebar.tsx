"use client"
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { IoMdClose as CloseIcon} from "react-icons/io";
import Sidebar from "./Sidebar";

const ToggleSidebar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
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
    </>
  );
};
export default ToggleSidebar;
