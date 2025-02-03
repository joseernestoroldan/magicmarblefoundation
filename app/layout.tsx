import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import { db } from "@/db";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { getAllData } from "@/client";

const myFont = localFont({ src: "../public/bellmedium.woff2" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const getUserById = async () => {
    const session = await auth();
    if (!session) return null;
    
    return session.user.id;
  };

  const userId = await getUserById();

  const getNameSession = async () => {
    let name: string | null;
    try {
      if (userId) {
        const data = await db.user.findFirst({ where: { id: userId } });
        if (data) {
          name = data.firstName;
          return name;
        }
        return null;
      }
      return null;
    } catch (error) {
      console.log("this is my error:", error);
    }
  };

  const name = await getNameSession();

  const chimpData = await getAllData("chimp");

  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="relative">
          <Link
            href={"https://greatnonprofits.org/org/magic-marble-foundation"}
            target="_blank"
          >
            <div className="w-[90px] h-[65px] fixed z-30 top-14 hidden xl:inline-block xl:right-0 xl:left-auto">
              <Image src="/badge.png" alt="Great None Profits" fill priority />
            </div>
          </Link>
          <Navbar name={name} chimpData={chimpData} />
          <div className="w-full">{children}</div>
          <Footer name={name} />
        </main>
      </body>
    </html>
  );
}
