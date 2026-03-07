import { getPublishedProjects } from "@/data/projects";

export const metadata = {
  title: "Projects — Lone Tree Companies",
  description:
    "Active developments across Kentucky, Kansas, and Iowa — attainable build-to-rent housing in secondary markets.",
};

function statusColor(status: string) {
  const map: Record<string, string> = {
    "Land Control": "#8B7355",
    Entitlement: "#6B8CAE",
    "Capital Raise": "#C4872A",
    "Pre-Construction": "#5B8A6E",
    Construction: "#4A7A9B",
    Stabilized: "#2E6B4F",
    Sold: "#1A2B3C",
  };
  return map[status] ?? "#1A2B3C";
}

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <style>{`
        .projects-hero {
          background: #0F1F2E;
          padding: 120px 0 72px;
        }
        .projects-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .projects-hero .section-label {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C4872A;
          margin-bottom: 16px;
        }
        .projects-hero h1 {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .projects-hero p {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 16px;
          color: rgba(255,255,255,0.55);
          max-width: 540px;
          line-height: 1.7;
        }
        .projects-grid-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 32px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px;
        }
        .project-card {
          background: #fff;
          border: 1px solid #E8E2D9;
          padding: 40px;
          text-decoration: none;
          display: block;
          transition: box-shadow 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
        }
        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #C4872A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          box-shadow: 0 8px 40px rgba(15,31,46,0.12);
          transform: translateY(-3px);
        }
        .project-card:hover::after { transform: scaleX(1); }
        .card-status {
          display: inline-block;
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
          color: #fff;
          margin-bottom: 20px;
        }
        .card-name {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 26px;
          font-weight: 400;
          color: #0F1F2E;
          margin: 0 0 8px;
          line-height: 1.2;
        }
        .card-location {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 13px;
          color: #7A6E5E;
          margin-bottom: 20px;
        }
        .card-tagline {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 14px;
          line-height: 1.65;
          color: #5A5148;
          margin-bottom: 28px;
        }
        .card-kpis {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid #F0EAE0;
        }
        .card-kpi-value {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 20px;
          color: #0F1F2E;
        }
        .card-kpi-label {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9A8E80;
          margin-top: 2px;
        }
        .card-arrow {
          position: absolute;
          top: 40px; right: 40px;
          font-size: 18px;
          color: #C4872A;
          opacity: 0;
          transition: opacity 0.25s, transform 0.25s;
        }
        .project-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(4px);
        }
      `}</style>

      <section className="projects-hero">
        <div className="projects-hero-inner">
          <div className="section-label">Portfolio</div>
          <h1>Active Developments</h1>
          <p>
            Build-to-rent communities across Kentucky, Kansas, and Iowa —
            attainable housing in high-demand secondary markets.
          </p>
        </div>
      </section>

      <div className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <span className="card-arrow">→</span>
              <div
                className="card-status"
                style={{ background: statusColor(project.status) }}
              >
                {project.status}
              </div>
              <div className="card-name">{project.name}</div>
              <div className="card-location">{project.location}</div>
              <p className="card-tagline">{project.tagline}</p>
              <div className="card-kpis">
                {project.kpis.slice(0, 4).map((kpi) => (
                  <div key={kpi.label}>
                    <div className="card-kpi-value">{kpi.value}</div>
                    <div className="card-kpi-label">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
