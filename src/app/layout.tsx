import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { MouseTracker } from "../components/MouseTracker";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishwanath M M | 3D Portfolio & Software Architect",
  description:
    "Immersive 3D interactive portfolio of Vishwanath M M — AI Engineer, Software Architect, and Open Source Developer.",
  keywords: [
    "Vishwanath M M",
    "3D Portfolio",
    "AI Engineer",
    "Software Architect",
    "Three.js",
    "React Three Fiber",
    "Next.js",
  ],
  authors: [{ name: "Vishwanath M M" }],
  openGraph: {
    title: "Vishwanath M M | 3D Developer Portfolio",
    description:
      "Immersive digital experience demonstrating engineering capability, 3D graphics, and system architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
        <MouseTracker />
        {children}
      </body>
    </html>
  );
}
