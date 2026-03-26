---
name: next16-app-router-guardrails
description: Use when working on this repository's Next.js 16 App Router code, especially routes, layouts, metadata, navigation, images, fonts, and client versus server component boundaries.
---

# Next.js 16 App Router Guardrails

Use this skill for framework-level changes in this repository.

## Workflow

1. Read the relevant guide in `node_modules/next/dist/docs/` before editing.
2. Keep App Router conventions intact.
3. Default to Server Components and only add `"use client"` when browser-only interactivity is necessary.
4. Prefer `next/link`, `next/image`, and `next/font` over ad-hoc alternatives.
5. Avoid older Pages Router patterns unless the user explicitly asks for them.

## Repo-specific checks

- Keep copy in Dutch.
- Preserve the main CTA path to `/contact`.
- Run `npm run lint`, `npm run typecheck`, and relevant browser checks after framework changes.
