# PRD — Wioletta Jaros Schoonmaakbedrijf Website

**Versie:** 1.0
**Datum:** maart 2026
**Status:** Gereed voor implementatie

---

## 1. Project overzicht

Zakelijke website voor Wioletta Jaros Schoonmaakbedrijf V.O.F. — een schoonmaakbedrijf actief in regio Altena en omgeving. De website richt zich uitsluitend op zakelijke klanten en heeft als primair doel: offerte aanvragen genereren.

**Primaire CTA op elke pagina:** Vraag een vrijblijvende offerte aan

---

## 2. Tech stack

| Onderdeel | Keuze |
|-----------|-------|
| Framework | Next.js (App Router, @latest) |
| Taal | TypeScript (strict) |
| Styling | Tailwind CSS |
| Components | shadcn/ui (Nova preset) |
| Hosting | Vercel (gratis tier) |
| Vacatures CMS | Google Sheets API |
| Mail versturen | Resend |
| Zakelijke mail | Nog te bepalen |

---

## 3. Pagina's & routes

```
/                    → Homepage
/over-ons            → Verhaal, missie, oprichters, werkgebied
/diensten            → Alle diensten op één pagina
/contact             → Offerteformulier
/vacatures           → Vacatures via Google Sheets
```

---

## 4. Design systeem

### Stijl
Dark chromic glassmorphism. Professioneel, strak, vertrouwenwekkend.

### Kleurpalet
```css
--background:     #0a0a0a
--surface:        rgba(255, 255, 255, 0.05)
--surface-hover:  rgba(255, 255, 255, 0.08)
--border:         rgba(255, 255, 255, 0.10)
--accent:         #c0c0c0        /* zilver/chrome */
--accent-glow:    rgba(192, 192, 192, 0.15)
--text-primary:   #f5f5f5
--text-muted:     rgba(255, 255, 255, 0.55)
```

### Glassmorphism parameters (alle cards/secties)
```css
background:        rgba(255, 255, 255, 0.05)
backdrop-filter:   blur(10px) saturate(180%)
border:            1px solid rgba(255, 255, 255, 0.10)
box-shadow:        0 8px 32px rgba(0, 0, 0, 0.30)
```

### Animaties
```css
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```
Geen abrupte veranderingen. Subtiele hover states op interactieve elementen.

### Typografie
- Display/headlines: elegant, karaktervol (geen Inter, Roboto of Arial)
- Body: goed leesbaar op donkere achtergrond
- Alle tekst op de website: **Nederlands**

### Logo
- Bestand: `public/assets/logo.svg` (aan te leveren, zie sectie 11)
- Bestaat uit: twee ogen (mascotte) + "Wioletta Jaros" + "Schoonmaakbedrijf" tekst
- Kleur op website: wit op donkere achtergrond

---

## 5. Gedeelde componenten

### Navigatie (alle pagina's)
```
Logo links | Nav links midden | CTA button rechts

Links: Home · Over Ons · Diensten · Vacatures · Contact
CTA:   Offerte aanvragen →

Gedrag:
- Sticky (blijft bovenaan bij scrollen)
- Glassmorphism achtergrond bij scrollen
- Mobile: hamburger menu
```

### Footer (alle pagina's)
```
Kolom 1 — Logo + omschrijving
──────────────────────────────
[Logo]
Wioletta Jaros Schoonmaakbedrijf V.O.F.
Professionele schoonmaak voor kantoren,
praktijken en bedrijfspanden in regio Altena.

Kolom 2 — Navigatie
──────────────────────────────
Over Ons
Diensten
Vacatures
Contact

Kolom 3 — Contact
──────────────────────────────
Donksewaard 11
4261 ME Wijk en Aalburg

Tel: 06-27 08 23 83
E-mail: hallo@wiolettajaros.nl

Kolom 4 — Werkgebied
──────────────────────────────
Wijk en Aalburg
Hedel · Kerkdriel
Den Bosch · Waalwijk
Werkendam

Onderkant balk
──────────────────────────────
© 2026 Wioletta Jaros Schoonmaakbedrijf V.O.F.
KvK: 65539508 · IBAN: NL34 RABO 0152 6459 18
```

---

## 6. Pagina: Homepage (`/`)

### 6.1 Hero sectie
```
Achtergrond: stockfoto (kantoor of schoonmaak, donker getint overlay)
Bron: Unsplash — zoekterm "commercial cleaning office"

H1:   Professioneel schoonmaakbedrijf in regio Altena
Sub:  Vaste gezichten, duidelijke afspraken en meetbare kwaliteit.
CTA:  → Vraag een vrijblijvende offerte aan   (link naar /contact)
```

### 6.2 Vertrouwen balk (direct onder hero)
Drie statistieken naast elkaar in glassmorphism cards:
```
Opgericht in 2009  |  Vaste schoonmaakteams  |  Regio Altena & omgeving
```

### 6.3 Client logo banner
Automatisch scrollende banner met logo's van klanten.

**Bedrijven (logo's online op te zoeken):**
Bonte, Bouwgroep Goesten, Car Lock Systems, Jif Line Remote Diagnostics,
De Groot Transport, Dutch Quality Group, EYYE Retail, Everest,
GvH Engineering, HAK Fresh, Kras Busreizen, RKVV Nieuwkuijk,
Saldad Salarisadministratie, Tandartspraktijk Schoonus,
Villea Ontzorgwoningen

**Heading boven de banner:**
```
Wij werken voor
```

**⚠️ Opmerking voor client:**
Wioletta moet toestemming vragen aan deze bedrijven vóór go-live.

**Implementatie:**
- embla-carousel-auto-scroll
- Oneindige loop, automatisch scrollen
- Logo's als SVG/PNG van bedrijfswebsites
- Fade-out aan linker- en rechterkant (gradient overlay)

### 6.4 Diensten preview
Vier diensten als cards in een grid (2x2 op mobile, 4x1 op desktop).
Elke card: icoon + naam + één zin omschrijving + "Meer lezen →" link naar /diensten.

```
Kantoorschoonmaak
Dagelijkse of periodieke schoonmaak van werkplekken,
sanitair, gangen, kantines en entrees.

Vloeronderhoud & dieptereiniging
Tapijt, PVC, linoleum en harde vloeren professioneel
gereinigd en behandeld.

Glasbewassing
Telewash buiten, Unger Stingray binnen —
veilig, efficiënt en streeploos.

Bouwschoonmaak
Schoonmaak na bouw of renovatie, ook voor particulieren.
Op aanvraag, geen lange wachttijden.
```

### 6.5 Over Ons preview
```
Heading: Schoonmaak met een persoonlijk gezicht

Tekst (2 zinnen):
Wioletta Jaros Schoonmaakbedrijf V.O.F. is opgericht in 2009 door
Wioletta en Mariusz Jaros — een echtpaar met één visie: schoonmaak
moet betrouwbaar, overzichtelijk en persoonlijk zijn.
Wij werken niet met wisselende teams. Uw locatie, uw mensen, uw routines.

Link: → Lees ons verhaal   (link naar /over-ons)
```

### 6.6 CTA sectie (onderaan homepage)
```
Achtergrond: glassmorphism sectie met subtiele chrome glow

Heading:  Klaar voor een schone werkomgeving?
Sub:      Vraag een vrijblijvende offerte aan.
          Binnen 24 uur ontvangt u een voorstel op maat.

CTA:      → Offerte aanvragen   (link naar /contact)
```

---

## 7. Pagina: Over Ons (`/over-ons`)

### SEO
```
Title:       Over Ons | Wioletta Jaros Schoonmaakbedrijf
Description: Opgericht in 2009 door Wioletta en Mariusz Jaros.
             Professionele schoonmaak in regio Altena met vaste teams.
```

### Secties (in volgorde)

**7.1 Page hero**
```
H1: Professionele schoonmaak met vaste gezichten
Sub: Opgericht in 2009. Geen anonieme uitvoering —
     een partner die meedenkt en aanwezig is.
```

**7.2 Ons verhaal**
```
Heading: Hoe Schoonmaakbedrijf Wioletta Jaros is ontstaan

Tekst:
Wioletta Jaros Schoonmaakbedrijf V.O.F. is opgericht in 2009 door
Wioletta en haar partner Mariusz Jaros, een echtpaar met dezelfde visie:
schoonmaak moet betrouwbaar, overzichtelijk en persoonlijk zijn.
Geen anonieme uitvoering, maar een partner die meedenkt, communiceert
en aanwezig is wanneer het ertoe doet.
```

**7.3 Onze missie**
```
Heading: Onze missie

Tekst:
Wij zorgen voor rust, structuur en zichtbare kwaliteit in uw pand,
zodat uw medewerkers prettig kunnen werken en uw klanten zich welkom
voelen. Betrouwbaarheid en continuïteit vormen de basis. Elke dag opnieuw.
```

**7.4 Wat ons onderscheidt**
Zes punten als icon cards in een grid:
```
Vaste schoonmaakteams
Geen wisselingen. Uw locatie, uw mensen, uw routines.

Duidelijke prijzen
Transparant, geen verrassingen achteraf.

Schoonmaak wanneer het u past
Ochtend, avond of weekend — wij passen ons aan.

Persoonlijke begeleiding
Eén aanspreekpunt dat uw wensen en prioriteiten kent.

Kwaliteitscontrole op vaste momenten
Met rapportage en directe bijsturing indien nodig.

Duurzame middelen
Veilig voor medewerkers, bezoekers en het milieu.
```

**7.5 Voor wie wij werken**
```
Heading: Voor wie wij werken

Intro:
Wij zijn gespecialiseerd in zakelijke schoonmaak.
Elke branche vraagt een andere aanpak.
Daarom werken wij altijd met een schoonmaakplan op maat.

Vier sectoren als cards:
- Kantoren en zakelijke dienstverleners
- Zorginstellingen en praktijken
- Onderwijslocaties
- Showrooms en winkels
```

**7.6 Werkgebied**
```
Heading: Ons werkgebied

Tekst:
Wij werken vanuit Wijk en Aalburg en zijn dagelijks actief in:

Plaatsen als pills/tags:
Wijk en Aalburg · Hedel · Kerkdriel
Den Bosch · Waalwijk · Werkendam
```

**7.7 CTA**
```
Heading:  Interesse? Wij sturen u graag een voorstel op maat.
CTA:      → Offerte aanvragen   (link naar /contact)
```

---

## 8. Pagina: Diensten (`/diensten`)

### SEO
```
Title:       Diensten | Wioletta Jaros Schoonmaakbedrijf
Description: Kantoorschoonmaak, vloeronderhoud, glasbewassing en
             bouwschoonmaak in regio Altena. Op maat, vaste teams.
```

### Secties

**8.1 Page hero**
```
H1:  Onze diensten
Sub: Professionele schoonmaak op maat voor uw bedrijfspand.
```

**8.2 Vier diensten (volledig uitgeschreven)**

Elke dienst: grote sectie met heading, uitgebreide beschrijving, en een CTA.

```
── Reguliere kantoorschoonmaak ──────────────────────────
Dagelijkse of periodieke uitvoering van werkplekken,
sanitair, gangen, kantines en entrees.

Een schone werkomgeving draagt bij aan rust, uitstraling,
werkplezier en vertrouwen. Wij zorgen ervoor dat uw kantoor,
praktijk of bedrijfspand elke dag weer voelt als een goede werkplek.

── Vloeronderhoud en dieptereiniging ────────────────────
Tapijt, PVC, linoleum en harde vloeren professioneel
gereinigd en behandeld.

── Glasbewassing binnen & buiten ────────────────────────
Telewash voor buiten, Unger Stingray voor binnen —
veilig, efficiënt en streeploos.

── Bouwschoonmaak na bouw of renovatie ──────────────────
Op aanvraag. Ook voor particulieren. Geen lange wachttijden.

Schoonmaak na de bouw of renovatie vraagt een gespecialiseerde
aanpak. Wij verwijderen bouwstof, resten van materialen en
zorgen dat uw pand klaar is voor gebruik.
```

**8.3 CTA**
```
Heading:  Welke dienst past bij u?
Sub:      Vraag een vrijblijvende offerte aan.
          Binnen 24 uur ontvangt u een voorstel op maat.
CTA:      → Offerte aanvragen   (link naar /contact)
```

---

## 9. Pagina: Contact (`/contact`)

### SEO
```
Title:       Offerte aanvragen | Wioletta Jaros Schoonmaakbedrijf
Description: Vraag een vrijblijvende offerte aan voor professionele
             schoonmaak. Binnen 24 uur een voorstel op maat.
```

### Secties

**9.1 Page hero**
```
H1:  Ontvang binnen 24 uur uw offerte op maat
Sub: Vul hieronder kort de gegevens van uw pand in.
     Een schatting is voldoende, wij doen de rest.
```

**9.2 Offerteformulier**

Geïnspireerd op Olympus Schoonmaak — gekwalificeerde leads.

```
Linkerkolom:
- Naam *
- Zakelijk e-mailadres *
- Bedrijfsnaam *
  (optioneel indien "Bouwschoonmaak na renovatie" gekozen)
- Telefoonnummer

Rechterkolom:
- Type pand * (dropdown)
  Opties: Kantoor · Praktijk / zorginstelling ·
          Showroom / winkel · Onderwijslocatie ·
          Bedrijfsruimte / loods · Bouwschoonmaak na renovatie

- Gewenste schoonmaakfrequentie * (dropdown)
  Opties: Dagelijks · Meerdere keren per week ·
          Wekelijks · Tweewekelijks · Eenmalig

- Oppervlakte (globaal) * (dropdown)
  Opties: < 100 m² · 100–250 m² · 250–500 m² ·
          500–1000 m² · > 1000 m²

Volledig breed:
- Bijzonderheden / wensen (textarea)
  Placeholder: "Gewenste tijden, specifieke ruimtes,
               bijzondere vereisten..."

CTA button: → Ontvang een offerte op maat
```

**Wat er na invullen gebeurt (onder de button):**
```
1. Wij beoordelen uw aanvraag op basis van uw pand
2. U ontvangt binnen 24 uur een helder voorstel
3. Geen verplichtingen, u beslist daarna zelf
```

**9.3 Contactgegevens naast het formulier**
```
Wioletta Jaros Schoonmaakbedrijf V.O.F.

📍 Donksewaard 11, 4261 ME Wijk en Aalburg
📞 06-27 08 23 83
✉️ hallo@wiolettajaros.nl

Werkgebied:
Wijk en Aalburg · Hedel · Kerkdriel
Den Bosch · Waalwijk · Werkendam
```

**9.4 Mail afhandeling (technisch)**
```
Via: Resend API
Naar: hallo@wiolettajaros.nl
Onderwerp: Nieuwe offerteaanvraag — [Bedrijfsnaam]
Route handler: app/api/contact/route.ts
```

---

## 10. Pagina: Vacatures (`/vacatures`)

### SEO
```
Title:       Werken bij Wioletta Jaros Schoonmaakbedrijf
Description: Bekijk onze openstaande vacatures en werk mee aan
             professionele schoonmaak in regio Altena.
```

### Secties

**10.1 Page hero**
```
H1:  Werken bij Wioletta Jaros
Sub: Wij zijn regelmatig op zoek naar betrouwbare
     schoonmakers in regio Altena en omgeving.
```

**10.2 Vacaturelijst (dynamisch via Google Sheets)**

Google Sheet structuur:
```
Kolom A: Functietitel
Kolom B: Locatie
Kolom C: Uren per week
Kolom D: Omschrijving
Kolom E: Actief (TRUE/FALSE)
```

Gedrag:
- Alleen rijen met `Actief = TRUE` worden getoond
- Wioletta beheert dit zelf in Google Sheets
- Elke vacature als uitklapbare card (accordion)

**10.3 Geen vacatures beschikbaar (fallback)**
```
Er zijn op dit moment geen openstaande vacatures.
Stuur een open sollicitatie naar hallo@wiolettajaros.nl
```

**10.4 Open sollicitatie sectie (altijd zichtbaar)**
```
Heading:  Staat uw functie er niet bij?
Tekst:    Stuur ons een open sollicitatie.
          Wij zijn altijd op zoek naar betrouwbare mensen.
CTA:      → Stuur een open sollicitatie
          (mailto: hallo@wiolettajaros.nl?subject=Open sollicitatie)
```

---

## 11. Assets & bestanden

### Logo (aan te leveren)
```
Gewenst formaat: SVG met transparante achtergrond
Kleur: wit (voor gebruik op donkere achtergrond)
Locatie: public/assets/logo.svg

Tijdelijke oplossing: tekstlogo "Wioletta Jaros" in code
totdat SVG beschikbaar is.

Actie: Logo natekenen in Figma of via Vectorizer.AI
op basis van het bestaande GIF bestand.
```

### Hero afbeelding
```
Bron: Unsplash (gratis)
Zoekterm: "commercial cleaning office" of "office cleaning professional"
Gewenst: donker, professioneel, ruimtelijk
Locatie: public/assets/hero.jpg
```

### Client logo's (te verzamelen)
```
Locatie: public/assets/clients/
Formaat: SVG of PNG met transparante achtergrond
Bedrijven: zie sectie 6.3

Werkwijze: logo's ophalen van bedrijfswebsites
⚠️ Wioletta moet toestemming vragen vóór go-live
```

---

## 12. SEO & technisch

### Elke pagina heeft
- Unieke `<title>` tag
- Unieke `<meta name="description">`
- OpenGraph tags (og:title, og:description, og:image)
- Canonical URL

### Globaal in `app/layout.tsx`
```typescript
// Structured data: LocalBusiness schema
{
  "@type": "LocalBusiness",
  "name": "Wioletta Jaros Schoonmaakbedrijf V.O.F.",
  "address": {
    "streetAddress": "Donksewaard 11",
    "postalCode": "4261 ME",
    "addressLocality": "Wijk en Aalburg",
    "addressCountry": "NL"
  },
  "telephone": "06-27 08 23 83",
  "email": "hallo@wiolettajaros.nl",
  "url": "https://www.wiolettajaros.nl",
  "areaServed": [
    "Wijk en Aalburg", "Hedel", "Kerkdriel",
    "Den Bosch", "Waalwijk", "Werkendam"
  ]
}
```

### hreflang
```html
<link rel="alternate" hreflang="nl" href="https://www.wiolettajaros.nl" />
```

---

## 13. Environment variabelen (`.env.local`)

```bash
# Resend (mail versturen)
RESEND_API_KEY=

# Google Sheets (vacatures)
GOOGLE_SHEETS_API_KEY=
GOOGLE_SHEETS_ID=

# Mail ontvanger
CONTACT_EMAIL=hallo@wiolettajaros.nl
```

---

## 14. Pre-launch checklist

- [ ] Logo SVG aanmaken en plaatsen
- [ ] Hero stockfoto kiezen van Unsplash
- [ ] Client logo's verzamelen
- [ ] Google Sheets aanmaken voor vacatures + API key instellen
- [ ] Resend account aanmaken + API key instellen
- [ ] Domein koppelen aan Vercel
- [ ] Google Business Profile aanmaken en volledig invullen
- [ ] Toestemming client logo's regelen bij bedrijven
- [ ] Zakelijke mailbox instellen (Strato of alternatief)
- [ ] Formulier testen (verzending + ontvangst)
- [ ] Website testen op mobiel

---

## 15. Bedrijfsgegevens (altijd correct)

```
Naam:    Wioletta Jaros Schoonmaakbedrijf V.O.F.
Adres:   Donksewaard 11, 4261 ME Wijk en Aalburg
Tel:     06-27 08 23 83
Email:   hallo@wiolettajaros.nl
KvK:     65539508
IBAN:    NL34 RABO 0152 6459 18
Web:     www.wiolettajaros.nl
```

---

*PRD opgesteld op basis van aangeleverde content (Professionele_schoonmaak_met_vaste_gezichten.docx),
Gemini mockup screenshot, Olympus Schoonmaak formulier referentie, en stack beslissingen.*
