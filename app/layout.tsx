import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

// Outfit: bold tight headlines + body
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Space Mono: tags, chips, labels, mono elements
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divaakar Naresh — builder of AI systems, breaker of sleep schedules",
  description:
    "Solo builder shipping real RAG and agentic AI systems. I read API docs for fun. Currently building something I can't tell you about yet.",
  openGraph: {
    type: "website",
    title: "Divaakar Naresh — builder of AI systems, breaker of sleep schedules",
    description:
      "Solo builder shipping real RAG and agentic AI systems. Currently building something cool.",
    url: "https://divaakar.online",
    siteName: "Divaakar Naresh",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Divaakar2005",
    creator: "@Divaakar2005",
    title: "Divaakar Naresh — builder of AI systems, breaker of sleep schedules",
    description:
      "Solo builder shipping real RAG and agentic AI systems. Currently building something cool.",
  },
  robots: { index: true, follow: true },
};

// Resolve the stored theme before first paint so the wrong theme never flashes.
// Night (dark) is the default. Uses a NEW localStorage key dn_story_theme.
const themeScript = `try{var k='dn_story_theme';var t=localStorage.getItem(k);if(t==='night'||t==='day'){document.documentElement.dataset.theme=t}else{var m=window.matchMedia('(prefers-color-scheme:light)');if(m.matches){document.documentElement.dataset.theme='day'}else{document.documentElement.dataset.theme='night'}}}catch(e){document.documentElement.dataset.theme='night';}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="night"
      suppressHydrationWarning
      className={`${outfit.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
