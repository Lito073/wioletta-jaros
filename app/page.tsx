import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
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

      {/* Diensten preview */}
      <ServicesPreview />

      {/* Over Ons preview */}
      <AboutPreview />

      {/* CTA sectie */}
      <CTASection />
    </>
  );
}
