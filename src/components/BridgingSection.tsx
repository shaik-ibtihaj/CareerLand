import { Target, Eye, Compass } from "lucide-react";
import bridgingTeam from "@/assets/bridging-team.jpg";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description: "We provide pathways for emerging talent by creating real-world, industry-ready training programs.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where ambition meets opportunity, creating industry-ready careers.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Compass,
    title: "Our Approach",
    description: "Bridging potential, practical experience, and impactful industry collaboration.",
    color: "bg-primary/10 text-primary",
  },
];

const BridgingSection = () => {
  return (
    <section className="py-24 bg-section-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
              Bridging Talent and Opportunity
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg text-lg">
              CareerLand connects organizations with individuals who are preparing to contribute meaningfully through hands-on practice, practical exposure, and industry collaboration.
            </p>
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className={`mt-0.5 flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center ${item.color} transition-transform group-hover:scale-110`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src={bridgingTeam}
                alt="Team discussion"
                className="rounded-2xl object-cover w-full h-[440px] shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-coral/10 border border-coral/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingSection;
