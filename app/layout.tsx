import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Wise - Be Confident In What To Wear Today",
  description:
    "An application that displays the weather forecast and current weather conditions based on the user-selected location.",
  keywords: "weather, climate, temperature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
