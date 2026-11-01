import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Italianno, Tangerine } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const tangerine = Tangerine({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Il menù — Nicole & Francesco",
  description:
    "Il menù del matrimonio di Nicole e Francesco. 20 maggio 2027, Cascina Rosio.",
  openGraph: {
    title: "Il menù — Nicole & Francesco",
    description: "20 maggio 2027 · Cascina Rosio",
    type: "website",
    images: ["/invitation.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Il menù",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${tangerine.variable} ${italianno.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
