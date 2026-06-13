# HelpDesk — Tenant Admin Portal

A fully interactive prototype of the **Tenant Admin Portal** for a multi-tenant SaaS HelpDesk platform (think Zendesk/Freshdesk, operated by a single platform owner who sells access to client organisations).

Implemented from a [Claude Design](https://claude.ai/design) handoff bundle (`tenant.html` and its source modules), precompiled with **Vite + React** instead of in-browser Babel.

## Features

- **Dashboard** — stat cards with sparklines, ticket activity, license usage, reply-time chart, recent activity
- **Tickets** — filterable/paginated list, ticket detail with reply composer + internal notes
- **Customers**, **Products & Services**, **Customer Representatives** — list + detail screens
- **Users & Roles**, **Ticket Forms**, **Reports**, **License Usage**, **Settings**
- **Role switcher** (Owner / Admin / Manager / Agent / Viewer) in the top bar
- **Tweaks panel** — toggle layout density, sidebar style (dark/light), and empty-state previews
- Confirmation modals for destructive actions, toasts, license-limit banners

## Design system

Black & white discipline with status colour only. Geist + Geist Mono. Tokens live in `src/styles.css`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # production build → dist/
npm run preview  # serve the production build
```
