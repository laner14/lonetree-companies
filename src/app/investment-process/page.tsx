import Link from "next/link";
import { processSteps, structureParams, whyLoneTree, disclosure } from "@/data/investment";

export default function InvestmentProcessPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-eyebrow">Investment Process</div>
        <h1>
          From inquiry to <em>allocation</em> — how it works
        </h1>
        <p className="subtitle">
          A transparent, institutional-quality process designed for accredited
          investors seeking exposure to attainable housing in high-growth
          secondary markets.
        </p>
      </header>

      {/* PROCESS STEPS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-label">The Process</div>
          <h2 style={{ marginBottom: 48 }}>Six steps to partnership</h2>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <div className="step-card" key={step.title}>
                <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="struct-grid">
            <div>
              <div className="section-label">Structure</div>
              <h2>
                How our investments are <em>structured</em>
              </h2>
              <p>
                Each project is structured as an independent Special Purpose
                Vehicle (SPV) under Regulation D, Rule 506(b) — a well-established
                private placement framework that allows accredited investors to
                participate in specific development opportunities. What
                distinguishes Lone Tree is full GP capability: we don&apos;t just
                raise capital — we source, entitle, build, and manage every asset
                in the portfolio.
              </p>
              <p>
                This structure provides clear asset isolation between projects,
                transparent fee structures, and a defined investment lifecycle from
                construction through stabilized disposition.
              </p>
            </div>
            <div>
              <ul className="params">
                {structureParams.map((param) => (
                  <li key={param.label}>
                    <span className="label">{param.label}</span>
                    <span className="value">{param.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="disc-box">
            <h4>Important Disclosure</h4>
            <p>{disclosure}</p>
          </div>
        </div>
      </section>

      {/* WHY LONE TREE */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label center">Why Lone Tree</div>
            <h2>
              What sets our platform <em>apart</em>
            </h2>
          </div>
          <div className="why-lt-grid">
            {whyLoneTree.map((item, i) => (
              <div className="why-lt-card" key={item.title}>
                <div className="why-lt-num">{String(i + 1).padStart(2, "0")}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 500, marginBottom: 16 }}>
            Ready to learn more?
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-body)", fontWeight: 300, maxWidth: 500, margin: "0 auto 32px" }}>
            Start with a conversation. No commitments, no pressure — just an
            honest look at whether our model fits your objectives.
          </p>
          <Link href="/contact" className="cta-navy">
            Schedule a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
