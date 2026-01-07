// src/app/welcome/page.jsx
import Image from "next/image";
import MenuCard from "../components/MenuCard.jsx";
import {
  LuCalculator,
  LuChartNoAxesColumnIncreasing,
  LuHandCoins,
} from "react-icons/lu";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center  pt-14">
      {/* Illustration */}
      <Image
        src="/folder-illustration.svg"
        alt="Folder"
        width={150}
        height={150}
        className="drop-shadow-xl"
      />

      <h1 className="mt-3 text-2xl font-bold text-[#1C1F26]">
        Welcome to SIMPBB
      </h1>
      <p className="text-sm text-[#707783]">
        Hemat waktu, kurangi kesalahan, dan kelola pajak dengan mudah
      </p>

      {/* Search */}
      <div className="mt-8 w-full max-w-4xl px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black/60 pointer-events-none">
            {" "}
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />{" "}
            </svg>{" "}
          </div>
          <input
            readOnly
            placeholder="Cari halaman..."
            className="w-full cursor-pointer rounded-xl border border-[#E1E4EB] bg-white py-3 pl-10 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Menu Cards */}
     {/* Menu Cards */}
<div className="mt-6 w-full max-w-4xl px-4">
  <div className="grid grid-cols-4 grid-rows-3 gap-4">
    {/* Baris 1 */}
    <MenuCard
      title="Penilaian SPPT"
      icon={<LuCalculator />}
      color="pink"
    />

    <MenuCard
      title="Lihat Dashboard"
      icon={<MdOutlineDashboard />}
      color="purple"
    />

    {/* Card besar */}
    <MenuCard
      title="Perubahan ZNT & NIR"
      icon={<LuChartNoAxesColumnIncreasing />}
      color="blue"
      className="col-span-2 row-span-2"
    />

    {/* Baris 2 */}
    <MenuCard
      title="Input SPOP & LSPOP"
      icon={<RiFileEditLine />}
      color="teal"
      className="col-span-2"    
    />


    {/* Baris 3 */}
    <div /> {/* spacer kosong */}
    <div></div> {/* spacer kosong */}
    
    <MenuCard
      title="Transaksi Pembayaran"
      icon={<LiaMoneyBillSolid />}
      color="orange"
    />
    <MenuCard
      title="Lihat Daftar Tunggakan"
      icon={<LuHandCoins />}
      color="indigo"
    />
  </div>
</div>


      {/* Pin Section */}
      <div className="mt-6 w-full max-w-4xl px-4">
        <p className="text-sm font-semibold">Halaman di Pin</p>

        <div className="mt-6 flex flex-col items-center">
          <Image src="/pin-illustration.svg" alt="Pin" width={70} height={70} />
          <p className="mt-3 text-sm font-semibold">Belum ada Halaman di-Pin</p>
          <p className="text-xs text-gray-400 text-center">
            Pin halaman yang sering anda kunjungi dengan klik “📌”
            <br />
            disamping judul halaman
          </p>
        </div>
      </div>
    </div>
  );
}
