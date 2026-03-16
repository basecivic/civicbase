export function TechStackSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open & Auditable
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No black boxes. Built on proven, open-source foundations you can inspect and trust.
            The cutting-edge is always changing, but here's what we're implementing right now:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Runtime
            </div>
            <div className="text-sm text-muted-foreground">Node.js / Docker</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Auth
            </div>
            <div className="text-sm text-muted-foreground">Keycloak SSO</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Inference
            </div>
            <div className="text-sm text-muted-foreground">Ollama / vLLM</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Models
            </div>
            <div className="text-sm text-muted-foreground">
              Llama 3 / Mistral
            </div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Database
            </div>
            <div className="text-sm text-muted-foreground">
              SQLite / Postgres
            </div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Vectors
            </div>
            <div className="text-sm text-muted-foreground">Embedded Search</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              OS
            </div>
            <div className="text-sm text-muted-foreground">Ubuntu / RHEL</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-colors">
            <div className="text-primary font-mono text-sm font-semibold mb-1">
              Orchestration
            </div>
            <div className="text-sm text-muted-foreground">K8s Ready</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border border-border/40 p-8">
            <h3 className="text-xl font-bold mb-6 text-center">
              Run Any Open-Weight Model
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-3">
                  SUPPORTED ARCHITECTURES
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Llama 3.x (8B, 70B, 405B)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Mistral / Mixtral
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Qwen 2.5
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    DeepSeek V2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Custom fine-tuned models
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-primary mb-3">
                  DEPLOYMENT OPTIONS
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Single-node Docker deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Kubernetes cluster (HA)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Air-gapped installation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    GPU acceleration (CUDA/ROCm)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Quantized models (Q4/Q8)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
