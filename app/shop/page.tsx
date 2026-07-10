// app/shop/page.tsx
"use client";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cabling", "Fittings", "Lighting", "Distribution"];

  const filteredProducts = activeCategory === "All" 
    ? siteConfig.products 
    : siteConfig.products.filter(product => product.category === activeCategory);

  const addToCart = (product: typeof siteConfig.products[0]) => {
    if (typeof window !== "undefined") {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id);

      if (existingItemIndex > -1) {
        existingCart[existingItemIndex].quantity += 1;
      } else {
        existingCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      // Dispatch custom event for Navbar to update instantly
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center border-b border-slate-800">
        <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
          Laare Materials Showroom
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Premium Electrical Catalog
        </h1>
        <div className="mt-6 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-amber-500 text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-700">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {product.description}
                </p>
                <p className="text-2xl font-extrabold text-amber-500 mb-6">
                  {product.price}
                </p>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 border border-slate-700 hover:border-amber-500"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}