import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutQuote, primaryCta } from "@/lib/site-content";
import { CheckCircle } from "lucide-react";

const usps = [
  "Vaste schoonmaakteams — geen wisselingen",
  "Duidelijke prijzen — geen verrassingen",
  "Schoonmaak wanneer het u past",
  "Persoonlijke begeleiding",
];

function AboutPortraitCard({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-card overflow-hidden rounded-[1.75rem] ${className}`}>
      <div className="grid gap-5 p-6 sm:grid-cols-[minmax(0,1fr)_8.75rem] sm:items-start sm:p-7">
        <div className="space-y-5">
          <blockquote className="text-foreground text-[1.05rem] leading-relaxed italic">
            &ldquo;{aboutQuote}&rdquo;
          </blockquote>

          <div className="h-px bg-border" />

          <div className="flex items-center gap-3">
            <div className="text-foreground flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
              WJ
            </div>
            <div>
              <div className="text-foreground text-sm font-medium">
                Wioletta Jaros
              </div>
              <div className="text-muted-foreground text-xs">
                Oprichter
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[9.5rem] overflow-hidden rounded-[1.4rem] bg-muted sm:mx-0">
          <Image
            src="/assets/wioletta-portrait-v2.webp"
            alt="Portret van Wioletta Jaros"
            fill
            sizes="(min-width: 1024px) 8.75rem, (min-width: 640px) 8.75rem, 9.5rem"
            className="object-cover object-[44%_22%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04)_42%,rgba(0,0,0,0.12))]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,245,245,0.06),transparent_55%)] mix-blend-screen" />
        </div>
      </div>
    </div>
  );
}

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,26rem)] lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
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
              <Link href={primaryCta.href}>
                {primaryCta.shortLabel}
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>

          {/* Visual element */}
          <div className="order-1 relative lg:order-2">
            <AboutPortraitCard className="mx-auto max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
