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

          {/* Right - Contact CTA (stylish card) */}
          <div id="contact" className="bg-card rounded-2xl p-8 lg:p-10 shadow-2xl shadow-navy/20 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                <Mail size={28} className="text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display text-card-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
                Ready to supercharge your hiring pipeline? Connect with us to access a pool of motivated, industry-ready talent.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <span>Internship Partnerships</span>
                </div>
                <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <span>Talent Recruitment Solutions</span>
                </div>
                <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <span>Industry Collaboration Programs</span>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePElIm1P-n6XiwrT_zBW7D7IZ3uwnFbN2dYqjhmrIophPXsQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-coral to-coral/90 py-4 px-6 text-sm font-bold text-coral-foreground hover:opacity-90 transition-all hover:shadow-lg hover:shadow-coral/20 active:scale-[0.98] group"
              >
                <span>Fill Contact Form</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <p className="mt-4 text-xs text-muted-foreground/60">
                Opens Google Form in a new tab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
