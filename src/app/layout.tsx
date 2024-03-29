import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEORank - Analyzer",
  description: "Analyze the SEO of your sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex w-full h-full">
      <body
        className={`${inter.className} flex justify-center items-center m-auto w-full h-full`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
