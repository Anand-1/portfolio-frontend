import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import AppShell from "./layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anandraj.dev"),
  title: {
    default: "Anand Raj | Full Stack Developer",
    template: "%s | Anand Raj",
  },
  description:
    "Portfolio website for Anand Raj, a full stack developer focused on React, Node.js, cloud platforms, accessibility, and modern web engineering.",
  keywords: [
    "Anand Raj",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Architecture",
  ],
  openGraph: {
    title: "Anand Raj | Full Stack Developer",
    description:
      "A portfolio and engineering profile for Anand Raj, a full stack developer and cloud-focused software professional.",
    type: "website",
    url: "https://anandraj.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextTopLoader
          color="#9affac"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #9affac, 0 0 5px #9affac"
          template='<div class="bar" role="bar"><div class="peg"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
