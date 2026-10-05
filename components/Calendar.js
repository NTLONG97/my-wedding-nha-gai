import config from "@/data/config";

const DOW = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]; // bắt đầu từ Thứ Hai

export default function Calendar() {
  const { year, month, day } = config.wedding; // month: 1-12
  const first = new Date(year, month - 1, 1);
  const startOffset = (first.getDay() + 6) % 7; // đưa về Thứ Hai đầu tuần
  const daysInMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="max-w-xs mx-auto">
      <p className="text-center font-serif text-lg text-wine-700 mb-3">
        Tháng {month} · {year}
      </p>
      <div className="grid grid-cols-7 gap-1 text-center text-xs md:text-sm">
        {DOW.map((d) => (
          <div key={d} className="py-1 text-gold-600 font-medium">{d}</div>
        ))}
        {cells.map((c, i) => (
          <div key={i} className="py-1.5 flex items-center justify-center">
            {c === day ? (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wine-600 text-white font-semibold shadow">
                {c}
              </span>
            ) : (
              <span className={c ? "text-ink/70" : ""}>{c || ""}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
