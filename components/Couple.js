"use client";
import { useEffect, useRef, useState } from "react";
import config from "@/data/config";
import SectionTitle from "./SectionTitle";

function Family({ p, label, dir }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

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
    <div
      ref={ref}
      className={`flex-1 ${dir === "left" ? "slide-left" : "slide-right"} ${show ? "slide-in" : ""}`}
    >
      <div className="text-center">
        <h3 className="font-serif uppercase tracking-[0.15em] whitespace-nowrap text-lg md:text-2xl text-wine-700">
          {label}
        </h3>
        <div className="divider mt-1 mb-3"><span className="text-wine-500">♥</span></div>
        <div className="text-xs md:text-sm text-ink/75 leading-relaxed whitespace-nowrap">
          <p>{p.family.father}</p>
          <p>{p.family.mother}</p>
          {p.family.place && <p className="text-gold-600 mt-2">{p.family.place}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Couple() {
  const groomFirst = config.nameOrder !== "brideFirst";
  const left = groomFirst ? config.groom : config.bride;
  const right = groomFirst ? config.bride : config.groom;
  const leftLabel = groomFirst ? "Nhà Trai" : "Nhà Gái";
  const rightLabel = groomFirst ? "Nhà Gái" : "Nhà Trai";

  return (
    <section className="pt-10 md:pt-12 pb-2 md:pb-4 px-6 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <SectionTitle script="Our families" title="Gia Đình Hai Bên" />
        <div className="-mt-4 md:-mt-5 flex flex-row items-start justify-center gap-2 md:gap-8">
          <Family p={left} label={leftLabel} dir="left" />
          <div className="self-center pt-6 text-4xl md:text-5xl font-name text-wine-500">&amp;</div>
          <Family p={right} label={rightLabel} dir="right" />
        </div>
      </div>
    </section>
  );
}
