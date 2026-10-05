"use client";
import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function RSVP() {
  const [status, setStatus] = useState("idle");
  const [attend, setAttend] = useState("yes");
  const notConfigured =
    !config.rsvp.formspreeEndpoint || config.rsvp.formspreeEndpoint.includes("your_form_id");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", `Xác nhận tham dự ${config.wedding.ceremony || "đám cưới"} (nhà gái) - ${data.get("name") || ""}`);
    setStatus("sending");
    try {
      const res = await fetch(config.rsvp.formspreeEndpoint, {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("ok"); form.reset(); setAttend("yes"); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const field = "w-full rounded-lg border border-gold-400/40 bg-cream-50 px-3 py-1.5 outline-none focus:border-wine-500";

  return (
    <section className="pt-10 md:pt-12 pb-3 md:pb-4 px-6 bg-cream-100">
      <div className="max-w-2xl mx-auto">
        <SectionTitle script="Save your seat" title="Xác Nhận Tham Dự"
          sub="Vui lòng phản hồi để gia đình chuẩn bị đón tiếp chu đáo." />
        <Reveal>
          {status === "ok" ? (
            <div className="max-w-[380px] mx-auto text-center bg-white/70 border border-gold-400/40 rounded-2xl p-6 shadow-sm">
              <p className="text-5xl">💌</p>
              <p className="font-serif text-2xl text-wine-700 mt-4">Cảm ơn bạn rất nhiều!</p>
              <p className="text-ink/70 mt-2">Chúng mình đã nhận được xác nhận của bạn.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-wine-700 underline">Gửi phản hồi khác</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-[380px] mx-auto bg-white/70 border border-gold-400/40 rounded-2xl p-4 md:p-5 shadow-sm space-y-3">
              <div>
                <label className="block text-sm text-ink/70 mb-0.5">Họ và tên</label>
                <input name="name" required className={field} placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm text-ink/70 mb-1">Bạn sẽ tham dự chứ?</label>
                <div className="flex gap-2">
                  {[{ v: "yes", t: "Có, tôi sẽ đến 🎉" }, { v: "no", t: "Rất tiếc, tôi bận" }].map((o) => (
                    <label key={o.v} className={`flex-1 cursor-pointer text-center rounded-lg border px-2 py-1.5 text-sm transition-colors ${attend === o.v ? "border-wine-600 bg-wine-600 text-white" : "border-gold-400/40 text-ink/70"}`}>
                      <input type="radio" name="attend" value={o.v} className="hidden" checked={attend === o.v} onChange={() => setAttend(o.v)} />
                      {o.t}
                    </label>
                  ))}
                </div>
              </div>
              {attend === "yes" && (
                <div>
                  <label className="block text-sm text-ink/70 mb-0.5">Số người tham dự</label>
                  <input name="guests" type="number" min="1" defaultValue="1" className={field} />
                </div>
              )}
              <div>
                <label className="block text-sm text-ink/70 mb-0.5">Lời chúc tới cô dâu chú rể</label>
                <textarea name="message" rows="2" className={field + " resize-none"} placeholder="Chúc hai bạn trăm năm hạnh phúc..." />
              </div>
              {notConfigured && (
                <p className="text-xs text-wine-500">* Chưa cấu hình Formspree. Mở data/config.js, điền formspreeEndpoint để form gửi được về email.</p>
              )}
              {status === "error" && <p className="text-sm text-wine-600">Gửi chưa thành công, vui lòng thử lại.</p>}
              <button type="submit" disabled={status === "sending" || notConfigured}
                className="w-full py-2 rounded-full bg-gradient-to-r from-wine-500 to-wine-700 text-white tracking-wide shadow hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50 disabled:hover:scale-100">
                {status === "sending" ? "Đang gửi..." : "Gửi xác nhận"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
