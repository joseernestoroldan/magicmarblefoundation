import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import { db } from "@/db";
import { auth } from "@/auth";

const myFont = localFont({ src: "../public/bellmedium.woff2" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user.id;

  const data = await db.user.findFirst({ where: { id: userId } });
  let name: string;
  if (session) {
    name = data?.firstName || "user";
  } else {
    name = "";
  }

  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="relative">
          <Navbar name={name} />
          <div className="w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
