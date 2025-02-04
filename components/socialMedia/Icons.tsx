"use client";
import { LiaFacebook as FbIcon } from "react-icons/lia";
import { LiaInstagram as IgIcon } from "react-icons/lia";
import { TiSocialYoutubeCircular as YouTubeIcon } from "react-icons/ti";
import { IoMdContact as ContactIcon } from "react-icons/io";
import { IconsProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

const links = [
  {
    href: "https://www.facebook.com/magicmarblefoundation",
    Icon: FbIcon,
  },
  {
    href: "https://www.instagram.com/magicmarblefoundation",
    Icon: IgIcon,
  },
  {
    href: "https://www.youtube.com/@magicmarble2478",
    Icon: YouTubeIcon,
  },
];

const Icons = ({ show, setShow, color, name }: IconsProps) => {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-row justify-between items-center">
      {name && pathname !== "/profile" && (
        <Link
          className={`${color} hover:bg-zinc-200 hover:text-black text-sm underline border-2 rounded-[10px] h-[1.6rem] flex justify-center items-center px-2 border-[${color}]`}
          href={"/profile"}
        >
          Profile
        </Link>
      )}

      {links.map((link) => (
        <IconLink
          key={link.href}
          href={link.href}
          Icon={link.Icon}
          color={color}
        />
      ))}

      <ContactIcon
        className={`text-4xl ${color} inline-block md:hidden`}
        onClick={() => setShow(!show)}
      />
    </div>
  );
};

export default Icons;

interface IconLinkProps {
  href: string;
  Icon: IconType;
  color: string;
}

const IconLink = ({ href, Icon, color }: IconLinkProps) => {
  return (
    <Link href={href} passHref target="_blank">
      <Icon className={`text-4xl ${color}`} />
    </Link>
  );
};
