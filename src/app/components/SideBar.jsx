"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

import IconPoint from "../assets/iconpoint.png";

import { VscSettings } from "react-icons/vsc";
import { TbMessageReport } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { FiLayout, FiCreditCard } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbFolderRoot } from "react-icons/tb";
import {
  LuLaptopMinimalCheck,
  LuArrowLeftToLine,
  LuStamp,
  LuFileMinus2,
  LuHandHelping,
  LuFolderOpen,
  LuFileStack,
  LuUsers,
} from "react-icons/lu";
import { RiScales3Line } from "react-icons/ri";

const navItems = {
  general: [
    { href: "/welcome", icon: <BiHomeAlt />, label: "Welcome" },
    { href: "/dashboard", icon: <FiLayout />, label: "Dashboard" },
    { href: "/laporan", icon: <TbMessageReport />, label: "Laporan" },
  ],
  menu: [
    { href: "/pendataan", icon: <TbFolderRoot />, label: "Pendataan" },
    { href: "/penilaian", icon: <LuLaptopMinimalCheck />, label: "Penilaian" },
    { href: "/penetapan", icon: <LuStamp />, label: "Penetapan" },
    { href: "/keberatan", icon: <RiScales3Line />, label: "Keberatan" },
    { href: "/pengurangan", icon: <LuFileMinus2 />, label: "Pengurangan" },
    { href: "/pembayaran", icon: <FiCreditCard />, label: "Pembayaran" },
    { href: "#", icon: <LuHandHelping />, label: "Penagihan" },
    { href: "#", icon: <LuFolderOpen />, label: "PST" },
    { href: "#", icon: <LuFileStack />, label: "Referensi" },
    { href: "#", icon: <IoNewspaperOutline />, label: "Informasi" },
    { href: "#", icon: <VscSettings />, label: "Pengaturan Sistem" },
    { href: "#", icon: <LuUsers />, label: "Administrasi User" },
  ],
};

const NavList = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-1 text-sm">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li
            key={item.label}
            className={`rounded-lg transition-colors ${
              isActive
                ? "bg-[#032552] border-t-3 border-t-[#0A3E7A] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-white/80 hover:bg-[#03255295] hover:text-white"
            }`}
          >
            <Link
              href={item.href}
              className="flex items-center gap-2 px-4 py-3"
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function SideBar() {
  const handleSearchClick = () => {
  Swal.fire({
    showConfirmButton: false,
    showCancelButton: false,
    backdrop: true,
    width: 700,
    padding: 0,
    background: "#ffffff",
    customClass: {
      popup: "command-popup",
    },
    html: `
<div class="w-full">

  <!-- SEARCH -->
  <div class="border-b px-4 py-3">
    <div class="relative">
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
      <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
      </span>
      <input
        id="command-input"
        type="text"
        placeholder="Cari halaman..."
        class="w-full pl-9 pr-9 py-2 text-sm rounded-md focus:outline-none"
      />
      <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
        ✕
      </button>
    </div>
  </div>

  <!-- CONTENT -->
  <div class="max-h-[360px] overflow-y-auto px-2">

    <!-- QUICK ACCESS -->
    <div class="px-2 pt-4 pb-2 text-xs text-gray-400">Akses cepat</div>
    <div class="grid grid-cols-3 gap-2 px-2">
      <div class="quick-item">
        <span class="qi-icon bg-orange-100 text-orange-600">📝</span>
        <span>Perubahan ZNT/NIR</span>
      </div>
      <div class="quick-item">
        <span class="qi-icon bg-green-100 text-green-600">➕</span>
        <span>Tambah SPOP/LSPOP</span>
      </div>
      <div class="quick-item">
        <span class="qi-icon bg-blue-100 text-blue-600">📄</span>
        <span>Tambah PST</span>
      </div>
    </div>

    <!-- LAST VIEWED -->
    <div class="px-4 pt-6 pb-2 text-xs text-gray-400">Terakhir dilihat</div>
    <div class="space-y-1 px-2">
      <div class="command-item">
        <div class="text-xs text-gray-400">
          Pendataan / Persiapan / Pembuatan ZNT
        </div>
        <div class="font-medium">Pembuatan Table Blok</div>
      </div>

      <div class="command-item">
        <div class="text-xs text-gray-400">
          Pendataan / Laporan Pendapatan OP
        </div>
        <div class="font-medium">Laporan Referensi Table</div>
      </div>

      <div class="command-item">
        <div class="text-xs text-gray-400">
          Informasi / Data Objek Pajak
        </div>
        <div class="font-medium">Data SPOP/LSPOP</div>
      </div>
    </div>

    <!-- RECOMMENDED -->
    <div class="px-4 pt-6 pb-2 text-xs text-gray-400">
      Halaman Rekomendasi
    </div>
    <div class="space-y-1 px-2">
      <div class="command-item">
        <div class="text-xs text-gray-400">
          Pendataan / Persiapan / Pembuatan ZNT
        </div>
        <div class="font-medium">Pembuatan Table Blok</div>
      </div>
    </div>

  </div>

  <!-- FOOTER -->
  <div class="border-t px-4 py-2 flex justify-between text-[11px] text-gray-400">
    <span>↑ ↓ Move</span>
    <span>↵ Select</span>
    <span>ESC Keluar</span>
  </div>

</div>
    `,
    didOpen: () => {
      document.getElementById("command-input")?.focus();
    },
  });
};

  return (
    <aside className="fixed top-0 left-0 h-screen w-65 z-100 bg-[#011A3B] text-white flex flex-col">
      {/* ================= HEADER (STICKY) ================= */}
      <div className="sticky top-0 z-20 bg-[#011A3B]">
        {/* LOGO */}
        <div className="flex items-center px-3 py-5 tracking-wide">
          <Image
            src={IconPoint}
            alt="icon"
            width={36}
            height={36}
            className="mr-2"
          />
          <p className="text-xl font-bold mt-1">SIMPBB</p>

          <button className="ml-auto mt-1 w-8 h-8 rounded-md bg-[#032552] border border-white/10 flex items-center justify-center hover:bg-[#04306a] transition cursor-pointer">
            <LuArrowLeftToLine />
          </button>
        </div>

        {/* SEARCH */}
        <form className="px-3 pb-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            {/* icon kiri */}
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

            <input
              type="search"
              placeholder="Search"
              onClick={handleSearchClick}
              readOnly
              className="
                w-full
                py-3
                pl-9
                pr-20
                text-sm
                rounded-lg
                bg-[#032552]
                text-white
                placeholder:text-white/70
                border-t-3
                border-t-[#0A3E7A]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                focus:outline-none
                cursor-pointer
              "
            />

            {/* CTRL + K */}
            <div className="absolute inset-y-0 right-2 flex items-center gap-1 pointer-events-none">
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-white/10 border border-white/20 text-white/70">
                CTRL
              </kbd>
              <span className="text-white/40 text-xs">+</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-white/10 border border-white/20 text-white/70">
                K
              </kbd>
            </div>
          </div>
        </form>
      </div>

      {/* ================= NAV (SCROLLABLE) ================= */}
      <nav className="px-3 mt-5 flex-1 overflow-y-auto scrollbar-custom">
        <p className="px-4 mb-2 text-xs font-semibold uppercase tracking-wide text-white/40">
          General
        </p>
        <NavList items={navItems.general} />

        <p className="px-4 mt-6 mb-2 text-xs font-semibold uppercase tracking-wide text-white/40">
          Menu
        </p>
        <NavList items={navItems.menu} />
      </nav>
    </aside>
  );
}
