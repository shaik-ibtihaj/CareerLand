import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import logo from "src/assets/logo-careerland.jpeg";

function Footer() {
  return (
    <footer className="bg-section-dark py-16 border-t border-accent-foreground/10" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">

              <img
                src={logo}
                alt="CareerLand logo"
                className="h-8 w-8 rounded-full" />

              <span className="text-lg font-bold font-display text-accent-foreground">
                Career<span className="gradient-text">Land</span>
              </span>
            </div>
            <p className="text-sm text-accent-foreground/50 leading-relaxed mb-5">
              Connecting organizations with motivated, emerging tech talent through real-world training programs.
            </p>
            <a
              href="https://www.linkedin.com/company/careerland-ab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CareerLand on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-foreground/10 text-accent-foreground/50 hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display text-accent-foreground mb-5">Company</h4>
            {[
              { label: "About Us", href: "/about" },
              { label: "Programs", href: "/programs" },
              { label: "Our Candidates", href: "/candidates" },
              { label: "For Employers", href: "/employers" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href} // Replace with real paths (e.g. Next.js <Link>)
                className="block text-sm text-accent-foreground/50 hover:text-primary transition-colors mb-2.5"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-display text-accent-foreground mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2.5 text-sm text-accent-foreground/50">
                <MapPin size={14} className="text-primary" />
                Karlskrona, Blekinge, Sweden
              </p>
              <a
                href="tel:+46722322277"
                className="flex items-center gap-2.5 text-sm text-accent-foreground/50 hover:text-primary transition-colors"
              >
                <Phone size={14} className="text-primary" />
                +46 72 232 22 77
              </a>
              <a
                href="mailto:info@careerland.se"
                className="flex items-center gap-2.5 text-sm text-accent-foreground/50 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary" />
                info@careerland.se
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold font-display text-accent-foreground mb-5">Newsletter</h4>
            <p className="text-sm text-accent-foreground/50 mb-4">
              Subscribe to our updates on talent programs.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: connect to your newsletter service (Mailchimp, Resend, etc.)
                const email = (e.currentTarget as HTMLFormElement).email.value;
                console.log("Subscribe attempt:", email);
              } }
              className="flex gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="flex-1 rounded-xl bg-accent-foreground/5 border border-accent-foreground/10 px-4 py-2.5 text-sm text-accent-foreground placeholder:text-accent-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              <button
                type="submit"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-teal-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-accent-foreground/40">
            © {new Date().getFullYear()} CareerLand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy" // Replace with real path
              className="text-xs text-accent-foreground/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms" // Replace with real path
              className="text-xs text-accent-foreground/40 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;