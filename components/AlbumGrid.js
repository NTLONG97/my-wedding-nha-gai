"use client";
import { useState, useEffect, useCallback } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function AlbumGrid() {
  const photos = config.gallery;
  const n = photos.length;
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const close = useCallback(() => setIndex(-1), []);
  const go = useCallback((to) => setIndex(((to % n) + n) % n), [n]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, index, close, go]);

  return (
    <section className="py-20 md:py-28 px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle script="Our moments" title="Album Ảnh Cưới" sub="Nhấn vào ảnh để xem lớn." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 60}>
              <button onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl aspect-[3/4] bg-cream-200 shadow-sm">
                <img src={src} alt={`Ảnh cưới ${i + 1}`} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gold-500/20 group-hover:ring-wine-500/50 transition" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center" onClick={close}>
          <button className="absolute top-5 right-6 text-white/80 text-4xl hover:text-white" onClick={close} aria-label="Đóng">×</button>
          <button className="absolute left-3 md:left-8 text-white/70 text-5xl hover:text-white px-3" onClick={(e) => { e.stopPropagation(); go(index - 1); }} aria-label="Trước">‹</button>
          <img src={photos[index]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-3 md:right-8 text-white/70 text-5xl hover:text-white px-3" onClick={(e) => { e.stopPropagation(); go(index + 1); }} aria-label="Sau">›</button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">{index + 1} / {n}</span>
        </div>
      )}
    </section>
  );
}
