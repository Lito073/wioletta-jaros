@AGENTS.md

# Wioletta Jaros Schoonmaakbedrijf — Website

## Project
Zakelijke website voor een schoonmaakbedrijf in regio Altena, Nederland.
Gebouwd met Next.js (App Router), TypeScript, Tailwind CSS en shadcn/ui.
Gehost op Vercel.

## Tech stack
- Next.js 16 App Router (via @latest)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui (New York style, Slate base)
- Resend voor transactionele mail
- Google Sheets API voor vacatures CMS

## Project structuur

```
wioletta-jaros/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, html/body)
│   ├── page.tsx             # Homepage (/)
│   ├── globals.css          # Global styles
│   └── (pages)/             # Route group voor alle pagina's
│       ├── over-ons/page.tsx
│       ├── diensten/page.tsx
│       ├── contact/page.tsx
│       └── vacatures/page.tsx
├── components/
│   └── ui/                  # shadcn/ui componenten
├── public/                  # Statische bestanden
├── .vercel/                 # Vercel project koppeling (niet bewerken)
├── next.config.ts           # Next.js configuratie
└── package.json             # Dependencies
```

## Workflows

### Nieuwe feature starten
1. Eerst lezen: relevante bestanden in `app/` en `components/`
2. Dan pas schrijven
3. Testen: `npm run dev`
4. Deployen: `git push` (automatisch naar Vercel)

### Component toevoegen
1. shadcn/ui: `npx shadcn@latest add <component>`
2. Custom component: in `components/` plaatsen
3. UI componenten gebruiken uit `components/ui/`

### Pagina toevoegen
1. Nieuwe map in `app/(pages)/<naam>/`
2. `page.tsx` bestand aanmaken
3. Metadata exporteren voor SEO

### Deployen
```bash
# Preview (automatisch bij git push)
git push

# Handmatig naar productie
vercel --prod --yes

# Environment variables pullen
vercel env pull .env.local --yes
```

## Conventies

### Naamgeving
- Pagina's: `kebab-case` (bijv. `over-ons`, `contact`)
- Componenten: `PascalCase` (bijv. `ContactForm`, `HeroSection`)
- Variabelen/functies: `camelCase` Engels
- Alle UI componenten in `components/ui/` met shadcn prefix

### Styling
- Tailwind CSS classes direct in JSX
- shadcn/ui componenten voor herbruikbare UI elementen
- Dark theme basis: `#0a0a0a`
- Glassmorphism effects waar nodig

### Taal
- Alle websiteteksten: Nederlands
- Code comments: Nederlands
- Commit messages: Nederlands
- Variabelenamen en functies: Engels (standaard programmeerconventie)

## Design
- Dark chromic glassmorphism
- Kleur basis: #0a0a0a
- Accenten: zilver/chrome tinten
- Design specs staan in docs/DESIGN.md zodra dat bestand aanwezig is

## Bedrijfsgegevens (altijd correct houden)
- Naam: Wioletta Jaros Schoonmaakbedrijf V.O.F.
- Adres: Donksewaard 11, 4261 ME Wijk en Aalburg
- Tel: 06-27 08 23 83
- Email: hallo@wiolettajaros.nl
- KvK: 65539508
- IBAN: NL34 RABO 0152 6459 18

## Vercel integratie
- GitHub repo: https://github.com/Lito073/wioletta-jaros
- Vercel project: `wioletta-jaros`
- Productie URL: https://wioletta-jaros.vercel.app
- Automatische deploys bij push naar `master`

## Wat Claude mag
- Alle bestanden lezen
- Schrijven en aanpassen binnen het project
- git add, git commit, git status uitvoeren
- npm install voor packages die in de stack staan
- Components toevoegen via `npx shadcn@latest add`
- Vercel CLI commands uitvoeren

## Wat Claude niet mag
- Packages installeren die niet in de stack staan zonder eerst te vragen
- .env bestanden aanmaken of aanpassen
- rm -rf uitvoeren
- Buiten de projectfolder werken
- Direct in productie deployen zonder eerst lokaal te testen
