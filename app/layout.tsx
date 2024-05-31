import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/bellmedium.woff2' })

export const metadata: Metadata = {
  title: "Magic Marble Foundation",
  description: "Magic Marble Foundation WebPage",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
   
      <body className={myFont.className}>
        <Navbar/>
        <div className="w-full" >{children}</div>
        <Footer/>
      </body>
    </html>
  );
}


