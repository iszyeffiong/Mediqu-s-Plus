import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const features = [
  "Specialist Consultations",
  "Drugs & Medications",
  "Diagnostic Tests",
  "Scans & Imaging",
  "Vaccines & Immunisations",
];

const Pricing = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">Plans & Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Choose Your Desired Service
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="section-fade-up max-w-md mx-auto">
          <div className="bg-background rounded-2xl border-2 border-accent p-8 md:p-10 shadow-lg">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Basic Antenatal Care</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">Perfect option for uncomplicated pregnancies</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display text-5xl font-semibold text-primary">₦4,999</span>
              <span className="font-body text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn-shimmer block text-center font-body text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Get Started
            </a>
          </div>
          <p className="font-display italic text-sm text-muted-foreground text-center mt-6">
            Contact us for custom plans for other specialties and corporate health packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
