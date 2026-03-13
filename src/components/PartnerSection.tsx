import { GraduationCap, Factory, Compass, MapPin, Phone, Mail } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="services" className="py-24 bg-section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
              For Organizations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-accent-foreground mb-6">
              Partner with CareerLand
            </h2>
            <p className="text-accent-foreground/60 mb-10 max-w-md leading-relaxed text-lg">
              We help organizations build stronger teams by providing access to industry-ready, emerging tech talent — trained, mentored, and motivated.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: GraduationCap, title: "Internship Programs", desc: "Provide candidates a real workplace experience and supervised, on-the-job skills practice." },
                { icon: Factory, title: "Industrial Learning Environment", desc: "Expose and give candidates industry-ready conditions to simulate job-like scenarios." },
                { icon: Compass, title: "Career Guidance", desc: "Mentoring individuals with career direction aligned with market demands." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-0.5 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-accent-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-accent-foreground/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3 pt-6 border-t border-accent-foreground/10">
              <p className="flex items-center gap-3 text-sm text-accent-foreground/60">
                <MapPin size={16} className="text-primary" /> Karlskrona, Blekinge, Sweden
              </p>
              <p className="flex items-center gap-3 text-sm text-accent-foreground/60">
                <Phone size={16} className="text-primary" /> +46 72 232 22 77
              </p>
              <p className="flex items-center gap-3 text-sm text-accent-foreground/60">
                <Mail size={16} className="text-primary" /> info@careerland.se
              </p>
            </div>
          </div>

          {/* Right - Contact form (white) */}
          <div id="contact" className="bg-card rounded-2xl p-8 lg:p-10 shadow-2xl shadow-navy/20">
            <h3 className="text-2xl font-bold font-display text-card-foreground mb-2">
              Let's Work Together
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Supercharge your hiring pipeline by tapping into a pool of motivated, industry-ready talent.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <textarea
                placeholder="Tell us about your talent needs..."
                rows={4}
                className="w-full rounded-xl bg-section-light border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-coral py-4 text-sm font-bold text-coral-foreground hover:opacity-90 transition-all hover:shadow-lg hover:shadow-coral/20 active:scale-[0.98]"
              >
                Schedule a Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
