'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import { Guilloche } from '@/components/guilloche/Guilloche';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-forest overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <Guilloche className="text-gold" type="wave" opacity={0.2} />
          <div className="absolute top-0 left-0 w-full h-full rotate-180 mix-blend-overlay">
            <Guilloche className="text-gold" type="wave" opacity={0.15} />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest/80 to-forest"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn delay={200}>
            <div className="inline-block mb-8 px-6 py-2 border border-gold/40 rounded-full bg-forest/30 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold flex items-center gap-3">
                <TrendingUp size={12} /> The Ascent of Professional Services
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-10 leading-[1.05] tracking-tight drop-shadow-2xl">
              Expertise,<br />
              <span className="text-gold italic font-light">Multiplied.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="font-sans font-light leading-relaxed text-balance md:text-lg text-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are the operating system for the next generation of professional services. 
              Unifying high-trust boutique firms with world-class AI infrastructure to scale the summit of value.
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => scrollToSection('network')}
                className="group h-auto px-8 py-4 bg-gold text-forest hover:bg-white transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(238,216,158,0.3)] rounded-none"
              >
                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  View Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto px-8 py-4 border border-gold/30 bg-transparent text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 w-full sm:w-auto rounded-none shadow-none"
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  Our Thesis
                </span>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
