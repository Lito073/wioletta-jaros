import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { ServicesPreview } from "@/components/sections/services-preview";
import { AboutPreview } from "@/components/sections/about-preview";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      {/* Hero sectie */}
      <Hero />

      {/* Vertrouwen balk */}
      <TrustBar />

      {/* Referenties */}
      <ClientMarquee />

      {/* Diensten preview */}
      <ServicesPreview />

      {/* Over Ons preview */}
      <AboutPreview />

      {/* CTA sectie */}
      <CTASection />
    </>
  );
}
