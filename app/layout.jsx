"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
// import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";
import "./globals.css";
import dynamic from "next/dynamic";
import SidebarSkele from "@/components/skeletons/SidebarSkele";
// Dynamically import Backdrop with SSR disabled
const Backdrop = dynamic(() => import("@/components/Backdrop"), {
  loading: () => <SidebarSkele />,
  ssr: false,
});
const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
import { CoinsContext } from "./context/coins";
import { MoodContext } from "./context/mood";
import Coins from "@/components/Coins";
import AuthProvider from "@/components/AuthProvider";
import Mood from "@/components/Mood";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Unwind",
//   description: "Unwind App",
// };

export default function RootLayout({ children }) {
  const [coins, setCoins] = useState(100);
  const [mood, setMood] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("mood") || "default"
      : "default"
  );
  useEffect(() => {
    const storedMood = window.localStorage.getItem("mood");
    if (storedMood) {
      setMood(storedMood);
      // console.log("mood", storedMood);
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <MoodContext.Provider value={{ mood, setMood }}>
            <CoinsContext.Provider value={{ coins, setCoins }}>
              <Sidebar />
              <SidebarMobile />
              <Backdrop />
              <Coins />
              <Mood />
              <main className="sm:pl-56 md:pl-56 md:pb-0 flex bg-black box-border w-full pb-20 sm:pb-0">
                <div className="w-full h-full z-20">
                  <AuthProvider>{children}</AuthProvider>
                </div>
              </main>
            </CoinsContext.Provider>
          </MoodContext.Provider>
        </div>
      </body>
    </html>
  );
}
