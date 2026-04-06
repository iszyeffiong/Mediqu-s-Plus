import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Does Mediqués Plus partner with HMOs?",
    answer: "We are pleased to accept patients from most Health Management Organisations (HMOs). Please contact the hospital to find out if your HMO partners with us."
  },
  {
    question: "How do I pay my bill?",
    answer: "We accept payments by Debit Card, Bank Transfer or Cash. Transfers should only be made to accounts affiliated to Meadowhall health Services Limited."
  },
  {
    question: "Do you offer emergency care services?",
    answer: "Yes we do. There is always a team of well trained and experienced doctors and nurses at our facility at all times."
  },
  {
    question: "Who will deliver my baby?",
    answer: "ALL deliveries are attended by a Consultant Obstetrician/Gynaecologist, a Paediatrician and other supporting doctors and midwives."
  }
];

const FAQ = () => {
  const ref = useScrollAnimation<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:col-span-5 space-y-8 section-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-body text-xs font-bold tracking-widest uppercase">
              <HelpCircle size={14} />
              <span>Common Inquiries</span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              All Your <br/>
              <span className="text-primary italic">Health Care</span> <br/>
              Questions
            </h2>
            
            <div className="gold-rule w-20" />
            
            <div className="relative pt-8">
              <div className="p-8 rounded-3xl bg-secondary border border-border relative z-10">
                <p className="text-muted-foreground leading-relaxed italic">
                  "We believe that informed patients are empowered patients. If you have any other questions not covered here, please don't hesitate to reach out to our team."
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                    <img src="/logo.png" alt="Hospital Logo" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Support Team</p>
                    <p className="text-xs text-muted-foreground">Mediqués Plus Help Desk</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 -right-4 w-full h-full bg-accent/5 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Accordion Side */}
          <div className="lg:col-span-7 space-y-4 section-fade-up" style={{ transitionDelay: '0.2s' }}>
            {faqData.map((item, index) => (
              <div 
                key={index}
                className={`group border rounded-2xl transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                    ? "border-primary bg-secondary/30 shadow-lg" 
                    : "border-border hover:border-primary/50 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                >
                  <span className={`font-display text-lg lg:text-xl font-bold transition-colors duration-300 ${
                    openIndex === index ? "text-primary" : "text-foreground"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-secondary text-primary"
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 lg:px-8 pb-8">
                    <div className="w-full h-px bg-border/50 mb-6" />
                    <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
