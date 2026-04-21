import React from 'react';

const CATEGORIES = [
  "HATS",
  "TOTE BAGS"
];

export default function ComingSoon() {
  return (
    <section className="w-full border-t border-[var(--prussian-blue)] flex flex-col">
      <div className="w-full flex items-center justify-between border-b border-[var(--prussian-blue)] p-4 md:p-8">
        <h2 className="font-syne text-2xl md:text-4xl font-extrabold text-[var(--prussian-blue)] tracking-tighter uppercase">
          FUTURE ARCHIVES
        </h2>
        <p className="font-space text-xs md:text-sm text-[var(--ink-fade)] tracking-widest font-bold">
          STATUS: IN DEVELOPMENT
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {CATEGORIES.map((cat, idx) => (
          <div 
            key={cat} 
            className={`flex flex-col items-center justify-center py-16 px-4 md:p-24 border-[var(--prussian-blue)] ${idx !== CATEGORIES.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} bg-[var(--paper-white)] hover:bg-[var(--prussian-blue)] hover:text-[var(--paper-white)] transition-colors duration-300 group cursor-crosshair`}
          >
            <p className="font-space text-xs tracking-[0.2em] font-bold mb-4 text-[var(--ink-fade)] group-hover:text-[var(--paper-white)] group-hover:opacity-70 transition-colors">
              COMING SOON
            </p>
            <h3 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-center">
              {cat}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
