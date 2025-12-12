import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServerLogger from "@/components/ServerLogger";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Multinational Tours | Travel with Aina",
    template: "%s | Travel with Aina",
  },
  description: "Explore the world with our premium tour packages.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Multinational Tours | Travel with Aina",
    description: "Explore the world with our premium tour packages.",
    url: "/",
    siteName: "Travel with Aina",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Travel with Aina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multinational Tours | Travel with Aina",
    description: "Explore the world with our premium tour packages.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

// Add viewport export separately
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import PageTransition from "@/components/PageTransition";

// ... (previous imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <Header />
        <main className="min-h-screen pt-16 bg-background text-foreground transition-colors">
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
          <PageTransition>
            {children}
          </PageTransition>
          {/* ServerLogger component only - LoggerTest was deleted */}
          <ServerLogger />
        </main>
        <Footer />
      </body>
    </html>
  );
}
