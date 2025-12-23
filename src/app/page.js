import React from "react";
import Image from "next/image";
import BgLogin from "./assets/bglogin.png";
import LogoKabPinrang from "./assets/LogoKabPinrang.png";

function page() {
  return (
    <>
      <div className="login-page relative flex min-h-screen text-white">
        {/* Background */}
        <Image
          src={BgLogin}
          alt="background"
          fill
          className="object-cover"
          priority
        />

        {/* BLUR LAYER */}
        <div
          className="
      absolute inset-y-0 left-0 w-[65%]
      backdrop-blur-[3px]
      bg-linear-to-r from-black/90 via-black/50 to-black/0
      [mask-image:linear-gradient(to_right,black_60%,black_40%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_right,black_80%,black_50%,transparent_100%)]
      z-10
    "
        />

        {/* left side */}
        <div className="relative left-10 z-20 w-[80%] p-10">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-lg">
              <Image
                src={LogoKabPinrang}
                alt="logo kabupaten pinrang"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-semibold">
                Pemerintah Kabupaten PINRANG
              </p>

              <p className="text-sm font-medium text-gray-300">
                BAPENDA Kabupaten PINRANG
              </p>
            </div>
          </div>
          <h1 className="mt-6 w-125 text-[42px] font-bold">
            Pengelolaan PBB yang Terstruktur, Transparan, dan Efisien
          </h1>

          <ul className="mt-9 flex flex-col">
            {/* Menggunakan grid agar kolom angka dan label sejajar sempurna */}

            {/* Item 1 */}
            <li className="grid grid-cols-[360px_1fr] border-b border-white/20 w-125 items-center py-4">
              <p className="text-[32px] font-medium">123.213</p>
              <p className="text-[14px] text-gray-300 mt-5">Jumlah Objek Pajak</p>
            </li>

            {/* Item 2 */}
            <li className="grid grid-cols-[360px_1fr] border-b border-white/20 w-125 items-center py-4">
              <p className="text-[32px] font-medium">159.204</p>
              <p className="text-[14px] text-gray-300 mt-5">Jumlah Wajib Pajak</p>
            </li>

            {/* Item 3 */}
            <li className="grid grid-cols-[360px_1fr] w-125 items-center py-4">
              <p className="text-[32px] font-medium">0</p>
              <p className="text-[14px] text-gray-300 mt-5">Jumlah SPPT Aktual</p>
            </li>
          </ul>

          <p className="text-sm text-gray-300 mt-10 w-1/2 font-normal">Jl. Pemuda, Laloeha, Kolaka, Kabupaten Kolaka Utara, Sulawesi Tenggara 93561, Indonesia</p>
          <br/>

          <div className="flex flex-row gap-3">

          <p className="text-sm text-gray-300">Copyright © Nusantara Media Informatika</p>
          {/* berikan titik tengah sebagai pembatas element dengan warna white/20 */}
          <div className="bg-white/20 w-[6.5px] h-[6.5px] rounded-full mt-2"></div>
          <a href="#" className="text-white text-sm font-semibold hover:underline">Syarat & ketentuan</a>

          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 w-full flex justify-center relative bottom-10">
        <div className="bg-white rounded-[20px] shadow-2xl shadow-black w-120 h-150 z-10 relative top-32 right-40">
        
          <form>

          </form>
        </div>
        
        
        </div>
      </div>
    </>
  );
}

export default page;
