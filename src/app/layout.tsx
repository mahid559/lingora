import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bangla",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "LINGORA — Learn English, One Day at a Time",
    template: "%s | LINGORA",
  },
  description:
    "লিঙ্গোরা — বাংলাভাষীদের জন্য ৬০ দিনের ইংরেজি শেখার সম্পূর্ণ কোর্স। প্রতিদিন একটি করে পাঠ, ব্যাকরণ, শব্দভান্ডার, কথা বলা ও কুইজ।",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "LINGORA — Learn English, One Day at a Time",
    description: "৬০ দিনে ইংরেজি — বাংলা থেকে ধাপে ধাপে।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <body className="min-h-screen font-sans">
        <a href="#main" className="skip-link">
          মূল অংশে যান
        </a>
        {children}
      </body>
    </html>
  );
}