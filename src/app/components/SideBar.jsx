import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconPoint from "../assets/iconpoint.png";
import { LuArrowLeftToLine } from "react-icons/lu"; //icon ketika sidebarnya open
import { CiHome } from "react-icons/ci"; // icon untuk page welcome
import { FiLayout } from "react-icons/fi"; //icon untuk page dashboard

function SideBar() {
  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-60 bg-[#011A3B] text-white">
        <div className="flex px-3 py-5 tracking-wide">
          <Image
            src={IconPoint}
            alt="icon"
            width={36}
            height={36}
            className="mr-2"
          />
          <p className=" text-xl font-bold mt-1">SIMPBB</p>
          {/* close sidebar button */}
          <button className="border border-white/10 rounded-md ml-auto mt-1 w-8 h-8 bg-[#032552] flex items-center justify-center">
            <LuArrowLeftToLine />
          </button>
        </div>

        <form className="px-3">
          <div className="relative">
            {/* Icon search */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/60">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            {/* Input */}

            {/* border top agar terlihat menonjol */}
            <input
              type="search"
              placeholder="Search"
              className="
        w-full
        py-3
        pl-9
        pr-3
        text-sm
        rounded-lg
        border-t-4
        border-t-[#052B5C] 
        bg-[#032552]
        text-white
        placeholder:text-white
        focus:outline-none
        focus:ring-0
        border-none
      "
            />
          </div>
        </form>

        <nav className="px-3 mt-5">
          <ul className="space-y-1 text-sm">
            <li className="rounded-lg bg-[#032552]">
              <Link href="/welcome" className="flex px-4 py-3">
                <CiHome /> Welcome
              </Link>
            </li>

            {[
              "Dashboard",
              "Laporan",
              "Pendataan",
              "Penilaian",
              "Pembayaran",
              "Pengaturan Sistem",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
