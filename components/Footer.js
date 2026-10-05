import config from "@/data/config";

export default function Footer() {
  const g = config.groom.short, b = config.bride.short;
  const names = config.nameOrder === "brideFirst" ? `${b} & ${g}` : `${g} & ${b}`;
  return (
    <footer className="relative pt-2 pb-12 px-6 text-center bg-gradient-to-b from-cream-100 to-cream-200">
      {/* Logo chữ ký "tl" (đổi ảnh tại public/images/logo-tl-footer.png) */}
      <img decoding="async" src="/images/logo-tl-footer.png" alt={names} className="mx-auto w-72 md:w-80 h-auto" loading="lazy" />
      <div className="divider mt-1"><span>❦</span></div>
      <p className="text-ink/60 text-sm mt-3">{config.wedding.weekday} · {config.wedding.solar}</p>
      <p className="text-ink/40 text-xs mt-2">Made with love · {config.wedding.hashtag}</p>
    </footer>
  );
}
