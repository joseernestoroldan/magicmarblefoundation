import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { getAllData } from "@/client";
import { getNameSession, getSessionId } from "@/lib/sessions";

const myFont = localFont({ src: "../public/bellmedium.woff2" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userId = await getSessionId();
  const name = await getNameSession(userId);

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
