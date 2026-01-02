import Button from "../button/Button";
import Infobar from "../infoBar/Infobar";
import Container from "../layouts/container/Container";
import Link from "next/link";
import Logo from "../logo/Logo";
import MenuDropdowns from "./menuDropdowns";
import Badge from "../badge/Badge";
import ToggleSidebar from "../sidebar/ToggleSidebar";
import { getAllData } from "@/client";

type NavbarProps = {
  name: string | null;
};

const Navbar = async ({ name }: NavbarProps) => {

  const chimpData = await getAllData("chimp");
  console.log(chimpData)

  return (
    <div className="w-full sticky top-0 left-0 right-0 z-20 bg-white">
      <Infobar name={name} chimpData={chimpData} />
      <Container>
        <div className="w-full flex justify-between items-center">
          <Logo />
          <Badge mode="navbar"/>
          <div className="flex items-center justify-center">
            <MenuDropdowns />
            <div className="w-min hidden md:flex flex-col justify-center items-center space-y-2">
              <Link className="hidden md:inline mx-4" href={"/donations"}>
                <Button>Donate</Button>
              </Link>
            </div>
            <ToggleSidebar/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
