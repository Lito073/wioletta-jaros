# UX Review Implementation Plan

**Datum:** 2026-03-26
**status:** in_progress
**scope:** UX verbeteringen op basis van UI/UX Pro Max review

## Samenvatting

Dit plan implementeert alle verbeteringen uit de UX review van de Wioletta Jaros Schoonmaakbedrijf website. De verbeteringen zijn gecategoriseerd op prioriteit (CRITICAL → HIGH → MEDIUM).

---

## CRITICAL Issues (Priority 1-2)

### 1. Touch Targets Verbeteren ✅
**Status:** VOLTOOID
**Locatie:** `components/header.tsx`
**Probleem:** Nav links hadden `py-1` (32px hoog) - te klein voor 44x44pt minimum
**Oplossing:** Verhoogd naar `py-3` (48px)
**Impact:** Verbeterde touch experience op mobiel

### 2. Emoji Vervangen door Lucide Icon ✅
**Status:** VOLTOOID
**Locatie:** `components/sections/about-preview.tsx`
**Probleem:** Emoji `✨` gebruikt in plaats van icon
**Oplossing:** Vervangen door `<Sparkles>` van lucide-react
**Impact:** Consistente icon styling, betere cross-platform rendering

### 3. Accessibility Contrast Verbeteren
**Status:** PENDING
**Locatie:** `components/sections/trust-bar.tsx`, `components/footer.tsx`
**Probleem:** `text-muted-foreground` (#6b7280) heeft ~4.2:1 contrast - marginaal
**Oplossing:** Verhoog contrast door donkerder grijs (#525252) of semantic tokens
**Impact:** WCAG AA compliance

---

## HIGH Issues (Priority 3-5)

### 4. Hardcoded Colors Vervangen door Semantic Tokens
**Status:** IN_PROGRESS
**Locatie:** Meerdere componenten
**Gevonden hardcoded colors:**
- `#1a1a1a` → `bg-primary` / `text-primary`
- `#f5f5f5` → `bg-muted` / `bg-surface`
- `#e5e5e5` → `border-border`
- `#f8f8f8` → `bg-muted/50`

**Bestanden om aan te passen:**
- [ ] `components/sections/about-preview.tsx` (lines 48, 62, 75, 84)
- [ ] `components/footer.tsx` (lines 22, 104, 114)
- [ ] `components/sections/services-preview.tsx`
- [ ] `components/sections/cta.tsx`
- [ ] `components/header.tsx`
- [ ] `components/sections/hero.tsx`

### 5. Reduced-Motion Support Toevoegen
**Status:** PENDING
**Locatie:** Alle componenten met animaties
**Animaties om aan te passen:**
- [ ] Hero scroll indicator (`animate-bounce`)
- [ ] Card hover effects
- [ ] Button transitions

**Oplossing:** Voeg `motion-reduce:animate-none` en `motion-reduce:transition-none` toe

### 6. Performance Optimalisatie
**Status:** PENDING
**Punten:**
- [ ] Hero image via Unsplash - overweeg lokale afbeelding
- [ ] Lazy loading voor below-fold secties
- [ ] Font loading optimalisatie (via next/font)

---

## MEDIUM Issues (Priority 6-8)

### 7. Typography Standaardisatie
**Status:** PENDING
**Richtlijnen:**
- h1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- h2: `text-3xl md:text-4xl font-bold`
- h3: `text-lg font-semibold`
- body: `text-base` of `text-lg` met `leading-relaxed`

### 8. Form UX Improvements
**Status:** PENDING
**Locatie:** Contact formulier (indien aanwezig)
**Verbeteringen:**
- [ ] Loading state bij submit
- [ ] Inline validatie
- [ ] Duidelijke error messages

### 9. Dark Mode Voorbereiding
**Status:** PENDING
**Check:** CSS variables in globals.css ondersteunen al dark mode
**Actie:** Verify .dark class werkt correct

---

## Verification & Deployment

### 10. Build, Typecheck, Lint
**Status:** PENDING
**Commands:**
```bash
npm run build
npm run typecheck
npm run lint
```

### 11. Deploy to Vercel Preview
**Status:** PENDING
**Command:** `vercel --yes`

### 12. Browser Verification
**Status:** PENDING
**Tests:**
- [ ] Chrome desktop
- [ ] Safari desktop
- [ ] Chrome mobile (DevTools)
- [ ] Playwright e2e tests indien aanwezig

### 13. Code Review & Cleanup
**Status:** PENDING
**Checklist:**
- [ ] Verwijder unused imports
- [ ] Consistentie in code style
- [ ] Comments waar nodig

### 14. Documentation Update
**Status:** PENDING
**Bestand:** `docs/PRD.md`
**Update:** Status van geimplementeerde features

### 15. Commit Changes
**Status:** PENDING
**Message:**
```
feat: UX verbeteringen - accessibility, performance, consistency

- Touch targets vergroot in header navigatie
- Emoji vervangen door Lucide icon
- Hardcoded colors vervangen door semantic tokens
- Reduced-motion support toegevoegd
- Accessibility contrast verbeterd

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

---

## Voortgang

| Fase | Status | Voltooid |
|------|--------|----------|
| CRITICAL Issues | in_progress | 2/3 |
| HIGH Issues | pending | 0/3 |
| MEDIUM Issues | pending | 0/3 |
| Verification | pending | 0/6 |

---

## Volgende Stap
1. Accessibility contrast verbeteren in TrustBar en footer
2. Hardcoded colors vervangen door semantic tokens
3. Reduced-motion support toevoegen
