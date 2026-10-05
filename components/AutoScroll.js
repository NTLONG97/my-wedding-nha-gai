"use client";
import { useEffect, useRef, useState } from "react";
import config from "@/data/config";

/*
  Tự động "trình chiếu" cả trang — MƯỢT như phim.
  Vì sao không dùng window.scrollTo như trước: tốc độ cuộn chỉ ~0.9px/khung hình, mà trình duyệt
  chỉ cuộn theo số nguyên pixel -> lúc nhích 1px, lúc đứng yên 0px, lúc nhảy 2px => giật.
  Cách mới: trong lúc tự cuộn, trượt khung <main> lên bằng transform (GPU, lẻ tới phần nhỏ pixel),
  tính theo từng khung hình (requestAnimationFrame). Khi khách chạm/vuốt/dừng/hết trang thì
  "chốt" lại thành vị trí cuộn thật của trang ngay lập tức -> liền mạch, vẫn tự vuốt bình thường.
*/
export default function AutoScroll({ started }) {
  const cfg = config.autoScroll || {};
  const enabled = cfg.enabled !== false;
  const duration = cfg.durationMs || 90000; // mili giây để đi hết trang
  const loop = !!cfg.loop;
  const [playing, setPlaying] = useState(false);

  const s = useRef({ raf: 0, base: 0, offset: 0, last: 0, el: null, active: false, running: false });

  // Chốt: bỏ transform, đặt vị trí cuộn thật = vị trí đang hiển thị
  const commit = () => {
    const st = s.current;
    if (!st.active || !st.el) return;
    const y = st.base + st.offset;
    st.el.style.transform = "";
    st.el.style.willChange = "";
    window.scrollTo({ top: y, behavior: "instant" });
    st.active = false;
    st.offset = 0;
  };

  // Bắt đầu một đoạn trượt từ vị trí cuộn hiện tại
  const begin = () => {
    const st = s.current;
    st.el = document.querySelector("main");
    if (!st.el) return false;
    st.base = window.scrollY;
    st.offset = 0;
    st.last = 0;
    st.active = true;
    st.el.style.willChange = "transform";
    return true;
  };

  useEffect(() => {
    if (!started || !enabled) return;
    const t = setTimeout(() => setPlaying(true), cfg.startDelayMs != null ? cfg.startDelayMs : 1300);
    return () => clearTimeout(t);
  }, [started, enabled, cfg.startDelayMs]);

  useEffect(() => {
    if (!playing) return;
    const st = s.current;
    if (!begin()) return;
    st.running = true;

    const tick = (now) => {
      if (!st.active) return;
      if (!st.last) st.last = now;
      const dt = Math.min(now - st.last, 64); // tránh nhảy xa khi tab bị ẩn rồi quay lại
      st.last = now;

      // chiều cao thật của nội dung (không bị ảnh hưởng bởi transform)
      const total = st.el.offsetTop + st.el.offsetHeight;
      const maxY = Math.max(0, total - window.innerHeight);
      const maxOffset = Math.max(0, maxY - st.base);
      const speed = maxY > 0 ? maxY / duration : 0.05; // px mỗi mili giây

      st.offset = Math.min(maxOffset, st.offset + speed * dt);
      st.el.style.transform = `translate3d(0, ${-st.offset}px, 0)`;

      if (st.offset >= maxOffset - 0.5) {
        // tới cuối trang
        commit();
        if (loop) {
          window.scrollTo({ top: 0, behavior: "instant" });
          begin();
        } else {
          st.running = false;
          setPlaying(false);
          return;
        }
      }
      st.raf = requestAnimationFrame(tick);
    };
    st.raf = requestAnimationFrame(tick);

    return () => {
      st.running = false;
      cancelAnimationFrame(st.raf);
      commit();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, duration, loop]);

  // Khách chạm -> chốt vị trí (để vuốt tay bắt đầu đúng chỗ); vuốt/lăn/bấm phím -> tạm dừng
  useEffect(() => {
    if (!started || !enabled) return;
    const onTouchStart = () => {
      if (!s.current.active) return;
      commit(); // chuyển về cuộn thật
      if (s.current.running) begin(); // vẫn đang chạy -> tiếp tục trượt từ vị trí mới
    };
    const pause = () => setPlaying(false);
    const onKey = (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)) setPlaying(false);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("wheel", pause, { passive: true });
    window.addEventListener("touchmove", pause, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("wheel", pause);
      window.removeEventListener("touchmove", pause);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, enabled]);

  if (!started || !enabled) return null;

  return (
    <button
      onClick={() => setPlaying((p) => !p)}
      aria-label={playing ? "Dừng trình chiếu" : "Tự cuộn trình chiếu"}
      title={playing ? "Dừng trình chiếu" : "Tự cuộn trình chiếu"}
      className="fab fixed bottom-20 right-5 sm:right-[calc(50%-242px)] z-[45] w-12 h-12 rounded-full bg-white/85 text-gold-700 border border-gold-400/50 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
    >
      <span className="text-lg leading-none">{playing ? "❚❚" : "▶"}</span>
    </button>
  );
}
