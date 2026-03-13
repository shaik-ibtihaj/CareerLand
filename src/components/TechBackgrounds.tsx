import { Code, Database, Brain, Bot, TestTubes, Smartphone, Server } from "lucide-react";

const techs = [
  { icon: Code, title: "Full Stack - Python", description: "Django, Flask, FastAPI for robust, full-featured backend solutions.", color: "from-primary to-teal-dark" },
  { icon: Database, title: "Full Stack - Java", description: "Spring Boot, Microservices, Enterprise-grade Java development.", color: "from-navy-light to-navy" },
  { icon: Brain, title: "Generative AI", description: "LLM pipelines, prompt engineering, AI-powered product features.", color: "from-coral to-coral/80" },
  { icon: Bot, title: "Agents AI", description: "Autonomous agents, multi-step reasoning, and AI orchestration.", color: "from-navy-light to-navy" },
  { icon: TestTubes, title: "Software Testing + QA", description: "Manual testing, Automation, Test strategy planning.", color: "from-primary to-teal-dark" },
  { icon: Smartphone, title: "Mobile Development", description: "iOS, Android, Cross-Platform React Native applications.", color: "from-coral to-coral/80" },
  { icon: Server, title: "DevOps Engineering", description: "CI/CD, Cloud Infrastructure, Container orchestration.", color: "from-navy-light to-navy" },
];

const industries = ["Automotive", "Insurance", "Finance", "Aviation", "Info Tech"];

const TechBackgrounds = () => {
  return (
    <section id="expertise" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
          Expertise Pathways
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
          Candidate Technology Backgrounds
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed text-lg">
          CareerLand runs a skills-driven process, preparing candidates with diverse tech backgrounds.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {techs.map((t) => (
            <div
              key={t.title}
              className="group glass-card-light rounded-2xl p-6 text-left card-hover"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-primary-foreground shadow-lg transition-transform group-hover:scale-110`}>
                <t.icon size={22} />
              </div>
              <h3 className="text-sm font-bold font-display text-foreground mb-1.5">{t.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span key={ind} className="inline-flex items-center gap-2 rounded-full bg-section-light border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBackgrounds;
