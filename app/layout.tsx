import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import { getAllData } from "@/client";
import { getNameSession, getSessionId } from "@/lib/sessions";
import { QueryType } from "@/types/types";
import Badge from "@/components/badge/Badge";

const myFont = localFont({ src: "../public/bellmedium.woff2" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userId = await getSessionId();
  const name = await getNameSession(userId);

  const chimpData: QueryType[] | null = await getAllData("chimp");

  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="relative">
          <Badge mode="layout"/>
          <Navbar name={name} chimpData={chimpData} />
          <div className="w-full">{children}</div>
          <Footer name={name} />
        </main>
      </body>
    </html>
  );
}
