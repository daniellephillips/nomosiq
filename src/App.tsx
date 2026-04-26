import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ProductPage } from "@/pages/product"
import { SecurityPage } from "@/pages/security"

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Nomos AI | Private AI for Law Firms",
    description:
      "Private, source-cited AI workflow systems for law firms. No client data leaves your controlled environment.",
  },
  "/product": {
    title: "Product | Nomos AI",
    description:
      "Document ingestion, private search, cited answers, redaction support, timelines, and legal workflow automation.",
  },
  "/security": {
    title: "Security | Nomos AI",
    description:
      "Private deployment, no external LLM APIs, access controls, and audit visibility for legal teams.",
  },
  "/contact": {
    title: "Book a Demo | Nomos AI",
    description:
      "Schedule a Nomos AI demo for private AI workflows inside your law firm's controlled environment.",
  },
}

function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta["/"]
    document.title = meta.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )
    if (description) {
      description.content = meta.description
    }
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
