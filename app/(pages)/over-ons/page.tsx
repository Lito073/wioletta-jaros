import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ClipboardCheck, Leaf, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta";
import { aboutQuote, companyInfo, primaryCta } from "@/lib/site-content";

const differentiators = [
  {
    icon: Users,
    title: "Vaste schoonmaakteams",
    text: "Geen wisselingen. Uw locatie, uw mensen en uw routines blijven vertrouwd.",
  },
  {
    icon: CheckCircle2,
    title: "Duidelijke prijzen",
    text: "Transparante afspraken zonder verrassingen achteraf.",
  },
  {
    icon: MapPin,
    title: "Schoonmaak wanneer het u past",
    text: "Ochtend, avond of weekend, afgestemd op uw planning.",
  },
  {
    icon: ShieldCheck,
    title: "Persoonlijke begeleiding",
    text: "Eén aanspreekpunt dat uw wensen en prioriteiten kent.",
  },
  {
    icon: ClipboardCheck,
    title: "Kwaliteitscontrole",
    text: "Vaste controlepunten en snelle bijsturing wanneer dat nodig is.",
  },
  {
    icon: Leaf,
    title: "Verantwoorde middelen",
    text: "Praktische keuzes die veilig zijn voor mensen, pand en omgeving.",
  },
] as const;

const sectors = [
  "Kantoren en zakelijke dienstverleners",
  "Zorginstellingen en praktijken",
  "Onderwijslocaties",
  "Showrooms en winkels",
] as const;

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Opgericht in 2009 door Wioletta en Mariusz Jaros. Professionele schoonmaak met vaste teams en korte lijnen.",
};

export default function OverOns() {
  return (
    <>
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Over ons
              </p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Professionele schoonmaak met vaste gezichten
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Opgericht in 2009. Geen anonieme uitvoering, maar een partner die
                meedenkt, communiceert en aanwezig is wanneer het ertoe doet.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,24rem)]">
              <div className="glass-card rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Hoe {companyInfo.shortName} is ontstaan
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {companyInfo.name} is opgericht in 2009 door Wioletta en
                  Mariusz Jaros. Vanaf het begin stond niet alleen schoon resultaat
                  centraal, maar vooral een manier van werken die betrouwbaar,
                  overzichtelijk en persoonlijk blijft.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Geen los ingeplande uitvoering zonder context, maar een team dat
                  uw locatie kent, afspraken nakomt en zichtbaar verantwoordelijkheid
                  neemt voor de kwaliteit op locatie.
                </p>
              </div>

              <aside className="glass-card rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Onze missie
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {aboutQuote}
                </p>
                <div className="mt-6 border-t border-border pt-4 text-sm text-foreground">
                  Vaste teams, duidelijke afstemming en korte lijnen vormen daarbij
                  de basis.
                </div>
              </aside>
            </div>

            <section className="space-y-6">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-bold text-foreground">
                  Wat ons onderscheidt
                </h2>
                <p className="text-muted-foreground">
                  We houden de uitvoering praktisch en voorspelbaar. Dat merkt u
                  in communicatie, planning en kwaliteit.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {differentiators.map((item) => (
                  <article key={item.title} className="glass-card rounded-3xl p-6">
                    <item.icon className="h-6 w-6 text-foreground" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
              <section className="glass-card rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Voor wie wij werken
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Wij richten ons op zakelijke schoonmaak. Iedere werkomgeving vraagt
                  een andere aanpak, daarom werken wij altijd met afspraken die passen
                  bij uw pand, ritme en verwachtingen.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-foreground md:grid-cols-2">
                  {sectors.map((sector) => (
                    <li key={sector} className="rounded-2xl border border-border bg-muted/50 px-4 py-3">
                      {sector}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass-card rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Ons werkgebied
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Wij werken vanuit {companyInfo.address.city} en zijn dagelijks actief
                  in de regio voor kantoren, praktijken en bedrijfspanden met vaste teams.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {companyInfo.serviceArea.map((place) => (
                    <span
                      key={place}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-foreground"
                    >
                      {place}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Interesse? Wij sturen u graag een voorstel op maat." />
    </>
  );
}
