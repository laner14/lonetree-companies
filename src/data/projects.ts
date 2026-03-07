// ============================================================
// LONE TREE — PROJECT DATA
// ============================================================
// To add a new development:
//   1. Copy the Hampton Hills block below
//   2. Paste it at the top of the `projects` array
//   3. Fill in all fields (set images: [] if no photos yet)
//   4. Commit to GitHub — Vercel auto-deploys in ~60 seconds
// ============================================================

export type ProjectStatus =
  | "Land Control"
  | "Entitlement"
  | "Capital Raise"
  | "Pre-Construction"
  | "Construction"
  | "Stabilized"
  | "Sold";

export interface ProjectKPI {
  label: string;
  value: string;
  sub?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  market: string;
  status: ProjectStatus;
  kpis: ProjectKPI[];
  highlights: string[];
  overview: string;
  images: { src: string; caption?: string }[];
  heroImage?: string;
  featured: boolean;
  published: boolean;
}

export const projects: Project[] = [

  {
    slug: "hampton-hills",
    name: "Hampton Hills",
    tagline: "Build-to-rent community in the Richmond, KY MSA",
    location: "Richmond, KY",
    market: "Richmond, KY MSA — Madison County",
    status: "Capital Raise",
    kpis: [
      { label: "Total Units", value: "72" },
      { label: "Site Acres", value: "18.4" },
      { label: "Total Capitalization", value: "$5.5M", sub: "equity raise" },
      { label: "Projected IRR", value: "18–22%", sub: "LP projected" },
      { label: "Avg. Rent", value: "$1,450", sub: "per unit / mo" },
      { label: "Exit Strategy", value: "Portfolio Sale", sub: "yr 5–7" },
    ],
    highlights: [
      "72-unit BTR community targeting attainable workforce housing in a high-demand, supply-constrained Kentucky MSA",
      "D.R. Horton supply agreement secured — institutional-grade builder reducing construction risk and cost overrun exposure",
      "Land under contract; entitlement pathway clear with local government support for attainable housing",
      "$5.5M equity raise structured as 506(b) offering — preferred return with equity participation",
      "Managed by Ameritrue, Lone Tree's in-house property management entity, preserving NOI and asset quality",
    ],
    overview:
      "Hampton Hills is a 72-unit build-to-rent community in Richmond, Kentucky, targeting the growing demand for quality attainable housing in the Richmond–Berea MSA. The project leverages Lone Tree's vertically integrated platform — from land control through construction management and property management — to deliver institutional returns with reduced execution risk.",
    images: [],
    heroImage: undefined,
    featured: true,
    published: true,
  },

  {
    slug: "oak-hills",
    name: "Oak Hills",
    tagline: "Build-to-rent community — portfolio pipeline",
    location: "TBD",
    market: "Secondary Market — Midwest / Southeast",
    status: "Land Control",
    kpis: [
      { label: "Total Units", value: "TBD" },
      { label: "Site Acres", value: "TBD" },
      { label: "Total Capitalization", value: "TBD" },
      { label: "Projected IRR", value: "18–22%", sub: "target" },
      { label: "Status", value: "Land Control" },
      { label: "Est. Start", value: "2026", sub: "construction" },
    ],
    highlights: [
      "Pipeline project — details to be released as entitlement progresses",
      "Follows proven Hampton Hills model in a complementary secondary market",
      "Lone Tree vertically integrated platform applied from day one",
    ],
    overview:
      "Oak Hills represents Lone Tree's next BTR community in the active pipeline, following the established buy-box: attainable workforce housing in supply-constrained secondary markets with favorable employment and demographic tailwinds.",
    images: [],
    heroImage: undefined,
    featured: false,
    published: true,
  },

];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.published && p.featured);
}
