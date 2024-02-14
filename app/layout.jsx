
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import Coins from "@/components/Coins";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unwind",
  description: "Unwind App",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
            
          <Sidebar />
          <SidebarMobile />
          <Backdrop />
          <Coins />

          <main className="sm:pl-56 md:pl-56 md:pb-0 flex bg-black box-border w-full">
            <div className="w-full h-full z-20"> 
            <AuthProvider>
            {children}
            </AuthProvider>
            </div>
          </main>

        
        </div>
      </body>
    </html>
  );
}
