// app/contact/page.tsx
"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    projectType: "Residential Wiring",
    brief: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = siteConfig.mainPhone.replace(/\D/g, "");
    const message = `Hello Engineer Titus, I have filled out the project inquiry on your website:\n\n- Client Name: ${formData.name}\n- Location: ${formData.location}\n- Project Type: ${formData.projectType}\n- Brief: ${formData.brief}\n\nAre you available to discuss this contract?`;
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16 text-center">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s Discuss Your Project</h1>
          <div className="mt-6 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Operational Details & Map */}
          <div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Operational Details</h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone & WhatsApp</p>
                    <a href={`tel:${siteConfig.mainPhone}`} className="text-white font-medium hover:text-amber-500 transition-colors">
                      {siteConfig.mainPhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-white font-medium hover:text-amber-500 transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Showroom Location</p>
                    <p className="text-white font-medium">{siteConfig.location}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Business Hours</p>
                    <p className="text-white font-medium">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps Iframe */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Laare%2C%20Meru%20County%2C%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg grayscale contrast-125"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Project Questionnaire Form */}
          <div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Project Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Project Location in Meru</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="e.g. Maua Town"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>Residential Wiring</option>
                    <option>Commercial Design</option>
                    <option>Solar/Backup Installation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Project Brief</label>
                  <textarea
                    name="brief"
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Briefly describe the scope of your electrical project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Submit Project Details via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}