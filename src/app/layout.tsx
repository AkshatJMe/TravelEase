import type { Metadata } from "next";
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TravelEase",
  description: "Powered by BrightData",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}
    >{children}
    </body>
  </html>
  );
}