"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { SpecialText } from "@/components/ui/special-text";
import { WorkflowBuilder } from "@/components/ui/workflow-builder";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { SecuritySection } from "@/components/sections/security";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-primary">Civic</span>
            <span className="text-foreground"> Base</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#platform"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#capabilities"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#security"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Security
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="https://calendly.com/basecivic/30min"
            className="hidden md:block bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Request Briefing
          </a>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section with 3D Globe */}
        <DotGlobeHero
          rotationSpeed={0.003}
          className="bg-gradient-to-br from-background via-background/95 to-muted/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 backdrop-blur-xl shadow-2xl"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="relative z-10 text-sm font-bold text-primary tracking-wider uppercase">
                  PRODUCTION-READY • ISO 27001 COMPLIANT
                </span>
                <div className="w-2 h-2 bg-primary rounded-full animate-ping animation-delay-500" />
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <span className="block">
                    <SpecialText
                      className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black"
                      speed={15}
                      delay={0.5}
                    >
                      Civic Base AI
                    </SpecialText>
                  </span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="max-w-3xl mx-auto space-y-4"
              >
                <p
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Enterprise-grade AI infrastructure for sovereign institutions.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  Air-gapped deployment. Local model inference. Full audit compliance.
                  Your data never leaves your control.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            >
              <motion.a
                href="#platform"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.2), 0 0 25px hsl(var(--primary) / 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground rounded-xl font-semibold text-lg shadow-xl hover:shadow-primary/30 transition-all duration-500 overflow-hidden border border-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 tracking-wide">View Platform</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="https://calendly.com/basecivic/30min"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "hsl(var(--accent))",
                  borderColor: "hsl(var(--primary))",
                  boxShadow:
                    "0 15px 30px rgba(0,0,0,0.1), 0 0 15px hsl(var(--primary) / 0.1)",
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-border/40 rounded-xl font-semibold text-lg hover:border-primary/40 transition-all duration-500 backdrop-blur-xl bg-background/60 hover:bg-background/90 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Zap className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <span className="relative z-10 tracking-wide">
                  Schedule Briefing
                </span>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Full-stack AI Cybersecurity
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                RBAC + SSO
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Full Audit Logging
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Open-Weight Models
              </div>
            </motion.div>
          </div>
        </DotGlobeHero>

        {/* Workflow Builder Section */}
        <section id="platform" className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
              Live Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Sovereign AI Workflows
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design complex AI pipelines with our visual workflow builder.
              Drag, drop, and connect nodes to create powerful automation —
              entirely within your air-gapped environment.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <WorkflowBuilder />
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <CapabilitiesSection />

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <SecuritySection />

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
