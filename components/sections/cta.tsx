export function CTASection() {
  return (
    <section id="contact" className="py-32 text-center container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          How Can AI Serve Your Public Interests?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Are you a decisionmaker in the public sector struggling to implement AI?
          Let's discuss your requirements and vision in a confidential briefing. No
          data compromise or commitment necessary.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/basecivic/30min"
            className="bg-primary text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Schedule a Briefing
          </a>
          <a
            href="mailto:press@civicbase.ai"
            className="border border-border/40 text-foreground font-medium px-10 py-4 rounded-lg transition-all hover:bg-accent"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground font-mono">
            ISO 27001 ALIGNED • SOC 2 TYPE II READY • GDPR COMPLIANT
          </p>
        </div>
      </div>
    </section>
  );
}
