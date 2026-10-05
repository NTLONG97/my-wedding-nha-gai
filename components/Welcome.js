import config from "@/data/config";
import Reveal from "./Reveal";

export default function Welcome() {
  const w = config.welcome;
  return (
    <section className="bg-cream-50 pb-8 md:pb-10">
      {/* Ảnh ở trên — mờ dần xuống nền ở đáy (hiệu ứng giống mẫu) */}
      <div className="relative w-full h-[58svh]">
        <img decoding="async"
          src={w.image}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: w.imagePosition || "center 25%" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-b from-transparent to-cream-50" />
      </div>

      {/* Chữ ở dưới — nền sạch, đọc rõ */}
      <div className="px-4 -mt-6 text-center max-w-lg mx-auto relative z-10">
        <Reveal>
          <p className="font-script text-4xl md:text-5xl text-wine-600 mb-6">{w.accent}</p>
          <div className="space-y-4">
            {w.lines.map((l, i) => (
              <p key={i} className="font-serif text-base text-ink/90 leading-relaxed">{l}</p>
            ))}
          </div>
          <p className="font-script text-4xl md:text-5xl text-wine-600 mt-8">{w.thanks}</p>
        </Reveal>
      </div>
    </section>
  );
}
