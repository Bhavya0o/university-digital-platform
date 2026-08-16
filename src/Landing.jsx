import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy: #080D1E;
          --navy-2: #0F1629;
          --navy-card: #131929;
          --indigo: #6366F1;
          --indigo-light: #818CF8;
          --indigo-glow: rgba(99,102,241,0.18);
          --amber: #F59E0B;
          --white: #FFFFFF;
          --muted: #94A3B8;
          --border: rgba(255,255,255,0.07);
          --glass-bg: rgba(255,255,255,0.04);
          --glass-border: rgba(255,255,255,0.10);
        }

        html { scroll-behavior: smooth; }

        body { background: var(--navy); color: var(--white);
          font-family: 'Inter', sans-serif; overflow-x: hidden; }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 5%;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
          background: rgba(8,13,30,0.72);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border);
        }
        .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-brand-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: linear-gradient(135deg, var(--indigo), #8B5CF6);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .nav-brand-name {
          font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1.1rem;
          color: var(--white);
        }
        .nav-right { display: flex; align-items: center; gap: 28px; }
        .nav-link {
          color: var(--muted); font-size: 0.875rem; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: var(--white); }
        .btn-nav {
          background: var(--indigo); color: var(--white);
          border: none; border-radius: 8px;
          padding: 9px 22px; font-size: 0.875rem; font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer; transition: background 0.2s, transform 0.15s;
        }
        .btn-nav:hover { background: var(--indigo-light); transform: translateY(-1px); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          justify-content: center; text-align: center;
          padding: 120px 5% 80px;
          position: relative; overflow: hidden;
        }
        .hero-orb-1 {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          top: -100px; left: 50%; transform: translateX(-50%);
          pointer-events: none;
        }
        .hero-orb-2 {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%);
          bottom: 80px; right: 8%;
          pointer-events: none;
        }
        .hero-ring {
          position: absolute; width: 720px; height: 720px;
          border-radius: 50%; border: 1px solid rgba(99,102,241,0.14);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          animation: spin-slow 28s linear infinite;
          pointer-events: none;
        }
        .hero-ring::after {
          content: ''; position: absolute; width: 10px; height: 10px;
          border-radius: 50%; background: var(--indigo-light);
          top: -5px; left: 50%; transform: translateX(-50%);
          box-shadow: 0 0 12px 4px var(--indigo);
        }
        @keyframes spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }

        .hero-inner { position: relative; z-index: 2; max-width: 780px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--glass-bg); border: 1px solid var(--glass-border);
          border-radius: 100px; padding: 6px 16px 6px 10px;
          font-size: 0.78rem; font-weight: 500; color: var(--indigo-light);
          margin-bottom: 32px; backdrop-filter: blur(8px);
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--indigo-light);
          box-shadow: 0 0 6px 2px var(--indigo);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

        .hero-h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .hero-h1 span {
          background: linear-gradient(90deg, var(--indigo-light), #A78BFA, var(--amber));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: 1.05rem; color: var(--muted); line-height: 1.7;
          max-width: 580px; margin: 0 auto 40px; font-weight: 400;
        }
        .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          background: linear-gradient(135deg, var(--indigo), #8B5CF6);
          color: var(--white); border: none; border-radius: 10px;
          padding: 14px 32px; font-size: 0.95rem; font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer; transition: opacity 0.2s, transform 0.15s;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 24px rgba(99,102,241,0.35);
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .btn-ghost {
          background: var(--glass-bg); color: var(--white);
          border: 1px solid var(--glass-border); border-radius: 10px;
          padding: 14px 32px; font-size: 0.95rem; font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer; transition: background 0.2s, transform 0.15s;
          backdrop-filter: blur(8px);
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

        /* Hero mockup card */
        .hero-mockup {
          margin-top: 64px; position: relative; z-index: 2;
        }
        .mockup-card {
          background: var(--navy-card);
          border: 1px solid var(--glass-border);
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--border);
          max-width: 820px; margin: 0 auto;
        }
        .mockup-bar {
          background: rgba(255,255,255,0.04); padding: 12px 18px;
          display: flex; align-items: center; gap: 12px;
          border-bottom: 1px solid var(--border);
        }
        .mockup-dots { display: flex; gap: 6px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-r { background: #FF5F57; } .dot-y { background: #FEBC2E; } .dot-g { background: #28C840; }
        .mockup-url {
          flex: 1; background: rgba(255,255,255,0.05); border-radius: 6px;
          padding: 5px 12px; font-size: 0.75rem; color: var(--muted);
          font-family: 'Inter', sans-serif;
        }
        .mockup-body { padding: 24px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
        .mockup-stat {
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04));
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 10px; padding: 16px;
        }
        .mockup-stat-label { font-size: 0.7rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .mockup-stat-val { font-family: 'Sora', sans-serif; font-size: 1.4rem; font-weight: 700; }
        .mockup-stat-val.green { color: #34D399; }
        .mockup-stat-val.amber { color: var(--amber); }
        .mockup-bar-row { grid-column: 1/-1; display: flex; flex-direction: column; gap: 10px; }
        .mockup-bar-item { display: flex; align-items: center; gap: 10px; }
        .mockup-bar-label { font-size: 0.72rem; color: var(--muted); width: 64px; flex-shrink: 0; }
        .mockup-bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.06); border-radius: 99px; overflow: hidden; }
        .mockup-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--indigo), #A78BFA); }
        .mockup-bar-pct { font-size: 0.72rem; color: var(--indigo-light); width: 32px; text-align: right; }

        /* ── STATS BAND ── */
        .stats-band {
          background: var(--navy-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 40px 5%;
          display: grid; grid-template-columns: repeat(4,1fr); gap: 0;
        }
        .stat-item {
          text-align: center; padding: 16px;
          border-right: 1px solid var(--border);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Sora', sans-serif; font-size: 2.2rem; font-weight: 800;
          background: linear-gradient(90deg, var(--indigo-light), #A78BFA);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
        }
        .stat-label { font-size: 0.85rem; color: var(--muted); font-weight: 400; }

        /* ── FEATURES ── */
        .features { padding: 100px 5%; }
        .section-label {
          display: inline-block;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--indigo-light);
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Sora', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700; letter-spacing: -0.025em;
          margin-bottom: 16px; max-width: 480px;
        }
        .section-sub {
          color: var(--muted); font-size: 1rem; line-height: 1.7;
          max-width: 440px; margin-bottom: 56px;
        }
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .feat-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 14px; padding: 28px;
          transition: border-color 0.25s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .feat-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at top left, rgba(99,102,241,0.09), transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .feat-card:hover { border-color: rgba(99,102,241,0.35); transform: translateY(-4px); }
        .feat-card:hover::before { opacity: 1; }
        .feat-icon-wrap {
          width: 46px; height: 46px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.12));
          border: 1px solid rgba(99,102,241,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin-bottom: 18px;
        }
        .feat-title {
          font-family: 'Sora', sans-serif; font-size: 1rem; font-weight: 600;
          margin-bottom: 10px;
        }
        .feat-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.65; }

        /* ── HOW IT WORKS ── */
        .how { padding: 100px 5%; background: var(--navy-2); }
        .steps-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
          gap: 32px; margin-top: 56px;
        }
        .step { text-align: left; }
        .step-num {
          font-family: 'Sora', sans-serif; font-size: 0.8rem; font-weight: 700;
          color: var(--indigo-light); letter-spacing: 0.06em;
          margin-bottom: 14px; display: block;
        }
        .step-title {
          font-family: 'Sora', sans-serif; font-size: 1.05rem; font-weight: 600;
          margin-bottom: 10px;
        }
        .step-desc { font-size: 0.87rem; color: var(--muted); line-height: 1.65; }
        .step-divider {
          width: 40px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, var(--indigo), transparent);
          margin-bottom: 14px;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 120px 5%; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-glow {
          position: absolute; width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 65%);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .cta-inner { position: relative; z-index: 2; }
        .cta-tag {
          display: inline-block; background: rgba(245,158,11,0.12);
          border: 1px solid rgba(245,158,11,0.25); border-radius: 100px;
          color: var(--amber); font-size: 0.78rem; font-weight: 600;
          padding: 5px 14px; margin-bottom: 24px; letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .cta-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800; letter-spacing: -0.03em;
          margin-bottom: 16px; line-height: 1.15;
        }
        .cta-sub { color: var(--muted); font-size: 1rem; margin-bottom: 40px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--border); padding: 40px 5%;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
        }
        .footer-brand { display: flex; align-items: center; gap: 10px; }
        .footer-brand-name { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1rem; }
        .footer-copy { font-size: 0.8rem; color: var(--muted); margin-top: 4px; }
        .footer-links { display: flex; gap: 24px; }
        .footer-link {
          font-size: 0.83rem; color: var(--muted); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--white); }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .stats-band { grid-template-columns: 1fr 1fr; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-right: 1px solid var(--border); }
          .mockup-body { grid-template-columns: 1fr 1fr; }
          .nav-right .nav-link { display: none; }
          .footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a className="nav-brand" href="/">
          <div className="nav-brand-icon">🎓</div>
          <span className="nav-brand-name">UniPortal</span>
        </a>
        <div className="nav-right">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how" className="nav-link">How it works</a>
          <a href="/Contact" className="nav-link">Contact</a>
          <button className="btn-nav" onClick={() => navigate("/Login")}>Sign in</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-ring" />

        <div className="hero-inner">
          <div className="hero-badge">
            <div className="badge-dot" />
            Now serving 250+ universities worldwide
          </div>

          <h1 className="hero-h1">
            The smarter way to<br />
            <span>run your university</span>
          </h1>

          <p className="hero-sub">
            One platform for student records, faculty collaboration, and institutional analytics — 
            so your team can focus on outcomes, not operations.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("/Login")}>
              Start free trial <span>→</span>
            </button>
            <button className="btn-ghost" onClick={() => navigate("/")}>
              Watch demo
            </button>
          </div>

          {/* Mockup */}
          <div className="hero-mockup">
            <div className="mockup-card">
              <div className="mockup-bar">
                <div className="mockup-dots">
                  <div className="dot dot-r"/><div className="dot dot-y"/><div className="dot dot-g"/>
                </div>
                <div className="mockup-url">app.uniportal.io/dashboard</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat">
                  <div className="mockup-stat-label">Enrollment</div>
                  <div className="mockup-stat-val">12,480</div>
                </div>
                <div className="mockup-stat">
                  <div className="mockup-stat-label">Avg GPA</div>
                  <div className="mockup-stat-val green">3.74</div>
                </div>
                <div className="mockup-stat">
                  <div className="mockup-stat-label">Attendance</div>
                  <div className="mockup-stat-val amber">91.2%</div>
                </div>
                <div className="mockup-bar-row">
                  {[["CS Dept","88%",88],["Business","76%",76],["Medicine","93%",93]].map(([l,p,w])=>(
                    <div className="mockup-bar-item" key={l}>
                      <span className="mockup-bar-label">{l}</span>
                      <div className="mockup-bar-track"><div className="mockup-bar-fill" style={{width:`${w}%`}}/></div>
                      <span className="mockup-bar-pct">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-band">
        {[["250+","Universities"],["50K+","Active students"],["5K+","Faculty members"],["99.9%","Uptime SLA"]].map(([n,l])=>(
          <div className="stat-item" key={l}>
            <div className="stat-num">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <span className="section-label">Platform</span>
        <h2 className="section-title">Built for every role in your institution</h2>
        <p className="section-sub">From admissions to graduation — UniPortal handles the complexity so your people don't have to.</p>
        <div className="features-grid">
          {[
            ["👥","Student Records","Unified profiles tracking admissions, grades, attendance, and progression — updated in real time."],
            ["📚","Faculty Tools","Upload materials, manage assessments, and monitor cohort performance from a single workspace."],
            ["⚙️","Admin Console","Department management, access control, audit logs, and exportable reports — all in one view."],
            ["📊","Live Analytics","Dashboards that surface what matters: at-risk students, course trends, and retention signals."],
            ["🔔","Smart Notifications","Automated alerts for deadlines, attendance drops, and grade thresholds — sent to the right people."],
            ["🔒","Enterprise Security","Role-based permissions, SSO support, and audit trails that meet institutional compliance needs."],
          ].map(([icon,title,desc])=>(
            <div className="feat-card" key={title}>
              <div className="feat-icon-wrap">{icon}</div>
              <div className="feat-title">{title}</div>
              <p className="feat-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <span className="section-label">Process</span>
        <h2 className="section-title">Up and running in days, not months</h2>
        <p className="section-sub">Our onboarding team handles the heavy lifting, so your institution is productive from week one.</p>
        <div className="steps-grid">
          {[
            ["01","Import your data","Migrate existing student and faculty records with our guided import tools. No lost history."],
            ["02","Configure roles","Set up departments, assign permissions, and tailor the portal to your institution's structure."],
            ["03","Go live","Launch with full support from our team. Training sessions, documentation, and a dedicated contact."],
            ["04","Grow with data","Use analytics to identify trends, act on insights, and continuously improve outcomes."],
          ].map(([num,title,desc])=>(
            <div className="step" key={num}>
              <span className="step-num">STEP {num}</span>
              <div className="step-divider"/>
              <div className="step-title">{title}</div>
              <p className="step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"/>
        <div className="cta-inner">
          <div className="cta-tag">Free 30-day trial · No credit card</div>
          <h2 className="cta-title">Ready to modernise<br/>your institution?</h2>
          <p className="cta-sub">Join 250+ universities that have moved to UniPortal. Setup takes less than a week.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => navigate("/Login")}>
              Get started free ✨
            </button>
            <button className="btn-ghost" onClick={() => navigate("/")}>
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="nav-brand-icon" style={{width:28,height:28,fontSize:14,borderRadius:7}}>🎓</div>
          <div>
            <div className="footer-brand-name">UniPortal</div>
            <div className="footer-copy">© 2026 UniPortal. All rights reserved.</div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#features" className="footer-link">Features</a>
          <a href="#how" className="footer-link">How it works</a>
          <a href="#instagram" className="footer-link">Instagram</a>
          <a href="#facebook" className="footer-link">Facebook</a>
        </div>
      </footer>
    </>
  );
}

export default Landing;