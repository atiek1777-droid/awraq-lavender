import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

// Swap for Tajawal: import { Tajawal } from "next/font/google"
// and use weight: ["400", "700"], variable: "--font-readex" (keep the var name).
const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أوراق لافندر | هدايا ومناسبات",
  description: "هدايا وباقات زهور وتنسيق مناسبات بأيدٍ خبيرة وحبكة عطرية فاخرة.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={readex.variable}>
      <body className="bg-white font-sans text-slate-600 antialiased">{children}</body>
    </html>
  );
}
