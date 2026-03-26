import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Sparkles,
  Sun,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Kantoorschoonmaak",
    description:
      "Dagelijkse of periodieke schoonmaak van werkplekken, sanitair, gangen, kantines en entrees.",
    href: "/diensten#kantoorschoonmaak",
  },
  {
    icon: Sparkles,
    title: "Vloeronderhoud & dieptereiniging",
    description:
      "Tapijt, PVC, linoleum en harde vloeren professioneel gereinigd en behandeld.",
    href: "/diensten#vloeronderhoud",
  },
  {
    icon: Sun,
    title: "Glasbewassing",
    description:
      "Telewash buiten, Unger Stingray binnen — veilig, efficiënt en streeploos.",
    href: "/diensten#glasbewassing",
  },
  {
    icon: HardHat,
    title: "Bouwschoonmaak",
    description:
      "Schoonmaak na bouw of renovatie, ook voor particulieren. Op aanvraag, geen lange wachttijden.",
    href: "/diensten#bouwschoonmaak",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze diensten
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professionele schoonmaak op maat voor uw bedrijfspand.
            Elke dienst wordt uitgevoerd door vaste teams die uw pand kennen.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group glass-card rounded-xl p-6 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <span className="text-sm text-foreground mt-4 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Meer lezen
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-muted/50"
          >
            <Link href="/diensten">
              Bekijk alle diensten
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
