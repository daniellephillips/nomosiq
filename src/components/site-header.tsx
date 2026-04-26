import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  Menu01Icon,
  SecurityCheckIcon,
  WorkflowCircle01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import gazelleLogo from "../../assets/nomos-ai-gazelle-white.svg"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { demoUrl } from "@/lib/constants"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
]

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "type-ui flex min-h-11 items-center rounded-md px-3 py-2 text-text-soft transition-colors hover:text-foreground",
          isActive && "bg-muted text-foreground"
        )
      }
    >
      {label}
    </NavLink>
  )
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95 transition-[border-color,backdrop-filter,background-color]",
        isScrolled
          ? "border-border-subtle backdrop-blur-md"
          : "border-transparent backdrop-blur-none"
      )}
    >
      <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-4"
          aria-label="Nomos AI home"
        >
          <img
            src={gazelleLogo}
            alt="Nomos AI gazelle mark"
            className="h-9 w-auto object-contain brightness-0 md:h-11 dark:invert"
          />
          <span className="font-heading text-[19px] leading-5 font-semibold tracking-normal text-foreground">
            Nomos AI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <NavItem href={item.href} label={item.label} />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          <Button asChild size="lg">
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Book Demo
            </a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <HugeiconsIcon icon={Menu01Icon} aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 px-5 py-6">
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <div className="mb-8 flex items-center gap-3">
                <img
                  src={gazelleLogo}
                  alt="Nomos AI gazelle mark"
                  className="h-9 w-auto object-contain brightness-0 dark:invert"
                />
                <span className="font-heading text-[18px] leading-5 font-semibold">
                  Nomos AI
                </span>
                <div className="ml-auto">
                  <ThemeToggle />
                </div>
              </div>
              <nav className="grid gap-2" aria-label="Mobile primary">
                {navItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </nav>
              <div className="mt-8 grid gap-3">
                <Button asChild size="lg">
                  <a href={demoUrl} target="_blank" rel="noreferrer">
                    Book Demo
                  </a>
                </Button>
                <div className="type-ui grid gap-2 text-text-soft">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={SecurityCheckIcon} aria-hidden />
                    No external LLM APIs
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={WorkflowCircle01Icon} aria-hidden />
                    Built for legal workflows
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
