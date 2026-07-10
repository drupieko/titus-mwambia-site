// app/cart/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, MessageSquare, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: string;
  priceValue: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Safe LocalStorage initialization
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsLoaded(true);
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (id: number) => {
    const newCart = cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decreaseQty = (id: number) => {
    const newCart = cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);
    updateCart(newCart);
  };

  const removeItem = (id: number) => {
    const newCart = cart.filter(item => item.id !== id);
    updateCart(newCart);
  };

  const grandTotal = cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);

  const handleCheckout = () => {
    const cleanPhone = siteConfig.mainPhone.replace(/\D/g, "");
    let message = `Hello Engineer Titus, I would like to place an order for the following electrical materials from your shop catalog:\n\n`;

    cart.forEach(item => {
      const itemTotal = item.priceValue * item.quantity;
      message += `- ${item.quantity} x ${item.name} @ ${item.price} = KSh ${itemTotal.toLocaleString()}\n`;
    });

    message += `\n---\nTotal Estimated Value: KSh ${grandTotal.toLocaleString()}\n\nPlease confirm if these items are currently in stock and when I can arrange pickup or delivery to my site. Thank you!`;

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Prevent rendering empty state prematurely during hydration
  if (!isLoaded) {
    return <div className="min-h-[60vh] bg-slate-900"></div>;
  }

  if (cart.length === 0) {
    return (
      <div className="bg-slate-900 text-white min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700">
            <ShoppingBag className="h-12 w-12 text-slate-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-slate-400 mb-8">
            You currently have no materials in your cart. Browse our premium catalog to source genuine, tested electrical components.
          </p>
          <Link 
            href="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            Return to Shop
            <ArrowLeft className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your Materials Cart</h1>
          <div className="mt-6 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-center bg-slate-950 border border-slate-800 rounded-xl p-4 gap-4"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-grow text-center sm:text-left">
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-slate-400 text-sm">{item.price}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700">
                    <button onClick={() => decreaseQty(item.id)} className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 font-bold text-white">{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-slate-500 hover:text-red-500 transition-colors" aria-label="Remove item">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-slate-800">
                <div className="flex justify-between text-slate-400">
                  <span>Items in Cart</span>
                  <span className="text-white font-medium">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Material Subtotal</span>
                  <span className="text-white font-medium">KSh {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold">Total Estimated Value</span>
                <span className="text-3xl font-extrabold text-amber-500">KSh {grandTotal.toLocaleString()}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full flex items-center justify-center px-6 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Confirm Order via WhatsApp
              </button>

              <p className="text-slate-500 text-xs text-center mt-4">
                Clicking this button will compile your order list and open WhatsApp to finalize details with the engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}