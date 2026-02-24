import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { getData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Corporate IT Services",
  description: "Enterprise-grade IT services and solutions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar data={data} />
        <main className="flex-1">{children}</main>
        <Footer data={data} />
      </body>
    </html>
  );
}
