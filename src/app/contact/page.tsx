"use client";

import { useState } from "react";
import { contactInfo, activeMarkets, roleOptions } from "@/data/contact";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

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
    <>
      <header className="page-header">
        <div className="page-eyebrow">Contact</div>
        <h1>
          Let&apos;s build something <em>together</em>
        </h1>
        <p className="subtitle">
          Whether you&apos;re an investor exploring opportunities, a city seeking
          a development partner, or a builder looking to collaborate — we&apos;d
          welcome the conversation.
        </p>
      </header>

      <section className="section">
        <div className="section-inner">
          <div className="contact-grid">
            {/* LEFT — INFO */}
            <div className="contact-info">
              <h3>Get in touch</h3>
              {contactInfo.map((item) => (
                <div className="info-item" key={item.label}>
                  <div className="label">{item.label}</div>
                  <div className="value">
                    {item.href ? (
                      item.href.startsWith("http") ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.value}</a>
                      ) : (
                        <a href={item.href}>{item.value}</a>
                      )
                    ) : item.isHtml ? (
                      item.value.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: 40,
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-black)", marginBottom: 8 }}>
                  Active Markets
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "var(--dark-grey)" }}>
                  {activeMarkets}
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
              <p>We typically respond within one business day.</p>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" placeholder="First name" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" placeholder="Last name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" name="organization" placeholder="Company or municipality name" />
              </div>
              <div className="form-group">
                <label>I am a...</label>
                <select name="role" defaultValue="" required>
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roleOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us what you're looking for..." required />
              </div>

              {status === "sent" ? (
                <div style={{ padding: "14px 24px", background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.2)", borderRadius: 6, color: "#16a34a", fontSize: 14, fontWeight: 500 }}>
                  Message sent successfully. We&apos;ll be in touch soon.
                </div>
              ) : status === "error" ? (
                <>
                  <div style={{ padding: "14px 24px", background: "rgba(239,68,68,.08)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 6, color: "#dc2626", fontSize: 14, fontWeight: 500, marginBottom: 12 }}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                  <button type="submit" className="form-submit" disabled={status === "error"}>
                    Send Message &rarr;
                  </button>
                </>
              ) : (
                <button type="submit" className="form-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
