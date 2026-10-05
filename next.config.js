/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Dùng thẻ <img> thường nên không cần tối ưu ảnh phía server.
  images: { unoptimized: true },
  // Tải Google Fonts ở trình duyệt (không inline lúc build) -> build ổn định.
  optimizeFonts: false,
};

module.exports = nextConfig;
