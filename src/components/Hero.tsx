"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-paper-white">
      {/* Background Image - Stark, static */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mockups/Cotton_crop_top_202604201822_2.jpeg"
          alt="SOLYR Background"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        {/* Stark border overlay */}
        <div className="absolute inset-8 border-2 border-prussian-blue/20 pointer-events-none mix-blend-multiply" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 pointer-events-none mix-blend-multiply px-4 text-center">
        <Image
          src="/solyr_sun.svg"
          alt="SOLYR Logo"
          width={180}
          height={180}
          priority
          className="w-32 h-32 md:w-48 md:h-48"
        />

        <h1 className="font-syne text-7xl md:text-[10rem] lg:text-[14rem] font-bold tracking-tighter text-prussian-blue leading-[0.8] uppercase">
          SOLYR
        </h1>

        <p className="font-space text-xs md:text-sm tracking-[0.3em] text-prussian-blue font-bold uppercase mt-4">
          SUN PRINTED ARTWEAR
        </p>
      </div>
    </section>
  );
}
