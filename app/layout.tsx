import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./lib/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Map for locatiom",
  description: "get your gps and show details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen font-mono">
        <Navbar/>
        <main className="mx-5">{children}</main>
      </body>
    </html>
  );
}
