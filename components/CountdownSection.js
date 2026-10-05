import config from "@/data/config";
import Countdown from "./Countdown";

export default function CountdownSection() {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
      <div className="chapter-bg" style={{ backgroundImage: `url(${config.countdownImage})` }} />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="font-script text-4xl md:text-6xl text-gold-300 mb-3">We&apos;re getting married</p>
        <p className="tracking-[0.3em] text-sm md:text-base mb-10">
          {config.wedding.weekday.toUpperCase()} · {config.wedding.solar}
        </p>
        <Countdown />
        <p className="mt-10 font-serif italic text-cream-100/90">Đếm từng ngày đến hạnh phúc...</p>
      </div>
    </section>
  );
}
