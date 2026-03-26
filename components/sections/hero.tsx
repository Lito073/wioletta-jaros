import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden pt-28 pb-20 md:min-h-[92vh] md:pt-32 md:pb-28">
      {/* Fallback achtergrond */}
      <div className="absolute inset-0 bg-primary" />

      {/* Hero background image - local file for better performance and reliability */}
      <Image
        src="/assets/clients/hero-cleaning.jpg"
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
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex max-w-3xl items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="text-left leading-relaxed sm:text-center">
              Wijk en Aalburg, Hedel, Kerkdriel, Den Bosch, Waalwijk en
              Werkendam
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Professioneel schoonmaakbedrijf
            <span className="mt-2 block text-white/80">
              voor Wijk en Aalburg, Hedel en omgeving
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Vaste gezichten, duidelijke afspraken en meetbare kwaliteit.
            <span className="block mt-2">
              Actief in Wijk en Aalburg, Hedel, Kerkdriel, Den Bosch, Waalwijk
              en Werkendam.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 pt-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-primary px-8 py-6 text-base text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90"
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
              className="border-white/30 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10"
            >
              <Link href="/diensten">
                Bekijk onze diensten
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
