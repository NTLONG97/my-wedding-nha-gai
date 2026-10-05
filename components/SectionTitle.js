export default function SectionTitle({ script, title, sub, dark = false }) {
  const tc = dark ? "text-white" : "text-wine-700";
  const sc = dark ? "text-gold-200" : "text-gold-500";
  const subc = dark ? "text-white/75" : "text-ink/70";
  return (
    <div className="text-center mb-6 md:mb-8">
      {script && <p className={`font-script text-3xl md:text-4xl ${sc} mb-1`}>{script}</p>}
      <h2 className={`font-serif text-2xl md:text-4xl tracking-wide ${tc}`}>{title}</h2>
      <div className="divider mt-4"><span className="text-lg">❦</span></div>
      {sub && <p className={`mt-4 ${subc} max-w-xl mx-auto`}>{sub}</p>}
    </div>
  );
}
