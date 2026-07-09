// components/ServicesAndPortfolio.tsx
import { Building2, Home, Sun, MapPin, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

// Map string names from config to Lucide components
const iconMap: { [key: string]: React.ElementType } = {
  Building2: Building2,
  Home: Home,
  Sun: Sun,
};

export default function ServicesAndPortfolio() {
  return (
    <section id="services" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Engineering Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Core Engineering Expertise
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={index} 
                className="group relative bg-slate-800/50 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-amber-500 transition-colors duration-300">
                    {Icon && <Icon className="h-7 w-7 text-amber-500" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Heading */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Highlighted Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Engineered Structural Portfolios
          </h2>
        </div>

        {/* Portfolio 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.portfolio.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/30 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-800/50"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300">
                  <MapPin className="h-3 w-3 text-amber-500 mr-1.5" />
                  {project.location}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300">
                  <FileText className="h-3 w-3 text-amber-500 mr-1.5" />
                  {project.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}