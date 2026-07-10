// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Sync cart count with LocalStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = cart.reduce((total: number, item: any) => total + item.quantity, 0);
      setCartCount(count);
    };
    updateCartCount();
    // Listen for custom event to update cart when items are added on other pages
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Zap className="h-6 w-6 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl text-white tracking-tight">
              Titus <span className="text-amber-500">Mwambia</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                  pathname === link.href ? "text-amber-500" : "text-slate-300 hover:text-amber-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Cart Icon with Counter */}
            <Link 
              href="/cart" 
              className={`relative p-2 rounded-full transition-colors duration-300 ${
                pathname === "/cart" ? "text-amber-500 bg-slate-800" : "text-slate-300 hover:text-amber-500 hover:bg-slate-800"
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative text-slate-300 hover:text-amber-500">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  pathname === link.href ? "bg-slate-800 text-amber-500" : "text-slate-300 hover:text-amber-500 hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}