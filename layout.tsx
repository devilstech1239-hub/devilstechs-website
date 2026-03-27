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
  title: "DevilsTech | Premium Agency",
  description: "We Provoke Change & Create Success",
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
