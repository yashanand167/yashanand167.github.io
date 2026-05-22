"use client"

import { MoonIcon, SunMediumIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [click] = useClickSound()

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const handleThemeToggleClick = () => {
    click()
    if (!document.startViewTransition) switchTheme()
    else document.startViewTransition(switchTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Theme Toggle"
      onClick={handleThemeToggleClick}
      className="relative rounded-full border-border bg-background hover:bg-muted/50"
    >
      <MoonIcon className="hidden h-4 w-4 [html.dark_&]:block" />
      <SunMediumIcon className="hidden h-4 w-4 [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
