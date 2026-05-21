"use client"

import { MoonIcon, SunMediumIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Theme Toggle"
      onClick={switchTheme}
      className="relative rounded-full border-border bg-background hover:bg-muted/50"
    >
      <SunMediumIcon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
