// components/WhatsAppWidget.tsx
"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Sanitize phone and build URL
  const cleanPhone = siteConfig.mainPhone.replace(/\D/g, "");
  const message = `Hello ${siteConfig.name}, I have a question regarding an electrical project.`;
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Interactive Card Panel */}
      {isOpen && (
        <div className="w-80 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg leading-tight">{siteConfig.name}</h3>
              <p className="text-sm text-emerald-50">{siteConfig.aboutPage.credentials}</p>
              <div className="flex items-center mt-2">
                <span className="relative flex h-2.5 w-2.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <span className="text-xs font-medium">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Card Body */}
          <div className="p-4">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Hello! If you are planning an electrical installation or sourcing high-grade materials, I am happy to assist. Let&apos;s discuss your project.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative bg-emerald-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-transform duration-300 hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30"></span>
        )}
        <div className="relative z-10">
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </div>
      </button>
    </div>
  );
}