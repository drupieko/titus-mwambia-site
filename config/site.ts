// config/site.ts
export const siteConfig = {
  // Personal/Business Info
  name: "Engineer Titus Mwambia",
  role: "Electrical Engineer & Materials Supplier",
  location: "Laare, Meru County",
  // Service & Contact Info
  serviceAreas: ["Laare", "Maua", "Meru Town", "Meru County"],
  mainPhone: "+254712345678", // Updated placeholder format for WhatsApp
  email: "info@titusmwambia.co.ke", // Add this line
  // Brand Colors
  colors: {
    background: "bg-slate-900",
    accent: "bg-amber-500",
    accentText: "text-amber-500",
    text: "text-white",
    mutedText: "text-slate-300",
    cardBackground: "bg-slate-800",
  },
  // About Page Details
  aboutPage: {
    credentials: "B.Sc. Electrical & Electronics Engineering",
    license: "EPRA Licensed & Certified",
    bio: "With a robust academic background and rigorous field experience, Engineer Titus Mwambia delivers uncompromising electrical engineering solutions across Meru County. From complex structural schematics to premium residential finishes, every project is executed with precision, safety, and modern aesthetics."
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
  // Expanded Products Array (12 Items, 4 Categories)
  products: [
    // Cabling
    { id: 1, name: "Single Core Copper Cable (1.5mm)", category: "Cabling", price: "KSh 3,200", priceValue: 3200, description: "High-conductivity copper wire for light circuits. Red/Black/Green options in stock.", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600" },
    { id: 2, name: "Multi-Core Armored Cable (4mm)", category: "Cabling", price: "KSh 1,450", priceValue: 1450, description: "Steel wire armored cable for underground and heavy-duty industrial routing.", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600" },
    { id: 3, name: "Speaker & Flex Cable (0.75mm)", category: "Cabling", price: "KSh 1,200", priceValue: 1200, description: "Flexible twin cord for low voltage audio and lighting applications.", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600" },
    // Fittings
    { id: 4, name: "Double Socket Outlet (13A)", category: "Fittings", price: "KSh 450", priceValue: 450, description: "Durable, flame-retardant dual wall socket with built-in child safety shutters.", image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=600" },
    { id: 5, name: "Heavy-Duty Switch (20A)", category: "Fittings", price: "KSh 350", priceValue: 350, description: "Industrial grade rocker switch for water heaters and heavy machinery.", image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=600" },
    { id: 6, name: "Surface Metal Clad Box", category: "Fittings", price: "KSh 280", priceValue: 280, description: "Robust surface mount enclosure for industrial socket installations.", image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=600" },
    // Lighting
    { id: 7, name: "LED Panel Ceiling Light (18W)", category: "Lighting", price: "KSh 850", priceValue: 850, description: "Energy-efficient, ultra-slim LED recessed panel for clean, modern ceiling installations.", image: "https://images.unsplash.com/photo-1565538810844-1e119d81a207?q=80&w=600" },
    { id: 8, name: "Outdoor Floodlight (100W)", category: "Lighting", price: "KSh 2,500", priceValue: 2500, description: "Waterproof, high-lumen security floodlight with motion sensor compatibility.", image: "https://images.unsplash.com/photo-1565538810844-1e119d81a207?q=80&w=600" },
    { id: 9, name: "Architectural Chandelier", category: "Lighting", price: "KSh 15,000", priceValue: 15000, description: "Premium bespoke lighting centerpiece for luxury residential and hotel lobbies.", image: "https://images.unsplash.com/photo-1565538810844-1e119d81a207?q=80&w=600" },
    // Distribution
    { id: 10, name: "Main Consumer Unit (8-Way)", category: "Distribution", price: "KSh 4,800", priceValue: 4800, description: "Pre-wired distribution board with main switch and busbar. Fully dust-covered.", image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=600" },
    { id: 11, name: "RCBO Circuit Breaker (32A)", category: "Distribution", price: "KSh 1,100", priceValue: 1100, description: "Combined MCB and RCD for single-circuit protection against overload and earth faults.", image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=600" },
    { id: 12, name: "Automatic Transfer Switch (ATS)", category: "Distribution", price: "KSh 18,500", priceValue: 18500, description: "Seamless grid-to-generator changeover system for critical commercial infrastructure.", image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=600" }
  ]
};

export type SiteConfig = typeof siteConfig;