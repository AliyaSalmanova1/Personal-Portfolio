import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliya Salmanova | Portfolio",
  description: "Software developer, composer, and sound designer. Intersecting music and technology.",
  openGraph: {
    title: "Aliya Salmanova | Portfolio",
    description: "Software developer, composer, and sound designer. Intersecting music and technology.",
    url: "https://aliya-s-portfolio.vercel.app",
    siteName: "Aliya Salmanova Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
