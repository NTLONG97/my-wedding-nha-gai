"use client";
import { useEffect, useRef, useState } from "react";
import config from "@/data/config";

// Thời điểm bắt đầu phát (giây), âm lượng và thời gian tăng dần âm lượng — chỉnh trong config.music
const START = config.music.startAt || 0;
const VOL = config.music.volume ?? 0.6;
const FADE = config.music.fadeInMs ?? 1500;

// Nút nhạc nền nổi ở góc màn hình. `started` = đã mở thiệp.
export default function MusicPlayer({ started }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // nhảy tới đoạn cao trào (nếu đang ở trước đoạn đó)
  const seek = (a) => {
    try {
      if (START && a.currentTime < START - 0.5) a.currentTime = START;
    } catch {}
  };

  // tăng âm lượng từ 0 lên VOL cho nhạc vào êm
  const fadeIn = (a) => {
    a.volume = 0;
    let t0 = null;
    const step = (now) => {
      if (t0 === null) t0 = now;
      const k = Math.max(0, Math.min(1, (now - t0) / FADE));
      try {
        a.volume = VOL * k;
      } catch {}
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const start = (a) =>
    a.play().then(() => {
      seek(a);
      fadeIn(a);
      setPlaying(true);
    });

  useEffect(() => {
    if (!started) return;
    if (!config.music.autoPlayAfterOpen) return;
    const a = audioRef.current;
    if (!a) return;
    if (a.readyState >= 1) seek(a);
    else a.addEventListener("loadedmetadata", () => seek(a), { once: true });
    a.volume = 0;
    start(a).catch(() => setPlaying(false)); // trình duyệt chặn tự phát -> chờ người bấm
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // hết bài -> phát lại từ đoạn cao trào (không quay về đoạn dạo đầu)
  const onEnded = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = START;
    a.play().catch(() => {});
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      seek(a);
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!started) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={START ? `${config.music.src}#t=${START}` : config.music.src}
        preload="auto"
        onEnded={onEnded}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
        className="fab fixed bottom-5 right-5 sm:right-[calc(50%-242px)] z-[45] w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
      >
        <span className={playing ? "animate-spin-slow" : ""} style={{ animationDuration: "3s" }}>
          {playing ? "♪" : "♫"}
        </span>
      </button>
    </>
  );
}
