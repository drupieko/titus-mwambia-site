// app/page.tsx
import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1: The Hero */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden min-h-[90vh] pt-20">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, #020617 100%)' }}></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-block px-4 py-1 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              {siteConfig.aboutPage.credentials}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Elite Structural <br className="hidden sm:block" />
            <span className="text-amber-500">Electrical Design</span> <br className="hidden sm:block" />
            & Material Supply
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Engineering safe, compliant, and high-performance electrical blueprints for multi-storey buildings and commercial complexes across Meru County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-amber-500/20">
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/shop" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-bold rounded-full hover:border-amber-500 hover:text-amber-500 transition-all duration-300">
              Source Materials
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: The Integrity Split Layout */}
      <section className="relative bg-slate-950 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left Column: Text-Over-Image Blending */}
          <div className="relative min-h-[400px] md:min-h-[600px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565538810844-1e119d81a207?q=80&w=800')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="relative z-10 flex h-full items-end p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-xl">
                Structures Designed <br /> for Safety
              </h2>
            </div>
          </div>
          {/* Right Column: Professional Copy */}
          <div className="flex items-center p-12 md:p-16 bg-slate-950">
            <div className="max-w-lg">
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
                Engineering Integrity
              </span>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Standard TVET installation limits are insufficient for complex modern infrastructure. Engineer Titus Mwambia leverages his B.Sc. in Electrical & Electronics Engineering to perform rigorous system safety modeling and structural load balancing.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Every blueprint is meticulously crafted to ensure fail-safe distribution, earthing, and compliance with EPRA regulations—guaranteeing that your multi-storey developments operate without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Differentiator Grid */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Premium Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-amber-500/5 blur-[120px] rounded-full z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              The Professional Advantage
            </h2>
            <div className="mt-4 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 shadow-xl">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">EPRA Safety Modeling</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Advanced fault-level calculations and protection grading to ensure complete regulatory compliance and structural fire safety.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 shadow-xl">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mb-6">
                <Layers className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Structural Blueprinting</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Comprehensive CAD-designed electrical schematics integrating seamlessly with architectural and mechanical structural layouts.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 shadow-xl">
              <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Guaranteed Material Sourcing</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Direct supply of premium, certified cabling, distribution, and lighting gear, eliminating counterfeit risks on your site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
