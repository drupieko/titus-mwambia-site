// app/page.tsx
import { ArrowRight, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesAndPortfolio from "@/components/ServicesAndPortfolio";
import ElectronicsCatalog from "@/components/ElectronicsCatalog";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* Blueprint Geometric Grid Background */}
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px"
            }}
          />
          {/* Radial fade to make the grid subtle and focus on the center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.8)_70%,rgba(15,23,42,1)_100%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-block px-4 py-1 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              {siteConfig.credentials}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Designing & Executing <br className="hidden sm:block" />
            <span className="text-amber-500">Elite Electrical Systems</span> <br className="hidden sm:block" />
            Across Meru County
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Leveraging a B.Sc. in Electrical & Electronics Engineering to deliver uncompromising quality. 
            Specializing in system designs for multi-storey buildings, commercial complexes, and professional residential installations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-amber-500/20"
            >
              Book an Engineer
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#shop" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-bold rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              Browse Materials Shop
              <Wrench className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services & Portfolio Section */}
      <ServicesAndPortfolio />

      {/* Electronics Shop Catalog Section */}
      <ElectronicsCatalog />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
