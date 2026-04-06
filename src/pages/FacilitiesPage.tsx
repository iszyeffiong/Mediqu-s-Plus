import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, ShieldCheck, Tv, Wifi, BedDouble, Star, Sparkles, CheckCircle2 } from "lucide-react";
import facilityWard from "@/assets/facility-ward.png";
import facilityTheatre from "@/assets/facility-theatre.png";
import staffNurse from "@/assets/staff-nurse.png";

const mainFacilities = [
  {
    name: "Wards & Long-Term Rooms",
    description: "Our living areas are comfortable and patient-centered. A trip to the hospital can be worrisome, but with the care experience, you will see what great hands you are in. Our facilities meet the highest standards of cleanliness and sterility.",
    image: facilityWard,
  },
  {
    name: "Operating Theatres",
    description: "Our Operating Rooms offer a warm environment that fosters innovation, strives for excellence, nurtures respect for others, and ensures accountability in delivering world-class care to our patients.",
    image: facilityTheatre,
  },
  {
    name: "Exceptional Care",
    description: "Patients and visitors have an amazing experience beginning from our Waiting Areas, and recommend our medical services to all. Our outstanding and well equipped facilities have allowed us to excel at what we do.",
    image: staffNurse,
  },
];

const amenities = [
  { icon: Tv, text: "Television with access to DSTV, GoTV and local channels in most rooms." },
  { icon: Wifi, text: "Wireless internet access available for connectivity during stay." },
  { icon: Sparkles, text: "Highest standards of cleanliness and sterility maintained 24/7." },
  { icon: ShieldCheck, text: "Advanced Helium Health HIMS for secure medical record management." }
];

const FacilitiesPage = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen bg-white flex flex-col font-body overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-20" ref={ref}>
        {/* Hero Section */}
        <div className="relative py-24 lg:py-32 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl section-fade-up">
              <p className="text-accent font-body text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Facilities</p>
              <h1 className="font-display text-4xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Designed with <span className="text-accent italic">Care</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl">
                Experience a hospital that feels like home. Our state-of-the-art facilities combine cutting-edge 
                technology with patient-centered design to ensure a recovery journey that is as comfortable as it is effective.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Facilities Grid (from Landing Page) */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {mainFacilities.map((f, i) => (
                <div
                  key={f.name}
                  className="section-fade-up group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">{f.name}</h3>
                    <p className="font-body text-sm text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Experience Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 section-fade-up">
                <div className="space-y-8 order-2 lg:order-1">
                   <div className="space-y-4">
                      <p className="text-accent font-bold tracking-widest text-xs uppercase">The Experience</p>
                      <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                        A True Advantage
                      </h2>
                      <div className="gold-rule" />
                   </div>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Our Hospital combines advanced technology with patient-centered design. A trip to the hospital can be worrisome, 
                     but we pride ourselves in the quality of care we offer. Our facilities meet the highest standards of cleanliness and sterility.
                   </p>
                   <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary border border-border shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                         <Star size={24} />
                      </div>
                      <p className="font-bold text-foreground">World-class care delivered in Akwa Ibom.</p>
                   </div>
                </div>
                <div className="order-1 lg:order-2">
                   <div className="aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-2">
                      <img src="/facility-tech.png" alt="Hospital Technology" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>

             {/* Confidentiality Section */}
             <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center section-fade-up">
                <div className="relative">
                   <div className="aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-primary/5 flex items-center justify-center p-12">
                      <img src="/facility-security.png" alt="Patient Data Security" className="w-full h-full object-contain" />
                   </div>
                   <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-accent text-white shadow-xl flex items-center gap-4">
                      <ShieldCheck size={32} />
                      <span className="font-bold text-sm tracking-tight uppercase">Privacy Enforced</span>
                   </div>
                </div>
                <div className="space-y-8">
                   <div className="space-y-4">
                      <p className="text-accent font-bold tracking-widest text-xs uppercase">Your Privacy</p>
                      <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                        Patient Confidentiality
                      </h2>
                      <div className="gold-rule" />
                   </div>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Mediqués Plus is pleased to employ the <strong>Helium Health Hospital Information Management System</strong>. 
                     This advanced platform speeds up the retrieval process, ensures transparency while billing, and rigorously enforces confidentiality for your peace of mind.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* Amenities Banner */}
        <section className="py-20 bg-secondary">
           <div className="container mx-auto px-4 lg:px-8">
              <div className="section-fade-up flex flex-col lg:flex-row justify-between items-center gap-12">
                 <div className="max-w-md">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">Hospital Amenities</h2>
                    <p className="text-muted-foreground">Modern conveniences designed to make your stay as stress-free as possible.</p>
                 </div>
                 <div className="grid sm:grid-cols-2 gap-8 flex-1">
                    {amenities.map((item) => (
                       <div key={item.text} className="flex gap-4">
                          <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary">
                             <item.icon size={20} />
                          </div>
                          <p className="text-sm font-medium text-foreground/80 leading-relaxed">{item.text}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Long Term Rooms Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center section-fade-up">
                <div className="w-full lg:w-1/2 space-y-8">
                   <div className="space-y-4">
                      <p className="text-accent font-bold tracking-widest text-xs uppercase">Wards & Suites</p>
                      <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                        Long Term Rooms
                      </h2>
                      <div className="gold-rule" />
                   </div>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Our Long Term Rooms offer a warm environment that fosters innovation, strives for excellence, 
                     nurtures respect for others, and ensures accountability. Every room is a sanctuary designed for 
                     healing and world-class care delivery.
                   </p>
                   <ul className="space-y-4 pt-4">
                      {["World-class care delivery", "Healing sanctuary design", "Family integration focused"].map((point) => (
                        <li key={point} className="flex items-center gap-3 text-foreground font-semibold">
                           <CheckCircle2 className="text-accent" size={20} />
                           {point}
                        </li>
                      ))}
                   </ul>
                   <div className="pt-6">
                      <a href="/#contact" className="btn-shimmer inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                        Get in Touch Today
                      </a>
                   </div>
                </div>
                <div className="w-full lg:w-1/2 relative group">
                   <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                      <img src="/facility-room.png" alt="Long Term Room" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   </div>
                   {/* Staff floating element */}
                   <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-2xl z-20 hidden md:block">
                      <img src="/facility-staff.png" alt="Clinical Staff" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FacilitiesPage;
