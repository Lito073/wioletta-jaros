import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, primaryCta } from "@/lib/site-content";

const requestChecklist = [
  "Naam en bedrijfsnaam",
  "Adres of locatie van het pand",
  "Type pand en gewenste schoonmaakdienst",
  "Gewenste frequentie of planning",
  "Een korte omschrijving van het oppervlak of aantal ruimtes",
] as const;

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een vrijblijvende offerte aan voor professionele schoonmaak. Binnen 24 uur ontvangt u een voorstel op maat.",
};

export default function Contact() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Ontvang binnen 24 uur uw offerte op maat
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Stuur uw aanvraag per e-mail of neem direct telefonisch contact op.
              Een korte omschrijving van het pand is voldoende om gericht mee te
              denken.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,24rem)]">
            <section className="glass-card rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Wat we nodig hebben voor een voorstel
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Hoe concreter uw aanvraag, hoe sneller wij een passende inschatting
                kunnen maken. U hoeft nog geen volledig bestek aan te leveren.
              </p>
              <ul className="mt-6 space-y-3">
                {requestChecklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  Vraag uw offerte aan via e-mail
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vermeld in uw bericht de belangrijkste gegevens van uw pand en de
                  gewenste dienst. Wij reageren zo snel mogelijk met een voorstel of
                  aanvullende vragen.
                </p>
                <a
                  href={`${companyInfo.emailHref}?subject=Nieuwe offerteaanvraag`}
                  className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {primaryCta.label}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </section>

            <aside className="glass-card rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Rechtstreeks contact
              </h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-foreground" />
                  <div>
                    <div className="font-medium text-foreground">E-mail</div>
                    <a href={companyInfo.emailHref} className="text-muted-foreground hover:text-foreground">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Telefoon</div>
                    <a href={companyInfo.phoneHref} className="text-muted-foreground hover:text-foreground">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Adres</div>
                    <address className="not-italic text-muted-foreground">
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.postalCode} {companyInfo.address.city}
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 text-foreground" />
                  <div>
                    <div className="font-medium text-foreground">KvK</div>
                    <div className="text-muted-foreground">{companyInfo.kvk}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Werkgebied
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {companyInfo.serviceArea.map((place) => (
                    <span
                      key={place}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-foreground"
                    >
                      {place}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Wij werken voor kantoren, praktijken en bedrijfspanden in de regio
                  en stemmen planning en uitvoering af op uw locatie.
                </p>
                <Link
                  href="/diensten"
                  className="mt-5 inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Bekijk eerst onze diensten
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
