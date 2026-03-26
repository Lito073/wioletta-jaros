# Wioletta Jaros Codex Guide

## Scope

- This file is the Codex source of truth for this repository.
- Leave `CLAUDE.md` untouched unless the user explicitly asks for work on it.

## Project facts

- Stack: Next.js `16.2.1`, React `19`, TypeScript, Tailwind CSS `4`, shadcn/ui, App Router.
- Product intent lives in `docs/PRD.md`.
- Current routes: `/`, `/over-ons`, `/diensten`, `/contact`, `/vacatures`.
- All site copy must stay in Dutch.
- The primary CTA is an offerte/contact action.

## Required reading

- This is not legacy Next.js. Before changing framework behavior, read the relevant guide in `node_modules/next/dist/docs/`.
- For App Router work, start with `node_modules/next/dist/docs/01-app/index.md` and follow the linked guide that matches the task.

## Working rules

- Prefer Server Components. Add `"use client"` only when browser-only state or effects are required.
- Use `next/link`, `next/image`, and `next/font` patterns that fit Next.js 16.
- Do not modify `.env.local`.
- Do not add or replace packages without a concrete reason tied to the task.
- Keep business data aligned with `docs/PRD.md` and verified site content.
- Use `PLANS.md` for larger multi-step implementation plans.
- Use `code_review.md` when reviewing diffs or running `codex review`.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- E2E: `npm run test:e2e`
- Full verify: `npm run verify`

## Done criteria

- Relevant checks pass: lint, typecheck, build, and browser checks for UI changes.
- New UI behavior is verified with Playwright when it changes navigation, layout, or core calls to action.
- Accessibility regressions are not introduced on touched flows.
