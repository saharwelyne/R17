## Goal

Run every line on page `/v1.2` through the Language & Writing Guide's rubric (§9) and Red Flags (§10). Fix the explicit retired phrases, sharpen wallpaper lines, and keep what's already on-voice.

Scope is copy only — no layout, component, or styling changes. Files are shared with v1.1, so the same edits will improve that page too, which is consistent with prior edits in this project.

## Findings → fixes

### 1. `WhyR17.tsx` — the big one (false contrast, explicitly retired)

Headline today: *"Built for commercial outcomes — not retainers."* The guide retires this verbatim in §3 ("Honest contrasts only") and §11 ("Pricing model headline"): we *do* sell retainers (the base fee is one), so the contrast is misleading. Replace with the guide's approved rewrite.

- Eyebrow: `Performance pricing` → `Pricing`
- H2: `Built for commercial outcomes — not retainers.` → **`Built for commercial outcomes — with our fee on the line.`** (serif-accent stays on "commercial outcomes")
- Sub-paragraph: keep — it already matches the guide's §11 "Pricing" rewrite almost word-for-word.
- Right card eyebrow `Variable` → `Shared risk` (avoids accountant-speak; matches the "skin in the game" lexicon)
- Bonus card body: trim trailing "Simple, and rare." (adjective with no proof; the mechanism is the proof).

### 2. `PhotoBand.tsx` — defaults are wallpaper

Default kicker `Your success drives our success.` and caption `A marketing partner that shares both the work and the outcome.` fail the "could a competitor say this?" test (§8).

- Default kicker: `Skin in the game.`
- Default caption: `A base fee plus a bonus we only earn when you grow. If you don't, we don't.`

The second `PhotoBand` on v1.2 already passes its own props (`One number` / contribution margin caption) — leave that instance untouched.

### 3. `HeroV2.tsx` — minor sharpening

The hero is already close to the guide's §11 "Hero" rewrite. Two small fixes:

- Eyebrow: keep as-is (`A digital performance agency · paid on results`) — matches the preferred descriptor in Positioning §2.
- Body paragraph: tighten to lead with the outcome and front-load services per §5 ("Name the service — and name it early"). New text:
  > *Most agencies sell you more. We tell you what's actually worth doing — then put our fee on the result. Paid social, paid search, SEO, email, CRM, creative: we work out which will move your numbers, then run them. A base fee plus a bonus you only pay when you grow.*
- Video tile label: `Brand film · 1:42` / `Inside R17 Ventures` — fine, leave.

### 4. `ServicesGrouped.tsx` — keep the plain header, sharpen one item

- H2 stays `Our growth services.` (per §5: wayfinding headers should stay plain).
- Right-column lede already on-voice, leave.
- Group `01` body uses "vanity reach" — fine. Group `02` opening "Turn first-time buyers into a compounding revenue line" — fine.
- Group `03` body contains "earn attention and turn it into pipeline" — fine, leave.
- CTA button label: `Get started` → `Talk to us` (plainer, matches §11 Contact rewrite tone).

### 5. `ContactCTA.tsx` — replace generic form lines

- Form card heading: `Ready to grow?` → `Tell us what you're trying to grow.`
- Form card sub: `Fill out the form below and our team will be in touch shortly.` → `One business day, real answer, no chase-up sequence.`
- Left-column lede stays — it's specific and on-voice.

### 6. `RecognitionStrip.tsx` — already passes

Plain, proof-first, awards as "quiet credibility" per Positioning §8. No changes.

### 7. `VideoTestimonials.tsx` — already passes

Real client quotes, proof-led. No changes.

### 8. `v1.2.tsx` route — `NextStepsTriCTA` + meta

- Section H2: `See how the partnership actually works.` → fine, leave.
- CTA chip `Our Pricing Models` → `How we're paid` (Title Case → plain; matches "no growth, no bonus" framing).
- `<title>` and `description` already mirror the Positioning §10 short story. Leave.

## Out of scope

- No changes to `Nav`, `Footer`, `Partners`, `PressStrip`, `ClientMarquee`.
- No design-token, layout, or asset edits.
- v1.1 will inherit the same wording since it imports the same components — that's consistent with the user's earlier "and for future pages in this project" intent.

## Files touched

- `src/components/v1_1/WhyR17.tsx`
- `src/components/v1_1/HeroV2.tsx`
- `src/components/v1_1/PhotoBand.tsx`
- `src/components/v1_1/ServicesGrouped.tsx`
- `src/components/home/ContactCTA.tsx`
- `src/routes/v1[.]2.tsx`
