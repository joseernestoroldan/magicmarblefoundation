"use client";
import { useState } from "react";
import Container from "../layouts/container/Container";
import Icons from "../socialMedia/Icons";
import Link from "next/link";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
import Badge from "../badge/Badge";

type InfoProps = {
  name: string | null;
};

const Infobar = ({ name }: InfoProps) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };
  return (
    <div className="w-full bg-gray-800 py-1 text-white flex items-center relative">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-center ">
          <div className="w-full flex justify-center md:justify-between items-center">
            <div className="text-lg hidden md:flex">+1 312 - 600 - 8182</div>
            <Badge mode="infobar"/>
            <div className="flex items-center flex-col md:flex-row space-x-2">
              <div className="text-lg hidden md:inline-block">
                info@magicmarblefoundation.org
              </div>

              <div className="flex justify-center items-center ">
                <Icons
                  name={name}
                  color="text-gray-200"
                  show={show}
                  setShow={setShow}
                />
              </div>
              <div
                className={`w-full ${show ? "flex md:hidden " : "hidden"} flex-col items-center justify-between py-4 `}
              >
                <div className="text-lg">+1 312 - 600 - 8182</div>
                <div className="text-lg ">info@magicmarblefoundation.org</div>
              </div>

              {name && (
                <Link
                  className="text-wrap text-center text-base md:text-xs font-light"
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
                >
                  Welcome {name}
                </Link>
              )}

              {name ? (
                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={() => handleSignOut()}
                    className="underline text-sm text-nowrap"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link className="underline text-sm text-nowrap" href={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Infobar;
