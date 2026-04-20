"use client";

import Image from "next/image";

// Clean, rigorous data structure for the grid
const ITEMS = [
  { id: 1, src: "/mockups/Cotton_crop_top_202604201822.jpeg", title: "BATCH 01 // CROP TOP", details: "EXP: 14 MINS" },
  { id: 2, src: "/headshots/Model_taking_mirror_202604201857.jpeg", title: "STUDY: LIGHT LEAK", details: "RAW CAPTURE" },
  { id: 3, src: "/mockups/Crop_top_with_202604201822_4.jpeg", title: "ARCHIVE 002", details: "TEXTURE STUDY" },
  { id: 4, src: "/mockups/Cotton_crop_top_202604201822_2.jpeg", title: "COTTON STUDY 02", details: "EXP: 10 MINS" },
  { id: 5, src: "/mockups/Crop_top_with_202604201822_2.jpeg", title: "DETAIL CAPTURE", details: "EXP: 12 MINS" },
  { id: 6, src: "/headshots/Model_wearing_crop_202604201859.jpeg", title: "RAW CAPTURE 02", details: "STUDIO 1" },
  { id: 7, src: "/mockups/Cotton_crop_top_202604201822_3.jpeg", title: "TEXTURE STUDY 03", details: "EXP: 08 MINS" },
  { id: 8, src: "/mockups/Crop_top_with_202604201822_3.jpeg", title: "BATCH 02 // PREVIEW", details: "EXP: 18 MINS" },
  { id: 9, src: "/mockups/Crop_top_with_202604201822.jpeg", title: "BATCH 02 // CROP TOP", details: "EXP: 20 MINS" },
];

export default function LookbookGrid() {
  return (
    <section className="w-full bg-paper-white relative z-10 border-t border-prussian-blue/20">
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
