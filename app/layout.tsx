import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Egypt Talent",
  description: "Join the Top 1% of Talent in Egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1600px] flex flex-col gap-[50px]`}>
        {children}
      </body>
    </html>
  );
}
