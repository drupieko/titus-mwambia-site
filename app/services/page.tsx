// app/services/page.tsx
import { Building2, Home, Sun } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center border-b border-slate-800">
        <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
          Professional Capabilities
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Engineering & Contracting Services
        </h1>
        <div className="mt-6 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
      </div>

      {/* Z-Layout Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Section 1: Commercial & Structural Design (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800" 
              alt="Commercial Electrical Schematics" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-10 w-10 text-amber-500 mr-4" />
              <h2 className="text-3xl font-bold">Commercial & Structural Design</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              Delivering meticulous structural blueprints for multi-storey complexes, commercial plazas, and business hubs. We perform rigorous load calculations, fault-level analysis, and protection grading to ensure optimal power distribution.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Every schematic is crafted to meet and exceed EPRA regulatory compliance, guaranteeing that your commercial infrastructure is mathematically sound, safe, and legally certified for operation.
            </p>
          </div>
        </div>

        {/* Section 2: Premium Residential Installations (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* On mobile, image shows first. On desktop, we reverse the order */}
          <div className="md:order-2 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800" 
              alt="Premium Residential Lighting" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
          </div>
          <div className="md:order-1">
            <div className="flex items-center mb-6">
              <Home className="h-10 w-10 text-amber-500 mr-4" />
              <h2 className="text-3xl font-bold">Premium Residential Installations</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              Executing high-safety home wiring solutions that transcend standard practices. We specialize in bespoke chandelier installations, architectural smart lighting controls, and modern load balancing.
            </p>
            <p className="text-slate-500 leading-relaxed">
              From concealed premium wiring to structural earthing, every connection in your luxury residence is engineered for flawless performance, aesthetic integration, and absolute safety.
            </p>
          </div>
        </div>

        {/* Section 3: Solar & Clean Energy Backup (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800" 
              alt="Rooftop Solar Panels" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Sun className="h-10 w-10 text-amber-500 mr-4" />
              <h2 className="text-3xl font-bold">Solar & Clean Energy Backup</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              Design custom hybrid solar systems and silent inverter backups to keep Meru businesses and homes running uninterrupted. We perform precise solar sizing and off-grid system configurations.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Whether for residential redundancy or agricultural farm power systems, our clean energy solutions are engineered for maximum yield, battery longevity, and seamless automatic change-over.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}