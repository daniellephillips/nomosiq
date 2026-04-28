import { Link } from "react-router-dom"

import gazelleLogo from "../../assets/nomos-ai-gazelle-white.svg"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 dark:border-white/10 dark:bg-[var(--surface-brand)]">
      <div className="mx-auto grid w-full max-w-[1140px] gap-8 px-5 py-10 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link
              to="/"
              className="flex w-fit items-center gap-3 rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none dark:focus-visible:ring-white/35"
            >
              <img
                src={gazelleLogo}
                alt=""
                aria-hidden="true"
                className="h-[38px] w-auto object-contain brightness-0 dark:brightness-100"
              />
              <span className="font-heading text-[16px] leading-5 font-bold text-foreground dark:text-white">
                Nomos AI
              </span>
            </Link>
          </div>
          <nav
            className="type-ui grid gap-4 text-muted-foreground sm:grid-cols-5 sm:gap-7 dark:text-white/65"
            aria-label="Footer"
          >
            <Link
              to="/product"
              className="rounded-md hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none dark:hover:text-white dark:focus-visible:ring-white/35"
            >
              Product
            </Link>
            <Link
              to="/security"
              className="rounded-md hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none dark:hover:text-white dark:focus-visible:ring-white/35"
            >
              Security
            </Link>
            <span aria-disabled="true" className="cursor-default">
              Privacy
            </span>
            <span aria-disabled="true" className="cursor-default">
              Terms
            </span>
          </nav>
        </div>
        <Separator className="dark:bg-white/10" />
        <div className="type-fine flex flex-col justify-between gap-3 text-text-subtle sm:flex-row dark:text-white/45">
          <p>© 2026 Nomos AI</p>
          <a
            href="mailto:daniphil@nomosiq.com"
            className="rounded-md hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none dark:hover:text-white dark:focus-visible:ring-white/35"
          >
            daniphil@nomosiq.com
          </a>
        </div>
      </div>
    </footer>
  )
}
