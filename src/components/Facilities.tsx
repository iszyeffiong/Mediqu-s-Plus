import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import facilityWard from "@/assets/facility-ward.png";
import facilityTheatre from "@/assets/facility-theatre.png";
import staffNurse from "@/assets/staff-nurse.png";

const facilities = [
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

const Facilities = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="facilities" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">Our Facilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A Hospital That Feels Like Home
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="font-body text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            With wards and operating theatres that will exceed your expectations, Mediqués Plus has everything you may possibly need to keep you feeling strong and in the right frame of mind on the path to good health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div
              key={f.name}
              className="section-fade-up group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{f.name}</h3>
                <p className="font-body text-sm text-primary-foreground/80 leading-relaxed translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
