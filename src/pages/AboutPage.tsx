import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldAlert, HeartHandshake, MessageSquare, Scale, Lock, Megaphone, Users } from "lucide-react";

const rights = [
  {
    title: "Right of Access",
    icon: CheckCircle2,
    desc: "You have a fundamental right to adequate and timely healthcare. You can contribute to your right of access by keeping to your appointments and telling us if you won't be available.",
    contribute: "Keep appointments, inform us of cancellations, and pay bills on time."
  },
  {
    title: "Right of Safety",
    icon: ShieldAlert,
    desc: "A right to safe and high quality care. If you are unsure about what is happening or think something has been missed, please let us know.",
    contribute: "Tell us about other conditions and voice your concerns immediately."
  },
  {
    title: "Right to Respect",
    icon: HeartHandshake,
    desc: "A right to be shown respect, dignity and consideration, regardless of your culture, beliefs, values, age or gender.",
    contribute: "Inform us of changes in circumstances and show respect to employees and other patients."
  },
  {
    title: "Right to Effective Communication",
    icon: MessageSquare,
    desc: "A right to be informed about services, treatment options and costs in a clear and open way. Interpreters can be arranged for indigenous languages.",
    contribute: "Be open and honest. Ask questions if you don't understand the care being received."
  },
  {
    title: "Right to Participation",
    icon: Scale,
    desc: "A right to be included in decisions and choices about care. Ask questions and involve your family if it makes you more comfortable.",
    contribute: "Participate in decision-making and ask for clarifications whenever needed."
  },
  {
    title: "Right to Privacy",
    icon: Lock,
    desc: "A right to privacy and confidentiality of your information. You have the right to access and request amendments to your medical records.",
    contribute: "Respect the privacy and confidentiality of other patients and staff."
  },
  {
    title: "Right to give Feedback",
    icon: Megaphone,
    desc: "A right to comment on care and have concerns addressed quickly. We need to be told about the problem first to solve it.",
    contribute: "Share suggestions and concerns with nurses or the administrator. Mail discreet feedback to: ame.afangkan@gmail.com"
  }
];

const values = [
  { name: "Quality", desc: "Setting and surpassing higher standards to build a smarter, faster, more efficient organisation that delivers excellent care." },
  { name: "Compassion", desc: "Treating individuals, families and colleagues with empathy, honesty and openness in every interaction." },
  { name: "Respect", desc: "Treating each individual with caring consideration and valuing diverse perspectives." },
  { name: "Collaboration", desc: "Working together across disciplines to share knowledge and skills for an integrated approach to care." },
  { name: "Foresight", desc: "Anticipating tomorrow's challenges and developing innovative ways to inspire healthier communities." }
];

const AboutPage = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <div className="min-h-screen bg-white flex flex-col font-body overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-20 visible">
        {/* Hero Section */}
        <div className="relative py-24 lg:py-32 overflow-hidden bg-secondary">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-24 opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl section-fade-up">
              <p className="font-body text-xs lg:text-sm font-semibold tracking-widest text-accent uppercase mb-3 px-3 py-1 bg-white inline-block rounded-full shadow-sm">Established Since 2017</p>
              <h1 className="font-display text-4xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
                A Record of <br/><span className="text-primary italic">Service Excellence</span>
              </h1>
              <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Mediqués Plus has earned a reputation for being one of the leading health care providers in Uyo. 
                Our highly trained and experienced staff pave the way for quality treatment the moment you walk through our doors.
              </p>
            </div>
          </div>
        </div>

        {/* Patients Rights - Two Column with Image */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24 section-fade-up">
                <div className="w-full lg:w-1/2 space-y-8">
                   <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                     Patient's Rights and <br/>Responsibilities
                   </h2>
                   <div className="gold-rule" />
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     At Mediqués Plus, your rights as a patient are fundamental. You have a right to access healthcare, 
                     be safe, and receive dignity and consideration at every step of your journey.
                   </p>
                   <div className="grid sm:grid-cols-2 gap-6 pt-4">
                      {rights.slice(0, 4).map((right) => (
                        <div key={right.title} className="group p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                           <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <right.icon size={20} />
                           </div>
                           <h4 className="font-bold text-foreground mb-1 text-sm lg:text-base">{right.title}</h4>
                           <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{right.desc.split('.')[0]}.</p>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="w-full lg:w-1/2 relative">
                   <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                      <img src="/about-nurses.png" alt="Patients Rights" className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-110" />
                   </div>
                   <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-1" />
                   <div className="absolute -bottom-10 -left-10 p-8 rounded-2xl bg-primary text-white shadow-2xl z-20 hidden md:block max-w-[200px] border-4 border-white">
                      <p className="text-sm font-bold leading-tight">"Your health is our priority, and your rights are our mandate."</p>
                   </div>
                </div>
             </div>

             {/* More Rights Row */}
             <div className="grid md:grid-cols-3 gap-8 section-fade-up">
                {rights.slice(4).map((right) => (
                   <div key={right.title} className="p-8 rounded-2xl bg-secondary hover:bg-white border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-white text-primary shadow-sm">
                        <right.icon size={28} />
                      </div>
                      <h4 className="font-display text-xl font-bold text-foreground mb-3">{right.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4">{right.desc}</p>
                      <div className="pt-4 mt-auto border-t border-border/50">
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Your Contribution:</p>
                        <p className="text-xs text-foreground/70 leading-relaxed italic">{right.contribute}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* Mission Vision Branding Section */}
        <section className="py-24 lg:py-40 relative bg-primary overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent rounded-full blur-[120px]" />
              <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[150px]" />
           </div>

           <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                 <div className="section-fade-up text-white space-y-12">
                   <div className="space-y-6">
                      <p className="text-accent font-body text-sm font-bold tracking-[0.3em] uppercase">The Foundation</p>
                      <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">Our Mission & <br/>Core Values</h2>
                      <div className="w-24 h-1.5 bg-accent" />
                   </div>
                   
                   <blockquote className="space-y-8 pl-8 border-l-4 border-accent relative">
                      <p className="font-display text-2xl lg:text-4xl italic leading-relaxed opacity-90">
                        "To enhance lives and preserve health by enabling access to a comprehensive, fully integrated network of the highest quality care, delivered with kindness, integrity and respect."
                      </p>
                      <footer className="flex items-center gap-4">
                         <div className="w-12 h-px bg-accent/50" />
                         <span className="font-bold tracking-widest text-accent text-sm uppercase">Our Mission</span>
                      </footer>
                   </blockquote>

                   <div className="flex flex-wrap gap-8 pt-6">
                      <div className="space-y-2">
                        <h4 className="text-xl font-display font-bold">Vision</h4>
                        <p className="text-white/70 max-w-xs text-sm leading-relaxed">To lead the evolution of healthcare to enable every resident of Akwa Ibom to enjoy a healthier life.</p>
                      </div>
                   </div>
                 </div>

                 <div className="section-fade-up relative">
                   <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-2">
                      <img src="/about-staff.png" alt="The Specialists Team" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -bottom-12 -left-12 p-8 rounded-3xl bg-white shadow-2xl z-20 text-primary flex items-center gap-6 transform -rotate-1">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-inner">
                         <Users size={32} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold leading-none">200+</p>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">Dedicated Professionals</p>
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
             <div className="section-fade-up text-center mb-24">
                <p className="text-accent font-body text-sm font-bold tracking-[0.3em] uppercase mb-4">Values We Live By</p>
                <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground">What Defines Us</h2>
                <div className="gold-rule mx-auto mt-8" />
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 section-fade-up">
                {values.map((v, i) => (
                  <div key={v.name} className="group p-10 rounded-[2rem] bg-white border border-border shadow-sm hover:shadow-2xl transition-all duration-700">
                     <span className="text-6xl font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors block mb-4">0{i+1}</span>
                     <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full" />
                        {v.name}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed text-base leading-7">{v.desc}</p>
                     <div className="mt-8 pt-8 border-t border-secondary flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <HeartHandshake className="text-primary/20" size={40} />
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Call to Action or Feedback */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
           <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
              <div className="max-w-3xl mx-auto section-fade-up space-y-8">
                 <div className="inline-flex p-4 rounded-2xl bg-secondary text-primary mb-4 rotate-3">
                    <Megaphone size={32} />
                 </div>
                 <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">Help Us Improve</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   If you have any suggestions or concerns regarding any aspect of your care, please bring them to our attention. 
                   We want to solve problems quickly and ensure your experience is outstanding.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
                    <a href="mailto:ame.afangkan@gmail.com" className="btn-shimmer bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                       Email Feedback
                    </a>
                    <a href="/#contact" className="px-10 py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all">
                       Contact Administrator
                    </a>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
