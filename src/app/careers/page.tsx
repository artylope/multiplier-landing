"use client";

import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import Hero from "@/app/components/careers/CareersHero";

// Section wrapper component
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default function Careers() {
  const openPositions = [
    {
      title: "Product Engineer, Corporate Accounting Pod",
      location: "Remote (Cantonese speaking)",
      type: "Full-time",
      team: "Engineering",
      link: "https://www.notion.so/multiplierholdings/JD-Product-Engineer-Corporate-Accounting-Pod-Cantonese-speaking-2b63d1dd922e8094aa6fc1486613ed91",
    },
    {
      title: "Strategic Finance Associate",
      location: "Remote",
      type: "Full-time",
      team: "Finance",
      link: "https://www.notion.so/multiplierholdings/JD-Strategic-Finance-Associate-2a83d1dd922e802193fdf0d1792f60e1",
    },
  ];

  const employees = [
    {
      name: "Sze Wai",
      role: "Engineer",
      quote:
        "Working at Multiplier... means I'm right at the edge of what's possible. Every day, we're exploring questions that haven't been fully figured out yet. It's exciting to innovate, push boundaries, and explore new approaches.",
    },
    {
      name: "Jane",
      role: "Product Lead",
      quote:
        "We're constantly talking with our users, sometimes daily, and actually building alongside them, so I know that we're creating something that really matters. This team is my favourite by far.",
    },
    {
      name: "Razvan",
      role: "Grumpy Eng",
      quote:
        "We're not stuck maintaining legacy systems or locked into old tech just because \"that's how it's always been done.\" If there's a better tool, we try it. If there's a smarter workflow, we adopt it.",
    },
    {
      name: "Amy",
      role: "Designer",
      quote:
        "My favorite part of working at Multiplier has to be the flexibility to set my own schedule, work from wherever I want, and collaborate with such a smart and fun team. I always return home feeling inspired.",
    },
    {
      name: "Alex",
      role: "Engineer",
      quote:
        "I get to build smart solutions with very talented people, in an environment where I can just be myself. We're playing with the latest AI tech... It's the kind of job that makes Mondays not suck.",
    },
    {
      name: "Tony",
      role: "IT",
      quote:
        "I love that the IT function is a blank slate. I get to bring years of experience to the table and build things the right way from the start. Everyone has been incredibly welcoming.",
    },
  ];

  return (
    <div className="">
      {/* Manifesto / Hero */}
      <Hero />

      {/* Work Style */}
      <Section className="bg-white text-forest">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="w-full max-w-xl ">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Work Style</h2>
            <p className="text-lg text-forest/70 leading-relaxed mb-6">
              Multiplier is an AI native company where each team member has a
              large role scope and unbounded opportunity for impact. We
              encourage everyone to experiment with the latest tools and models
              and rethink how their job should be done.
            </p>
            <p className="text-lg text-forest/70 leading-relaxed">
              As a globally distributed business, we have both in-person hubs
              (Singapore, San Francisco, London) and fully remote working
              options. Our culture of autonomy, alignment, and personal
              accountability creates substantial personal freedom.
            </p>
          </div>
          <div className="bg-cream p-8 border border-forest/10 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Guilloche type="rosette" color="#122C18" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase tracking-widest mb-6 border-b border-forest/10 pb-4">
              The Upside
            </h3>
            <ul className="space-y-4">
              {[
                "Bonuses & Stock Based Compensation",
                "Investment in Personal Growth",
                "Cross-border Team Retreats",
                "Latest AI Tooling Stack",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-cream/30">
        <div className="text-center mb-16">
          <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Opportunities
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-forest">
            Open Positions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {openPositions.map((position, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a
                href={position.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white border border-forest/10 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-forest group-hover:text-dark-gold transition-colors mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-forest/60">
                        <div className="w-1 h-1 bg-gold rotate-45"></div>
                        {position.team}
                      </span>
                      <span className="flex items-center gap-2 text-forest/60">
                        <div className="w-1 h-1 bg-gold rotate-45"></div>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 text-forest/60">
                        <div className="w-1 h-1 bg-gold rotate-45"></div>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-forest/60 group-hover:text-dark-gold transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      View Details
                    </span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {openPositions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-forest/60 text-lg">
              No open positions at the moment. Check back soon!
            </p>
          </div>
        )}
      </Section>

      {/* Team Photos Gallery */}
      <Section className="bg-forest/20 py-20">
        <div className="text-center mb-12">
          <span className="text-forest/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
            Life at Multiplier
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-forest mb-4 leading-[1.1]">
            Moments Together
          </h2>
          <p className="text-forest/60 text-lg max-w-2xl mx-auto">
            From team retreats to daily collaborations, see what makes our culture special
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="flex-none w-80 h-80 bg-white rounded-xl p-3 shadow-sm border border-forest/10 snap-center transform hover:scale-[1.02] hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-full h-full bg-cream/50 rounded-lg flex items-center justify-center border border-forest/5">
                  <div className="text-center text-forest/30">
                    <svg
                      className="w-16 h-16 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">Photo {i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </Section>

      {/* Employee Voices */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span className="text-forest/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Voices
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter  text-forest">From the Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-8 bg-cream/30 border border-forest/5 h-full flex flex-col hover:border-gold/30 transition-colors">
                <div className="mb-6 text-forest/70 italic font-sans text-base leading-relaxed">
                  &ldquo;{emp.quote}&rdquo;
                </div>
                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-forest/5">
                  <div className="w-10 h-10 bg-forest text-gold flex items-center justify-center font-serif font-bold rounded-full text-lg">
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-forest text-sm">
                      {emp.name}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-forest/50">
                      {emp.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="group h-auto px-8 py-4 bg-forest text-gold hover:bg-gold hover:text-forest transition-all duration-300 shadow-xl rounded-none"
          >
            <a href="mailto:join@multiplierholdings.com">
              <span className="text-xs font-bold uppercase tracking-widest">
                Join us at Multiplier
              </span>
            </a>
          </Button>
          <p className="mt-4 text-forest/60 font-mono text-xs">
            join@multiplierholdings.com
          </p>
        </div>
      </Section>
    </div>
  );
}
