import { teamMembers, expertiseAreas } from "@/data/team";

export default function TeamPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <header className="page-header">
        <div className="page-eyebrow">Our Team</div>
        <h1>
          Operators who build, not just <em>allocate</em>
        </h1>
        <p className="subtitle">
          Every member of the Lone Tree team has direct experience in the
          disciplines that drive our platform — from land acquisition and
          construction to capital markets and property operations.
        </p>
      </header>

      {/* TEAM MEMBERS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-label">Our People</div>
          <h2 style={{ marginBottom: 40 }}>
            The team behind <em>every project</em>
          </h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-photo-sq">
                  <div className="initials">{member.initials}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="title">{member.title}</div>
                  <p style={member.pending ? { color: "var(--grey)", fontStyle: "italic" } : undefined}>
                    {member.bio}
                  </p>
                  {member.pending ? (
                    <div className="placeholder-badge">Profile Pending</div>
                  ) : (
                    <div className="creds">
                      {member.credentials.map((cred) => (
                        <span key={cred}>{cred}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section section-grey">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label center">Collective Expertise</div>
            <h2>What our team knows</h2>
          </div>
          <div className="expertise-grid">
            {expertiseAreas.map((area) => (
              <div className="exp-card" key={area.title}>
                <div className="icon">{area.icon}</div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
