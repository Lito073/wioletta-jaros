# Wioletta Jaros Schoonmaakbedrijf

Zakelijke website voor **Wioletta Jaros Schoonmaakbedrijf V.O.F.** — een schoonmaakbedrijf actief in regio Altena en omgeving. De website richt zich op zakelijke klanten met als primair doel: offerte aanvragen genereren.

## Tech Stack

| Onderdeel | Technologie |
|-----------|-------------|
| Framework | Next.js 16 (App Router) |
| Taal | TypeScript (strict) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Hosting | Vercel |
| Mail | Resend |
| Vacatures CMS | Google Sheets API |

## Pagina's

| Route | Beschrijving |
|-------|--------------|
| `/` | Homepage met hero, diensten preview, client logos |
| `/over-ons` | Verhaal, missie, oprichters, werkgebied |
| `/diensten` | Alle diensten: kantoorschoonmaak, vloeronderhoud, glasbewassing, bouwschoonmaak |
| `/contact` | Offerteformulier |
| `/vacatures` | Vacatures via Google Sheets |

## Design Systeem

**Stijl:** Dark chromic glassmorphism — professioneel, strak, vertrouwenwekkend.

**Kleurpalet:**
- Background: `#0a0a0a`
- Surface: `rgba(255, 255, 255, 0.05)`
- Accent: `#c0c0c0` (zilver/chrome)
- Text primary: `#f5f5f5`
- Text muted: `rgba(255, 255, 255, 0.55)`

**Typografie:** Display/headlines elegant en karaktervol. Alle website tekst in het Nederlands.

## Project Structuur

```
wioletta-jaros/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── (pages)/            # Route group
│       ├── over-ons/
│       ├── diensten/
│       ├── contact/
│       └── vacatures/
├── components/
│   └── ui/                 # shadcn/ui componenten
├── public/
│   └── assets/             # Logo's, afbeeldingen
├── docs/
│   └── PRD.md              # Product Requirements Document
└── next.config.ts
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) om de site te bekijken.

## Deployment

De site wordt automatisch gedeployed naar Vercel bij push naar `master`.

```bash
# Handmatig deployen naar productie
vercel --prod --yes

# Environment variables pullen
vercel env pull .env.local --yes
```

**Productie URL:** https://wioletta-jaros.vercel.app

## Environment Variables

```bash
# Resend (mail versturen)
RESEND_API_KEY=

# Google Sheets (vacatures)
GOOGLE_SHEETS_API_KEY=
GOOGLE_SHEETS_ID=

# Mail ontvanger
CONTACT_EMAIL=info@wiolettajaros.nl
```

## Bedrijfsgegevens

| | |
|--|--|
| **Naam** | Wioletta Jaros Schoonmaakbedrijf V.O.F. |
| **Adres** | Donksewaard 11, 4261 ME Wijk en Aalburg |
| **Telefoon** | 06-27 08 23 83 |
| **E-mail** | info@wiolettajaros.nl |
| **KvK** | 65539508 |
| **Website** | www.wiolettajaros.nl |

## Werkgebied

Wijk en Aalburg · Hedel · Kerkdriel · Den Bosch · Waalwijk · Werkendam

## Documentatie

- [PRD.md](docs/PRD.md) — Volledige product specificatie
- [CLAUDE.md](CLAUDE.md) — Project instructies voor Claude Code
