import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fallback achtergrond */}
      <div className="absolute inset-0 bg-primary" />

      {/* Hero background image via Next.js Image */}
      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Achtergrond met donkere gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/80">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Regio Altena & omgeving
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professioneel schoonmaakbedrijf
            <span className="block text-white/80 mt-2">
              in regio Altena
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Vaste gezichten, duidelijke afspraken en meetbare kwaliteit.
            <span className="block mt-2">
              Al meer dan 15 jaar uw partner in professionele schoonmaak.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 border border-white/20"
            >
              <Link href="/contact">
                Vraag een vrijblijvende offerte aan
                <span className="ml-2">→</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6"
            >
              <Link href="/diensten">
                Bekijk onze diensten
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
