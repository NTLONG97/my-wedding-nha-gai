import config from "@/data/config";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Calendar from "./Calendar";

export default function EventInfo() {
  return (
    <section className="py-10 md:py-12 px-6 bg-cream-100">
      <div className="max-w-3xl mx-auto">
        <SectionTitle script="Save the date" title="Thời Gian & Địa Điểm" />

        <Reveal>
          <div className="text-center mb-10">
            {config.wedding.ceremony && (
              <p className="font-serif uppercase tracking-[0.35em] text-sm md:text-base text-gold-600 mb-3">{config.wedding.ceremony}</p>
            )}
            <p className="font-serif text-3xl md:text-5xl text-wine-700">{config.wedding.weekday}</p>
            <p className="font-serif text-2xl md:text-3xl text-ink mt-2">{config.wedding.solar}</p>
            <p className="text-ink/60 mt-1">{config.wedding.lunar}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white/70 border border-gold-400/40 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
            <Calendar />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="text-center bg-white/70 border border-gold-400/40 rounded-2xl p-8 shadow-sm">
            <p className="font-script text-2xl text-wine-600">{config.venue.title}</p>
            <p className="font-serif text-lg md:text-xl text-ink mt-2">{config.venue.address}</p>
            {config.venue.note && <p className="text-ink/60 mt-1 text-sm">{config.venue.note}</p>}
            <a href={config.venue.mapLink} target="_blank" rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-wine-500 to-wine-700 text-white text-sm tracking-wide hover:scale-105 transition-transform">
              Xem chỉ đường
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
