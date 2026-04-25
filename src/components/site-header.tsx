import { Link, NavLink } from "react-router-dom"
import {
  Menu01Icon,
  SecurityCheckIcon,
  WorkflowCircle01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import logoBlue from "../../assets/logo-blue.png"
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
          "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          isActive && "bg-muted text-foreground"
        )
      }
    >
      {label}
    </NavLink>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="NomosIQ home"
        >
          <img
            src={logoBlue}
            alt=""
            className="size-9 rounded-md object-contain"
          />
          <span className="text-base font-semibold tracking-normal">
            NomosIQ
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
          <Button asChild>
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
                  src={logoBlue}
                  alt=""
                  className="size-9 rounded-md object-contain"
                />
                <span className="font-semibold">NomosIQ</span>
              </div>
              <nav className="grid gap-2" aria-label="Mobile primary">
                {navItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </nav>
              <div className="mt-8 grid gap-3">
                <Button asChild>
                  <a href={demoUrl} target="_blank" rel="noreferrer">
                    Book Demo
                  </a>
                </Button>
                <div className="grid gap-2 text-sm text-muted-foreground">
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
