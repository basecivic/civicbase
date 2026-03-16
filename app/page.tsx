"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { Logo, HeroLogo } from "@/components/ui/logo";
import { WorkflowBuilder } from "@/components/ui/workflow-builder";
import { PlatformDemosSection } from "@/components/sections/platform-demos";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { SecuritySection } from "@/components/sections/security";
import { TechStackSection } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl">
            <Logo />
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
            className="hidden md:block bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-all"
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />

          <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-xl"
              >
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                  Production-Ready • ISO 27001 Compliant
                </span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-5xl md:text-7xl lg:text-8xl"
                >
                  <HeroLogo className="text-5xl md:text-7xl lg:text-8xl" />
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-3xl mx-auto space-y-4"
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  The first sovereign AI platform built for public institutions
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Deploy state-of-the-art AI entirely on-premise. Air-gapped architecture.
                  Full audit trail. Zero data exfiltration. Run any open-weight model with complete sovereignty.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.a
                href="#platform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg transition-all"
              >
                <span>View Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://calendly.com/basecivic/30min"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-border/40 rounded-xl font-semibold text-lg hover:border-primary/40 transition-all backdrop-blur-xl"
              >
                <span>Schedule Briefing</span>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
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
                Immutable Audit Logs
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
                Run Any Open Model
              </div>
            </motion.div>
          </div>
        </DotGlobeHero>

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <PlatformDemosSection />

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Workflow Builder Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
              Visual Workflow Design
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Complex AI Pipelines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design and deploy multi-step AI workflows with visual tools. From document processing
              to inference to audit logging — all within your secure perimeter.
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

        <TechStackSection />

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Experience Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
              Our Background
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built By Public Sector Veterans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team brings deep expertise from the intersection of technology,
              policy, and international governance. We understand the constraints
              you operate under because we've been there.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              United Nations
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              U.S. Congress
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              World Economic Forum
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              OECD
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              African Union
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              UNESCO
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              USAID
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border/40 text-sm">
              Amazon
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're the first movers in sovereign AI for the public sector. Our mission is to help
              institutions deploy AI without compromising on security, sovereignty, or values.
              We're here to help you draft and execute your first AI contract with confidence.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
