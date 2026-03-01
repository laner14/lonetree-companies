"use client";

import { contactInfo, activeMarkets, roleOptions } from "@/data/contact";

export default function ContactPage() {
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
                      <a href={item.href}>{item.value}</a>
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
            <div className="contact-form">
              <h3>Send us a message</h3>
              <p>We typically respond within one business day.</p>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" placeholder="Company or municipality name" />
              </div>
              <div className="form-group">
                <label>I am a...</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roleOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us what you're looking for..." />
              </div>
              <button type="button" className="form-submit">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
