import Header from "@/components/Header";
import HeroWithScale from "@/components/hero-with-scale";
import ThemeToggle from "@/components/theme-toggle";
import { getCachedContributions } from "@/lib/get-cached-contributions";

export default function Home() {
  const contributionsPromise = getCachedContributions("yashanand167");

  return (
    <main className="min-h-screen relative"> 
    <Header />
      <HeroWithScale contributions={contributionsPromise} />
      {/* <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div> */}
      <footer className="w-full relative h-48 md:h-80 flex items-center justify-center border-t border-border overflow-hidden bg-background group">
                <div className="absolute inset-0 bg-dot opacity-[0.5] pointer-events-none" />
                
                <h2 className="relative z-10 text-[7vw] md:text-[7vw] lg:text-[6vw] font-bold tracking-tighter whitespace-nowrap opacity-20 group-hover:opacity-100 transition-all duration-1000 uppercase text-foreground [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:2px_currentColor] cursor-default select-none group-hover:scale-105">
                    Imagine, Craft, Conquer
                </h2>
            </footer>
    </main>
  ); 
}
