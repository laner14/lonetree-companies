// ============================================================
// PARTNER DATA — Edit partnership tracks, FAQs, etc.
// ============================================================

export interface PartnerTrack {
  badge: string;
  badgeType: "investor" | "municipal" | "pro";
  heading: string;
  headingEmphasis: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const investorTrack: PartnerTrack = {
  badge: "For Investors",
  badgeType: "investor",
  heading: "Invest in",
  headingEmphasis: "attainable housing",
  description: "Institutional-quality real estate investment backed by $20M in private capital raised to date. Diversified exposure to one of America's most undersupplied asset classes — attainable housing in high-growth secondary markets with strong demographic tailwinds.",
  items: [
    "506(b) SPV structures with institutional-grade underwriting",
    "$25–30M typical project size with 4–5 year investment horizon",
    "Integrated platform manages every phase — reducing execution risk",
    "Municipal alignment creates durable entitlements and faster approvals",
    "Transparent fee structures benchmarked against industry standards",
    "Active pipeline across Kentucky, Kansas, and Iowa",
  ],
  ctaLabel: "View Investment Process →",
  ctaHref: "/investment-process",
};

export const municipalTrack: PartnerTrack = {
  badge: "For Cities & Municipalities",
  badgeType: "municipal",
  heading: "A development partner that",
  headingEmphasis: "listens first",
  description: "We don't arrive with a finished plan and ask you to approve it. We engage city leadership early — before acquisition — to shape projects around community needs, zoning goals, and growth priorities. Then we design, finance, and build the housing that answers it.",
  items: [
    "Pre-development engagement before land acquisition",
    "Community plans shaped by local zoning goals and growth priorities",
    "Attainable rents calibrated to local workforce incomes ($55K–$95K HHI)",
    "Market-rate housing — no subsidies, no LIHTC complexity",
    "In-house property management for long-term community stewardship",
    "Single point of contact from entitlement through operations",
  ],
  ctaLabel: "Start a Conversation →",
  ctaHref: "/contact",
};

export const proTrack = {
  badge: "For Professional & Development Partners",
  heading: "Grow with us as we",
  headingEmphasis: "enter new markets",
  description: "As Lone Tree expands into new metros, we build local teams from the ground up — sourcing trusted professionals who share our standards for quality, reliability, and collaborative execution. If you're established in your market and looking for a long-term development relationship, we'd like to hear from you.",
  ctaLabel: "Introduce Yourself →",
  ctaHref: "/contact",
  categories: [
    { icon: "🗺️", label: "Land Brokers & Sourcing" },
    { icon: "🏗️", label: "Residential Builders" },
    { icon: "🚜", label: "Horizontal Contractors" },
    { icon: "📐", label: "Civil Engineers" },
    { icon: "🔌", label: "Franchise Utilities" },
    { icon: "⚖️", label: "Land Use Attorneys" },
    { icon: "📊", label: "Surveyors & Geotech" },
    { icon: "🏠", label: "Architectural Design" },
  ],
};

export const whyCards = [
  {
    icon: "🔗",
    title: "Integrated Platform",
    description: "Four companies managing every phase under one roof. One team accountable for outcomes from land acquisition through stabilized operations.",
  },
  {
    icon: "🏛️",
    title: "Municipal Alignment",
    description: "Our collaborative approach creates genuine city support — accelerating entitlements, reducing political risk, and building long-term development relationships.",
  },
  {
    icon: "📊",
    title: "Institutional Discipline",
    description: "Every deal underwritten to institutional standards with transparent fee structures, conservative cost basis, and rigorous project management.",
  },
];

export const faqs = [
  {
    question: "What markets do you operate in?",
    answer: "We focus on high-growth secondary markets 30–40 minutes from major metros. Currently active in Kentucky (Richmond, Elizabethtown), Kansas (Gardner, KC metro), and Iowa (Norwalk), with expansion plans across the Midwest and Southeast.",
  },
  {
    question: "What is \"attainable housing\"?",
    answer: "Attainable housing serves households earning $55K–$95K annually — the teachers, nurses, first responders, and tradespeople who are the backbone of growing communities. Our rents are market-rate without requiring subsidies or tax credit programs.",
  },
  {
    question: "How do you work with cities?",
    answer: "We engage municipal leadership before acquiring land — understanding local housing needs, zoning preferences, and growth goals. This collaborative approach means our projects reflect community input from the start, not after the fact.",
  },
  {
    question: "What is the typical investment structure?",
    answer: "Projects are structured as 506(b) SPVs with a 4–5 year build-stabilize-sell horizon. Typical project size is $25–30M total development cost.",
  },
  {
    question: "How do you vet new professional partners?",
    answer: "When we enter a new market, we evaluate local partners on track record, references, capacity, and alignment with our standards. Initial outreach leads to a discovery call, followed by a more detailed vetting process before we engage on a live project. We value long-term relationships over one-off transactions.",
  },
  {
    question: "Who manages the properties after construction?",
    answer: "Our in-house property management entity, Ameritrue, handles all lease-up, maintenance, and resident operations. This ensures long-term community quality and gives our city partners confidence in ongoing stewardship.",
  },
];

export const partnerQuote = {
  text: "The best developments are the ones where the city, the residents, and the investors all succeed. That alignment isn't a happy accident — it's how we design every project from day one.",
  attribution: "— Lone Tree Companies",
};
