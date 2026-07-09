// components/ContactSection.tsx
"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, Send, User, LocateFixed, ClipboardList, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    projectType: "Residential Wiring",
    brief: "",
  });

  const cleanPhone = siteConfig.mainPhone.replace(/\D/g, "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Project Inquiry from Engineer Titus Mwambia's Website*

*Client Name:* ${formData.name}
*Project Location:* ${formData.location}
*Project Type:* ${formData.projectType}
*Project Brief:* ${formData.brief}

---
Submitted via www.titusmwambia.site`;

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Have a Contract or Need Installation Materials?
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Connection & Location */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 p-5 bg-slate-800/50 border border-slate-800 rounded-xl">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone / WhatsApp</h4>
                  <a href={`tel:${siteConfig.mainPhone}`} className="text-slate-400 hover:text-amber-500 transition-colors text-sm">
                    {siteConfig.mainPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-slate-800/50 border border-slate-800 rounded-xl">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Shop Location</h4>
                  <p className="text-slate-400 text-sm">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-slate-800/50 border border-slate-800 rounded-xl">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                  <p className="text-slate-400 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-500 text-xs">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7869792637715!2d38.054733314753886!3d0.09337596410649195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781e37d404a0a6d%3A0x3b4e1a3b5f5c0c0!2sLaare%2C%20Meru%2C%20Kenya!5e0!3m2!1sen!2s!4v1!5m2!1sen!2s"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laare, Meru County - Shop Location"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column: Interactive Project Questionnaire Form */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-6 w-6 text-amber-500" />
              <h3 className="text-xl font-bold text-white">Project Questionnaire</h3>
            </div>
            <p className="text-slate-400 text-sm mb-8">
              Fill in the details below and we will respond on WhatsApp within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Client Name */}
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-slate-300 mb-2">
                  <User className="h-4 w-4 text-amber-500 mr-2" />
                  Client Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-sm"
                />
              </div>

              {/* Project Location */}
              <div>
                <label htmlFor="location" className="flex items-center text-sm font-medium text-slate-300 mb-2">
                  <LocateFixed className="h-4 w-4 text-amber-500 mr-2" />
                  Project Location in Meru
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Maua, Meru Town, Tigania"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-sm"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="flex items-center text-sm font-medium text-slate-300 mb-2">
                  <ClipboardList className="h-4 w-4 text-amber-500 mr-2" />
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-sm"
                >
                  <option value="Residential Wiring">Residential Wiring</option>
                  <option value="Commercial Design">Commercial Design</option>
                  <option value="Solar/Backup Installation">Solar/Backup Installation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Project Brief */}
              <div>
                <label htmlFor="brief" className="flex items-center text-sm font-medium text-slate-300 mb-2">
                  <FileText className="h-4 w-4 text-amber-500 mr-2" />
                  Project Brief
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe your project scope, timeline, and any special requirements..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-600/20 text-sm"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}