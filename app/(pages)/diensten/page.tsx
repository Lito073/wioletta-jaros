import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta";
import { primaryCta, serviceHighlights } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Kantoorschoonmaak, vloeronderhoud, glasbewassing en bouwschoonmaak in regio Altena, uitgevoerd door vaste teams.",
};

export default function Diensten() {
  return (
    <>
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Diensten
              </p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Onze diensten
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Professionele schoonmaak op maat voor uw bedrijfspand, uitgevoerd
                door vaste teams met duidelijke afspraken.
              </p>
            </div>

            <div className="space-y-6">
              {serviceHighlights.map((service) => (
                <section
                  key={service.slug}
                  id={service.slug}
                  className="glass-card rounded-3xl p-6 md:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-foreground">
                        {service.shortDescription}
                      </p>
                      {service.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="shrink-0">
                      <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted/50">
                        <Link href={primaryCta.href}>
                          Offerte voor deze dienst
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Welke dienst past bij u?" />
    </>
  );
}
