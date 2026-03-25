import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const usps = [
  "Vaste schoonmaakteams — geen wisselingen",
  "Duidelijke prijzen — geen verrassingen",
  "Schoonmaak wanneer het u past",
  "Persoonlijke begeleiding",
];

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schoonmaak met een{" "}
              <span className="text-foreground/80">persoonlijk gezicht</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Wioletta Jaros Schoonmaakbedrijf V.O.F. is opgericht in 2009 door
              Wioletta en Mariusz Jaros — een echtpaar met één visie: schoonmaak
              moet betrouwbaar, overzichtelijk en persoonlijk zijn.
            </p>

            <p className="text-muted-foreground mb-8">
              Wij werken niet met wisselende teams. Uw locatie, uw mensen, uw routines.
            </p>

            {/* USP list */}
            <ul className="space-y-3 mb-8">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span className="text-foreground">{usp}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="border-[#e5e5e5] text-foreground hover:bg-[#f8f8f8]"
            >
              <Link href="/over-ons">
                Lees ons verhaal
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Jaar ervaring
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#e5e5e5]" />

                <blockquote className="text-foreground italic">
                  "Wij zorgen voor rust, structuur en zichtbare kwaliteit in uw pand,
                  zodat uw medewerkers prettig kunnen werken en uw klanten zich welkom voelen."
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-sm font-semibold text-foreground">
                    WJ
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Wioletta & Mariusz Jaros
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Oprichters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
