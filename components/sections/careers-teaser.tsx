import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/site-content";

export function CareersTeaser() {
  return (
    <section className="bg-muted py-14 lg:py-18">
      <div className="container mx-auto px-4">
        <div className="glass-card mx-auto max-w-4xl rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                Werken bij
              </p>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Zoek je schoonmaakwerk met vaste teams en duidelijke afspraken?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Bekijk openstaande vacatures of stuur een open sollicitatie als
                er nu geen passende functie tussen staat via {companyInfo.email}.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="shrink-0 border-border text-foreground hover:bg-muted/50"
            >
              <Link href="/vacatures">
                Bekijk vacatures
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
