'use client'

import HeroWithScale from "@/components/hero-with-scale";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen relative"> 
      <HeroWithScale />
      {/* <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div> */}
    </main>
  ); 
}
