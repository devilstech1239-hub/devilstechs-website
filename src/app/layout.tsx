import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevilsTechs | Premium Digital Marketing & Web Development Agency",
  description: "DevilsTechs is an elite digital agency engineering high-end web experiences, striking brand identities, and aggressive growth marketing for audacious brands in the USA, UK, and Europe.",
  keywords: ["Digital Marketing Agency USA", "Premium Web Development UK", "High Quality Backlinks", "SEO Optimization Europe", "React Next.js Agency"],
  openGraph: {
    title: "DevilsTechs | Premium Digital Agency",
    description: "Engineering massive growth for enterprise and luxury brands internationally.",
    url: "https://devilstechs.com",
    siteName: "DevilsTechs",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://devilstechs.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen flex flex-col bg-dark text-white font-sans overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-1 w-full flex flex-col relative overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
