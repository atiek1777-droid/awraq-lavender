import type { Metadata, Viewport } from "next";
import "@fontsource/readex-pro/arabic-400.css";
import "@fontsource/readex-pro/arabic-600.css";
import "@fontsource/readex-pro/latin-400.css";
import "@fontsource/readex-pro/latin-600.css";
import "@fontsource/aref-ruqaa/arabic-700.css";
import "./globals.css";
import { site } from "@/lib/site";

const title = `${site.name} | ورد وهدايا ومناسبات`;
const description =
  "باقات زهور وتغليف هدايا وتنسيق حفلات الخطوبة والزفاف والتخرج والمواليد، بأيدٍ خبيرة. اختر أقرب فرع وراسلنا على واتساب.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ar_SA",
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#3a1460", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white font-sans text-base leading-7 text-slate-600 antialiased">{children}</body>
    </html>
  );
}
