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
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-8">Some of my mini side projects</h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* askNow Project Card */}
                                    <div className="group relative flex flex-col rounded-2xl border border-dotted border-foreground/20 bg-muted/5 overflow-hidden hover:border-foreground/30 transition-all shadow-sm">
                                        {/* Image Container */}
                                        <div className="aspect-video w-full bg-muted/20 relative overflow-hidden border-b border-dotted border-foreground/20 flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
                                            <Image
                                                src="/askNow.png"
                                                alt="askNow Project Preview"
                                                fill
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                                onError={(e) => {
                                                    // Fallback if image fails to load or isn't set properly
                                                    e.currentTarget.style.display = 'none';
                                                    if (e.currentTarget.nextElementSibling) {
                                                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                                    }
                                                }}
                                            />
                                            {/* Text fallback when image is missing */}
                                            <div className="absolute inset-0 hidden items-center justify-center">
                                                <h3 className="text-4xl font-bold text-foreground/20 tracking-tighter">askNow</h3>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center justify-between mb-3 gap-2">
                                                <h3 className="text-lg font-medium text-foreground">askNow</h3>
                                                <span className="shrink-0 px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">College Group Project</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                                                An online survey platform designed for collecting, managing, and analyzing responses efficiently. Built to streamline survey creation, user participation, and response tracking with a scalable backend architecture.
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Next.js</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">React</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Tailwind</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Prisma</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Docker</span>
                                                </div>
                                                <a
                                                    href="https://asknow.vercel.app/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                >
                                                    Live Site <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* zyra Project Card */}
                                    <div className="group relative flex flex-col rounded-2xl border border-dotted border-foreground/20 bg-muted/5 overflow-hidden hover:border-foreground/30 transition-all shadow-sm">
                                        {/* Image Container */}
                                        <div className="aspect-video w-full bg-muted/20 relative overflow-hidden border-b border-dotted border-foreground/20 flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
                                            {/* Optional: Add an img tag here if you have an image for zyra */}
                                            {/* Text fallback when image is missing */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Image src="/zyra.png" alt="zyra Project Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" fill />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center justify-between mb-3 gap-2">
                                                <h3 className="text-lg font-medium text-foreground">zyra</h3>
                                                <span className="shrink-0 px-2 py-1 text-[10px] font-mono text-muted-foreground bg-muted/50 border border-border/50 rounded-md">Works on Localhost</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                                                A minimal rich text editor built from the ground up to deeply explore and integrate the Tiptap library capabilities.
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Next.js</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Tailwind</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Framer Motion</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Tiptap</span>
                                                    <span className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">Prisma</span>
                                                </div>
                                                <a
                                                    href="https://github.com/yashanand167/zyra"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                >
                                                    GitHub <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="h-[1px] w-full bg-border" />

                            <div className="p-8 md:p-16">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-8">
                                    What am I building currently
                                </h1>

                                <div className="border border-dotted border-foreground/20 rounded-2xl overflow-hidden bg-muted/5 relative group hover:border-foreground/30 transition-colors">

                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10 flex flex-col md:flex-row">

                                        {/* Image */}
                                        <div className="md:w-[40%] relative bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">

                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/Landing Page.png"
                                                alt="Inertia UI Preview"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-t md:border-l md:border-t-0 border-dotted border-foreground/20">
                                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                <h3 className="text-lg md:text-xl font-medium text-foreground">
                                                    Inertia-UI
                                                </h3>

                                                <span className="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">
                                                    Product Design in Process
                                                </span>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-6">
                                                A modern, highly customizable component library tailored for dynamic web applications. Currently focusing on the core product design, defining design tokens, and establishing a scalable component architecture.
                                            </p>

                                            <a
                                                href="https://www.figma.com/design/PBv5vZwApM9jznIO8coAFs/Inertia?node-id=67-46&t=RM7kbxONhidMbwo0-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:scale-105 transition-transform w-fit group/btn"
                                            >
                                                <span>View on Figma</span>

                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
        <div className="relative z-10 min-h-full w-8 md:w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}