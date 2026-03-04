# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Local dev server with Turbopack
pnpm build        # Production build
pnpm start        # Serve production build
pnpm lint         # ESLint
```

No test runner is configured.

## Architecture

Personal portfolio site for Jack Tsai (蔡承勳) built with Next.js 15 App Router, React 19, TypeScript (strict), and Tailwind CSS v4.

### i18n (next-intl)

- Three locales: `en` (default), `zh-CN`, `zh-TW`
- All routes are locale-prefixed (`/en/`, `/zh-CN/`, `/zh-TW/`)
- Translation files in `messages/*.json`
- Locale routing configured in `i18n/routing.ts`, middleware handles detection
- Fonts are locale-aware: Geist for English, Noto Sans TC/SC for Chinese variants

### Layout Hierarchy

```
app/layout.tsx              → bare html/body shell
  app/[locale]/layout.tsx   → NextIntlClientProvider + locale-specific fonts
    app/[locale]/page.tsx   → main page content (server component)
```

### Page Structure

Two-column sticky layout:
- Left 1/3: sticky sidebar (name, role, tagline, nav)
- Right 2/3: scrollable content (About, Experience sections)
- Full-page `SpotlightEffect` overlay (mouse-tracking radial gradient)

### Key Patterns

- Server/client split: page.tsx is a server component that fetches translations via `getTranslations()` and passes strings as props to client components
- Client components (`"use client"`) live in `app/[locale]/_components/`
- Experience data is hardcoded in `experience-section.tsx` (no CMS)
- `cn()` utility in `lib/utils.ts` combines clsx + tailwind-merge
- Path alias: `@/*` maps to project root
- shadcn/ui is configured (`components.json`, new-york style) but no components generated yet
- CSS custom properties use oklch color space, dark mode is class-based
