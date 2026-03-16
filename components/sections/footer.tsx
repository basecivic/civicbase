export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold">
              <span className="text-primary">Civic</span>
              <span className="text-foreground"> Base</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Sovereign AI for the Public Sector
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="#platform"
              className="hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#capabilities"
              className="hover:text-foreground transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#security"
              className="hover:text-foreground transition-colors"
            >
              Security
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">&copy; 2025 Civic Base AI</p>
            <a
              href="mailto:press@civicbase.ai"
              className="text-sm text-primary hover:text-foreground transition-colors"
            >
              press@civicbase.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
