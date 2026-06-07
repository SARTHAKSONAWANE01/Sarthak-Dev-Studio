import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/lib/lenis-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Sarthak Dev Studio — Full Stack Developer",
    template: "%s — Sarthak Dev Studio",
  },
  description:
    "Building scalable digital products through engineering, design, and business thinking. Full Stack Developer, Builder, Future Founder.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Sarthak Sonawane",
    "Sarthak Dev Studio",
    "Portfolio",
    "Product Builder",
  ],
  authors: [{ name: "Sarthak Sonawane" }],
  creator: "Sarthak Sonawane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarthakdevstudio.com",
    siteName: "Sarthak Dev Studio",
    title: "Sarthak Dev Studio — Full Stack Developer",
    description:
      "Building scalable digital products through engineering, design, and business thinking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Dev Studio — Full Stack Developer",
    description:
      "Building scalable digital products through engineering, design, and business thinking.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
