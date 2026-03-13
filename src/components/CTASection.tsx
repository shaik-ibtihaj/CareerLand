import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-navy text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-accent-foreground mb-5">
          Building Careers. Supporting Organizations.
        </h2>
        <p className="text-accent-foreground/50 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
          CareerLand works at the intersection of talent development and organizational collaboration.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-coral px-10 py-4 text-sm font-bold text-coral-foreground hover:opacity-90 transition-all hover:shadow-lg hover:shadow-coral/20 hover:scale-105"
        >
          Get in Touch
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
