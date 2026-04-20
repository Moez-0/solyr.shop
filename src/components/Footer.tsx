"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-paper-white relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-prussian-blue/20 border-t border-b border-prussian-blue/20">
        
        {/* Left Section - Branding */}
        <div className="p-12 md:p-24 flex flex-col justify-between gap-16">
          <Image
            src="/solyr_sun.svg"
            alt="SOLYR Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div>
            <h2 className="font-syne text-5xl md:text-7xl font-bold tracking-tight text-prussian-blue uppercase leading-[0.9]">
              Join the<br />Archive
            </h2>
            <p className="font-space text-xs font-bold tracking-[0.2em] text-prussian-blue uppercase mt-8">
              Early access to BATCH 02. No spam.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-12 md:p-24 flex flex-col justify-end">
          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col border-2 border-prussian-blue focus-within:bg-prussian-blue/5 transition-colors">
              <input
                type="email"
                placeholder="ENTER EMAIL ADDRESS"
                className="w-full bg-transparent px-6 py-6 font-syne text-xl md:text-2xl font-bold tracking-tight text-prussian-blue placeholder:text-prussian-blue/30 outline-none rounded-none appearance-none uppercase"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-prussian-blue bg-prussian-blue px-6 py-6 font-syne text-xl md:text-2xl font-bold tracking-tight text-paper-white hover:bg-paper-white hover:text-prussian-blue transition-colors duration-300 uppercase"
            >
              Notify Me
            </button>
            <div className="flex justify-between font-space text-[10px] font-bold tracking-[0.2em] text-prussian-blue/50 uppercase mt-4">
              <span>SECURE TRANSMISSION</span>
              <span>2026 © SOLYR</span>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
}
