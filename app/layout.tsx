// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineer Titus Mwambia | B.Sc. Electrical Engineer & Electronics Shop, Meru",
  description: "Licensed B.Sc. electrical engineer based in Laare, serving Meru County. Specializing in commercial building electrical designs, residential wiring, and solar backups. Source genuine materials from our Laare showroom.",
  keywords: ["electrical engineer Meru", "electrical contractor Laare", "solar installation Meru", "buy electronics Laare", "Titus Mwambia", "house wiring Meru", "EPRA certified Meru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${siteConfig.colors.background} ${siteConfig.colors.text} antialiased selection:bg-amber-500 selection:text-slate-900`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20"> {/* Added pt-20 to offset sticky navbar */}
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
