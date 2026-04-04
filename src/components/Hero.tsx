import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text side */}
          <div className="section-fade-up space-y-6 max-w-xl">
            <div className="gold-rule" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
              Mediqués Plus.
            </h1>
            <p className="font-display italic text-3xl md:text-4xl text-primary-light">
              Here for You
            </p>
            <p className="font-display italic text-lg text-muted-foreground">
              ...for the care you deserve
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
              Providing convenient, affordable, world-class healthcare to the people of Uyo, Akwa Ibom State since 2017.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#services"
                className="btn-shimmer inline-block font-body text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-lg hover:bg-primary-light transition-colors"
              >
                Explore Our Services
              </a>
              <a
                href="#about"
                className="inline-block font-body text-sm font-medium border-2 border-primary text-primary px-7 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="section-fade-up relative flex justify-center lg:justify-end" style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[24px] -z-10 translate-x-4 translate-y-4" />
              <img
                src={heroTeam}
                alt="Mediqués Plus healthcare team — dedicated medical professionals in Uyo"
                className="rounded-[20px] border-2 border-accent/40 shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
