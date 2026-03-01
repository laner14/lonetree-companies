"use client";

import { useState } from "react";
import {
  projects,
  projectSummary,
  filterOptions,
  categoryHeaders,
} from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered = activeFilter === "All Projects"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  const activeProjects = filtered.filter((p) => p.category === "active");
  const devProjects = filtered.filter((p) => p.category === "development");

  return (
    <>
      {/* PAGE HEADER */}
      <header className="page-header">
        <div className="page-eyebrow">Our Portfolio</div>
        <h1>
          Building attainable communities across <em>four states</em>
        </h1>
        <p className="subtitle">
          From entitled land to stabilized assets — each project reflects
          municipal alignment, demographic-driven design, and disciplined
          execution.
        </p>
      </header>

      {/* PROJECTS CONTENT */}
      <section className="section">
        <div className="section-inner">
          {/* Summary stats */}
          <div className="summary-bar" style={{ borderBottom: "1px solid var(--border)", marginBottom: 56 }}>
            {projectSummary.map((stat) => (
              <div className="summary-item" key={stat.label}>
                <div className="val">{stat.value}</div>
                <div className="lab">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filter bar */}
          <div className="filter-bar">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                className={`filter-btn${activeFilter === opt ? " active" : ""}`}
                onClick={() => setActiveFilter(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Active Construction */}
          {activeProjects.length > 0 && (
            <>
              <div className="category-header">
                <h3>{categoryHeaders.active.title}</h3>
                <div className="cat-count">{categoryHeaders.active.subtitle}</div>
              </div>
              <div className="project-grid">
                {activeProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} statusClass="status-construction" />
                ))}
              </div>
            </>
          )}

          {/* In Development */}
          {devProjects.length > 0 && (
            <>
              <div className="category-header">
                <h3>{categoryHeaders.development.title}</h3>
                <div className="cat-count">{categoryHeaders.development.subtitle}</div>
              </div>
              <div className="project-grid">
                {devProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} statusClass="status-dev" />
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--grey)", padding: "60px 0" }}>
              No projects match this filter.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function ProjectCard({
  project,
  statusClass,
}: {
  project: (typeof projects)[number];
  statusClass: string;
}) {
  return (
    <div className="project-card">
      <div className="project-img">
        <span className="placeholder">{project.imagePlaceholder}</span>
        <span className={`project-status ${statusClass}`}>{project.status}</span>
      </div>
      <div className="project-body">
        <div className="project-location">{project.location}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-stats">
          {project.stats.map((stat) => (
            <div className="project-stat" key={stat.label}>
              <div className="num">{stat.value}</div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
