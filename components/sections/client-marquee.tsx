import Image from "next/image";

import { cn } from "@/lib/utils";

type ClientLogo = {
  name: string;
  src: string;
  frameClassName?: string;
};

const clientLogos: ClientLogo[] = [
  {
    name: "Bonte",
    src: "/assets/clients/bonte-installaties.png",
    frameClassName: "max-w-[9.5rem] md:max-w-[11rem]",
  },
  {
    name: "Bouwgroep Goesten",
    src: "/assets/clients/bouwgroep-goesten.png",
    frameClassName: "max-w-[8rem] md:max-w-[9rem]",
  },
  {
    name: "Car Lock Systems",
    src: "/assets/clients/car-lock-systems.svg",
    frameClassName: "max-w-[8.5rem] md:max-w-[10rem]",
  },
  {
    name: "Jif Line Remote Diagnostics",
    src: "/assets/clients/jifeline.png",
    frameClassName: "max-w-[8.75rem] md:max-w-[10rem]",
  },
  {
    name: "De Groot Transport",
    src: "/assets/clients/de-groot-fresh-transport.png",
    frameClassName: "max-w-[9rem] md:max-w-[10.5rem]",
  },
  {
    name: "Dutch Quality Group",
    src: "/assets/clients/dutch-quality-group.svg",
    frameClassName: "max-w-[8.5rem] md:max-w-[9.5rem]",
  },
  {
    name: "EYYE Retail",
    src: "/assets/clients/eyye-retail.svg",
    frameClassName: "max-w-[6.5rem] md:max-w-[7.5rem]",
  },
  {
    name: "Everest",
    src: "/assets/clients/everest.png",
    frameClassName: "max-w-[9rem] md:max-w-[10.5rem]",
  },
  {
    name: "GvH Engineering",
    src: "/assets/clients/gvh-engineering.svg",
    frameClassName: "max-w-[7rem] md:max-w-[8rem]",
  },
  {
    name: "HAK Fresh",
    src: "/assets/clients/hak-fresh.svg",
    frameClassName: "max-w-[7.25rem] md:max-w-[8.25rem]",
  },
  {
    name: "Kras Busreizen",
    src: "/assets/clients/kras-busreizen.svg",
    frameClassName: "max-w-[9rem] md:max-w-[10.5rem]",
  },
  {
    name: "RKVV Nieuwkuijk",
    src: "/assets/clients/rkvv-nieuwkuijk.png",
    frameClassName: "max-w-[3.5rem] md:max-w-[4rem]",
  },
  {
    name: "Saldad Salarisadministratie",
    src: "/assets/clients/saldad.png",
    frameClassName: "max-w-[7.5rem] md:max-w-[8.5rem]",
  },
  {
    name: "Tandartspraktijk Schoonus",
    src: "/assets/clients/tandartspraktijk-schoonus.jpg",
    frameClassName: "max-w-[6rem] md:max-w-[6.5rem]",
  },
  {
    name: "Villea Ontzorgwoningen",
    src: "/assets/clients/villea.svg",
    frameClassName: "max-w-[8rem] md:max-w-[9rem]",
  },
];

export function ClientMarquee() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
            Vertrouwd door
          </p>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Wij werken voor bedrijven in Wijk en Aalburg, Hedel en omgeving
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Een selectie uit opdrachtgevers in Wijk en Aalburg, Hedel,
            Kerkdriel, Den Bosch, Waalwijk en Werkendam waarvoor wij met vaste
            teams en heldere afspraken werken.
          </p>
        </div>

        <div className="glass-card rounded-[1.75rem] border-[#e5e5e5] bg-white px-0 py-5 md:py-6">
          <ul className="sr-only" aria-label="Bedrijven waarvoor wij werken">
            {clientLogos.map((client) => (
              <li key={client.name}>{client.name}</li>
            ))}
          </ul>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track flex items-stretch gap-3 pr-3 md:gap-4 md:pr-4">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-20 w-[10.75rem] shrink-0 items-center justify-center rounded-[1.4rem] border border-[#ebebeb] bg-[#fafafa] px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5 md:h-24 md:w-[12.75rem] md:px-6"
                >
                  <div
                    className={cn(
                      "relative h-full w-full",
                      "flex items-center justify-center",
                      client.frameClassName,
                    )}
                  >
                    <Image
                      src={client.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 172px, 204px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
