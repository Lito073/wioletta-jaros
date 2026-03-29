export const companyInfo = {
  name: "Wioletta Jaros Schoonmaakbedrijf V.O.F.",
  shortName: "Wioletta Jaros",
  tagline: "Professionele schoonmaak voor kantoren, praktijken en bedrijfspanden in regio Altena.",
  address: {
    street: "Donksewaard 11",
    postalCode: "4261 ME",
    city: "Wijk en Aalburg",
  },
  phone: "06-27 08 23 83",
  phoneHref: "tel:0627082383",
  email: "hallo@wiolettajaros.nl",
  emailHref: "mailto:hallo@wiolettajaros.nl",
  kvk: "65539508",
  serviceArea: [
    "Wijk en Aalburg",
    "Hedel",
    "Kerkdriel",
    "Den Bosch",
    "Waalwijk",
    "Werkendam",
  ],
} as const;

export const primaryCta = {
  label: "Vraag een vrijblijvende offerte aan",
  shortLabel: "Offerte aanvragen",
  href: "/contact",
} as const;

export const aboutQuote =
  "Wij zorgen voor rust, structuur en zichtbare kwaliteit in uw pand, zodat uw medewerkers prettig kunnen werken en uw klanten zich welkom voelen.";

export const serviceHighlights = [
  {
    slug: "kantoorschoonmaak",
    title: "Kantoorschoonmaak",
    shortDescription:
      "Dagelijkse of periodieke schoonmaak van werkplekken, sanitair, gangen, kantines en entrees.",
    body: [
      "Een schone werkomgeving draagt bij aan rust, uitstraling, werkplezier en vertrouwen. Wij zorgen ervoor dat uw kantoor, praktijk of bedrijfspand elke dag weer voelt als een goede werkplek.",
      "We stemmen frequentie, looproutes en aandachtspunten af op uw locatie, zodat de uitvoering past bij uw openingstijden en verwachtingen.",
    ],
  },
  {
    slug: "vloeronderhoud",
    title: "Vloeronderhoud en dieptereiniging",
    shortDescription:
      "Tapijt, PVC, linoleum en harde vloeren professioneel gereinigd en behandeld.",
    body: [
      "Vloeren krijgen veel te verduren. Met periodiek onderhoud blijven ze representatief, veiliger in gebruik en gaan ze aantoonbaar langer mee.",
      "Wij bepalen per type vloer welke aanpak en middelen nodig zijn, zonder onnodige belasting voor uw dagelijkse bedrijfsvoering.",
    ],
  },
  {
    slug: "glasbewassing",
    title: "Glasbewassing binnen en buiten",
    shortDescription:
      "Telewash buiten, Unger Stingray binnen, veilig, efficiënt en streeploos.",
    body: [
      "Schone ramen versterken direct de uitstraling van uw pand. Wij verzorgen glasbewassing op een manier die past bij bereikbaarheid, veiligheid en planning.",
      "Ook binnenbeglazing en lastig bereikbare oppervlakken nemen we mee in een praktisch onderhoudsplan.",
    ],
  },
  {
    slug: "bouwschoonmaak",
    title: "Bouwschoonmaak na bouw of renovatie",
    shortDescription:
      "Op aanvraag, ook voor particulieren, zonder lange wachttijden.",
    body: [
      "Na bouw of renovatie blijft vaak meer achter dan zichtbaar stof alleen. Wij verwijderen bouwresten, stof en vervuiling zodat een ruimte netjes kan worden opgeleverd of gebruikt.",
      "Deze dienst zetten we flexibel in, juist wanneer snelheid en duidelijke afstemming belangrijk zijn.",
    ],
  },
] as const;
