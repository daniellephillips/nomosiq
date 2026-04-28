import { Link } from "react-router-dom"

import gazelleLogo from "../../assets/nomos-ai-gazelle-white.svg"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="bg-[#0d1b3e]">
      <div className="mx-auto grid w-full max-w-[1140px] gap-8 px-5 py-10 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link
              to="/"
              className="flex w-fit items-center gap-3 rounded-md focus-visible:ring-[3px] focus-visible:ring-white/35 focus-visible:outline-none"
            >
              <img
                src={gazelleLogo}
                alt=""
                aria-hidden="true"
                className="h-[38px] w-auto object-contain"
              />
              <span className="font-heading text-[16px] leading-5 font-bold text-white">
                Nomos AI
              </span>
            </Link>
          </div>
          <nav
            className="type-ui grid gap-4 text-white/65 sm:grid-cols-5 sm:gap-7"
            aria-label="Footer"
          >
            <Link
              to="/product"
              className="rounded-md hover:text-white focus-visible:ring-[3px] focus-visible:ring-white/35 focus-visible:outline-none"
            >
              Product
            </Link>
            <Link
              to="/security"
              className="rounded-md hover:text-white focus-visible:ring-[3px] focus-visible:ring-white/35 focus-visible:outline-none"
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
        <Separator className="bg-white/10" />
        <div className="type-fine flex flex-col justify-between gap-3 text-white/45 sm:flex-row">
          <p>© 2026 Nomos AI</p>
          <a
            href="mailto:hello@nomosiq.ai"
            className="rounded-md hover:text-white focus-visible:ring-[3px] focus-visible:ring-white/35 focus-visible:outline-none"
          >
            hello@nomosiq.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
