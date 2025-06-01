import type React from "react"
import type { Metadata } from "next"
import { Arvo } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollTopHandler from "@/components/scroll-top-handler"
import { Suspense } from "react"

const inter = Arvo({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "QuestBlaze Network - Premium Plinko Board Manufacturers | UK",
  description:
    "QuestBlaze Network crafts premium wooden Plinko boards and traditional games in the UK. Expert craftsmanship, sustainable materials, and bespoke designs for entertainment and education.",
  keywords: "Plinko boards, wooden games, UK manufacturers, custom boards, educational games, premium craftsmanship",
  authors: [{ name: "QuestBlaze Network" }],
  creator: "QuestBlaze Network",
  publisher: "QuestBlaze Network",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://questblazenetwork.com",
    siteName: "QuestBlaze Network",
    title: "QuestBlaze Network - Premium Plinko Board Manufacturers",
    description:
      "Expert craftsmanship in wooden Plinko boards and traditional games. Based in London, serving the UK with premium quality and bespoke designs.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "QuestBlaze Network Premium Plinko Boards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuestBlaze Network - Premium Plinko Board Manufacturers",
    description: "Expert craftsmanship in wooden Plinko boards and traditional games.",
    images: ["/hero.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={null}>
          <ScrollTopHandler />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
