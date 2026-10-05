import config from "@/data/config";

export default function Hero() {
  const g = config.groom.short, b = config.bride.short;
  const names = config.nameOrder === "brideFirst" ? [b, g] : [g, b];
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-gradient-to-b from-cream-100 to-cream-50 overflow-hidden">
      {/* ===== Nửa trên: chữ + 囍 (bố cục lệch) ===== */}
      <div className="relative flex-1 flex flex-col justify-center px-7 py-5">
        {/* Khối 囍 — canh TRÁI */}
        <div className="relative self-start text-left max-w-[78%]">
          <p className="font-serif italic text-ink/80 text-sm md:text-base mb-1 ml-1">
            We&apos;re getting married!
          </p>
          <div
            className="leading-none text-wine-600 select-none"
            style={{ fontFamily: "'Noto Serif SC','Microsoft YaHei','SimSun','PingFang SC',serif", fontSize: "clamp(64px,21vw,110px)", fontWeight: 700 }}
          >
            囍
          </div>
          <p className="tracking-[0.45em] text-xs md:text-sm text-gold-600 mt-2 ml-1">OUR WEDDING</p>
        </div>

        {/* Khối lời mời + tên + ngày — canh PHẢI */}
        <div className="relative self-end text-right max-w-[86%] mt-5 flex flex-col items-end">
          <p className="font-serif italic text-sm md:text-base text-ink/90 max-w-xs">
            {config.wedding.invitation}
          </p>
          <h1 className="font-name text-4xl md:text-6xl text-wine-600 mt-3 leading-none">
            {names[0]} <span className="text-gold-500">&amp;</span> {names[1]}
          </h1>
          <div className="divider my-3"><span>❦</span></div>
          <p className="tracking-[0.3em] uppercase text-[11px] md:text-xs text-ink/60">
            {config.wedding.weekday}
          </p>
          <p className="font-name text-3xl md:text-4xl text-wine-600 leading-none mt-1">
            {config.wedding.solar}
          </p>
        </div>
      </div>

      {/* ===== Nửa dưới: ảnh (thu vào, bo góc) ===== */}
      <div className="px-4 pb-4 shrink-0">
        <div className="relative h-[56svh] overflow-hidden shadow-md ring-1 ring-gold-400/20">
          <img decoding="async"
            src={config.heroImage}
            alt="Ảnh cưới"
            className="w-full h-full object-cover"
            style={{ objectPosition: config.heroImagePosition || "center 30%" }}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 animate-floatY text-3xl drop-shadow">⌄</div>
        </div>
      </div>
    </section>
  );
}
