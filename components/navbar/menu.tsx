import { menuItems } from "@/utils/menuItems";
import { menuProps } from "@/types/types";
import Link from "next/link";

const Menu = ({ disposition, space }: menuProps) => {
  return (
    <ul className={`hidden ${disposition} ${space} font-medium items-center lg:flex`}>
      {menuItems.map((item) => (
        <Link key={item.title} href={item.link}>
          <li
            className="cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-xl font-medium"
           
          >
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
