import { timeline, values, geographies, aboutPlatformEntities } from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-eyebrow">About Lone Tree</div>
        <h1>
          Built on the belief that <em>attainable housing</em> is an investment thesis
        </h1>
        <p className="subtitle">
          We partner with cities, deploy institutional-quality capital, and build
          communities where working families can afford to live well — in the
          high-growth secondary markets most developers overlook.
        </p>
      </header>

      {/* ORIGIN STORY + TIMELINE */}
      <section className="section">
        <div className="section-inner origin-grid">
          <div className="origin-text">
            <div className="section-label">Our Story</div>
            <h2>A platform built for <em>what&apos;s missing</em></h2>
            <p>America&apos;s housing shortage isn&apos;t concentrated in Manhattan or San Francisco. It&apos;s in the secondary markets where household formation is strong, price-to-income ratios are favorable, and cooperative municipalities are eager for quality residential development.</p>
            <p>Lone Tree was founded in 2020 to fill that gap. Not with subsidized housing or tax credit complexity, but with market-rate communities designed around real local incomes and built through genuine city partnership. From a single land acquisition in Kentucky, we&apos;ve grown into a vertically integrated, multi-state development platform.</p>
            <p>Today, our four-entity platform manages every phase of the development lifecycle — from demographic-driven site selection through construction, lease-up, and long-term property management.</p>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-alt">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label center">Our Values</div>
            <h2>What drives every decision</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", fontWeight: 300, maxWidth: 600, margin: "12px auto 0" }}>
              These aren&apos;t aspirational. They&apos;re operational — embedded in how we source, build, and manage.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div className="section-label center">Integrated Platform</div>
            <h2>Four entities. One accountability chain.</h2>
            <p style={{ fontSize: 16, color: "var(--dark-grey)", fontWeight: 300, marginTop: 8 }}>
              Every phase of the development lifecycle is managed within our platform.
            </p>
          </div>
          <div className="entity-flow">
            {aboutPlatformEntities.map((entity, i) => (
              <div className="entity-block" key={entity.name}>
                <h4>{entity.name}</h4>
                <div className="role">{entity.role}</div>
                <p>{entity.description}</p>
                {i < aboutPlatformEntities.length - 1 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section className="section section-alt">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label center">Where We Build</div>
            <h2>Active markets across <em>four states</em></h2>
            <p style={{ fontSize: 16, color: "var(--text-body)", fontWeight: 300, maxWidth: 600, margin: "12px auto 0" }}>
              High-growth secondary markets with strong employment, household formation, and municipal partnership — from the Midwest to the Pacific Northwest.
            </p>
          </div>
          <div className="geo-grid">
            {geographies.map((geo) => (
              <div className="geo-card" key={geo.state}>
                <div className="state">{geo.state}</div>
                <h4>{geo.region}</h4>
                <p>{geo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
