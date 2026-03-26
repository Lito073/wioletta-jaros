import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";

const usps = [
  "Vaste schoonmaakteams — geen wisselingen",
  "Duidelijke prijzen — geen verrassingen",
  "Schoonmaak wanneer het u past",
  "Persoonlijke begeleiding",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
              Schoonmaak met een{" "}
              <span className="text-foreground/80">persoonlijk gezicht</span>
            </h2>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Wioletta Jaros Schoonmaakbedrijf V.O.F. is opgericht in 2009 door
              Wioletta en Mariusz Jaros — een echtpaar met één visie: schoonmaak
              moet betrouwbaar, overzichtelijk en persoonlijk zijn.
            </p>

            <p className="text-muted-foreground mb-8">
              Wij werken niet met wisselende teams. Uw locatie, uw mensen, uw
              routines.
            </p>

            {/* USP list */}
            <ul className="mb-8 space-y-3">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-foreground h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground">{usp}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="text-foreground border-border hover:bg-muted/50"
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Sparkles className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <div className="text-foreground text-2xl font-bold">
                      15+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Jaar ervaring
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <blockquote className="text-foreground italic">
                  &ldquo;Wij zorgen voor rust, structuur en zichtbare kwaliteit
                  in uw pand, zodat uw medewerkers prettig kunnen werken en uw
                  klanten zich welkom voelen.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="text-foreground flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                    WJ
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-medium">
                      Wioletta & Mariusz Jaros
                    </div>
                    <div className="text-muted-foreground text-xs">
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
