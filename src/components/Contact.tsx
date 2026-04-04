import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

const serviceOptions = ["Antenatal Care", "Cardiology", "Dermatology", "Gynaecology", "ENT", "Urology", "Other"];

const Contact = () => {
  const ref = useScrollAnimation<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">Contact Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            We're Here When You Need Us
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="section-fade-up grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground">Get In Touch</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-primary-foreground/90">Plot 22, Unit H, Ewet Housing Estate (Ben Udo Street), Uyo, Akwa Ibom State</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:meadowhallhealth@gmail.com" className="font-body text-sm text-primary-foreground/90 hover:text-accent transition-colors">
                  meadowhallhealth@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+2348133756264" className="font-body text-sm text-primary-foreground/90 hover:text-accent transition-colors">
                  +234 813 375 6264
                </a>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-primary-foreground/90">Open 24 hours, 7 days a week</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <p className="font-display text-2xl font-semibold text-foreground mb-2">Thank you!</p>
                  <p className="font-body text-sm text-muted-foreground">We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Full Name *</label>
                  <input required type="text" className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm bg-card focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Email Address *</label>
                    <input required type="email" className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm bg-card focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Phone Number</label>
                    <input type="tel" className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm bg-card focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Service of Interest</label>
                  <select className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm bg-card focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all">
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Message *</label>
                  <textarea required rows={4} className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm bg-card focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all resize-none" />
                </div>
                <button
                  type="submit"
                  className="btn-shimmer w-full font-body text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-lg hover:bg-primary-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
