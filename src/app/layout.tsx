import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solyr.shop"),
  title: "SOLYR | Waitlist",
  description: "Sun printed artwear. Join the SOLYR archive for first access.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SOLYR",
    description: "Sun printed artwear. Join the SOLYR archive for first access.",
    url: "https://solyr.shop",
    siteName: "SOLYR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLYR",
    description: "Sun printed artwear. Join the SOLYR archive for first access.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-space selection:bg-prussian-blue selection:text-paper-white">{children}</body>
    </html>
  );
}
