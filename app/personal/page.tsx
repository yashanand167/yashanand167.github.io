'use client'

import DesignToCode from "@/components/design-to-code";
import Header from "@/components/Header";
import HeroWithScale from "@/components/hero-with-scale";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <Header />

            <section className="relative w-full border-b border-border flex-1 flex flex-col">
                {/* Main Content Area with Vertical Stripes */}
                <div className="max-w-5xl mx-auto w-full flex flex-1 items-stretch">
                    <VerticalStripes />

                    <main className="flex-1 min-w-0">
                        <section>
                            <div className="p-8 md:p-16">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-12">A Journey</h1>

                                <div className="flex flex-col md:flex-row w-full gap-8 md:gap-6">
                                    {[
                                        {
                                            phase: "01",
                                            title: "The Artist",
                                            description: "A lifelong passion for traditional mediums. Exploring form, color, and visual storytelling on canvas since childhood.",
                                        },
                                        {
                                            phase: "02",
                                            title: "Visual Design",
                                            description: "Transitioned to digital tools. Mastering typography, layout, and visual hierarchy.",
                                        },
                                        {
                                            phase: "03",
                                            title: "Product Design",
                                            description: "Focusing on the user. Learning psychology, wireframing, and building scalable systems.",
                                        },
                                        {
                                            phase: "04",
                                            title: "Coding UIs",
                                            description: "Bridging the gap. Understanding web logic and writing clean code to bring static designs to life.",
                                        }
                                    ].map((step, index) => (
                                        <div key={index} className="flex-1 flex flex-col group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-[10px] font-mono text-muted-foreground group-hover:text-primary transition-colors">{step.phase}</span>
                                                <div className="h-[1px] flex-1 bg-border group-hover:bg-primary/50 transition-colors" />
                                            </div>
                                            <h3 className="text-sm font-medium text-foreground mb-2 group-hover:translate-x-1 transition-transform">{step.title}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed md:max-w-[200px]">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-border" />
                        </section>

                        <section>
                            <div className="p-8 md:p-16">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-4">Some of my mini side projects</h1>
                                <p>
                                    
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="h-[1px] w-full bg-border" />
                            <div className="p-8 md:p-16">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-4">What am I building currently</h1>
                                <p>

                                </p>
                            </div>
                        </section>
                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal">
                            <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none" />
                        </section>

                        <section>
                            <div className="h-[1px] w-full" />
                            <DesignToCode />
                        </section>

                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal">
                            <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none" />
                        </section>

                        <section>
                            <div className="h-[1px] w-full" />
                            <div className="p-8 md:p-16 flex flex-col items-center text-center">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-4">Tools & Stack I'm Currently Exploring</h1>
                                <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
                                    A continuously evolving playground. Here are some of the technologies I'm currently diving into and experimenting with.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                                    {[
                                        { name: "Rive App", image: "https://github.com/rive-app.png" },
                                        { name: "Langchain", image: "https://github.com/langchain-ai.png" },
                                        { name: "TanStack Start", image: "https://github.com/TanStack.png" }
                                    ].map((tool, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 border border-dotted border-foreground/20 rounded-full text-xs md:text-sm font-mono text-foreground bg-muted/5 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-default shadow-sm group">
                                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform p-[2px]">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={tool.image} alt={tool.name} className="w-full h-full object-contain rounded-full" />
                                            </div>
                                            <span>{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        
                    </main>

                    <VerticalStripes />
                </div>
            </section>
            {/* Text Slogan Footer */}
            <footer className="w-full relative h-48 md:h-80 flex items-center justify-center border-t border-border overflow-hidden bg-background group">
                <div className="absolute inset-0 bg-dot opacity-[0.5] pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
                
                <h2 
                    className="relative z-10 text-[7vw] md:text-[7vw] lg:text-[6vw] font-bold tracking-tighter whitespace-nowrap opacity-20 group-hover:opacity-100 transition-all duration-1000 uppercase text-foreground [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:2px_currentColor] cursor-default select-none group-hover:scale-105"
                >
                    Imagine, Craft, Conquer
                </h2>
            </footer>
        </main>
    );
}

const VerticalStripes = () => {
    return (
        <div className="relative z-10 min-h-full w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}