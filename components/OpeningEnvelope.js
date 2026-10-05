"use client";
import { useState } from "react";
import config from "@/data/config";

// Logo dùng làm con dấu giữa phong bì
const SEAL_LOGO = "/images/logo-tl.png";

// Màn hình mở phong bì. Bấm -> phong bì mở -> gọi onOpen().
export default function OpeningEnvelope({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => onOpen && onOpen(), 900);
    setTimeout(() => setGone(true), 1500);
  };

  if (gone) return null;

  const initials = (name) => {
    const w = (name || "").trim().split(/\s+/);
    return (w[w.length - 1] || "").charAt(0).toUpperCase();
  };
  const g = config.groom.short, b = config.bride.short;
  const names = config.nameOrder === "brideFirst" ? `${b} & ${g}` : `${g} & ${b}`;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center
      bg-gradient-to-b from-cream-100 via-cream-50 to-cream-200
      transition-opacity duration-700 ${opening ? "opacity-0" : "opacity-100"}`}>
      <p className="font-script text-3xl md:text-4xl text-wine-600 mb-2">Save the date</p>
      <p className="text-ink/70 mb-8 tracking-widest text-sm md:text-base">{config.wedding.solar}</p>

      <div className={`envelope-wrap ${opening ? "env-open" : ""}`}>
        <div className="relative w-72 h-48 md:w-96 md:h-64 mx-auto">
          <div className="absolute inset-0 rounded-lg bg-cream-100 border border-gold-400/60 shadow-xl" />
          <div className="absolute inset-x-0 bottom-0 h-full"
            style={{ clipPath: "polygon(0 100%, 50% 40%, 100% 100%)", background: "linear-gradient(180deg,#f3e9d6,#e8d8bb)" }} />
          <div className="env-flap absolute inset-x-0 top-0 h-1/2 z-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", background: "linear-gradient(180deg,#e8d8bb,#dcc59f)", borderBottom: "1px solid rgba(200,162,74,.5)" }} />
          {/* Con dấu = logo tròn "tl" (đổi ảnh tại public/images/logo-tl.png) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg">
            <img src={SEAL_LOGO} alt={`${initials(config.groom.name)} & ${initials(config.bride.name)}`} className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>

      <h1 className="font-name text-5xl md:text-6xl text-wine-700 mt-10">{names}</h1>

      <button onClick={handleOpen}
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-wine-500 to-wine-700 text-white tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-transform animate-floatY">
        Mở thiệp mời
      </button>
      <p className="mt-4 text-xs text-ink/50">Nhấn để mở &amp; bắt đầu trình chiếu</p>
    </div>
  );
}
