import heroTeam from "@/assets/hero-team.jpg";
import { ArrowRight, Users, Award, Layers } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Candidates Trained" },
  { icon: Award, value: "7", label: "Active Programs" },
  { icon: Layers, value: "5", label: "Industry Domains" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-hero-bg min-h-[700px] flex items-center overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Empowering Tech Careers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground font-display animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Connecting Organizations with{" "}
            <span className="gradient-text">Emerging Tech Talent</span>
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            CareerLand supports motivated professionals and connects organizations with individuals preparing for real industry environments.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-teal-dark transition-all btn-glow hover:scale-105"
            >
              Hire Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="rounded-xl border border-primary-foreground/20 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 hover:border-primary/40 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right image with stats overlay */}
        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/50">
            <img
              src={heroTeam}
              alt="Team collaboration"
              className="object-cover w-full h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          {/* Stats bar */}
          <div className="absolute -bottom-6 left-4 right-4 glass-card rounded-2xl p-5 flex justify-around">
            {stats.map((s) => (
              <div key={s.label} className="text-center flex flex-col items-center gap-1">
                <s.icon size={18} className="text-primary mb-1" />
                <p className="text-2xl font-bold font-display text-primary">{s.value}</p>
                <p className="text-[11px] text-primary-foreground/50 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
