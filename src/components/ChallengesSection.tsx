import { Search, Briefcase, Building2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Talent Identification",
    description: "CareerLand finds motivated individuals with the right mindset and skills, and connects them to opportunity.",
    gradient: "from-primary/20 to-teal-glow/10",
  },
  {
    icon: Briefcase,
    title: "Practical Exposure",
    description: "Candidates gain real experience through hands-on, practical learning in an industry context.",
    gradient: "from-coral/20 to-coral/5",
  },
  {
    icon: Building2,
    title: "Industry Connection",
    description: "We bridge the gap by connecting graduates, professionals, and fresh talent with hiring organizations.",
    gradient: "from-primary/20 to-primary/5",
  },
];

const ChallengesSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - text content */}
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
              Why CareerLand
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
              Hiring the Right Talent Isn't Always Easy
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg max-w-lg">
              Organizations often face challenges finding skilled professionals who are ready to grow inside a dynamic environment. CareerLand is here to change the narrative.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Partner with us <ArrowRight size={14} />
            </a>
          </div>

          {/* Right - vertical cards */}
          <div className="flex flex-col gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group glass-card-light rounded-2xl p-7 text-left card-hover"
              >
                <div className="flex gap-5 items-start">
                  <div className={`flex-shrink-0 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient}`}>
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-display text-foreground mb-1.5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
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

export default ChallengesSection;
