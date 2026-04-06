import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const values = [
  { name: "Quality", description: "Setting and surpassing higher standards to build a smarter, faster, more efficient organisation that delivers excellent care in the right place, at the right time." },
  { name: "Compassion", description: "A culture of caring unmistakeable in every interaction  treating individuals, families and colleagues with empathy, honesty and openness." },
  { name: "Respect", description: "Treating each individual with caring consideration and valuing the diverse perspectives each person brings." },
  { name: "Collaboration", description: "Working together across disciplines to share knowledge, skills, and create a unified integrated approach to care." },
  { name: "Foresight", description: "Anticipating tomorrow's challenges and developing new, innovative ways to inspire healthier communities." },
];

const About = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" className="py-20 lg:py-28 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A Record of Service Excellence
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="section-fade-up grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Mission pull quote */}
          <div className="space-y-8">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Since 2017, Mediqués Plus has earned a reputation for being one of the leading healthcare providers in Uyo, committed to excellence with highly trained, vastly experienced staff.
            </p>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
                "To enhance lives and preserve health by enabling access to a comprehensive, fully integrated network of the highest quality and most affordable care, delivered with kindness, integrity and respect."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-4 block not-italic"> Our Mission</cite>
            </blockquote>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                To lead the evolution of healthcare to enable every resident of Akwa Ibom State to enjoy a better, healthier life.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/about" className="btn-shimmer inline-block font-body text-sm font-medium bg-primary text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-primary-light transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Values</h3>
            {values.map((v) => (
              <div key={v.name} className="border-l-2 border-accent/60 pl-5">
                <h4 className="font-body text-base font-semibold text-foreground">{v.name}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
