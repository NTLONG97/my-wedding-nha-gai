# 💌 Thiệp Cưới Online — Long & Trang (bản điện ảnh)

Website thiệp mời cưới phong cách **điện ảnh theo chương** (tham khảo cinelove template 3),
tông **kem + vàng gold + đỏ trầm**, có **hiệu ứng mở phong bì** và **tự cuộn trình chiếu**.
Xây bằng **Next.js 14 + Tailwind CSS**.

## ✨ Bố cục (theo thứ tự cuộn)
1. Mở phong bì → 2. Bìa (Hero) → 3. Cô dâu chú rể + hai họ →
4–6. Ba chương ảnh full màn hình kèm câu nói → 7. Đếm ngược →
8. Thời gian & Địa điểm + Lịch tháng → 9. Album ảnh (lưới) →
10. Welcome / Cảm ơn → 11. Xác nhận tham dự (RSVP) → 12. Bản đồ → 13. Chân trang.

Tính năng: mở phong bì, **tự cuộn trình chiếu** (nút ▶/❚❚), **nhạc nền** (nút ♫),
hoa rơi, hiệu ứng hiện dần, đếm ngược, lịch, Google Maps, RSVP gửi email.

## 🚀 Chạy
```bash
npm install      # lần đầu
npm run dev      # http://localhost:3000
```

## ✏️ Chỉnh sửa — tất cả trong data/config.js
- **Tên, vai trò, ảnh, gia đình** hai bên: `groom`, `bride`.
- **Ngày cưới / lịch / đếm ngược**: `wedding` (dateTime, solar, lunar, day, month, year...).
- **Địa điểm & bản đồ**: `venue`.
- **Các chương ảnh + câu nói**: `chapters` (mỗi mục có `image`, `chapter`, `accent`, `lines`).
- **Ảnh bìa / đếm ngược**: `heroImage`, `countdownImage`.
- **Welcome / cảm ơn**: `welcome`.
- **Album lưới**: `gallery`.
- **Tự cuộn**: `autoScroll.durationMs` (90000 = 90 giây; tăng = chậm hơn), `loop`, `startDelayMs`.
- **Nhạc**: bỏ file vào `public/music/wedding.mp3` (hoặc đổi `music.src`).
- **RSVP (gửi email)**: tạo form ở https://formspree.io (email nhận longnguyen19971997@gmail.com),
  dán endpoint vào `rsvp.formspreeEndpoint`.

### Ảnh
Đặt trong `public/images/`. Đổi ảnh chương/bìa/album bằng cách sửa tên file trong `config.js`.

## 🎨 Màu & phông
- Màu: `tailwind.config.js` (cream / gold / wine).
- Phông: `app/layout.js` (Playfair Display, Dancing Script, Be Vietnam Pro).

Chúc mừng hạnh phúc! 🥂
