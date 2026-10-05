"use client";
import { useEffect, useRef, useState } from "react";

// Mỗi ảnh có thể là "đường-dẫn" hoặc { src, position } (position = vị trí ngắm ảnh, vd "center 15%")
const srcOf = (x) => (typeof x === "string" ? x : x?.src);
const posOf = (x) => (typeof x === "object" && x ? x.position : undefined);

// Hai ảnh thu nhỏ, ghép chồng so le; trượt từ trái & phải vào giữa khi cuộn tới.
export default function ChapterCollage({ images = [] }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [a, b] = images;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setShow(true); }),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-md h-[380px] sm:h-[480px]">
      {/* Ảnh trái (thấp hơn) */}
      <div
        className={`absolute left-0 bottom-0 w-[58%] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-[6px] ring-white bg-cream-200 slide-left ${show ? "slide-in" : ""}`}
      >
        {a && <img decoding="async" src={srcOf(a)} alt="" loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: posOf(a) }} />}
      </div>
      {/* Ảnh phải (cao hơn, đè lên) */}
      <div
        className={`absolute right-0 top-0 w-[50%] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-[6px] ring-white bg-cream-200 slide-right ${show ? "slide-in" : ""}`}
        style={{ transitionDelay: "0.15s" }}
      >
        {b && <img decoding="async" src={srcOf(b)} alt="" loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: posOf(b) }} />}
      </div>
    </div>
  );
}
