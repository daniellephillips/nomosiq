import { Link } from "react-router-dom"

import brandLogo from "../../assets/nomosiq-branding-logo.svg"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link to="/" className="mb-4 flex items-center gap-3">
              <img
                src={brandLogo}
                alt=""
                className="size-11 object-contain brightness-0 invert"
              />
              <span className="font-semibold">NomosIQ</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Private AI workflow systems for law firms that need control,
              auditability, and cited answers on sensitive documents.
            </p>
          </div>
          <nav
            className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 sm:gap-8"
            aria-label="Footer"
          >
            <Link to="/product" className="hover:text-foreground">
              Product
            </Link>
            <Link to="/security" className="hover:text-foreground">
              Security
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Nomos AI, LLC. All rights reserved.</p>
          <a href="mailto:hello@nomosiq.ai" className="hover:text-foreground">
            hello@nomosiq.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
