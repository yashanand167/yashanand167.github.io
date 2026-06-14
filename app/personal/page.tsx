'use client'

import DesignToCode from "@/components/design-to-code";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-8">tech/UI exploration</h1>

                                <div className="space-y-12">
                                    {/* REST API's learning */}
                                    <div>
                                        <h2 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">REST API's learning</h2>
                                        <div className="border border-dotted border-foreground/20 rounded-2xl p-6 md:p-8 bg-muted/5 relative group hover:border-foreground/30 transition-colors">
                                            <div className="relative z-10 flex flex-col justify-between items-start gap-4">
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between mb-2.5 gap-2 flex-wrap">
                                                        <h3 className="text-sm md:text-base font-medium text-foreground">Fittrack API</h3>
                                                        <a
                                                            href="https://github.com/yashanand167/fitTrack-backend"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                        >
                                                            GitHub <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                                        A comprehensive backend service built for fitness tracking. Features structured endpoints for logging workouts, tracking user exercise metrics, and managing data persistence.
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                                        {["Node.js", "Express", "MongoDB"].map((tag, idx) => (
                                                            <span key={idx} className="text-[9px] font-mono text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded border border-border">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* crux.ai */}
                                    <div>
                                        <h2 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">crux.ai</h2>
                                        <div className="border border-dotted border-foreground/20 rounded-2xl p-6 md:p-8 bg-muted/5 relative group hover:border-foreground/30 transition-colors">
                                            <div className="relative z-10 flex flex-col justify-between items-start gap-4">
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between mb-2.5 gap-2 flex-wrap">
                                                        <div className="flex items-center gap-3">
                                                            <h3 className="text-sm md:text-base font-medium text-foreground">crux.ai</h3>
                                                            <span className="shrink-0 px-2 py-0.5 text-[9px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">
                                                                Currently in building stage
                                                            </span>
                                                        </div>
                                                        <a
                                                            href="https://github.com/yashanand167/crux.ai"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                        >
                                                            GitHub <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                                        Summarizes any GitHub repository based on pasted GitHub repository links.
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                                        {["Hono", "Drizzle", "Docker", "LLM integration"].map((tag, idx) => (
                                                            <span key={idx} className="text-[9px] font-mono text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded border border-border">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="h-[1px] w-full bg-border" />
                            <div className="p-8 md:p-16">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-8">mini design works</h1>

                                <div className="border border-dotted border-foreground/20 rounded-2xl overflow-hidden bg-muted/5 relative group hover:border-foreground/30 transition-colors">
                                    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                                        {/* Handbook Graphic */}
                                        <div className="w-full md:w-[35%] shrink-0 aspect-[4/3] bg-muted/20 relative overflow-hidden rounded-xl border border-border flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
                                            <Image
                                                src="/Handbook.png"
                                                alt="AI Design Handbook Preview"
                                                loading="lazy"
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-0 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                <h3 className="text-lg md:text-xl font-medium text-foreground">
                                                    AI Design Handbook
                                                </h3>
                                                <span className="px-2 py-0.5 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">
                                                    Hand-crafted Guide
                                                </span>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                                A comprehensive handbook built specifically for product designers navigating the age of artificial intelligence. It covers mental models for designing AI systems, UI guidelines for dynamic LLM response states, orchestrating latency with elegant feedback loops, and leveraging agentic models in product flows.
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">AI UX Patterns</span>
                                                <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Latency Design</span>
                                                <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Human-in-the-Loop</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal" />

                        <section>
                            <DesignToCode />
                        </section>

                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal" />

                        <section>
                            <div className="p-8 md:p-16 flex flex-col items-center text-center">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-4">Tools & Stacks I am currently learning</h1>
                                <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
                                    A playground for learning and experimenting. Here are the tools, libraries, and frameworks I'm currently diving into.
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
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-background/0 pointer-events-none z-0" />

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
        <div className="relative z-10 w-6 md:w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}
