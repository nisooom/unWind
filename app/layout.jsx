import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Backdrop from "@/components/Backdrop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
<<<<<<< HEAD
          <Sidebar /> 
          <Backdrop />
          <main className="pl-40 flex bg-black box-border w-full">
            <div className="w-full h-full z-20"> {children}</div>
=======
          <Sidebar /> <Backdrop />
          <main className="pl-56 flex bg-black box-border w-full">
            <div className="w-full h-full z-20 px-4"> {children}</div>
>>>>>>> d2313919784a865456247f64d64cee3e015730ed
          </main>
        </div>
      </body>
    </html>
  );
}
