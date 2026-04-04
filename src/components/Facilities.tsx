import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facilities = [
  {
    name: "Wards & Long-Term Rooms",
    description: "Comfortable, patient-centred living areas meeting the highest standards of cleanliness and sterility. A worrisome hospital stay becomes a reassuring experience in our hands.",
    image: "https://static.wixstatic.com/media/bb4cb2_96ba57b6d20247c8b705126ba43b54f6~mv2.jpg/v1/fill/w_301,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3620.jpg",
  },
  {
    name: "Operating Theatres",
    description: "Our Operating Rooms foster innovation, strive for excellence, nurture respect and ensure accountability — delivering world-class surgical care to our patients.",
    image: "https://static.wixstatic.com/media/bb4cb2_13b4845ee91a423e92601b868b82f722~mv2.jpg/v1/crop/x_0,y_0,w_3557,h_3024/fill/w_301,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1040.jpg",
  },
  {
    name: "Exceptional Care Environment",
    description: "From the waiting area to discharge, patients and visitors have an amazing experience and consistently recommend our medical services throughout Akwa Ibom State.",
    image: "https://static.wixstatic.com/media/bb4cb2_6bbeb51169904ce18dd321c9286acf90~mv2.jpg/v1/crop/x_0,y_483,w_2400,h_2033/fill/w_301,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0190.jpg",
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
