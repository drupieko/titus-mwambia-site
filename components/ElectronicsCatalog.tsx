// components/ElectronicsCatalog.tsx
"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ElectronicsCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Define categories for the filter bar
  const categories = ["All", "Cabling", "Fittings", "Lighting", "Conduits"];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? siteConfig.products 
    : siteConfig.products.filter(product => product.category === activeCategory);

  // Clean the phone number (remove non-digits for wa.me link)
  const cleanPhone = siteConfig.mainPhone.replace(/\D/g, "");

  return (
    <section id="shop" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Laare Materials Shop
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Premium Electrical Materials Catalog
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            High-grade, certified materials available for immediate pickup or site delivery. Order directly via WhatsApp.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            // Dynamically generate the WhatsApp URL
            const message = `Hello Engineer Titus, I am interested in purchasing ${product.name} (${product.price}) from your online catalog. Is it currently in stock in Laare?`;
            const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

            return (
              <div 
                key={index} 
                className="group flex flex-col bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1"
              >
                {/* Product Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>
                  <p className="text-2xl font-extrabold text-amber-500 mb-6">
                    {product.price}
                  </p>
                </div>

                {/* WhatsApp Order Button */}
                <div className="px-6 pb-6">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all duration-300 shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}