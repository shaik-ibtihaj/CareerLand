import { ArrowRight, UserCheck, Users, FileText } from "lucide-react";

const paths = [
  {
    icon: UserCheck,
    title: "Direct Hire",
    description: "Companies hire directly from our fully trained, interview-ready candidate pool.",
    gradient: "from-primary to-teal-dark",
  },
  {
    icon: Users,
    title: "Consultant Model",
    description: "Staff through CareerLand as an outsourced, co-working consulting authority model.",
    gradient: "from-coral to-coral/80",
  },
  {
    icon: FileText,
    title: "Hiring Plan",
    description: "Build a planned pathway together for candidate co-op, real employment, and growth.",
    gradient: "from-navy-light to-navy",
  },
];

const PathwaysSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
          Engagement Models
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
          Flexible Hiring Pathways
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed text-lg">
          Choose the model that best fits your organization's needs. We adapt to your timeline, budget, and growth strategy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((p, i) => (
            <div
              key={p.title}
              className={`group glass-card-light rounded-2xl p-8 text-left card-hover relative overflow-hidden ${i === 1 ? "md:-translate-y-3 ring-2 ring-primary/20" : ""}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${p.gradient}" />
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} text-primary-foreground shadow-lg transition-transform group-hover:scale-110`}>
                <p.icon size={26} />
              </div>
              <h3 className="text-xl font-semibold font-display text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
