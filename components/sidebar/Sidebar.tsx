import { menuItems } from "@/utils/menuItems";
import Link from "next/link";

import Button from "../button/Button";


type SidebarProps = {
  toggle: boolean;
  setToggle: any;
};

const Sidebar = ({ toggle, setToggle }: SidebarProps) => {
  return (
    <div className="w-full h-[80vh] bg-black bg-opacity-80 pt-10 ">
      <div className="text-white flex flex-col items-center space-y-4">
  
        <div className="w-full">
          <ul
            className={`flex w-full flex-col space-y-4 font-medium items-stretch`}
          >
            {menuItems.map((item) => (
              <Link key={item.title} href={item.link}>
                <li
                  onClick={() => setToggle(!toggle)}
                  className="w-full py-4 text-center cursor-pointer hover:drop-shadow-md rounded-lg text-white hover:text-cyan-500 text-2xl font-medium"
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Link className="inline" href={"/donations"}>
          <div onClick={() => setToggle(!toggle)}><Button>Donate</Button></div>
          
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
