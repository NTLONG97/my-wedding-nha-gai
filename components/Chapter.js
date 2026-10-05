import Reveal from "./Reveal";
import ChapterCollage from "./ChapterCollage";

export default function Chapter({ chapter, accent, lines = [], images = [], align = "center", layout = "stack" }) {
  const textAlign = { left: "text-left", right: "text-right", center: "text-center" }[align] || "text-center";
  const itemsAlign = { left: "items-start", right: "items-end", center: "items-center" }[align] || "items-center";

  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-20 px-5 bg-cream-50">
      <Reveal>
        <div className={`relative z-20 max-w-lg mx-auto flex flex-col ${itemsAlign} ${textAlign}`}>
          {chapter && (
            <p className="font-hand tracking-[0.25em] uppercase text-sm text-gold-600 mb-2">{chapter}</p>
          )}
          {accent && (
            <p className="font-script text-4xl md:text-5xl text-wine-600 mb-5">{accent}</p>
          )}
          <div className="space-y-1">
            {lines.map((l, i) => (
              <p key={i} className="font-serif italic text-base text-[#241d18] leading-relaxed">{l}</p>
            ))}
          </div>
        </div>
      </Reveal>

      {layout === "collage" ? (
        <div className="mt-6 md:-mt-16 relative">
          <ChapterCollage images={images} />
        </div>
      ) : (
        <div className="mt-9 max-w-md mx-auto space-y-5">
          {images.map((src, i) => (
            <Reveal key={src} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gold-400/20 aspect-[4/5] bg-cream-200">
                <img decoding="async" src={src} alt="" loading="lazy" className="w-full h-full object-cover block" />
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
