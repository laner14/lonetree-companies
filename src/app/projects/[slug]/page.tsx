import { notFound } from "next/navigation";
import { getProject, getPublishedProjects } from "@/data/projects";

export async function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Lone Tree Companies`,
    description: project.tagline,
  };
}

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const hasImages = project.images.length > 0;

  return (
    <>
      <style>{`
        .project-hero {
          background: #0F1F2E;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .project-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(196,135,42,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .project-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .project-breadcrumb {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 28px;
        }
        .project-breadcrumb a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .project-breadcrumb a:hover { color: #C4872A; }
        .project-breadcrumb span { margin: 0 10px; }
        .project-status-badge {
          display: inline-block;
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 3px;
          margin-bottom: 20px;
          color: #fff;
        }
        .project-hero h1 {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .project-hero-meta {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 16px;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }
        .kpi-bar {
          background: #fff;
          border-bottom: 1px solid #E8E2D9;
        }
        .kpi-bar-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          border-left: 1px solid #E8E2D9;
        }
        .kpi-item {
          padding: 32px 28px;
          border-right: 1px solid #E8E2D9;
          border-bottom: 1px solid #E8E2D9;
        }
        .kpi-value {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 30px;
          font-weight: 400;
          color: #0F1F2E;
          line-height: 1;
          margin-bottom: 6px;
        }
        .kpi-label {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A6E5E;
        }
        .kpi-sub {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          color: #C4872A;
          margin-top: 3px;
        }
        .project-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .project-body { grid-template-columns: 1fr; gap: 56px; }
        }
        .section-label-sm {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C4872A;
          margin-bottom: 16px;
        }
        .project-body h2 {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 28px;
          font-weight: 400;
          color: #0F1F2E;
          margin: 0 0 20px;
        }
        .project-overview p {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 17px;
          line-height: 1.75;
          color: #3A3328;
          margin-bottom: 40px;
        }
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .highlights-list li {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 15px;
          line-height: 1.65;
          color: #3A3328;
          padding: 14px 0 14px 24px;
          border-bottom: 1px solid #F0EAE0;
          position: relative;
        }
        .highlights-list li:first-child { border-top: 1px solid #F0EAE0; }
        .highlights-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #C4872A;
          font-weight: 700;
        }
        .project-sidebar-card {
          background: #0F1F2E;
          padding: 36px;
          position: sticky;
          top: 100px;
        }
        .sidebar-card-label {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 8px;
        }
        .sidebar-card-value {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 18px;
          color: #fff;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sidebar-cta {
          display: block;
          width: 100%;
          text-align: center;
          background: #C4872A;
          color: #fff;
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 16px;
          text-decoration: none;
          margin-top: 28px;
          transition: background 0.2s;
        }
        .sidebar-cta:hover { background: #B07620; }
        .sidebar-note {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          margin-top: 14px;
          line-height: 1.5;
        }
        .project-gallery {
          background: #F7F3EE;
          padding: 80px 0;
        }
        .project-gallery-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          margin-top: 40px;
        }
        .gallery-item {
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #E8E2D9;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .gallery-item:hover img { transform: scale(1.03); }
        .gallery-caption {
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 12px;
          color: #7A6E5E;
          margin-top: 8px;
        }
      `}</style>

      <section className="project-hero">
        <div className="project-hero-inner">
          <div className="project-breadcrumb">
            <a href="/projects">Projects</a>
            <span>/</span>
            {project.name}
          </div>
          <div className="project-status-badge" style={{ background: statusColor(project.status) }}>
            {project.status}
          </div>
          <h1>{project.name}</h1>
          <p className="project-hero-meta">
            {project.location} &nbsp;·&nbsp; {project.market}
          </p>
        </div>
      </section>

      <div className="kpi-bar">
        <div className="kpi-bar-inner">
          {project.kpis.map((kpi) => (
            <div className="kpi-item" key={kpi.label}>
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-label">{kpi.label}</div>
              {kpi.sub && <div className="kpi-sub">{kpi.sub}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="project-body">
        <div>
          <div className="project-overview">
            <div className="section-label-sm">Overview</div>
            <h2>About this development</h2>
            <p>{project.overview}</p>
          </div>
          <div>
            <div className="section-label-sm">Investment Highlights</div>
            <h2>Why this deal</h2>
            <ul className="highlights-list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside>
          <div className="project-sidebar-card">
            <div className="sidebar-card-label">Development</div>
            <div className="sidebar-card-value">{project.name}</div>
            <div className="sidebar-card-label">Location</div>
            <div className="sidebar-card-value">{project.location}</div>
            <div className="sidebar-card-label">Status</div>
            <div className="sidebar-card-value">{project.status}</div>
            <a className="sidebar-cta" href="/partner">Inquire About This Deal</a>
            <p className="sidebar-note">
              This offering is available to accredited investors only. For qualification details, please contact our investor relations team.
            </p>
          </div>
        </aside>
      </div>

      {hasImages && (
        <section className="project-gallery">
          <div className="project-gallery-inner">
            <div className="section-label-sm">Photography</div>
            <h2 style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)", fontSize: 28, fontWeight: 400, color: "#0F1F2E", margin: "0 0 8px" }}>
              Site &amp; Development
            </h2>
            <div className="gallery-grid">
              {project.images.map((img, i) => (
                <div key={i}>
                  <div className="gallery-item">
                    <img src={img.src} alt={img.caption ?? project.name} />
                  </div>
                  {img.caption && <p className="gallery-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div style={{ background: "#F7F3EE", padding: "48px 32px", textAlign: "center" }}>
        <a href="/projects" style={{ fontFamily: "var(--font-body, 'Lato', sans-serif)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F1F2E", textDecoration: "none", borderBottom: "1px solid #0F1F2E", paddingBottom: 2 }}>
          ← Back to All Projects
        </a>
      </div>
    </>
  );
}
