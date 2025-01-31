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
    console.log(session)
   
    if (!session) return null
     return session.user.id
  }
  
  const userId = await getUserById()

  const getNameSession = async () => {
    let name: string;
    try {
      if(userId){
         const data = await db.user.findFirst({ where: { id: userId } });
         name = data?.firstName || "user";
         return name        
        }
      return undefined
    } catch (error) {
      throw new Error();
    }
  };

  const name = await getNameSession();

  const chimpData = await getAllData("chimp");

  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="relative">
          {/* <ChimpPopover chimpData={chimpData} /> */}
          <Link
            href={"https://greatnonprofits.org/org/magic-marble-foundation"}
            target="_blank"
          >
            <div className="w-[90px] h-[65px] fixed z-30 top-14 hidden xl:inline-block xl:right-0 xl:left-auto">
              <Image src="badge.png" alt="" fill priority />
            </div>
          </Link>
          <Navbar name={name} chimpData={chimpData} />
          <div className="w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
