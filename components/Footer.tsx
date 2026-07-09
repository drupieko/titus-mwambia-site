// components/Footer.tsx
import { MapPin, Phone, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Credentials */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl text-white">{siteConfig.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {siteConfig.credentials}
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Service Areas</h3>
            <ul className="space-y-2">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="flex items-center text-slate-400 text-sm">
                  <MapPin className="h-4 w-4 text-amber-500 mr-2" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-amber-500 mr-2" />
                <a href={`tel:${siteConfig.mainPhone}`} className="hover:text-amber-500 transition-colors">
                  {siteConfig.mainPhone}
                </a>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-amber-500 mr-2" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Engineered for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}