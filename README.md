# Lone Tree Companies — Website

Corporate website for Lone Tree Companies built with Next.js.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Visit http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub (`laner14/lonetree-companies`)
2. Go to [vercel.com](https://vercel.com) → Import Project → Select the repo
3. Click Deploy — no config needed, Vercel auto-detects Next.js
4. Your site will be live at a `.vercel.app` URL
5. When ready, connect `lonetreecompanies.com` via Vercel dashboard → Domains

## Making Updates (No Code Required)

All content lives in simple data files in `src/data/`. Edit these files directly:

| What to update | File to edit |
|---|---|
| Projects (status, stats, descriptions) | `src/data/projects.ts` |
| Team members (add/remove people, update bios) | `src/data/team.ts` |
| Partner page (tracks, FAQs) | `src/data/partner.ts` |
| Company info, nav links, footer, hero stats | `src/data/site.ts` |

### Example: Updating a project status

Open `src/data/projects.ts`, find the project, change its `status`:
```ts
{
  name: "Hampton Hills",
  status: "Capital Raise",  // ← change this to "Construction" when ready
  // ...
}
```

### Example: Adding a team member

Open `src/data/team.ts`, add a new entry to the array:
```ts
{
  name: "New Person",
  initials: "NP",
  title: "VP — Lone Tree Capital Partners",
  bio: "Bio text here...",
  credentials: ["Finance", "Development"],
},
```

Push changes to GitHub and Vercel auto-deploys in ~30 seconds.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Playfair Display + Outfit** (Google Fonts)
- No database, no CMS, no login required

## Project Structure

```
src/
├── app/              # Pages (routes)
│   ├── page.tsx      # Homepage
│   ├── projects/     # /projects
│   ├── team/         # /team
│   └── partner/      # /partner
├── components/       # Shared components (Nav, Footer)
├── data/             # ← EDIT THESE for content updates
│   ├── site.ts       # Company info, nav, footer, hero stats
│   ├── projects.ts   # All project listings
│   ├── team.ts       # Team members & expertise
│   └── partner.ts    # Partner tracks, FAQs
└── styles/
    └── globals.css   # Design system & all styles
```
