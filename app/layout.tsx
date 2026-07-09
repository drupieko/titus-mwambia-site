import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineer Titus Mwambia | B.Sc. Electrical Engineer & Electronics Shop, Meru",
  description: "Licensed B.Sc. electrical engineer based in Laare, serving all of Meru County. Specializing in multi-storey building electrical design, residential wiring, and solar system backups. Visit our Laare shop for quality installation materials.",
  keywords: ["electrical engineer Meru", "electrical contractor Laare", "solar installation Meru", "buy electronics Laare", "Titus Mwambia", "house wiring Meru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${siteConfig.colors.background} ${siteConfig.colors.text} antialiased selection:bg-amber-500 selection:text-slate-900`}>
        {/* 
          Premium Layout Wrapper 
          The wrapper ensures consistent padding and max-width across the site.
          The dark slate background is applied globally via the body tag.
        */}
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
