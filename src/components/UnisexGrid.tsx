"use client";

import Image from "next/image";

// Clean, rigorous data structure for the grid
const ITEMS = [
  { id: 1, src: "/mockups/unisex_tshirts/Men's_t-shirt_Prussian_202604210937.jpeg", title: "UNISEX 01 // PRUSSIAN", details: "HEAVYWEIGHT COTTON" },
  { id: 2, src: "/mockups/unisex_tshirts/Men's_t-shirt_Prussian_202604210937_2.jpeg", title: "UNISEX 02 // PRUSSIAN", details: "STUDIO CAPTURE" },
  { id: 3, src: "/mockups/unisex_tshirts/T-shirt_with_Prussian_202604210937_2.jpeg", title: "UNISEX 04 // PRUSSIAN", details: "RAW CAPTURE" },
  { id: 4, src: "/mockups/unisex_tshirts/T-shirt_with_Prussian_202604210937_3.jpeg", title: "UNISEX 05 // PRUSSIAN", details: "DETAIL FOCUS" },
  { id: 5, src: "/mockups/unisex_tshirts/T-shirt_with_Prussian_202604210937_4.jpeg", title: "UNISEX 06 // PRUSSIAN", details: "SILHOUETTE STUDY" },
  { id: 6, src: "/mockups/unisex_tshirts/T-shirt_with_Prussian_202604210937_5.jpeg", title: "UNISEX 07 // PRUSSIAN", details: "SILHOUETTE STUDY" },
];

export default function UnisexGrid() {
  return (
    <section className="w-full bg-paper-white relative z-10 border-t border-prussian-blue/20">
      <div className="w-full flex items-center justify-between border-b border-prussian-blue/20 p-4 md:p-8">
        <h2 className="font-syne text-2xl md:text-4xl font-extrabold text-prussian-blue tracking-tighter uppercase">
          UNISEX TSHIRTS
        </h2>
        <p className="font-space text-xs md:text-sm text-prussian-blue/70 tracking-widest font-bold uppercase">
          SUN KISSED PRUSSIAN BLUE
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border-b border-prussian-blue/20 divide-prussian-blue/20 border-prussian-blue/20">
        {ITEMS.map((item, idx) => (
          <div key={item.id} className="group relative flex flex-col border-b border-prussian-blue/20 sm:border-b-0">
            {/* Uniform Aspect Ratio Image Container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-prussian-blue/5">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:opacity-90 group-hover:scale-105"
              />
            </div>

            {/* Rigorous Static Data Block */}
            <div className="flex flex-col p-6 gap-2 bg-paper-white z-10 border-t border-prussian-blue/20">
              <h3 className="font-syne text-xl font-bold text-prussian-blue uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="font-space text-xs font-bold tracking-[0.2em] text-prussian-blue/70 uppercase">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
