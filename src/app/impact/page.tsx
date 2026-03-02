import { featuredCase, approachItems, impactStories } from "@/data/impact";

export default function ImpactPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-eyebrow">Community Impact</div>
        <h1>
          Measured by communities built, not just <em>returns earned</em>
        </h1>
        <p className="subtitle">
          Every project tells two stories: the housing a community gained and the
          investment thesis that funded it. Here&apos;s how our model creates
          shared value across every market we enter.
        </p>
      </header>

      {/* FEATURED CASE STUDY */}
      <section className="section">
        <div className="section-inner">
          <div className="section-label">Featured Project</div>
          <div className="case-full">
            <div className="case-hero">
              <span className="loc-badge">{featuredCase.location}</span>
              <span className="placeholder">{featuredCase.imagePlaceholder}</span>
            </div>
            <div className="case-body">
              <h3>
                {featuredCase.title} <em>{featuredCase.titleEmphasis}</em>
              </h3>
              <p>{featuredCase.description}</p>
              <div className="case-metrics">
                {featuredCase.metrics.map((m) => (
                  <div className="case-metric" key={m.label}>
                    <div className="val">{m.value}</div>
                    <div className="lab">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="approach-pair">
            <div>
              <div className="section-label">Our Approach</div>
              <h2>
                Impact isn&apos;t a marketing exercise — it&apos;s our <em>business model</em>
              </h2>
              <p>
                When housing targets households earning $55K–$95K in metros with
                strong demographic tailwinds, the projects are better, the risk
                is lower, and the returns are more durable. That&apos;s the thesis.
              </p>
              <p>
                We deliver on promises, maintain communities long-term, and
                stay honest about what we&apos;re building and why — because
                that&apos;s what creates durable value for investors, residents,
                and the cities where we operate.
              </p>
            </div>
            <div>
              <ul className="approach-list">
                {approachItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label center">Impact Stories</div>
            <h2>
              What it looks like on the <em>ground</em>
            </h2>
          </div>
          <div className="impact-grid">
            {impactStories.map((story) => (
              <div className="impact-card" key={story.title}>
                <div className="tag">{story.tag}</div>
                <h4>{story.title}</h4>
                <p>{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
