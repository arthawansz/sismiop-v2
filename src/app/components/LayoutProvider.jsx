"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function LayoutProvider({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <div className="flex">
          <SideBar />
          <div className="flex-1">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      )}
    </>
  );
}
