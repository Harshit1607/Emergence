import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Electrolize } from 'next/font/google';
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const electrolize = Electrolize({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Harshit Bareja",
  description: "Portfolio made using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gloock&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={electrolize.className}>
        <ThemeProviderWrapper>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
