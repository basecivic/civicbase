import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Civic Base AI - Sovereign AI Infrastructure for Public Institutions",
  description:
    "The first production-ready sovereign AI platform for government and public institutions. Deploy open-weight models entirely on-premise with air-gapped architecture, full audit trails, and zero data exfiltration. ISO 27001 compliant.",
  keywords: [
    "sovereign AI",
    "government AI",
    "public sector AI",
    "air-gapped AI",
    "on-premise AI",
    "local model inference",
    "open-weight models",
    "Llama 3",
    "audit compliance",
    "ISO 27001",
    "RBAC",
    "SSO",
    "enterprise AI",
    "secure AI deployment",
    "AI cybersecurity",
  ],
  authors: [{ name: "Civic Base AI" }],
  creator: "Civic Base AI",
  publisher: "Civic Base AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://civicbase.ai",
    title: "Civic Base AI - Sovereign AI for Public Institutions",
    description:
      "Deploy state-of-the-art AI entirely on-premise. Air-gapped architecture, full audit trail, zero data exfiltration.",
    siteName: "Civic Base AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civic Base AI - Sovereign AI for Public Institutions",
    description:
      "Production-ready sovereign AI platform for government. On-premise deployment, full sovereignty.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
