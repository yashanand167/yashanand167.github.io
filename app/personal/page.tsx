'use client'

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
                                <h1>Some of my mini side projects</h1>
                                <p>

                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="h-[1px] w-full bg-border" />
                            <div className="p-8 md:p-16">
                                <h1>What am I building currently</h1>
                                <p>

                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="h-[1px] w-full bg-border" />
                            <div className="p-8 md:p-16">
                                <h1>What my design to code thought process looks like</h1>
                                <p>

                                </p>
                            </div>
                        </section>
                    </main>

                    <VerticalStripes />
                </div>
            </section>
        </main>
    );
}

const VerticalStripes = () => {
    return (
        <div className="relative z-10 min-h-full w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}