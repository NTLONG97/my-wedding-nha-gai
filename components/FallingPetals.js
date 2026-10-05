"use client";
import { useMemo } from "react";

// Hiệu ứng cánh hoa rơi. Gói trong lớp phủ overflow-hidden để không gây tràn ngang.
export default function FallingPetals({ count = 16 }) {
  const petals = useMemo(() => {
    const seed = [
      3, 12, 22, 31, 44, 51, 63, 72, 81, 9, 18, 27, 37, 48, 57, 68, 77, 88,
      15, 40, 60, 85, 5, 33,
    ];
    return Array.from({ length: count }).map((_, i) => {
      const left = seed[i % seed.length];
      const size = 8 + ((i * 7) % 12);
      const duration = 9 + ((i * 3) % 8);
      const delay = (i * 1.3) % 10;
      return { left, size, duration, delay, i };
    });
  }, [count]);

  return (
    <div aria-hidden className="fixed inset-0 z-40 overflow-hidden pointer-events-none">
      {petals.map((p) => (
        <span
          key={p.i}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
