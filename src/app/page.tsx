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
          Skrivbordsapp för Playwright-testning
        </p>
        <p
          className="max-w-lg text-base mb-10 animate-fade-in-up animation-delay-200"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          Kör, spela in och hantera Playwright-tester i en ren skrivbordsapp.
          Inbyggd Chromium, svithantering och AI-agentintegration ingår.
        </p>
        <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-300">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/CulexMontis/helperino-web/releases/latest/download/Helperino-1.0.1-arm64.dmg"
              className="btn-download inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              macOS (Apple Silicon)
            </a>
            <a
              href="https://github.com/CulexMontis/helperino-web/releases/latest/download/Helperino-1.0.1.dmg"
              className="btn-download inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              macOS (Intel)
            </a>
            <a
              href="https://github.com/CulexMontis/helperino-web/releases/latest/download/Helperino.Setup.1.0.1.exe"
              className="btn-download inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Windows (x64)
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12 animate-fade-in-up"
            style={{ color: "var(--text-primary)" }}
          >
            Allt du behöver för att testa med trygghet
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
              title="Visuell testkörare"
              description="Kör och övervaka Playwright-tester med ett rent, intuitivt gränssnitt. Se resultat i realtid med skärmbilder och video."
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
              title="Inbyggd webbläsare"
              description="Medföljande Chromium-webbläsare, ingen separat installation behövs. Ladda ner och börja testa direkt."
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
              title="Testinspelning"
              description="Spela in webbläsarinteraktioner och generera Playwright-testskript automatiskt. Peka, klicka, klart."
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
              title="MCP-server"
              description="AI-agentintegration via Model Context Protocol. Låt Claude och andra AI-verktyg interagera med dina tester."
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
              title="Svithantering"
              description="Organisera tester i sviter med taggar, filter och körinställningar. Gruppera efter projekt, funktion eller miljö."
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
              title="Flera miljöer"
              description="Kör tester mot lokal, preview eller produktion. Taggbaserad filtrering säkerställer att rätt tester körs i varje miljö."
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
          Byggd av{" "}
          <a
            href="https://luxcaput.se"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            Luxcaput
          </a>{" "}
          :)
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
