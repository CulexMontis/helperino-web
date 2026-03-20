export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="w-full px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-pixelify)", color: "var(--accent)" }}
        >
          Helperino
        </span>
        <a
          href="https://github.com/CulexMontis/helperino"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: "var(--text-secondary)" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-24">
        <h1
          className="text-6xl sm:text-7xl font-bold mb-4 animate-fade-in-up"
          style={{ fontFamily: "var(--font-pixelify)", color: "var(--accent)" }}
        >
          Helperino
        </h1>
        <p
          className="text-xl sm:text-2xl font-medium mb-4 animate-fade-in-up animation-delay-100"
          style={{ color: "var(--text-primary)" }}
        >
          Desktop test runner for Playwright
        </p>
        <p
          className="max-w-lg text-base mb-10 animate-fade-in-up animation-delay-200"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          Run, record, and manage Playwright tests from a clean desktop app.
          Built-in Chromium, suite management, and AI agent integration included.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
          <a
            href="https://github.com/CulexMontis/helperino/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
          <a
            href="https://github.com/CulexMontis/helperino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-base transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--glass-bg)",
              backdropFilter: "blur(12px)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12 animate-fade-in-up"
            style={{ color: "var(--text-primary)" }}
          >
            Everything you need to test with confidence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              delay="animation-delay-100"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              }
              title="Visual Test Runner"
              description="Run and monitor Playwright tests with a clean, intuitive interface. See results in real time with screenshots and video."
            />
            <FeatureCard
              delay="animation-delay-200"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="21.17" y1="8" x2="12" y2="8" />
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                </svg>
              }
              title="Built-in Browser"
              description="Bundled Chromium browser, no separate install needed. Just download and start testing right away."
            />
            <FeatureCard
              delay="animation-delay-300"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              }
              title="Test Recorder"
              description="Record browser interactions and generate Playwright test scripts automatically. Point, click, done."
            />
            <FeatureCard
              delay="animation-delay-100"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M7 8h2M11 8h2M15 8h2M7 11h2M11 11h6" />
                </svg>
              }
              title="MCP Server"
              description="AI agent integration via Model Context Protocol. Let Claude and other AI tools interact with your test suite."
            />
            <FeatureCard
              delay="animation-delay-200"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                  <line x1="9" y1="14" x2="15" y2="14" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                </svg>
              }
              title="Suite Management"
              description="Organize tests into suites with tags, filters, and run settings. Group by project, feature, or environment."
            />
            <FeatureCard
              delay="animation-delay-300"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              }
              title="Multi-Environment"
              description="Run tests against local, preview, or production. Tag-based filtering ensures the right tests run in each environment."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full px-6 py-8 text-center text-sm"
        style={{ color: "var(--text-tertiary)" }}
      >
        <p>
          Built by{" "}
          <a
            href="https://github.com/CulexMontis"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            CulexMontis
          </a>
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg animate-fade-in-up ${delay}`}
      style={{
        backgroundColor: "var(--glass-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid var(--glass-border)",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </div>
  );
}
