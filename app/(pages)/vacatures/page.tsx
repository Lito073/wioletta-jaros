import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/site-content";

export default function Vacatures() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
              Werken bij
            </p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Schoonmaakwerk met vaste teams en duidelijke afspraken
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We zoeken niet altijd actief nieuwe collega&apos;s, maar staan wel
              open voor gemotiveerde mensen die netjes werken en graag onderdeel
              zijn van een betrouwbaar team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Openstaande vacatures
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Op dit moment worden vacatures hier geplaatst zodra er ruimte is
                voor nieuwe collega&apos;s in het team.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Staat er nu niets tussen? Dan kun je alsnog een open
                sollicitatie sturen.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Open sollicitatie
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Vertel kort wie je bent, in welke regio je beschikbaar bent en
                hoeveel uur je ongeveer wilt werken. We nemen contact op zodra
                er een passende mogelijkheid is.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Neem contact op
                    <span className="ml-2">→</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/50"
                >
                  <a href={companyInfo.emailHref}>
                    Mail direct
                    <span className="ml-2">→</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
