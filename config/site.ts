// config/site.ts
export const siteConfig = {
  // Personal/Business Info
  name: "Engineer Titus Mwambia",
  credentials: "B.Sc. Electrical & Electronics Engineering",
  role: "Electrical Engineer & Materials Supplier",
  location: "Laare, Meru County",
  // Service & Contact Info
  serviceAreas: ["Laare", "Maua", "Meru Town", "Meru County"],
  mainPhone: "+254XXXXXXXXX", // Placeholder for WhatsApp/Calls
  // Brand Colors
  colors: {
    background: "bg-slate-900",
    accent: "bg-amber-500",
    accentText: "text-amber-500",
    text: "text-white",
    mutedText: "text-slate-300",
    cardBackground: "bg-slate-800",
  },
  // Services Array
  services: [
    {
      title: "Commercial & Structural Design",
      description: "Certified electrical system designs for multi-storey buildings, commercial plazas, and business hubs. Fully compliant with EPRA regulations.",
      icon: "Building2"
    },
    {
      title: "Premium Residential Installations",
      description: "Complete, high-safety home wiring solutions featuring bespoke chandelier installations, smart lighting systems, and modern load balancing.",
      icon: "Home"
    },
    {
      title: "Solar & Clean Energy Backup",
      description: "Custom hybrid solar systems and silent inverter backup design to keep Meru businesses and homes running uninterrupted.",
      icon: "Sun"
    }
  ],
  // Portfolio Array
  portfolio: [
    {
      title: "Multi-Storey Commercial Plaza",
      location: "Meru Town",
      type: "Full Electrical Schematic Design",
      description: "Engineered the entire electrical blueprint and cable routing, integrating automatic generator change-overs and balanced heavy machinery loads."
    },
    {
      title: "Luxury Residential Mansion",
      location: "Laare",
      type: "Complete Premium Wiring",
      description: "Executed high-end residential wiring, complete with automated lighting controls, structural earthing, and custom chandelier suspension."
    }
  ],
  // Products Array
  products: [
    {
      name: "Single Core Copper Cable (1.5mm)",
      category: "Cabling",
      price: "KSh 3,200 per roll",
      description: "High-conductivity copper wire for light circuits. Red/Black/Green options in stock."
    },
    {
      name: "Double Socket Outlet (13A)",
      category: "Fittings",
      price: "KSh 450",
      description: "Durable, flame-retardant dual wall socket with built-in child safety shutters."
    },
    {
      name: "LED Panel Ceiling Light (18W)",
      category: "Lighting",
      price: "KSh 850",
      description: "Energy-efficient, ultra-slim LED recessed panel for clean, modern ceiling installations."
    },
    {
      name: "Heavy-Duty PVC Conduit (20mm)",
      category: "Conduits",
      price: "KSh 180 per piece",
      description: "High-impact resistant PVC piping for safe under-plaster cable routing."
    }
  ]
};

export type SiteConfig = typeof siteConfig;