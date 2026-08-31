import { Award, Users, Target, Sparkles } from "lucide-react";
import { SITE } from "@/data/site";

const pillars = [
  { icon: Target, title: "Mission", text: "To make world-class digital execution accessible to every ambitious brand — from local startups to global enterprises." },
  { icon: Sparkles, title: "Vision", text: "Become the most trusted growth partner for the next generation of digital-first companies worldwide." },
  { icon: Award, title: "Expertise", text: `${SITE.yearsExperience}+ years of combined experience across development, marketing and creative — senior specialists on every engagement.` },
  { icon: Users, title: "Trust", text: "Long-term partnerships built on transparent communication, weekly demos and predictable delivery." },
];

export const About = () => (
  <section id="about" className="py-24 md:py-32 relative">
    <div className="container">
      <div className="max-w-3xl mb-16 animate-fade-up">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          A <span className="text-gradient">pack of specialists</span> obsessed with your growth.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {SITE.name} was founded by senior engineers, marketers and designers who believe ambitious founders deserve a partner that ships like a startup and thinks like a strategist.
          With {SITE.yearsExperience}+ years of combined experience across SaaS, e-commerce, fintech and D2C, we operate as a remote-first team serving clients across India and globally.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass rounded-2xl p-7">
            <Icon className="h-6 w-6 text-primary mb-5" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
