import Link from "next/link";
import InvestorCTA from "@/components/InvestorCTA";
import {
  heroStats,
  thesisPoints,
  municipalCards,
  platformEntities,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Real Estate Development &amp; Investment</div>
        <h1>
          Attainable housing, built through <em>city partnership</em>
        </h1>
        <p className="hero-sub">
          Lone Tree Companies is a vertically integrated real estate platform
          that acquires land, builds communities, and manages long-term assets —
          all in partnership with the cities where we operate.
        </p>
        <div className="hero-ctas">
          <Link href="/partner" className="cta-navy">
            Partner With Us <span>→</span>
          </Link>
          <Link href="/projects" className="cta-outline">
            View Projects
          </Link>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        {heroStats.map((stat) => (
          <div className="ticker-item" key={stat.label}>
            <div className="val">{stat.value}</div>
            <div className="lab">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* INVESTMENT THESIS */}
      <section className="section">
        <div className="section-inner thesis-grid">
          <div>
            <div className="section-label">Investment Thesis</div>
            <h2>
              We don&apos;t just build housing — we build{" "}
              <em>city-endorsed communities</em>
            </h2>
            <p style={{ marginTop: 16 }}>
              Every project begins with a conversation — with city councils,
              planning departments, and community leaders. We shape our
              developments around local needs, creating the housing people
              actually want, at prices they can actually afford.
            </p>
          </div>
          <div>
            {thesisPoints.map((point, i) => (
              <div className="thesis-point" key={point.title}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUNICIPAL PARTNERSHIP */}
      <section className="municipal">
        <div className="municipal-inner">
          <div className="section-label center">City Partnership</div>
          <h2>
            Why cities choose to <em>work with us</em>
          </h2>
          <p className="municipal-desc">
            We bring capital, construction capability, and long-term management
            to the table — but more importantly, we bring a willingness to
            listen and adapt to what communities actually need.
          </p>
          <div className="muni-grid">
            {municipalCards.map((card) => (
              <div className="muni-card" key={card.title}>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATED PLATFORM */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div className="section-label center">Integrated Platform</div>
            <h2>
              Four entities, <em>one mission</em>
            </h2>
          </div>
          <div className="platform-row">
            {platformEntities.map((entity, i) => (
              <div className="platform-entity" key={entity.name}>
                <h4>{entity.name}</h4>
                <div className="role">{entity.role}</div>
                <p>{entity.description}</p>
                {i < platformEntities.length - 1 && (
                  <div className="arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST FEATURE */}
      <section className="section section-grey">
        <div className="section-inner podcast-feature">
          <div className="podcast-text">
            <div className="section-label">From Our Founder</div>
            <h2>
              Hear the story behind <em>Lone Tree</em>
            </h2>
            <p className="podcast-desc">
              Lone Tree founder Jamis O&apos;Brien joined The Midnight Founders
              Podcast to talk about building a vertically integrated real estate
              platform, working alongside municipalities, and why attainable
              housing is the most compelling opportunity in the market today.
            </p>
            <div className="podcast-meta">
              <span className="podcast-show">The Midnight Founders Podcast</span>
              <span className="podcast-guest">ft. Jamis O&apos;Brien</span>
            </div>
            <div className="podcast-links">
              <a
                href="https://open.spotify.com/show/7vg92Muk9APLd2l6hW2pB3"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-link"
              >
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/the-midnight-founders-podcast/id1632490024"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-link"
              >
                Apple Podcasts
              </a>
              <a
                href="https://music.amazon.com/podcasts/67b443c3-5fb3-4c0a-970c-edb5fb718ec7/the-midnight-founders-podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-link"
              >
                Amazon Music
              </a>
            </div>
          </div>
          <div className="podcast-player">
            <div className="podcast-player-card">
              <div className="podcast-icon">🎙</div>
              <h4>The Midnight Founders Podcast</h4>
              <p>Jamis O&apos;Brien — Founder, Lone Tree Companies</p>
              <span className="podcast-topic">Real Estate &amp; Investing</span>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <InvestorCTA />
    </>
  );
}
