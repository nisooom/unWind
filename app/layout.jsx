"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import { CoinsContext } from "./context/coins";
import Coins from "@/components/Coins";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Unwind",
//   description: "Unwind App",
// };

export default function RootLayout({ children, session }) {
  const [coins, setCoins] = useState(100);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <CoinsContext.Provider value={{ coins, setCoins }}>
            <Sidebar />
            <SidebarMobile />
            <Backdrop />
            <Coins />
            <main className="sm:pl-56 md:pl-56 md:pb-0 flex bg-black box-border w-full pb-20 sm:pb-0">
              <div className="w-full h-full z-20">
                <AuthProvider>{children}</AuthProvider>
              </div>
            </main>
          </CoinsContext.Provider>
        </div>
      </body>
    </html>
  );
}
