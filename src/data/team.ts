// ============================================================
// TEAM DATA — Edit this file when team members join/leave
// or titles change. Update bios, credentials as needed.
// ============================================================

export interface TeamMember {
  name: string;
  initials: string;
  title: string;
  bio: string;
  credentials: string[];
  pending?: boolean; // true if bio is not yet available
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jamis O'Brien",
    initials: "JO",
    title: "Founder & Chairman — Lone Tree Companies",
    bio: "Founded the Lone Tree platform with a focus on attainable housing in strong submarket metros. Leads land acquisition strategy, entitlement operations, and municipal relationships across all active markets. Under his leadership, Lone Tree has grown from a single Kentucky land purchase to a vertically integrated, multi-state development platform controlling 500+ acres and 2,500+ entitled lots.",
    credentials: ["Land Strategy", "Entitlements", "Municipal Relations"],
  },
  {
    name: "Lane Aldrich",
    initials: "LA",
    title: "CEO — Lone Tree Capital Partners",
    bio: "Construction finance and capital markets executive. Previously helped fund approximately 4,000 rental units representing over $1 billion in total development cost across multifamily, BTR, and manufactured housing. Leads institutional capital formation, investor relations, and strategic capital deployment for the Lone Tree platform.",
    credentials: ["Capital Markets", "Construction Finance", "$1B+ Funded"],
  },
  {
    name: "Jenny Nielson",
    initials: "JN",
    title: "Partner & CEO — Lone Tree Land & Development",
    bio: "Leads Lone Tree's land acquisition and entitlement operations across the development pipeline. Background in demographic-driven site selection, municipal collaboration, and early-stage city engagement. Responsible for building the relationships and analytical framework that guide Lone Tree's market entry strategy across multiple states.",
    credentials: ["Land Acquisition", "Entitlements", "Market Analysis"],
  },
  {
    name: "Spencer Jarvis",
    initials: "SJ",
    title: "COO — Lone Tree Land & Development",
    bio: "Oversees day-to-day operations for Land & Development including due diligence, project coordination, and civil engineering oversight. Works closely with municipal planning departments and engineering firms to move sites from acquisition through construction-ready status.",
    credentials: ["Operations", "Due Diligence", "Project Coordination"],
  },
  {
    name: "Carter Buck",
    initials: "CB",
    title: "CEO — Lone Tree Communities",
    bio: "Leads Lone Tree's internal construction management division overseeing horizontal site improvements, trade management, and builder coordination. Responsible for quality control and cost discipline from civil infrastructure through vertical delivery across the entire development portfolio.",
    credentials: ["Construction Mgmt", "Builder Relations", "Quality Control"],
  },
  {
    name: "Terrance Parson",
    initials: "TP",
    title: "COO — Lone Tree Communities",
    bio: "Manages construction operations and builder coordination for horizontal and vertical development. Works directly with national and regional builders to ensure on-time, on-budget delivery while maintaining Lone Tree's quality standards across all active construction sites.",
    credentials: ["Construction Ops", "Trade Management", "Site Delivery"],
  },
  {
    name: "Josh Rigby",
    initials: "JR",
    title: "President — Ameritrue Property Management",
    bio: "Leads Ameritrue's property management operations across four states (UT, WA, WY, NV). Founded in 2014, Ameritrue provides full-service property management including lease-up, resident experience, maintenance operations, and long-term community stewardship for the Lone Tree portfolio and third-party clients.",
    credentials: ["Property Management", "Multi-State Ops", "Resident Experience"],
  },
  {
    name: "Brian Cole",
    initials: "BC",
    title: "CEO — Ameritrue Property Management",
    bio: "Provides strategic leadership for Ameritrue's growth and operational expansion. Focused on scaling the property management platform to support Lone Tree's growing BTR portfolio while maintaining the specialized, hands-on management approach that defines Ameritrue's service model.",
    credentials: ["Strategic Growth", "Operations", "Portfolio Mgmt"],
  },
  {
    name: "Conner Jensen",
    initials: "CJ",
    title: "Lone Tree Companies",
    bio: "Full bio and details coming soon.",
    credentials: [],
    pending: true,
  },
];

// Team expertise areas
export const expertiseAreas = [
  {
    icon: "💰",
    title: "Capital Markets",
    description: "Construction loans, bridge financing, equity syndication, 506(b) structures",
  },
  {
    icon: "🗺️",
    title: "Land & Entitlements",
    description: "Agricultural rezoning, PUD approvals, municipal engagement, due diligence",
  },
  {
    icon: "🏗️",
    title: "Construction",
    description: "Horizontal & vertical builds, national builder partnerships, budget management",
  },
  {
    icon: "🏠",
    title: "Operations",
    description: "Lease-up, property management, maintenance, resident experience",
  },
];
