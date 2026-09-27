# Stane — Official Website

Monorepo for the Stane cybersecurity product website.

## Stack

- **Frontend**: Next.js 15 (App Router) + TailwindCSS, served from `apps/web`
- **Backend**: NestJS, served from `apps/api`
- **Runtime / package manager**: [Bun](https://bun.sh)

## Structure

```
apps/
  web/   Next.js marketing site (single home page)
  api/   NestJS backend (health check + contact endpoint)
```

## Getting started

Install [Bun](https://bun.sh) first, then:

```bash
bun install

# frontend (http://localhost:3000)
bun run dev:web

# backend (http://localhost:4000)
bun run dev:api
```

## Design

The home page follows a minimal, high-contrast product aesthetic
inspired by modern security/dev-tool landing pages (Brave, Vercel):
dark background, a single strong headline, a short value proposition,
and a small set of feature cards — no unnecessary sections.
