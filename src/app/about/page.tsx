import AboutHero from "@/app/components/about/AboutHero";
import MultiplierModel from "@/app/components/about/MultiplierModel";
import Team from "@/app/components/about/Team";
import ContactForm from "@/app/components/about/ContactForm";
import Section from "@/components/Section";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MultiplierModel />
      <Team />

      {/* Principles Section */}
      <Section id="principles" className="bg-forest text-cream">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:gap-24">
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
              <span className="text-cream/60 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                Principles
              </span>
              <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-cream mb-6">
                How we work
              </h2>
              <div className="h-px w-24 bg-gold/50 hidden lg:block"></div>
            </div>
            
            <div className="lg:w-2/3 flex flex-col gap-12">
              {[
                {
                  title: "Premium Service",
                  desc: "We are nothing without our customers. The most important principle in our business is a relentless focus on serving our clients well. We deliver quality work and excellent customer service. We never reach for efficiencies where it would come at the expense of work quality or client satisfaction.",
                },
                {
                  title: "Alignment",
                  desc: "When we buy a business we invest to grow it quickly while improving both client experience and cost through technology. We share this upside with the firm operators and staff. We believe technology can deliver abundance where clients, owners, staff, and investors can all reap rewards.",
                },
                {
                  title: "Autonomy",
                  desc: "We operate a global network of diverse businesses. Success is contingent upon having the right leaders whose desire for freedom, prosperity, and doing right by their people creates great outcomes with minimal central overhead.",
                },
                {
                  title: "Optimism",
                  desc: "Anything is possible - we sit at the beginning of an infinite curve of human progress and we must simply work hard to move ourselves forward each day.",
                },
                {
                  title: "Curiosity",
                  desc: "There is no substitute for genuine curiosity - the unquenched desire to better understand people, technologies, and systems. Cultivating genuine curiosity leads to joy in work, success in business, and a healthy mind.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="group border-b border-cream/10 pb-12 last:border-0"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:items-baseline">
                     <span className="text-gold font-serif text-2xl opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                     <div>
                        <h3 className="font-serif text-3xl mb-4 text-cream group-hover:text-gold transition-colors">{p.title}</h3>
                        <p className="text-base text-cream/70 leading-relaxed font-light max-w-xl">
                          {p.desc}
                        </p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <ContactForm />
    </div>
  );
}
