# CLAUDE.md

This file gives Claude Code project context for working in this repo. Read this before making changes.

## Project

Solo-builder portfolio for Divaakar Naresh, AI Engineer specializing in production RAG pipelines and agentic AI systems. Audience: people evaluating him for engineering roles/collaborations who want to see shipped systems, not notebook demos. Tone: direct, confident, self-taught, execution-focused. No "passionate developer" or generic bootcamp-portfolio language, no em dashes anywhere in user-facing copy.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based theme in `app/globals.css`, no `tailwind.config.js`)
- Motion (`motion/react`, the Framer Motion successor) for entrance/reveal animations (letter-clip headings, viewport reveals, the timeline-axis unfurl, the theme-toggle icon swap)
- GSAP + ScrollTrigger (`@gsap/react` `useGSAP`) for scroll-scrubbed motion; registered once in `lib/gsap.ts`. Currently drives the hero (name-grid drift, portrait-frame scale, inner-media parallax)
- shadcn/ui (`base-nova` style, base-ui primitives, cva variants) — primitives live in `/components/ui` (`ActionLink`, `SectionHeader`, `CopyButton`, plus generic scaffold primitives)
- Page sections live in `/components/sections`, one file per section, composed in `app/page.tsx`
- Remaining atmosphere pieces (celestial toggle, portrait media) live in `/components/atmosphere`; the old sky backdrop + floating badge were removed in the editorial redesign
- Shared motion primitives (`Reveal`, `SplitHeading`) in `/components/motion/reveal.tsx`; timeline axis in `/components/motion/timeline-axis.tsx`
- Design tokens (fluid `clamp()` type scale, spacing, layout, motion timing, the portrait shape/scrub config) live in `lib/theme.ts`; the fluid type scale is mirrored in `app/globals.css` `@theme` as `--text-fluid-*` (generating `text-fluid-*` utilities). Theme colors stay authoritative as per-theme CSS variables in `globals.css`.

## Design direction

Premium editorial minimalism (jsandrieu.com energy): a crisp white canvas, oversized serif display type, thin hairline rules, and generous negative space. Light is the default environment; the celestial toggle flips the whole color space to an ink-dark editorial environment. Monochrome only, no gradients or colored accents; negative space does the framing.

- **Theme system**: `[data-theme="day"|"night"]` on `<html>`, managed by `components/theme-provider.tsx` (React context + localStorage). Day (light) is the default; an inline script in `app/layout.tsx` applies the stored theme before first paint to avoid a flash. All colors are per-theme CSS variables in `app/globals.css`; consume them, never hardcode. Key tokens: `--background`/`--foreground` (ink `#0F0F10` on white `#FFFFFF` by day; off-white on `#0F0F10` by night), `--hairline`/`--border` (`#E5E5E7` day), `--muted-foreground`, `--surface`, plus the shadcn `--primary`/`--secondary`/etc. mappings.
- **Typography**: Playfair Display (`--font-playfair`, `font-serif`) for the name and all display/section headings, tight tracking (`-0.01em`/`-0.02em`), medium weight. Geist Sans for body/lists. JetBrains Mono for uppercase structural labels, section indices, tech tags, and bracketed action links. Fluid sizes via the `text-fluid-*` utilities (`sm`..`display`).
- **Layout**: sections center to `max-w-[var(--layout-max)]` (78rem) with `px-[var(--layout-gutter)]` (fluid) and fluid vertical rhythm `py-[clamp(5rem,3rem+8vw,9rem)]`. Structure is expressed with hairline `border-border` rules (grid/row tops and bottoms), not cards or fills.
- **Animation engine ownership** (keep the boundary so no DOM node is driven by two engines): Motion owns entrances/reveals — `SplitHeading` (letter-by-letter clip-mask reveal), `Reveal` (viewport glide-up, springs from `anim` in `lib/theme.ts`), the `TimelineAxis` unfurl, the toggle icon swap. GSAP ScrollTrigger owns scroll-scrubbed motion (`scrub: 1`) — in the hero it drifts the name grid, scales the portrait frame, and parallaxes the media inside the mask, each on a wrapper node distinct from the Framer-animated one. Everything is transform/opacity only and gated on `useReducedMotion` / a GSAP reduced-motion early return (content renders static and visible, never hidden). No animation deps beyond Motion and GSAP+ScrollTrigger.
- **Interactive elements**: the one link primitive is `ActionLink` (`components/ui/action-link.tsx`) — a bracketed mono `[ label ↗ ]` (ghost) or filled/outline pill, with a placeholder-safe href contract (`href="#"` stays inert + `aria-disabled`; a real `https` URL auto-becomes an external link). Hover is a hairline underline sweep or ink-invert; focus-visible rings are on.
- **Theme shift**: only `html`/`body` get the 700ms color-space fade; components keep fast `transition-colors` so hover stays crisp.
- Fully responsive from mobile to wide desktop; no horizontal scroll at any width.

## Page sections (exact order, do not rearrange)

1. **Hero** (`hero.tsx`) — editorial anchor. A hairline meta rule (`Portfolio — 2026` / `Chennai, India`), the massive `<h1>` "Divaakar Naresh" in Playfair via `SplitHeading` (wrapped in a GSAP-scrubbed grid that drifts up), the mono tag `[ Solo Builder // AI Engineer ]`, and below a hairline the thesis paragraph (`text-fluid-lg`) with a `Get in touch` `ActionLink` (anchors to `#connect`). Right column is the portrait: `PortraitMedia` (`components/atmosphere/portrait-media.tsx`), a native `<video autoplay loop muted playsinline>` at `/public/portrait.mp4` with a graceful fallback chain (video -> still `/public/portrait.png` poster -> DN monogram, mount-time 404 checks). It sits in an organic asymmetric arch (`portrait.shape` border-radius from `lib/theme.ts`); GSAP scrubs the frame scale and the inner-media parallax (`portrait.scrub`) for the fluid morph on scroll.
2. **Stack** (`stack.tsx`) — "01 / Capabilities", "Core Stack". A hairline blueprint matrix: each capability group is a bordered row (`md:grid-cols-[16rem_1fr]`) with a mono index + uppercase label on the left and the technologies as a large sans wrap-list (hover underlines each) on the right. Groups: Core Logic & Orchestration (Python, LangGraph, LangChain, MCP); Backend & Vector Architecture (FastAPI, Supabase, REST API, ChromaDB, FAISS, Ollama); Infrastructure & ML Foundations (Docker, Linux, AWS EC2/S3, Scikit-Learn, Deep Learning, NLP).
3. **Projects** (`projects.tsx`) — "02 / Proof of Work", "Selected Systems". Hairline-separated editorial rows (`md:grid-cols-[0.35fr_1fr]`): left is an oversized serif index + mono tech list, right is the serif title, description, and an `ActionLink` CTA (`href="#"` placeholders), in this order:
   1. Multi-Agent Travel Booking System — LangGraph + MCP tool servers, planner/budget agents, budget-aware bookable plans. CTA "Discover System".
   2. Legal Document RAG Pipeline — structure-aware (Article/Section/Clause) chunking, deep metadata tagging, citation-backed accuracy. CTA "Launch Instance".
4. **Experience** (`experience.tsx`) — "03 / Trajectory", "Experience". A single vertical hairline axis (`TimelineAxis`, unfurls via scaleY on scroll) with ink node ticks; each entry (`md:grid-cols-[10rem_1fr]`) is period (mono) + role (serif) + org (mono) + detail. Reverse-chronological: AI Engineer Intern, Mavens i Softech (06/2026-07/2026, CareShield / Qwen); Gen AI Intern, Sri Ramakrishna Math (12/2025-01/2026, Open WebUI RAG); IT Intern, eNTrust (06/2024, Flask NLP/OCR).
5. **Manifesto** (`manifesto.tsx`) — "04 / Manifesto", a centered full-width serif pull-quote inside top/bottom hairline rules: "I spent too much time thinking... opinions that don't come with experience." + mono coda "Still learning, still building."
6. **Connect/Footer** (`footer.tsx`) — `id="connect"`, "05 / Connect", "Let's build something real." A solid ink `CopyButton` for the email (divaakarnaresh2005@gmail.com, copy-to-clipboard) plus outline `ActionLink`s for LinkedIn (linkedin.com/in/divaakar2005/) and GitHub (github.com/divaznx), a `Chennai, India` mono location flag, and a hairline colophon.

No dedicated Education section in this version, only the six sections above.

## Setup check (run before integrating any new component)

1. Confirm shadcn project structure exists (it does, `components.json` present, style `base-nova`).
2. Confirm Tailwind CSS v4 is configured via `app/globals.css` (it is, no separate config file needed).
3. Confirm TypeScript is set up (`tsconfig.json` present).
4. New shadcn primitives go in `/components/ui`. New page sections go in `/components/sections`. New background/ambient effects go in `/components/atmosphere`. Don't scatter any of them elsewhere.

## General behavior

- Always check existing file structure before creating new files.
- When adding shadcn primitives, match existing conventions in `/components/ui` (base-ui primitives + `cva` variants + `cn` helper from `lib/utils`), don't introduce a different component pattern.
- Run `npm run build` after integration to confirm no type errors before declaring work done.
- Dev preview: `.claude/launch.json` defines the `portfolio-dev` server on port 3000.
