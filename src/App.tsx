import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ProductPage } from "@/pages/product"
import { SecurityPage } from "@/pages/security"

type PageMeta = {
  title: string
  description: string
  url: string
  image: string
  twitterCard: "summary" | "summary_large_image"
}

const siteUrl = "https://nomosiq.ai"
const socialImage = `${siteUrl}/nomos-ai-gazelle-black.svg`

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Nomos AI | Private AI for Legal Teams",
    description:
      "Private AI for legal teams handling sensitive documents. Search, review, summarize, and validate legal documents with cited answers inside your firm's environment.",
    url: `${siteUrl}/`,
    image: socialImage,
    twitterCard: "summary",
  },
  "/product": {
    title: "Product | Nomos AI",
    description:
      "Document ingestion, private search, cited answers, redaction support, timelines, and legal workflow automation.",
    url: `${siteUrl}/product`,
    image: socialImage,
    twitterCard: "summary",
  },
  "/security": {
    title: "Security | Nomos AI",
    description:
      "Private deployment, no external LLM APIs, access controls, and audit visibility for legal teams.",
    url: `${siteUrl}/security`,
    image: socialImage,
    twitterCard: "summary",
  },
  "/contact": {
    title: "Book a Demo | Nomos AI",
    description:
      "Schedule a Nomos AI demo for private AI workflows inside your law firm's controlled environment.",
    url: `${siteUrl}/contact`,
    image: socialImage,
    twitterCard: "summary",
  },
}

function setMeta(selector: string, value: string) {
  const tag = document.querySelector<HTMLMetaElement>(selector)
  if (tag) {
    tag.content = value
  }
}

function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta["/"]
    document.title = meta.title

    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', meta.url)
    setMeta('meta[property="og:image"]', meta.image)
    setMeta('meta[name="twitter:card"]', meta.twitterCard)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    setMeta('meta[name="twitter:image"]', meta.image)
  }, [pathname])

  return null
}

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <RouteMetadata />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
