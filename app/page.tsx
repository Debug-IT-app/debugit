const services = [
  ["01", "Bug Fix", "You know what failed. We reproduce it, repair it, and verify the fix."],
  ["02", "Mystery Bug", "Something is wrong, but nobody knows why. We investigate the whole trail."],
  ["03", "Repo Rescue", "Half-built, abandoned, or tangled by AI. Hand us everything you have."],
  ["04", "Ship It", "It works on your machine. We make it survive production."],
  ["05", "Full Diagnostic", "A complete inspection with ranked findings, risks, and a repair path."],
  ["06", "Vibe Code Recovery", "The prompts got you this far. Now the repository needs an adult in the room."],
];

const steps = [
  ["01", "Sign the treaty", "A plain-language ownership agreement before we touch a file."],
  ["02", "Send the mess", "Repository, ZIP, logs, screenshots, deployment—or no explanation at all."],
  ["03", "We investigate", "Automated inspection first. Human diagnosis and a fixed-price proposal next."],
  ["04", "Get proof", "Working code, root-cause report, test results, risks, and deployment instructions."],
];

const treaty = [
  "You retain ownership of your code, product, brand, concepts, and business.",
  "Submitted code is accessed only to perform the work you authorize.",
  "We do not train models on your project without explicit permission.",
  "Confidential material is never published, shared, or reused.",
  "Project-specific fixes belong to you after payment.",
  "Both parties receive a signed, timestamped copy.",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="DebugIt home">
          <span className="brand-mark">D:</span><span>DebugIt</span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#treaty">The treaty</a>
          <a className="nav-cta" href="#submit">Submit a project</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Human-led software rescue</div>
          <h1>Your app does not need another prompt.</h1>
          <h2>It needs to be <span>debugged.</span></h2>
          <p className="lead">Send us the repository, unfinished project, logs, or deployment. Tell us what is broken—or tell us nothing. We find the real problems and get your app moving again.</p>
          <div className="hero-actions">
            <a className="button primary" href="#submit">Rescue my repo <span>↗</span></a>
            <a className="button secondary" href="#treaty">Read the code treaty</a>
          </div>
          <div className="assurances">
            <span>Private by default</span><span>No code training</span><span>No ownership games</span>
          </div>
        </div>
        <div className="diagnostic" aria-label="Example diagnostic in progress">
          <div className="terminal-head"><span /><span /><span /><b>debugit / inspection</b><em>LIVE</em></div>
          <div className="terminal-body">
            <p className="muted">$ debugit inspect ./your-app</p>
            <p><i>✓</i> Project secured in isolated workspace</p>
            <p><i>✓</i> Framework detected <b>Next.js 15</b></p>
            <p><i>✓</i> Dependencies audited <b>2 conflicts</b></p>
            <p><i>✓</i> Build reproduced <b>exit code 1</b></p>
            <p><i>✓</i> Root cause located</p>
            <div className="finding"><small>PRIMARY FINDING</small><strong>Authentication callback fails after deployment</strong><span>Environment URL mismatch + stale adapter</span></div>
            <p className="active"><i>◆</i> Preparing repair plan<span className="dots">...</span></p>
          </div>
          <div className="terminal-foot"><span>5 checks complete</span><strong>Diagnosis in progress</strong></div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-inner"><p>DebugIt does not want your idea.</p><strong>We want your bugs.</strong></div>
      </section>

      <section className="section shell" id="how">
        <div className="section-head"><div><span className="kicker">NO SHAME. NO AGENCY FLUFF.</span><h3>However broken it is,<br/>start here.</h3></div><p>You do not need a clean repository, a perfect bug report, or even the vocabulary to explain what went wrong.</p></div>
        <div className="service-grid">
          {services.map(([n,title,copy]) => <article className="service" key={title}><span>{n}</span><h4>{title}</h4><p>{copy}</p><b>→</b></article>)}
        </div>
      </section>

      <section className="process section">
        <div className="shell"><span className="kicker">THE RESCUE PATH</span><h3>From “it does not work”<br/>to “it is ready.”</h3><div className="steps">{steps.map(([n,title,copy]) => <article key={title}><span>{n}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div></div>
      </section>

      <section className="treaty section shell" id="treaty">
        <div className="treaty-card">
          <div className="treaty-copy"><span className="kicker">THE CODE OWNERSHIP TREATY</span><h3>Your code remains<br/>your code.</h3><p>Your idea remains your idea. We are here to repair it, not take it. You see and sign this promise before you upload anything.</p><a className="button dark" href="#submit">Review and sign <span>↗</span></a></div>
          <div className="treaty-list">{treaty.map((item,i) => <div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="submit section shell" id="submit">
        <div><span className="kicker">START WITH A $99 DIAGNOSTIC</span><h3>Send us the mess.</h3><p>The deposit covers secure intake, environment setup, reproduction, and an initial repair proposal. If you proceed, it is credited toward the work.</p></div>
        <div className="intake">
          <p>Do you know what is broken?</p>
          <div className="choices"><button>Yes, I can describe it</button><button>Sort of</button><button>No—investigate everything</button></div>
          <a className="button primary wide" href="mailto:hello@debugit.app?subject=DebugIt%20project%20submission">Start secure intake <span>↗</span></a>
          <small>No production secrets required for the initial review.</small>
        </div>
      </section>

      <footer className="footer"><div className="shell"><a className="brand" href="#top"><span className="brand-mark">D:</span><span>DebugIt</span></a><p>Relief without exploitation.</p><span>© 2026 DebugIt.app</span></div></footer>
    </main>
  );
}
