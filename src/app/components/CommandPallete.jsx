"use client";

import { X } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";



const IconPerubahanZNT = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V9"
      stroke="#F09133"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7803 1.96892C14.0787 1.67055 14.4834 1.50293 14.9053 1.50293C15.3273 1.50293 15.732 1.67055 16.0303 1.96892C16.3287 2.26729 16.4963 2.67196 16.4963 3.09392C16.4963 3.51588 16.3287 3.92055 16.0303 4.21892L9.27059 10.9794C9.09251 11.1574 8.8725 11.2876 8.63084 11.3582L6.47609 11.9882C6.41156 12.007 6.34315 12.0081 6.27803 11.9914C6.2129 11.9748 6.15346 11.9409 6.10593 11.8933C6.05839 11.8458 6.02451 11.7864 6.00783 11.7212C5.99114 11.6561 5.99227 11.5877 6.01109 11.5232L6.64109 9.36842C6.71199 9.12696 6.84249 8.90721 7.02059 8.72942L13.7803 1.96892Z"
      stroke="#F09133"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTambahSPOP = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5125 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V3.00001C3 2.60218 3.15804 2.22065 3.43934 1.93935C3.72064 1.65804 4.10218 1.50001 4.5 1.50001H10.5C10.7377 1.49942 10.9731 1.54591 11.1927 1.63679C11.4123 1.72767 11.6117 1.86115 11.7795 2.02951L14.4705 4.72051C14.6389 4.88826 14.7723 5.08769 14.8632 5.3073C14.9541 5.52691 15.0006 5.76234 15 6.00001V10.0125"
      stroke="#03BD9F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 1.5V5.25C10.5 5.44891 10.579 5.63968 10.7197 5.78033C10.8603 5.92098 11.0511 6 11.25 6H15"
      stroke="#03BD9F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 14.25H15"
      stroke="#03BD9F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 12V16.5"
      stroke="#03BD9F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTambahPST = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 16.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V3C3 2.60218 3.15804 2.22065 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H10.5C10.7374 1.49962 10.9726 1.5462 11.1919 1.63708C11.4112 1.72795 11.6104 1.86132 11.778 2.0295L14.469 4.7205C14.6376 4.88813 14.7714 5.08751 14.8625 5.30712C14.9537 5.52674 15.0004 5.76223 15 6V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5Z"
      stroke="#0059D7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 1.5V5.25C10.5 5.44891 10.579 5.63968 10.7197 5.78033C10.8603 5.92098 11.0511 6 11.25 6H15"
      stroke="#0059D7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 13.5V12V13.5Z" fill="#0059D7" fillOpacity="0.2" />
    <path
      d="M6 13.5V12"
      stroke="#0059D7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 13.5V10.5V13.5Z" fill="#0059D7" fillOpacity="0.2" />
    <path
      d="M9 13.5V10.5"
      stroke="#0059D7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 13.5V9V13.5Z" fill="#0059D7" fillOpacity="0.2" />
    <path
      d="M12 13.5V9"
      stroke="#0059D7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMonitor = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2.25H3C2.17157 2.25 1.5 2.92157 1.5 3.75V11.25C1.5 12.0784 2.17157 12.75 3 12.75H15C15.8284 12.75 16.5 12.0784 16.5 11.25V3.75C16.5 2.92157 15.8284 2.25 15 2.25Z"
      stroke="#617180"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15.75H12"
      stroke="#617180"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.75V15.75"
      stroke="#617180"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SEARCH_ITEMS = [
  {
    title: "Pembuatan Table Blok",
    desc: "Pendataan / Persiapan / Pembuatan ZNT",
  },
  {
    title: "Transaksi Pembayaran",
    desc: "Pendataan / Laporan Pendapatan OP",
  },
  {
    title: "Pembetulan SPPT / SKP / STP",
    desc: "Informasi / Data Objek Pajak",
  },
  {
    title: "Tempat Pembayaran",
    desc: "Informasi / Data Objek Pajak",
  },
];

/* ================= COMMAND PALETTE ================= */

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");

  const filteredItems = SEARCH_ITEMS.filter(
  (item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
);

  // ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  return (
    //Overlay dark background
    <div className="fixed inset-0 z-999 flex items-start justify-center bg-black/50 ">
      <div className="mt-24 w-full max-w-175 rounded-2xl bg-white shadow-xl overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b-2 border-[#E1E4EB]">
          <FiSearch className="text-gray-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari halaman..."
            className="w-full text-sm outline-none placeholder:text-gray-400"
          />

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 border-2 border-[#E1E4EB] hover:border-red-400 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out hover:bg-red-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-105 overflow-y-auto command-scroll">
          {query === "" ? (
            <>
              {/* Akses Cepat */}
              <Section
                title="Akses cepat"
                className="flex flex-row flex-wrap gap-2"
              >
                <QuickItem
                  color="orange"
                  label="Perubahan ZNT/NIR"
                  icon={<IconPerubahanZNT />}
                />
                <QuickItem
                  color="green"
                  label="Tambah SPOP/LSPOP"
                  icon={<IconTambahSPOP />}
                />
                <QuickItem
                  color="blue"
                  label="Tambah PST"
                  icon={<IconTambahPST />}
                />
              </Section>

              {/* Terakhir Dilihat */}
              <Section title="Terakhir dilihat">
                <Item
                  showX
                  title="Pembuatan Table Blok"
                  desc="Pendataan / Persiapan / Pembuatan ZNT"
                />
                <Item
                  showX
                  title="Laporan Referensi Table"
                  desc="Pendataan / Laporan Pendapatan OP"
                />
                <Item
                  showX
                  title="Data SPOP/LSPOP"
                  desc="Informasi / Data Objek Pajak"
                />
              </Section>

              {/* Rekomendasi */}
              <Section title="Halaman Rekomendasi">
                <Item
                  title="Pembuatan Table Blok"
                  desc="Pendataan / Persiapan / Pembuatan ZNT"
                />
                <Item
                  title="Laporan Referensi Table"
                  desc="Pendataan / Laporan Pendapatan OP"
                />
                <Item
                  title="Data SPOP/LSPOP"
                  desc="Informasi / Data Objek Pajak"
                />
              </Section>
            </>
          ) : (
            <Section title="Hasil pencarian">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <Item key={idx} title={item.title} desc={item.desc} />
                ))
              ) : (
                <p className="px-2 py-4 text-sm text-gray-400">
                  Tidak ada hasil ditemukan
                </p>
              )}
            </Section>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-10 px-4 py-4 text-xs text-gray-700 bg-[#F4F5F7] border-t-2 border-[#E1E4EB]">
          <span>
            <span className="bg-white p-1 px-2 w-10 h-10 border-2 border-[#E1E4EB] rounded-md text-gray-700 font-semibold">
              ↑
            </span>
            <span className="bg-white p-1 px-2 w-10 h-10 border-2 border-[#E1E4EB] rounded-md text-gray-700 font-semibold ">
              ↓
            </span>
            Move
          </span>
          <span>
            <span className="bg-white p-1 px-2 w-10 h-10 border-2 border-[#E1E4EB] rounded-md text-gray-700 font-semibold">
              ⏎
            </span>
            Select
          </span>
          <span>
            <span className="bg-white p-1 px-2 w-10 h-10 border-2 border-[#E1E4EB] rounded-md text-gray-700 font-semibold">
              ESC
            </span>
            Keluar
          </span>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, className }) {
  return (
    <div className="px-4 py-3">
      {/* title adalah url Path page */}
      <p className="mb-2 text-xs font-semibold text-gray-400 ">{title}</p>
      <div className={className || "space-y-1"}>{children}</div>
    </div>
  );
}

function Item({ title, desc, showX }) {
  return (
    <div className="flex items-center justify-between px- py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer group">
      {/* KIRI: ICON + TEXT */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 ml-2 bg-gray-200 w-8 h-8 p-1 flex items-center justify-center rounded-full text-gray-500">
          <IconMonitor />
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-400">{desc}</span>
          <span className="text-sm text-gray-800 font-medium">{title}</span>
        </div>
      </div>

      {/* KANAN: ACTION (X) */}
      {showX && (
        <button className=" mr-2 text-gray-400 hover:text-gray-600">
          <X size={14} />
        </button>
      )}
    </div>
  );
}

function QuickItem({ label, color, icon }) {
  const colors = {
    orange: "bg-orange-100",
    green: "bg-green-100",
    blue: "bg-blue-100",
  };

  return (
    <div className="flex items-center gap-2 px-1.5 py-2 rounded-2xl bg-white hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out">
      <div
        className={`w-8 h-8 rounded-md flex items-center justify-center ${colors[color]}`}
      >
        {icon}
      </div>
      <span className="text-sm text-gray-800 whitespace-nowrap">{label}</span>
    </div>
  );
}
