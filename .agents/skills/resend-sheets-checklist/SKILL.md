---
name: resend-sheets-checklist
description: Use when implementing or reviewing the contact form, Resend mail flow, or Google Sheets vacancy integration for this repository.
---

# Resend and Sheets Checklist

Use this skill when work touches mail delivery or vacature data.

## Guardrails

- Keep secrets in environment variables only.
- Never edit `.env.local` directly.
- Update `.env.example` when a new required variable is introduced.
- Keep server-only secrets out of client bundles.

## Implementation checklist

1. Validate input on the server.
2. Handle success and failure states explicitly.
3. Keep email and form copy in Dutch.
4. Add verification for happy path and obvious failure paths.
5. Document required environment variables and operational assumptions.
