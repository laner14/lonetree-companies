import Link from "next/link";
import {
  investorTrack,
  municipalTrack,
  proTrack,
  whyCards,
  faqs,
  partnerQuote,
} from "@/data/partner";

export default function PartnerPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <header className="page-header">
        <div className="page-eyebrow">Partner with Lone Tree</div>
        <h1>
          Three ways to build <em>with us</em>
        </h1>
        <p className="subtitle">
          Whether you deploy capital, run a city, or bring a shovel — our model
          works because the right partners are at the table. Find where you fit.
        </p>
      </header>

      {/* PARTNERSHIP TRACKS */}
      <section className="section">
        <div className="section-inner">
          <div className="track-grid">
            {/* Investor Track */}
            <div className="track-card track-investor">
              <div className="track-badge badge-investor">{investorTrack.badge}</div>
              <h3>
                {investorTrack.heading} <em>{investorTrack.headingEmphasis}</em>
              </h3>
              <p>{investorTrack.description}</p>
              <ul className="track-list">
                {investorTrack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={investorTrack.ctaHref} className="track-cta-investor">
                {investorTrack.ctaLabel}
              </Link>
            </div>

            {/* Municipal Track */}
            <div className="track-card track-municipal">
              <div className="track-badge badge-municipal">{municipalTrack.badge}</div>
              <h3>
                {municipalTrack.heading} <em>{municipalTrack.headingEmphasis}</em>
              </h3>
              <p>{municipalTrack.description}</p>
              <ul className="track-list">
                {municipalTrack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={municipalTrack.ctaHref} className="track-cta-municipal">
                {municipalTrack.ctaLabel}
              </Link>
            </div>
          </div>

          {/* Professional Partners Track */}
          <div className="pro-track">
            <div>
              <div className="track-badge badge-pro">{proTrack.badge}</div>
              <h3>
                {proTrack.heading} <em>{proTrack.headingEmphasis}</em>
              </h3>
              <p>{proTrack.description}</p>
              <Link href={proTrack.ctaHref} className="track-cta-pro">
                {proTrack.ctaLabel}
              </Link>
            </div>
            <div>
              <div className="pro-categories">
                {proTrack.categories.map((cat) => (
                  <div className="pro-cat" key={cat.label}>
                    <span className="icon">{cat.icon}</span> {cat.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="quote-block">
            <blockquote>&ldquo;{partnerQuote.text}&rdquo;</blockquote>
            <cite>{partnerQuote.attribution}</cite>
          </div>
        </div>
      </section>

      {/* WHY LONE TREE */}
      <section className="section section-grey">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label center">Why Lone Tree</div>
            <h2>
              What makes our partnerships <em>work</em>
            </h2>
          </div>
          <div className="why-grid">
            {whyCards.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label center">Frequently Asked</div>
            <h2>Common questions</h2>
          </div>
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
