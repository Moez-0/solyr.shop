"use client";

import Image from "next/image";
import { useEffect, useRef, useMemo } from "react";

// Fisher-Yates shuffle algorithm for better randomization
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PHOTOS = [
  {
    id: 1,
    src: "/photoshoot/A_vertical_9_16_202604241652.png",
    alt: "Model wearing crop top, vertical photoshoot",
  },
  {
    id: 2,
    src: "/photoshoot/Create_a_3_4_202604241624.png",
    alt: "Model wearing crop top, studio portrait",
  },
  {
    id: 3,
    src: "/photoshoot/Create_a_full_202604241624.png",
    alt: "Model wearing crop top, full body shot",
  },
  {
    id: 4,
    src: "/photoshoot/Create_a_studio_202604241624.png",
    alt: "Model wearing crop top, editorial studio shot",
  },
  {
    id: 5,
    src: "/photoshoot/men/fix_the_tattoo_202604251207.png",
    alt: "Male model wearing t-shirt, backshot",
  },
  {
    id: 6,
    src: "/photoshoot/men/remove_the_tattooo_202604251207.png",
    alt: "Male model wearing t-shirt, backshot",
  },
  {
    id: 7,
    src: "/photoshoot/Use_my_uploaded_202604251432.png",
    alt: "Model wearing solyr crop top, photoshoot shot",
  },
  {
    id: 8,
    src: "/photoshoot/Use_my_uploaded_202604251432(1).png",
    alt: "Model wearing solyr crop top, alternative shot",
  },
  {
    id: 9,
    src: "/photoshoot/Untitled.png",
    alt: "Solyr collection photoshoot",
  },
];

export default function PhotoshootShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Use useMemo to shuffle photos once on client mount
  const randomPhotos = useMemo(() => shuffleArray(PHOTOS), []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone items for infinite scroll
    const items = carousel.querySelectorAll(".carousel-item");
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    let scrollAmount = 0;
    const itemWidth = items[0]?.getBoundingClientRect().width || 0;
    const gap = 16; // md:gap-4 is 1rem = 16px, 8px on mobile
    const totalItemWidth = itemWidth + gap;
    const itemsCount = randomPhotos.length;

    const animate = () => {
      scrollAmount += 1.5;
      carousel.style.transform = `translateX(-${scrollAmount}px)`;

      // Reset when we've scrolled through all items once
      if (scrollAmount >= totalItemWidth * itemsCount) {
        scrollAmount = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [randomPhotos]);

  return (
    <section className="w-full bg-paper-white border-t border-prussian-blue/20">
      <div className="mx-auto w-full max-w-full px-4 py-5 md:px-8 md:py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-prussian-blue/20 pb-5 md:pb-6">
            <h2 className="font-syne text-3xl md:text-4xl font-extrabold tracking-tighter text-prussian-blue uppercase">
              ON SKIN
            </h2>
            <p className="font-space text-[11px] md:text-xs tracking-[0.22em] text-prussian-blue/70 font-bold uppercase">
              Collection on Body
            </p>
          </div>
        </div>

        <div className="pt-4 md:pt-6 overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-2 md:gap-4 will-change-transform"
            style={{
              width: "fit-content",
            }}
          >
            {randomPhotos.map((photo, index) => (
              <figure
                key={`${photo.id}-${index}`}
                className="carousel-item flex-shrink-0 relative overflow-hidden border border-prussian-blue/20 bg-prussian-blue/5 transition-all duration-300 hover:shadow-md hover:border-prussian-blue/40 group"
                style={{
                  width: "clamp(200px, 45vw, 300px)",
                }}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 300px"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Decorative fade effect on sides */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-24 bg-gradient-to-r from-paper-white to-transparent pointer-events-none hidden md:block" style={{ marginTop: "2rem" }} />
        <div className="absolute right-0 top-0 h-full w-12 md:w-24 bg-gradient-to-l from-paper-white to-transparent pointer-events-none hidden md:block" style={{ marginTop: "2rem" }} />
      </div>
    </section>
  );
}
