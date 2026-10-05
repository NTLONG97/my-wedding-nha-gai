import config from "@/data/config";
import Reveal from "./Reveal";

function circleStyle(p) {
  return {
    backgroundImage: `url(${p.photo})`,
    backgroundSize: p.photoZoom || "cover",
    backgroundPosition: p.photoPosition || "center",
    backgroundRepeat: "no-repeat",
  };
}

function Heart({ size, fill, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} className="heart-beat block drop-shadow-sm">
      <path d="M12 21s-8.5-6.6-8.5-12A5 5 0 0 1 12 5.3 5 5 0 0 1 20.5 9c0 5.4-8.5 12-8.5 12z" fill={fill} />
    </svg>
  );
}

// Minh hoạ cô dâu & chú rể (vẽ tay dạng hoạt hình). Có thể thay bằng ảnh riêng
// qua config.welcomeIntro.illustration.
function CoupleArt() {
  return (
    <svg viewBox="0 0 240 150" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* ===== Cô dâu ===== */}
      <path d="M70 146 C70 110 80 100 96 100 C112 100 122 110 122 146 Z" fill="#ffffff" stroke="#e7ddcb" strokeWidth="1.5" />
      <path d="M96 100 C112 110 118 128 118 146 L96 146 Z" fill="#f6f1e7" />
      <rect x="92" y="93" width="8" height="11" rx="3" fill="#f0c49b" />
      <path d="M96 66 C86 66 79 74 79 88" stroke="#e7ddcb" strokeWidth="2.5" fill="none" opacity="0.7" />
      <circle cx="96" cy="84" r="13" fill="#f5cfa6" />
      <path d="M83 85 C83 72 89 66 96 66 C103 66 109 72 109 85 C109 79 104 75 96 75 C88 75 83 79 83 85 Z" fill="#6d4327" />
      <path d="M83 85 C80 97 82 108 85 113 L88 97 Z" fill="#6d4327" />
      <path d="M109 85 C112 97 110 108 107 113 L104 97 Z" fill="#6d4327" />
      <circle cx="91.5" cy="84" r="1.5" fill="#5b3b2a" />
      <circle cx="100.5" cy="84" r="1.5" fill="#5b3b2a" />
      <path d="M93 88 Q96 91 99 88" stroke="#5b3b2a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="88" cy="87.5" r="2" fill="#f3a9b4" opacity="0.6" />
      <circle cx="104" cy="87.5" r="2" fill="#f3a9b4" opacity="0.6" />
      {/* bó hoa */}
      <path d="M89 118 l-2 12 M93 118 l1 12" stroke="#8bae6a" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="86" cy="118" r="3.4" fill="#f2909f" />
      <circle cx="93" cy="116" r="3.4" fill="#f7b8c2" />
      <circle cx="90" cy="122" r="3.4" fill="#f2909f" />
      <circle cx="90" cy="119" r="1.6" fill="#fff" opacity="0.7" />

      {/* ===== Chú rể ===== */}
      <path d="M126 146 C126 112 136 102 152 102 C168 102 178 112 178 146 Z" fill="#2c2c2e" />
      <path d="M152 102 L145 122 L152 128 L159 122 Z" fill="#ffffff" />
      <path d="M152 102 L144 118 L151 116 Z" fill="#232325" />
      <path d="M152 102 L160 118 L153 116 Z" fill="#232325" />
      <rect x="148" y="95" width="8" height="10" rx="3" fill="#f0c49b" />
      <path d="M152 107 l-5 -3 0 6 Z M152 107 l5 -3 0 6 Z" fill="#1c1c1e" />
      <circle cx="152" cy="107" r="1.6" fill="#1c1c1e" />
      <circle cx="152" cy="86" r="13" fill="#f5cfa6" />
      <path d="M139 87 C139 73 145 68 152 68 C159 68 165 73 165 87 C165 80 160 77 152 77 C144 77 139 80 139 87 Z" fill="#232323" />
      <circle cx="147.5" cy="86" r="1.5" fill="#3a2a20" />
      <circle cx="156.5" cy="86" r="1.5" fill="#3a2a20" />
      <path d="M149 90 Q152 93 155 90" stroke="#3a2a20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="144" cy="89.5" r="2" fill="#f3a9b4" opacity="0.5" />
      <circle cx="160" cy="89.5" r="2" fill="#f3a9b4" opacity="0.5" />

      {/* ===== Trái tim ở giữa ===== */}
      <path d="M124 66 C124 66 117 60.5 117 56 C117 53.8 118.8 52 121 52 C122.2 52 123.3 52.7 124 53.7 C124.7 52.7 125.8 52 127 52 C129.2 52 131 53.8 131 56 C131 60.5 124 66 124 66 Z" fill="#ef8fa0" />
    </svg>
  );
}

export default function Intro() {
  const wi = config.welcomeIntro || {};
  const groomFirst = config.nameOrder !== "brideFirst";
  const left = groomFirst ? config.groom : config.bride;
  const right = groomFirst ? config.bride : config.groom;

  const Name = ({ p }) => (
    <div className="text-center mt-3">
      <p className="font-serif text-sm text-ink/80 mb-0.5">{p.role}</p>
      <p className="font-title text-3xl md:text-4xl text-[#262421] leading-tight">
        {p.displayName || p.short}
      </p>
    </div>
  );

  return (
    <section className="pt-6 md:pt-8 pb-6 md:pb-8 px-6 bg-cream-50 text-center">
      <Reveal>
        {/* WELCOME + to our wedding uốn vòng cung ôm phía trên hình cô dâu chú rể */}
        <div className="relative mx-auto w-[300px] md:w-[340px]">
          <svg viewBox="0 0 300 92" className="block w-full h-auto" role="img" aria-label="Welcome to our wedding">
            <defs>
              <path id="arcWelcome" d="M -35 215 A 185 185 0 0 1 335 215" />
              <path id="arcWedding" d="M 0 215 A 150 150 0 0 1 300 215" />
            </defs>
            <text style={{ fontFamily: "var(--font-serif)", fontSize: 20, letterSpacing: "0.45em", fill: "rgba(63,54,46,.9)" }}>
              <textPath href="#arcWelcome" startOffset="50%" textAnchor="middle">WELCOME</textPath>
            </text>
            <text style={{ fontFamily: "var(--font-script)", fontSize: 19, letterSpacing: "0.07em", fill: "#d98aa0" }}>
              <textPath href="#arcWedding" startOffset="50%" textAnchor="middle">to our wedding</textPath>
            </text>
          </svg>
          {/* Minh hoạ (nằm lọt trong vòng cung) */}
          <div className="mx-auto w-40 md:w-48 -mt-9 md:-mt-11">
            {wi.illustration ? (
              <img src={wi.illustration} alt="Welcome" className="w-full h-auto" />
            ) : (
              <CoupleArt />
            )}
          </div>
        </div>

        {/* Câu tiếng Anh - xanh gradient viết tay */}
        <p
          className="font-script text-xl sm:text-2xl md:text-3xl leading-snug mt-6 max-w-xl mx-auto"
          style={{
            backgroundImage: "linear-gradient(90deg,#5c6fd0,#2c3670)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {wi.line1 || "I want to spend the rest of my life"}
          <br />
          {wi.line2 || "with you"}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-6 flex items-start justify-center gap-2 sm:gap-4">
          <div>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full ring-4 ring-white shadow-lg bg-cream-200 mx-auto" style={circleStyle(left)} />
            <Name p={left} />
          </div>

          {/* 3 trái tim hồng xếp chéo */}
          <div className="relative w-14 h-28 shrink-0 self-center">
            <span className="absolute left-0 bottom-2"><Heart size={16} fill="#f4aebc" style={{ animationDelay: "0s" }} /></span>
            <span className="absolute left-4 bottom-9"><Heart size={26} fill="#ec7a92" style={{ animationDelay: ".18s" }} /></span>
            <span className="absolute left-8 bottom-16"><Heart size={15} fill="#f4aebc" style={{ animationDelay: ".36s" }} /></span>
          </div>

          <div>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full ring-4 ring-white shadow-lg bg-cream-200 mx-auto" style={circleStyle(right)} />
            <Name p={right} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
