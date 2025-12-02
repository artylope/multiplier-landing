"use client";

import { useState } from "react";
import { ShieldCheck, Building2, Cpu, ArrowRight } from "lucide-react";
import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";

enum AudienceType {
  CLIENT = "CLIENT",
  TARGET = "TARGET",
  TALENT = "TALENT",
}

export default function Audience() {
  const [activeTab, setActiveTab] = useState<AudienceType>(AudienceType.CLIENT);

  return (
    <section className="py-24 px-4 bg-cream relative">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-forest/5 bg-forest/[0.02]">
        <Guilloche className="opacity-10" type="wave" color="#122C18" />
      </div>

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative z-10">
            {/* Sidebar / Tabs */}
            <div className="md:w-1/3 flex flex-col gap-2 sticky top-32 h-fit">
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-8 tracking-tight leading-none">
                Tailored<br />Perspectives
              </h3>

              {[
                {
                  type: AudienceType.CLIENT,
                  label: "For Clients",
                  desc: "High Quality Service",
                },
                {
                  type: AudienceType.TARGET,
                  label: "For Owners",
                  desc: "Succession & Growth",
                },
                {
                  type: AudienceType.TALENT,
                  label: "For Talent",
                  desc: "Build the Future",
                },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setActiveTab(item.type)}
                  className={`text-left group p-6 border-l-2 transition-all duration-500 ${
                    activeTab === item.type
                      ? "border-forest pl-8 bg-white shadow-md"
                      : "border-forest/10 hover:border-forest/30 hover:pl-7"
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                      activeTab === item.type ? "text-forest" : "text-forest/40"
                    }`}
                  >
                    {item.desc}
                  </span>
                  <span
                    className={`block font-serif text-2xl md:text-3xl tracking-tight ${
                      activeTab === item.type
                        ? "text-forest"
                        : "text-forest/60"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 min-h-[400px]">
              {activeTab === AudienceType.CLIENT && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 bg-white p-8 md:p-12 border border-forest/5 shadow-sm">
                  <div className="mb-8 p-4 bg-forest/5 inline-block rounded-full">
                    <ShieldCheck size={32} className="text-forest" />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 tracking-tight leading-none">
                    A Curated Network of <br />
                    <span className="italic text-dark-gold">Specialist Mastery.</span>
                  </h2>
                  <p className="text-base text-forest/70 mb-8 leading-relaxed">
                    Access a unified ecosystem of boutique firms, each a leader
                    in cross-border tax, compliance, and multi-jurisdictional
                    accounting. We combine the personalized attention of a
                    boutique with the technological rigor of a global
                    institution.
                  </p>
                  <ul className="space-y-4 border-t border-forest/10 pt-8">
                    {[
                      "Unified data layer across all jurisdictions",
                      "AI-driven regulatory monitoring & compliance",
                      "Single point of contact, global execution",
                    ].map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-forest font-medium"
                      >
                        <div className="w-2 h-2 bg-dark-gold rotate-45 border border-forest/20"></div>{" "}
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === AudienceType.TARGET && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 bg-white p-8 md:p-12 border border-forest/5 shadow-sm">
                  <div className="mb-8 p-4 bg-forest/5 inline-block rounded-full">
                    <Building2 size={32} className="text-forest" />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 tracking-tight leading-none">
                    Preserve Your Legacy,
                    <br />
                    <span className="italic text-dark-gold">Unlock the Future.</span>
                  </h2>
                  <p className="text-base text-forest/70 mb-8 leading-relaxed">
                    For founding partners seeking succession without selling
                    out. We acquire and modernize high-trust firms, preserving
                    your client relationships and brand while deploying our
                    proprietary AI operating system to eliminate administrative
                    drudgery.
                  </p>
                  <div className="grid grid-cols-2 gap-6 border-t border-forest/10 pt-8">
                    <div>
                      <span className="block text-5xl md:text-6xl font-serif text-forest mb-2 tracking-tight leading-none">
                        30%
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">
                        Operational Uplift
                      </span>
                    </div>
                    <div>
                      <span className="block text-5xl md:text-6xl font-serif text-forest mb-2 tracking-tight leading-none">
                        100%
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">
                        Staff Retention Focus
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === AudienceType.TALENT && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 bg-white p-8 md:p-12 border border-forest/5 shadow-sm">
                  <div className="mb-8 p-4 bg-forest/5 inline-block rounded-full">
                    <Cpu size={32} className="text-forest" />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 tracking-tight leading-none">
                    Build the OS for <br />
                    <span className="italic text-dark-gold">
                      Professional Services.
                    </span>
                  </h2>
                  <p className="text-lg text-forest/70 mb-8 leading-relaxed">
                    Join a team of engineers, product designers, and finance
                    experts redefining an industry. We aren't just an
                    aggregator; we are building competitive moats through
                    document intelligence, e-signature orchestration, and
                    vertical-specific CRM.
                  </p>
                  <a
                    href="/careers"
                    className="mt-4 inline-flex items-center gap-2 text-forest font-bold uppercase tracking-widest border-b border-forest pb-1 hover:text-gold hover:border-gold transition-colors"
                  >
                    Explore Careers <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
