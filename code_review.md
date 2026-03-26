# Code Review Checklist

Review findings in severity order and focus on real regressions first.

## Check

- Behavioral bugs or broken flows
- Regressions against `docs/PRD.md`
- Next.js 16 misuse or outdated patterns
- Accessibility regressions on touched UI
- Missing validation around form, mail, or external integrations
- Secrets or environment misuse
- Missing verification or brittle tests

## Output style

- Findings first, with file references.
- Keep summaries short.
- If there are no findings, state that clearly and mention remaining risks or test gaps.
