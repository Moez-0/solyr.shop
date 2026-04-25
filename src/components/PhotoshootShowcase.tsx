import Image from "next/image";

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
    src: "/photoshoot/Use_my_uploaded_202604251432(2).png",
    alt: "Model wearing solyr crop top, another alternative shot",
  },
];

export default function PhotoshootShowcase() {
  return (
    <section className="w-full bg-paper-white border-t border-prussian-blue/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-prussian-blue/20 pb-5 md:pb-6">
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold tracking-tighter text-prussian-blue uppercase">
            ON SKIN
          </h2>
          <p className="font-space text-[11px] md:text-xs tracking-[0.22em] text-prussian-blue/70 font-bold uppercase">
            Collection on Body
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6">
          {PHOTOS.map((photo, index) => (
          <figure
            key={photo.id}
            className="relative overflow-hidden border border-prussian-blue/20 bg-prussian-blue/5"
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={95}
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </figure>
          ))}
        </div>
      </div>
    </section>
  );
}