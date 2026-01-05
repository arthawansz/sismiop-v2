// src/app/welcome/page.jsx
import Image from "next/image";

function page() {
  return (
    <div className="welcome-page flex flex-col items-center justify-center h-screen w-screen ">
      <Image
        src={"/folder-illustration.svg"}
        className="flex items-center justify-center drop-shadow-5xl drop-shadow-purple-400"
        alt="Folder Illustration"
        width={200}
        height={200}
      />
      <h1 className="text-2xl font-bold">Welcome to SIMPBB</h1>
      <p className="text-[#707783]">
        Hemat waktu, kurangi kesalahan, dan kelola pajak dengan mudah
      </p>

      <form className="mt-10 w-full max-w-2xl px-4 b-4" >
            <div className="relative">
              {/* icon */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black/60 pointer-events-none">
                <svg
                  className="w-5 h-5"
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
                placeholder="Cari halaman..."
                readOnly
                className="
                  w-full py-3 pl-9 pr-20 text-sm rounded-xl
                  bg-white text-black
                  placeholder:text-black/70
                  border-2 border-[#E1E4EB]
                  focus:outline-none cursor-pointer
                "
              />
            </div>
          </form>
              {/* Menu Cards */}
      <div className="mt-8 grid grid-cols-4 gap-4 max-w-4xl mx-auto">
        <Card title="Penilaian SPPT" color="pink" />
        <Card title="Lihat Dashboard" color="purple" />
        <Card title="Perubahan ZNT & NIR" color="blue" large />
        <Card title="Transaksi Pembayaran" color="orange" />
        <Card title="Input SPOP & LSPOP" color="teal" />
        <Card title="Lihat Daftar Tunggakan" color="indigo" />
      </div>

      {/* Pin Section */}
      <div className="mt-14 text-center">
        <p className="font-medium text-sm text-gray-800">Halaman di Pin</p>

        <div className="mt-8 flex flex-col items-center text-gray-400">
          <span className="text-2xl">📌</span>
          <p className="mt-2 text-sm">Belum ada Halaman di-Pin</p>
          <p className="text-xs">
            Pin halaman yang sering anda kunjungi dengan klik 📌 di samping judul halaman
          </p>
        </div>
      </div>
    </div>
  );
}

/* Card Component */
function Card({ title, color, large }) {
  const colors = {
    pink: "bg-pink-50 text-pink-600",
    purple: "bg-purple-50 text-purple-600",
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",
    indigo: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div
      className={`
        ${colors[color]}
        rounded-xl p-4 cursor-pointer hover:shadow-md transition
        ${large ? "col-span-2 row-span-2" : ""}
      `}
    >
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}


export default page;
