import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    title: "Neonatal Incubator",
    src: "/Gallery/Neonatal Incubator.png",
    category: "Equipment"
  },
  {
    title: "Sanitary Bathroom",
    src: "/Gallery/Sanitary Bathroom.png",
    category: "Facilities"
  },
  {
    title: "Power House",
    src: "/Gallery/Power House.png",
    category: "Facilities"
  },
  {
    title: "Shared Room",
    src: "/Gallery/Shared Room.png",
    category: "Rooms"
  },
  {
    title: "VIP Ward",
    src: "/Gallery/VIP Ward.png",
    category: "Rooms"
  },
  {
    title: "Consulting Area",
    src: "/Gallery/Consulting Area.png",
    category: "Facilities"
  },
  {
    title: "Nursing & Midwifery Team",
    src: "/Gallery/Screenshot 2026-04-04 183245.png",
    category: "Team"
  },
  {
    title: "Cross Section of our Staff",
    src: "/Gallery/Cross Section of our Staff.png",
    category: "Team"
  },
  {
    title: "Consulting Area",
    src: "/Gallery/Consulting Area2.png",
    category: "Facilities"
  },
  {
    title: "Hospital Entrance",
    src: "/Gallery/Hospital Entrance.png",
    category: "Exterior"
  },
  {
    title: "Shared Room",
    src: "/Gallery/Shared Room2.png",
    category: "Rooms"
  },
  {
    title: "Medical Professionals",
    src: "/Gallery/Cross Section of our Staff2.png",
    category: "Team"
  }
];

const GalleryPage = () => {
  const ref = useScrollAnimation<HTMLElement>();
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col font-body overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-20 visible">
        {/* Hero Section */}
        <div className="relative py-24 lg:py-32 overflow-hidden bg-secondary">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-24 opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl section-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-accent font-body text-xs font-bold tracking-widest uppercase shadow-sm mb-6">
                <ImageIcon size={14} />
                <span>Visual Tour</span>
              </div>
              <h1 className="font-display text-4xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
                Our <span className="text-primary italic">Hospital</span> <br/>Gallery
              </h1>
              <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Explore our state-of-the-art facilities, specialized equipment, and the dedicated professionals who work tirelessly to provide excellence in healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="py-24 lg:py-32 bg-white" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 section-fade-up"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.category}
                    </p>
                    <h3 className="text-white font-display text-xl lg:text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      <Maximize2 size={16} />
                      <span>View Full Screen</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-6xl w-full max-h-full flex flex-col items-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl mb-8 animate-in zoom-in-95 duration-500"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center text-white space-y-2 animate-in slide-in-from-bottom-4 duration-500 delay-200">
                <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">{selectedImage.category}</p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold">{selectedImage.title}</h2>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
