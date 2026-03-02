// ============================================================
// PROJECTS DATA — Edit this file when project statuses change
// Update status, stats, or descriptions each quarter
// ============================================================

export type ProjectStatus = "Delivering" | "Capital Raise" | "Engineering" | "Design" | "Pre-Development" | "Entitled" | "Civil Design" | "Stabilized";
export type ProjectCategory = "active" | "development";
export type ProjectType = "BTR" | "MFG" | "Lots" | "SFR";

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  location: string;
  state: string;
  status: ProjectStatus;
  category: ProjectCategory;
  type: ProjectType;
  description: string;
  stats: ProjectStat[];
  imagePlaceholder: string;
  tags: string[]; // for filtering: "Build-to-Rent", "Builder Disposition", "JV Development", state name
}

// Summary bar stats — update these as totals change
export const projectSummary = [
  { value: "8", label: "Active Projects" },
  { value: "1,100+", label: "Total Units" },
  { value: "4", label: "States" },
];

// Filter categories
export const filterOptions = [
  "All Projects",
  "Build-to-Rent",
  "Builder Disposition",
  "JV Development",
  "Kentucky",
  "Kansas",
  "Iowa",
  "Washington",
];

// Category headers
export const categoryHeaders = {
  active: {
    title: "Active Construction",
    subtitle: "2 projects — Washington JV developments with units delivering",
  },
  development: {
    title: "In Development",
    subtitle: "6 projects — BTR communities and builder dispositions across KY, KS, and IA",
  },
};

// ============================================================
// PROJECT LISTINGS — Add, remove, or edit projects below
// ============================================================
export const projects: Project[] = [
  // --- ACTIVE CONSTRUCTION ---
  {
    name: "Sunridge",
    location: "Kennewick, Washington",
    state: "Washington",
    status: "Delivering",
    category: "active",
    type: "BTR",
    description: "Large-scale build-to-rent community in the Tri-Cities market featuring bungalows, townhomes, and detached single-family homes. Joint venture partnership with 118 of 166 units delivered.",
    stats: [
      { value: "166", label: "Total Units" },
      { value: "30", label: "Acres" },
      { value: "BTR", label: "Type" },
    ],
    imagePlaceholder: "Project Photography",
    tags: ["Build-to-Rent", "JV Development", "Washington"],
  },
  {
    name: "The Meadows",
    location: "Sunnyside, Washington",
    state: "Washington",
    status: "Delivering",
    category: "active",
    type: "MFG",
    description: "Manufactured housing community in the Yakima Valley serving the agricultural and regional workforce. Joint venture partnership with 45 of 88 units delivered.",
    stats: [
      { value: "88", label: "Total Units" },
      { value: "15", label: "Acres" },
      { value: "MFG", label: "Type" },
    ],
    imagePlaceholder: "Project Photography",
    tags: ["JV Development", "Washington"],
  },

  // --- IN DEVELOPMENT ---
  {
    name: "Hampton Hills",
    location: "Richmond, Kentucky",
    state: "Kentucky",
    status: "Capital Raise",
    category: "development",
    type: "BTR",
    description: "Flagship cottage-style BTR community on a 87-acre site along the I-75 corridor south of Lexington. Three floor plans designed for working families. Capital raise closing with site work beginning Spring 2026.",
    stats: [
      { value: "97", label: "BTR Units" },
      { value: "22", label: "BTR Acres" },
      { value: "BTR", label: "Type" },
    ],
    imagePlaceholder: "Rendering Coming Soon",
    tags: ["Build-to-Rent", "Kentucky"],
  },
  {
    name: "Oak Hills",
    location: "Elizabethtown, Kentucky",
    state: "Kentucky",
    status: "Engineering",
    category: "development",
    type: "BTR",
    description: "Mixed-use residential development on 100 acres along the I-65 corridor south of Louisville. 128 townhomes and single-family rentals. Horizontal engineering underway with construction targeted for late 2026.",
    stats: [
      { value: "128", label: "Units" },
      { value: "100", label: "Acres" },
      { value: "BTR", label: "Type" },
    ],
    imagePlaceholder: "Project Rendering",
    tags: ["Build-to-Rent", "Kentucky"],
  },
  {
    name: "Woodgate",
    location: "Richmond, Kentucky",
    state: "Kentucky",
    status: "Design",
    category: "development",
    type: "BTR",
    description: "Single-family BTR community serving the Richmond/Lexington corridor. Entitlements complete with horizontal design underway. Complements Hampton Hills in a proven market with strong rental demand.",
    stats: [
      { value: "97", label: "BTR Units" },
      { value: "SFR", label: "Product" },
      { value: "BTR", label: "Type" },
    ],
    imagePlaceholder: "Project Rendering",
    tags: ["Build-to-Rent", "Kentucky"],
  },
  {
    name: "Maple Heights",
    location: "Norwalk, Iowa",
    state: "Iowa",
    status: "Pre-Development",
    category: "development",
    type: "BTR",
    description: "Phase 1 of a 128-acre master plan in one of the Des Moines metro's fastest-growing suburbs. 100 townhome-style BTR units with strong population growth and collaborative city leadership.",
    stats: [
      { value: "100", label: "Phase 1 Units" },
      { value: "128", label: "Total Acres" },
      { value: "BTR", label: "Type" },
    ],
    imagePlaceholder: "Site Plat Available",
    tags: ["Build-to-Rent", "Iowa"],
  },
  {
    name: "Redbud",
    location: "Kansas City, Kansas",
    state: "Kansas",
    status: "Entitled",
    category: "development",
    type: "Lots",
    description: "Twin-home lot development in the Kansas City metro with executed national builder takedown agreements. Fully entitled with construction targeted for April 2026. Delivering finished lots to America's largest homebuilder.",
    stats: [
      { value: "120", label: "Units" },
      { value: "22", label: "Acres" },
      { value: "Lots", label: "Type" },
    ],
    imagePlaceholder: "Final Plat Complete",
    tags: ["Builder Disposition", "Kansas"],
  },
  {
    name: "Magnolia Fields",
    location: "Gardner, Kansas",
    state: "Kansas",
    status: "Civil Design",
    category: "development",
    type: "Lots",
    description: "Townhome and duplex lot development in one of the KC metro's fastest-growing suburbs. Civil design underway with national builder takedown agreements in place. Construction targeted for Summer 2026.",
    stats: [
      { value: "118", label: "Units" },
      { value: "18", label: "Acres" },
      { value: "Lots", label: "Type" },
    ],
    imagePlaceholder: "Site Plan Available",
    tags: ["Builder Disposition", "Kansas"],
  },
];
