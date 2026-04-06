import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { name: "Antenatal Care", tagline: "From Conception Till Birth", description: "A bespoke package for every woman's journey to bring life. We guide you through every step with expert support and planned pain management options.", icon: "🤰" },
  { name: "Pain Management in Labour", tagline: "Just Like The Hebrew Women", description: "Several safe options of pain management for a seamless and truly unforgettable birthing experience.", icon: "💊" },
  { name: "Free Family Planning", tagline: "For Your Health and Peace of Mind", description: "All forms of contraception are free at Mediqués Plus  subdermal implants, IUDs, pills, and injections  with full counselling.", icon: "🌿" },
  { name: "Cardiology", tagline: "For a Healthy and Happy Heart", description: "In-house Cardiologists provide up-to-date treatment and monitoring for hypertension and cardiovascular disorders, plus heart screening plans.", icon: "❤️" },
  { name: "Dermatology", tagline: "Get The Glow You Desire", description: "Treatment of acute and chronic skin disease, stretch marks, acne, skin cancers, urticaria and allergies in a hospital setting.", icon: "✨" },
  { name: "Gynaecology", tagline: "A Woman's World", description: "Headed by a seasoned Gynaecologist, addressing subfertility, fibroids, ovarian tumors, urogynaecology and gynaecological cancers.", icon: "🌸" },
  { name: "Cosmetic Surgery", tagline: "Look Good, Feel Better", description: "Plastic, Reconstructive and Aesthetic surgery using modern techniques to help you feel comfortable and confident in your body.", icon: "💎" },
  { name: "Gastroenterology & Hepatology", tagline: "Nothing Tastes as Good as Health", description: "Treatment of digestive system disorders including liver, intestines, biliary system and irritable bowel disease. Endoscopy services coming soon.", icon: "🫀" },
  { name: "The Breast Clinic", tagline: "Get It Off Your Chest", description: "Expert, patient-focused care for breast problems and breast cancer. Includes assessment, chemotherapy services and breast surgery.", icon: "🎗️" },
  { name: "Urology", tagline: "Ur-ine Good Hands", description: "Assessment and treatment of bladder, urethra, prostate and kidney conditions by our specialist team.", icon: "🔬" },
  { name: "Nephrology", tagline: "Caring For Your Kidneys", description: "Renal outpatient clinics, co-ordination of renal dialysis, kidney transplants, and post-transplant care.", icon: "💧" },
  { name: "Sexual Health Clinic", tagline: "Confidential. Compassionate.", description: "Wide range of confidential services including STI testing and treatment, contraception, pregnancy testing, PEP and specialist young people's services.", icon: "🔒" },
  { name: "ENT", tagline: "Say Aaaah...", description: "Full range of adult Ear, Nose & Throat services. General and specialist multidisciplinary clinics backed by latest technology.", icon: "👂" },
  { name: "Work / School / Travel Exams", tagline: "For Your Health and Safety", description: "Fitness certifications, school medicals, travel vaccinations and occupational health plans by our specialist team.", icon: "✈️" },
  { name: "Physiotherapy", tagline: "Support When You Need It", description: "Manage chronic pain, improve mobility, recover from injury, strokes or paralysis  all without relying solely on medication.", icon: "🏃" },
  { name: "Paediatrics & Adolescent Health", tagline: "A Happier, Healthier You", description: "Friendly and experienced staff ensuring your children and teenagers always feel comfortable, cared for and well-informed.", icon: "👶" },
];

const Services = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="services" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Exceptional Care, Naturally.
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="section-fade-up card-lift group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all"
              style={{ transitionDelay: `${Math.min(i * 0.05, 0.4)}s` }}
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="font-display italic text-sm text-accent mb-3">{s.tagline}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
