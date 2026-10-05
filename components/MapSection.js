import config from "@/data/config";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function MapSection() {
  return (
    <section className="py-10 md:py-12 px-6 bg-cream-100">
      <div className="max-w-4xl mx-auto">
        <SectionTitle script="Find us" title="Bản Đồ" sub={config.venue.address} />
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gold-400/30 h-[360px] md:h-[460px]">
            <iframe src={config.venue.mapEmbedUrl} title="Bản đồ" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Reveal>
        <div className="text-center mt-6">
          <a href={config.venue.mapLink} target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-full border border-wine-500 text-wine-700 text-sm tracking-wide hover:bg-wine-600 hover:text-white transition-colors">
            Mở Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
