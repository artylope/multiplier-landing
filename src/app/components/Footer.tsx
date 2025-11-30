import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Guilloche } from "../../components/guilloche/footer_pattern";
import MultiplierLogo from "../../components/MultiplierLogo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-forest pt-24 pb-12 border-t-4 border-gold/30 relative overflow-hidden"
    >
      <Guilloche
        className="text-gold pointer-events-none top-20"
        opacity={0.15}
        type="wave"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-tightest tracking-tight">
              Ready to elevate your <br />
              <span className="text-gold italic">Standards?</span>
            </h2>
            <p className="text-cream/60 max-w-md mb-8">
              Whether you are a prospective client, a firm owner, or an
              engineer, we invite you to start a conversation.
            </p>
            <a
              href="mailto:partners@multiplier.holdings"
              className="inline-flex items-center gap-3 text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm"
            >
              partners@multiplier.holdings <ChevronRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                  Offices
                </h3>
                <ul className="space-y-2 text-sm text-cream/80">
                  <li>San Francisco</li>
                  <li>London</li>
                  <li>Singapore</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                 Legal
                </h3>
                <ul className="space-y-2 text-sm text-cream/80">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>

            {/* Quick Links (Mapped to "Legal" style column but keeping links) */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-cream/40 mb-4">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
              <li>
                  <Link
                    href="/"
                    className="block text-cream/80 hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="block text-cream/80 hover:text-gold transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block text-cream/80 hover:text-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="block text-cream/80 hover:text-gold transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-cream/80 hover:text-gold transition-colors"
                  >
                    About
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
