"use client";

import { useState } from "react";
import Link from "next/link";

export default function InvestorCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source", "Homepage Investor CTA");

    try {
      const res = await fetch("https://formspree.io/f/PLACEHOLDER_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="investor-cta">
      <div className="investor-cta-inner">
        <div className="investor-cta-text">
          <div className="section-label" style={{ color: "rgba(255,255,255,.5)" }}>
            <span style={{ display: "inline-block", width: 20, height: 2, background: "rgba(255,255,255,.3)", marginRight: 10 }} />
            For Accredited Investors
          </div>
          <h2>Interested in investing alongside us?</h2>
          <p>
            Lone Tree offers accredited investors direct access to
            institutional-quality real estate development — attainable housing
            communities in high-growth secondary markets with strong demographic
            tailwinds and built-in demand.
          </p>
          <ul className="investor-cta-points">
            <li>506(b) SPV structures with a 4–5 year horizon</li>
            <li>$25–30M typical project size</li>
            <li>Vertically integrated — we build what we raise for</li>
          </ul>
          <Link href="/investment-process" className="investor-cta-link">
            View Our Investment Process →
          </Link>
        </div>

        <div className="investor-cta-form-wrap">
          {status === "sent" ? (
            <div className="investor-cta-success">
              <h4>Thank you for your interest.</h4>
              <p>
                We&apos;ll be in touch within one business day with details on
                our current investment opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h4>Request Investment Details</h4>
              <p>We&apos;ll send you an overview of our current opportunities.</p>
              <div className="investor-form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="investor-form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Request Details →"}
              </button>
              {status === "error" && (
                <p className="investor-form-error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <p className="investor-form-disc">
                For accredited investors only. This is not an offer to sell securities.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
