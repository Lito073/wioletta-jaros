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
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schoonmaak met een{" "}
              <span className="text-gradient">persoonlijk gezicht</span>
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{usp}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
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
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Jaar ervaring
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <blockquote className="text-foreground italic">
                  "Wij zorgen voor rust, structuur en zichtbare kwaliteit in uw pand,
                  zodat uw medewerkers prettig kunnen werken en uw klanten zich welkom voelen."
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground">
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

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
