export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
          Architecture
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built for Real Constraints
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Designed from the ground up for environments where security isn't
          optional and nothing is guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="p-6 border border-border/40 rounded-xl hover:border-primary/40 transition-all">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Fully Air-Gapped</h3>
          <p className="text-sm text-muted-foreground">
            Complete offline operation. Zero external dependencies. Your network,
            your rules.
          </p>
        </div>

        <div className="p-6 border border-border/40 rounded-xl hover:border-primary/40 transition-all">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Local Inference</h3>
          <p className="text-sm text-muted-foreground">
            Llama 3, Mistral, and other open-weight models. GPU-optimized. No API
            keys required.
          </p>
        </div>

        <div className="p-6 border border-border/40 rounded-xl hover:border-primary/40 transition-all">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Enterprise SSO</h3>
          <p className="text-sm text-muted-foreground">
            Keycloak integration. SAML/OIDC. CAC/PIV capable. Role-based access
            control.
          </p>
        </div>

        <div className="p-6 border border-border/40 rounded-xl hover:border-primary/40 transition-all">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Immutable Audit</h3>
          <p className="text-sm text-muted-foreground">
            Every query logged. Every response traced. Complete accountability
            chain.
          </p>
        </div>
      </div>
    </section>
  );
}
