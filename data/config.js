// =============================================================
//  CẤU HÌNH THIỆP CƯỚI  —  Chỉnh mọi thông tin tại đây
//  Phong cách điện ảnh theo chương (tham khảo cinelove template 3)
// =============================================================

const config = {
  // ---------- Cô dâu & Chú rể ----------
  groom: {
    name: "Nguyễn Thanh Long",
    displayName: "Thanh Long", // tên hiển thị ở mục cô dâu chú rể
    short: "Long",
    role: "Chú Rể",
    photo: "/images/MN_05435.jpg",
    photoZoom: "165%", // phóng to ảnh trong khung (cao hơn = to hơn)
    photoPosition: "50% 14%", // vị trí khung ngắm (đưa lên để thấy rõ mặt)
    family: {
      father: "Ông Nguyễn Văn Trung",
      mother: "Bà Trần Thị Ngọc Bình",
      place: "Tây Ninh",
    },
  },
  bride: {
    name: "Nguyễn Thị Thùy Trang",
    displayName: "Thùy Trang", // tên hiển thị ở mục cô dâu chú rể
    short: "Trang",
    role: "Cô Dâu",
    photo: "/images/MN_05629.jpg",
    photoZoom: "142%", // phóng gần cho cân với ảnh chú rể
    photoPosition: "50% 16%",
    family: {
      father: "Ông Nguyễn Chua",
      mother: "Bà Phạm Thị Hiền",
      place: "Quảng Ngãi",
    },
  },
  nameOrder: "brideFirst", // nhà gái: tên cô dâu đứng trước ("Trang & Long")

  // ---------- Ngày cưới ----------
  wedding: {
    ceremony: "Lễ Vu Quy", // tên buổi lễ (hiện ở mục Thời Gian & Địa Điểm, tiêu đề tab, email xác nhận)
    dateTime: "2026-12-06T09:00:00+07:00", // dùng cho đếm ngược & lịch (giờ 09:00 — sửa nếu khác)
    solar: "06 . 12 . 2026",
    lunar: "28 . 10 . 2026 (Âm lịch)", // năm Bính Ngọ
    weekday: "Chủ Nhật",
    day: 6,
    month: 12,
    year: 2026,
    hashtag: "Trang & Long",
    invitation:
      "Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của chúng mình",
  },

  // ---------- Địa điểm ----------
  venue: {
    title: "Tư Gia Nhà Gái",
    address: "Xóm Xuân Thới, Thôn Xuân An, Xã Đông Sơn, TP. Quảng Ngãi",
    note: "", // ghi chú thêm (vd: gần chợ, gần trường...). Để trống thì không hiện.
    // Ghim đúng nhà gái theo toạ độ 15°13'18.1"N 108°53'44.6"E = 15.221694, 108.895722
    mapEmbedUrl:
      "https://www.google.com/maps?q=15.221694,108.895722&z=17&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=15.221694%2C108.895722",
  },

  // ---------- Nhạc nền ----------
  music: {
    src: "/music/wedding.mp3", // bỏ file nhạc vào public/music/
    autoPlayAfterOpen: true,
    // Giây bắt đầu phát. 20 = bỏ đoạn piano dạo đầu (0:00–0:20), vào là hát câu đầu "Heart beats fast".
    // Tham khảo: 61.8 = điệp khúc 1 · 128.9 = điệp khúc 2 (cao trào) · 0 = phát từ đầu bài.
    startAt: 20,
    fadeInMs: 600, // nhạc tăng dần âm lượng trong 0.6 giây
    volume: 0.6, // âm lượng (0 - 1)
  },

  // ---------- Tự cuộn trình chiếu ----------
  autoScroll: {
    enabled: true,
    durationMs: 126000, // chạy hết trang trong ~95 giây. Tăng = chậm hơn.
    startDelayMs: 1300,
    loop: false,
  },

  // ---------- Mục "Welcome" (minh hoạ + câu tiếng Anh + 2 ảnh tròn) ----------
  welcomeIntro: {
    illustration: "", // (tuỳ chọn) đường dẫn ảnh minh hoạ riêng, vd "/images/welcome.png". Để trống = dùng hình vẽ sẵn.
    line1: "I want to spend the rest of my life",
    line2: "with you",
  },

  // ---------- Ảnh nền các khu vực ----------
  heroImage: "/images/MN_05573.jpg", // ảnh nửa dưới màn bìa
  heroImagePosition: "center 30%", // vị trí ngắm ảnh bìa (đưa lên/xuống)
  countdownImage: "/images/MN_05604.jpg",

  // ---------- Các chương điện ảnh (ảnh full + câu nói) ----------
  // Câu nói lấy từ file mô tả. Đổi ảnh/câu tuỳ ý.
  chapters: [
    {
      images: ["/images/MN_05170.jpg", "/images/MN_05543.jpg"],
      align: "center", // căn lề chữ: "left" | "center" | "right"
      layout: "stack", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter One",
      accent: "Our Story",
      lines: [
        "Tình yêu khẽ đến mà chẳng biết từ đâu,",
        "Nhưng mỗi ngày một đậm sâu, mà chẳng có điểm dừng.",
      ],
    },
    {
      images: [
        "/images/MN_05558.jpg",
        { src: "/images/MN_05829.jpg", position: "center 15%" },
      ],
      align: "left",
      layout: "collage", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter Two",
      accent: "No one but you",
      lines: ["Giữa thế gian huyên náo,", "em là điều duy nhất đáng giá."],
    },
    {
      images: ["/images/MN_05369.jpg", "/images/MN_05932.jpg"],
      align: "right",
      layout: "stack", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter Three",
      accent: "Forever & Always",
      lines: [
        "Hạnh phúc lớn nhất chính là có thể đặt tay mình vào tay em,",
        "cùng em đi hết cuộc đời lãng mạn này.",
      ],
    },
  ],

  // ---------- Lời mời (Welcome) + ảnh nền ----------
  welcome: {
    image: "/images/MN_05904.jpg",
    imagePosition: "center 22%",
    accent: "Welcome to our wedding",
    lines: [
      "Hành trình tình yêu của chúng mình đã cập bến tràn ngập sự hạnh phúc. Ngày đặc biệt đánh dấu chặng đường mới này sẽ càng thêm trọn vẹn khi có sự đồng hành của những người thân yêu.",
      "Sự có mặt của bạn không chỉ là lời chúc phúc, mà còn là niềm vui to lớn đối với tụi mình trong ngày trọng đại này. hihi. Hãy dành chút thời gian đến chung vui và ghi lại những kỷ niệm đẹp nhất cùng tụi mình nhé!",
      "Hẹn gặp bạn ở lễ cưới của chúng mình nha~ ❤️",
    ],
    thanks: "Thank you!",
  },

  // ---------- Album (lưới ảnh cuối) ----------
  gallery: [
    "/images/MN_05153.jpg",
    "/images/MN_05604.jpg",
    "/images/MN_05170.jpg",
    "/images/MN_05543.jpg",
    "/images/MN_05558.jpg",
    "/images/MN_05369.jpg",
    "/images/MN_05573.jpg",
    "/images/MN_05629.jpg",
    "/images/MN_05435.jpg",
    "/images/MN_05904.jpg",
    "/images/MN_05932.jpg",
  ],

  // ---------- Form xác nhận tham dự (RSVP) ----------
  // Gửi qua Formspree: tạo form MỚI cho nhà gái tại https://formspree.io rồi dán endpoint vào đây
  // (để riêng với form nhà trai, email xác nhận không bị lẫn).
  rsvp: {
    formspreeEndpoint: "https://formspree.io/f/xppqzwaz",
    receiveEmail: "longnguyen19971997@gmail.com", // ghi chú: email nhận thật được cài trong Formspree (Form Settings)
  },
};

export default config;
