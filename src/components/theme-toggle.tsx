import { Moon01Icon, Sun01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const nextTheme = isDark ? "light" : "dark"
  const label = isDark ? "Switch to light theme" : "Switch to dark theme"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(className)}
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
    >
      <HugeiconsIcon icon={isDark ? Sun01Icon : Moon01Icon} aria-hidden />
    </Button>
  )
}
