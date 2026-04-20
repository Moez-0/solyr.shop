"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="w-full py-32 md:py-64 px-6 md:px-12 flex items-center justify-center bg-paper-white relative z-10 border-t border-prussian-blue/20">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col gap-12 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="font-syne text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-prussian-blue leading-[1.1] uppercase">
          Captured by light.<br />
          Developed by time.<br />
          Sun-developed artwear.
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="px-6 py-3 border-2 border-prussian-blue font-space text-xs md:text-sm font-bold tracking-[0.2em] text-prussian-blue uppercase inline-block">
            We love the sun
          </div>
          <div className="px-6 py-3 border-2 border-prussian-blue bg-prussian-blue text-paper-white font-space text-xs md:text-sm font-bold tracking-[0.2em] uppercase inline-block">
            BATCH 1
          </div>
        </div>
      </motion.div>
    </section>
  );
}
