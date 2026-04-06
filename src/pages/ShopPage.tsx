import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, ShieldCheck, Truck, Clock, PackageCheck, Star } from "lucide-react";

const medicalEquipment = [
  {
    id: 1,
    name: "3 Tesla MRI Scanner",
    description: "Advanced magnet resonance imaging with ultra-high resolution and silent scanning technology.",
    image: "/shop/mri_scanner.png",
    category: "Imaging"
  },
  {
    id: 2,
    name: "64-Slice CT Scanner",
    description: "Multi-slice spiral CT for rapid diagnostic imaging with minimal radiation dose.",
    image: "/shop/ct_scanner.png",
    category: "Imaging"
  },
  {
    id: 3,
    name: "Digital X-Ray System",
    description: "Modern floor-mounted radiography system with high-speed digital detector.",
    image: "/shop/ultrasound_ventilator.png",
    category: "Imaging"
  },
  {
    id: 4,
    name: "4D Ultrasound Machine",
    description: "Premium cardiovascular and obstetric imaging with real-time 4D visualization.",
    image: "https://images.unsplash.com/photo-1579154235602-382c973158f3?auto=format&fit=crop&q=80",
    category: "Diagnostics"
  },
  {
    id: 5,
    name: "Smart ICU Ventilator",
    description: "High-performance lung ventilation for adult and pediatric critical care.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80",
    category: "Critical Care"
  },
  {
    id: 6,
    name: "Advanced Dialysis Unit",
    description: "State-of-the-art renal replacement therapy with intelligent fluid management.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
    category: "Renal Care"
  },
  {
    id: 7,
    name: "ICU Patient Monitor",
    description: "Multi-parameter monitoring with high-resolution touchscreen and networking capability.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80",
    category: "Critical Care"
  },
  {
    id: 8,
    name: "Automated Anesthesia Station",
    description: "Integrated anesthesia workcenter with advanced ventilation and gas measurement.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
    category: "Surgery"
  },
  {
    id: 9,
    name: "Surgical Neuro-Microscope",
    description: "Robotic-assisted visualization for complex neuro and spine surgeries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Surgery"
  },
  {
    id: 10,
    name: "Cardiac Defibrillator",
    description: "Fast biphasic shock technology with advanced ECG monitoring and pacing.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    category: "Critical Care"
  }
];

const ShopPage = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen bg-white flex flex-col font-body overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-20" ref={ref}>
        {/* Hero Section */}
        <div className="relative py-24 lg:py-32 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto section-fade-up">
              <p className="text-accent font-body text-sm font-bold tracking-[0.3em] uppercase mb-4">Mediqués Equipment Store</p>
              <h1 className="font-display text-4xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Premium Medical <span className="text-accent italic">Technology</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Discover world-class diagnostic and critical care equipment. We source directly from top manufacturers 
                to bring the latest medical innovations to your facility.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Banner */}
        <section className="py-8 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center gap-4 section-fade-up">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Secure Purchase</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Payment Before Delivery</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 section-fade-up" style={{ transitionDelay: '0.1s' }}>
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Clock size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Rapid Logistics</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">15-Day Guaranteed Delivery</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 section-fade-up" style={{ transitionDelay: '0.2s' }}>
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <PackageCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Global Standard</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Manufacturer Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {medicalEquipment.map((product, i) => (
                <div 
                  key={product.id} 
                  className="section-fade-up group flex flex-col bg-white border border-border/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent/20"
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                      <p className="text-[10px] font-bold tracking-widest text-primary uppercase">{product.category}</p>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {product.description}
                    </p>
                    
                    <div className="space-y-4 pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Price</span>
                        <span className="font-bold text-foreground">Contact for Quotation</span>
                      </div>
                      <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-[11px] font-bold text-accent uppercase tracking-tighter">
                            <ShieldCheck size={14} /> Payment Before Delivery
                         </div>
                         <div className="flex items-center gap-2 text-[11px] font-bold text-primary/70 uppercase tracking-tighter">
                            <Clock size={14} /> 15-Day Delivery Time
                         </div>
                      </div>
                      <a 
                        href="#" 
                        className="btn-shimmer flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                      >
                         <MessageCircle size={18} /> Get Quote Today
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Banner */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-accent opacity-5 mix-blend-overlay" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="text-center md:text-left">
                  <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">Need Expert <span className="text-accent italic">Advice?</span></h2>
                  <p className="text-white/70 text-lg lg:text-xl">Our medical technology specialists are ready to help you find the right equipment for your facility.</p>
               </div>
               <a 
                href="/#contact" 
                className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accent hover:text-white transition-all shadow-2xl shrink-0"
               >
                 Contact Specialists
               </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
