import type { Metadata } from "next";
import { VT323, Outfit } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

// Two typefaces: VT323 (a pixel/terminal bitmap font, single 400 weight) drives
// the display headings; Outfit (a clean variable-weight geometric sans) carries
// body copy and structural labels so long text stays readable. Loaded via
// next/font so both are self-hosted with no layout shift or blocking request.
const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divaakar Naresh, AI Engineer",
  description:
    "Solo builder shipping real RAG and agentic AI systems. Not just notebooks.",
};

// Resolve the stored theme before first paint so the light default never flashes
// when a visitor has previously switched to the ink-dark environment.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='night'||t==='day'){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="day"
      suppressHydrationWarning
      className={`${vt323.variable} ${outfit.variable} h-full antialiased`}
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
