import "./globals.css";
import config from "@/data/config";

const brideFirst = config.nameOrder === "brideFirst";
const [p1, p2] = brideFirst ? [config.bride, config.groom] : [config.groom, config.bride];
const ceremony = config.wedding.ceremony || "Thiệp cưới";

export const metadata = {
  title: `${ceremony} ${p1.short} & ${p2.short}`,
  description: config.wedding.invitation,
  openGraph: {
    title: `${ceremony} · ${p1.name} & ${p2.name}`,
    description: config.wedding.invitation,
    images: [config.heroImage],
  },
};

export const viewport = {
  themeColor: "#faf5ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&family=Dancing+Script:wght@500;600;700&family=Sacramento&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&text=%E5%9B%8D&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
