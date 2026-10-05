"use client";
import { useEffect, useState } from "react";
import config from "@/data/config";

function diff(target) {
  let d = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(d / 86400000); d -= days * 86400000;
  const hours = Math.floor(d / 3600000); d -= hours * 3600000;
  const minutes = Math.floor(d / 60000); d -= minutes * 60000;
  const seconds = Math.floor(d / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setT(diff(config.wedding.dateTime));
    const id = setInterval(() => setT(diff(config.wedding.dateTime)), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { l: "Ngày", v: t.days }, { l: "Giờ", v: t.hours },
    { l: "Phút", v: t.minutes }, { l: "Giây", v: t.seconds },
  ];
  return (
    <div className="flex justify-center gap-3 md:gap-5">
      {items.map((it) => (
        <div key={it.l} className="w-16 h-20 md:w-24 md:h-28 rounded-2xl bg-white/15 backdrop-blur border border-white/30 flex flex-col items-center justify-center">
          <span className="font-serif text-2xl md:text-4xl text-gold-200">{String(it.v).padStart(2, "0")}</span>
          <span className="text-[11px] md:text-sm text-white/80 mt-1">{it.l}</span>
        </div>
      ))}
    </div>
  );
}
