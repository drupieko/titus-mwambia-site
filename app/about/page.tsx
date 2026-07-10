// app/about/page.tsx
import { GraduationCap, Store } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center border-b border-slate-800">
        <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
          The Engineer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Academic Foundations & Local Presence
        </h1>
        <div className="mt-6 mx-auto w-24 h-1 bg-amber-500 rounded-full"></div>
      </div>

      {/* Visual Accent Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800" 
          alt="Engineering Site Review" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Deep Gradient blending into slate background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900"></div>
      </div>

      {/* Content Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Column 1: The Academic Pillar */}
          <div className="relative pl-8 border-l-2 border-slate-800">
            <div className="absolute -left-5 top-0 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-amber-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              The Academic Pillar
            </h2>
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-500 text-sm font-semibold">{siteConfig.aboutPage.credentials}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Standard installation limits are insufficient for complex modern infrastructure. Engineer Titus Mwambia&apos;s academic background entails rigorous training in power grid modeling, electromagnetics, and circuit physics.
            </p>
            <p className="text-slate-500 leading-relaxed">
              This deep theoretical foundation ensures that his structural blueprints are not just functional, but mathematically sound, inherently safe, and fully compliant with national regulatory standards. We engineer for fail-safe distribution and absolute structural integrity.
            </p>
          </div>

          {/* Column 2: Local Presence & The Laare Showroom */}
          <div className="relative pl-8 border-l-2 border-slate-800">
            <div className="absolute -left-5 top-0 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
              <Store className="h-5 w-5 text-amber-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Local Presence & The Laare Showroom
            </h2>
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-500 text-sm font-semibold">{siteConfig.aboutPage.license}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Titus manages high-level engineering contracts on-site throughout Meru County, overseeing project execution from groundbreaking to final commissioning. 
            </p>
            <p className="text-slate-500 leading-relaxed">
              Concurrently, his physical materials store in Laare remains open and fully stocked with tested, genuine electrical components. Managed by his dedicated local team, the showroom ensures that whether you are sourcing materials for a DIY project or a massive contract, access to premium supplies is never a bottleneck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}