export function SecuritySection() {
  return (
    <section
      id="security"
      className="py-24 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
            Security First
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Government-Grade by Default
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not an afterthought. Security is the foundation of every architectural
            decision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">TLS Everywhere</h4>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption for all communications. No exceptions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Path Traversal Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Hardened file handling. No directory escape vulnerabilities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Container Isolation</h4>
                <p className="text-sm text-muted-foreground">
                  Docker deployment with Kubernetes support. Process-level
                  isolation.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">AES-256 Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  Data at rest encrypted with military-grade standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Policy-as-Code Guardrails</h4>
                <p className="text-sm text-muted-foreground">
                  Configurable constraints. Automatic violation detection.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Zero Data Exfiltration</h4>
                <p className="text-sm text-muted-foreground">
                  No telemetry. No external calls. Complete network isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
