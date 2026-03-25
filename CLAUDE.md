@AGENTS.md

# Wioletta Jaros Schoonmaakbedrijf — Website

## Project
Zakelijke website voor een schoonmaakbedrijf in regio Altena, Nederland.
Gebouwd met Next.js (App Router), TypeScript, Tailwind CSS en shadcn/ui.
Gehost op Vercel.

## Tech stack
- Next.js App Router (nieuwste versie via @latest)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui (New York style, Slate base)
- Resend voor transactionele mail
- Google Sheets API voor vacatures CMS

## Pagina's
- / → Homepage
- /over-ons → Verhaal, missie, oprichters
- /diensten → Alle diensten op één pagina
- /contact → Offerteformulier
- /vacatures → Vacatures via Google Sheets

## Taal
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
- Adres: Danksewei 11, 4261 ME Wijk en Aalburg
- Tel: 06-27 08 23 83
- Email: info@wiolettajaros.nl
- KvK: 65539508
- IBAN: NL34 RABO 0152 6459 18

## Wat Claude mag
- Alle bestanden lezen
- Schrijven en aanpassen binnen het project
- git add, git commit, git status uitvoeren
- npm install voor packages die in de stack staan

## Wat Claude niet mag
- Packages installeren die niet in de stack staan zonder eerst te vragen
- .env bestanden aanmaken of aanpassen
- rm -rf uitvoeren
- Buiten de projectfolder werken
