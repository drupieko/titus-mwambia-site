// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-amber-500" />
            <span className="font-bold text-xl text-white tracking-tight">
              {siteConfig.name.split(" ")[1]} <span className="text-amber-500">{siteConfig.name.split(" ")[2]}</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-amber-500 transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${siteConfig.mainPhone}`} 
              className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md font-semibold text-sm hover:bg-amber-400 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}