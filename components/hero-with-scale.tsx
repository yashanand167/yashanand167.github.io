"use client"

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, Palette, ChevronDown } from "lucide-react";
import { Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GitHubContributions, GitHubContributionsFallback } from "@/components/github-contributions";
import type { Activity } from "@/components/contribution-graph";
import { RotateWords } from "./rotate-words";
import { FluidDotGrid } from "./fluid-dot-grid";

let isAppHydrated = false;

const ExpandableExperience = ({ children, buttonClassName = "ml-4 md:ml-8" }: { children: React.ReactNode; buttonClassName?: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="flex flex-col w-full relative">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`${buttonClassName} mb-4 w-fit text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 hover:border-border`}
            >
                {isExpanded ? "Read Less" : "Read More"}
                <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function HeroWithScale({ contributions }: { contributions?: Promise<Activity[]> }) {
    const [mounted, setMounted] = useState(isAppHydrated);

    useEffect(() => {
        isAppHydrated = true;
        if (!mounted) {
            setMounted(true);
        }
    }, [mounted]);

    return (
        <div className="w-full flex flex-col min-h-screen">
            <section className="relative w-full border-b border-border flex-1 flex flex-col">
                {/* Main Content Area with Vertical Stripes */}
                <div className="max-w-5xl mx-auto w-full flex flex-1 items-stretch">
                    <VerticalStripes />

                    <main className="flex-1 min-w-0">
                        {/* Dot Pattern Section (The "Canvas") */}
                        <section className="relative w-full h-48 md:h-60 border-b border-border flex items-center justify-center p-8 bg-background overflow-hidden">
                            <FluidDotGrid />
                            <motion.div
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={0.3}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative w-fit h-fit group cursor-grab active:cursor-grabbing select-none"
                            >
                                <div className="relative w-40 md:w-80 aspect-square pointer-events-none">
                                    <Image
                                        src="/Logo.png"
                                        alt="Logo"
                                        fill
                                        sizes="(max-width: 768px) 160px, 320px"
                                        loading="lazy"
                                        className="object-contain drop-shadow-sm transition-all dark:hidden"
                                        draggable={false}
                                    />
                                    <Image
                                        src="/LightLogo.png"
                                        alt="Logo"
                                        fill
                                        sizes="(max-width: 768px) 160px, 320px"
                                        loading="lazy"
                                        className="object-contain drop-shadow-sm transition-all hidden dark:block"
                                        draggable={false}
                                    />
                                </div>
                            </motion.div>
                        </section>

                        {/* Integrated Bio Grid Section */}
                        <section className="w-full flex flex-col border-b border-border">
                            {/* Row 1: Profile & Name */}
                            <div className="flex flex-row items-stretch border-b border-border">
                                {/* Profile Image Cell */}
                                <div className="p-4 md:p-8 flex items-center justify-center border-r border-border shrink-0 bg-muted/5">
                                    <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-border overflow-hidden shadow-sm bg-background">
                                        <Image
                                            src="/image.png"
                                            alt="Yash Anand"
                                            width={128}
                                            height={128}
                                            loading="lazy"
                                            className="object-cover object-[center_25%] w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Name and Animated Title Cell */}
                                <div className="flex-1 flex flex-col justify-center p-4 md:p-8 bg-stripe-horizontal/[0.02]">
                                    <h1 className="text-xl md:text-4xl font-medium tracking-tight text-foreground">
                                        Hi, I am Yash Anand
                                    </h1>
                                    <div className="text-[10px] md:text-base font-mono text-muted-foreground mt-1 md:mt-2">
                                        <RotateWords words={["High-Agency Builder", "Full-Stack Design Engineer", "Product Engineer", "Open Source Contributor", "0-to-1 Prototyper"]} />
                                    </div>

                                </div>

                            </div>
                            <section className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-4">
                                    About
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                                        A high-agency, product-focused engineer who designs, codes, and ships fast. 
                                        Formerly the first engineer/designer hire at Dseide Healthcare Network, I specialize 
                                        in taking features all the way from Figma concepts to production React Native & Web apps.
                                    </p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { title: "Design-to-Code Ownership", desc: "No PM needed. I translate product ideas into high-fidelity Figma designs and build them into clean code." },
                                            { title: "Velocity & Startup DNA", desc: "Comfortable with ambiguity, rapid prototyping, and learning new stacks on the fly." },
                                            { title: "Open Source Contributor", desc: "Active contributor to modern web ecosystems (UI libraries and developer tooling)." },
                                            { title: "Aesthetic & Performance", desc: "Obsessed with 60fps physics-based animations, clean component architectures, and fast bundle loading." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium text-foreground leading-none">{item.title}</p>
                                                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-center mt-10 overflow-hidden ">
                                    {mounted && contributions && (
                                        <Suspense fallback={<GitHubContributionsFallback />}>
                                            <GitHubContributions
                                                contributions={contributions}
                                                githubProfileUrl="https://github.com/yashanand167"
                                            />
                                        </Suspense>
                                    )}
                                </div>
                            </section>
                        </section>

                        <section className="relative w-full">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-6">
                                    Stacks I am familiar with
                                </h2>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {techStack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-foreground hover:bg-muted/40 hover:border-primary/30 transition-colors cursor-default"
                                        >
                                            {getTechIcon(tech.name)}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal" />

                        <section className="relative w-full border-b border-border">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    Work Experience so far
                                </h2>

                                {/* Company Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6">
                                    <div className="flex items-center gap-4">
                                        <a href="https://dseide.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-2xl border border-dotted border-primary/40 bg-primary/5 flex items-center justify-center overflow-hidden shadow-sm relative group shrink-0">
                                            <Image src="/images.png" alt="Dseide Healthcare Network" fill loading="lazy" sizes="64px" className="object-cover transition-transform group-hover:scale-110" />
                                        </a>
                                        <div>
                                            <a href="https://dseide.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">
                                                <h3 className="font-medium text-foreground text-lg md:text-xl">Dseide Healthcare Network</h3>
                                            </a>
                                            <p className="text-sm text-muted-foreground font-mono mt-1">Full-stack & Product Design • Bangalore</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/blogs/healthcare-startup-experience"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/30 hover:border-primary transition-all shadow-sm w-fit sm:self-center"
                                    >
                                        <span>View Design Case Study</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                                {/* Tree Branch Timeline */}
                                <div className="ml-4 md:ml-8 border-l-2 border-border/50 pl-6 md:pl-8 pb-4 relative space-y-4 md:space-y-6">
                                    {/* Role 1 (Aug 2025 - Oct 2025) */}
                                    <div className="relative group">
                                        <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-primary/50 transition-colors"></div>
                                        <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--primary)]"></div>

                                        <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-primary/40 transition-colors">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                <h4 className="font-medium text-foreground text-lg">0-to-1 Product Design for Mobile App</h4>
                                                <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Aug 2025 - Oct 2025</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Designed the entire core mobile application from a blank canvas in Figma. Structured a rigid 8px design system to handle high-density medical clinical records and workflows for healthcare professionals.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {["Figma", "UI/UX", "Mobile Design", "User Research", "Design System"].map((tech, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Role 2 (Oct 2025 - Nov 2025) */}
                                    <div className="relative group">
                                        <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-primary/50 transition-colors"></div>
                                        <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--primary)]"></div>

                                        <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-primary/40 transition-colors">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                <h4 className="font-medium text-foreground text-lg">Mobile App Development</h4>
                                                <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Oct 2025 - Nov 2025</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Learned React Native and Expo on the fly to build and launch the production mobile app in 4 weeks. Developed clean local data caching via TanStack Query and state management with Zustand.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {["React Native", "Expo", "Zustand", "TanStack Query", "Mobile Dev"].map((tech, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remaining roles inside ExpandableExperience */}
                                    <ExpandableExperience buttonClassName="ml-0">
                                        <div className="space-y-4 md:space-y-6 pt-4">
                                            {/* Role 3 (Nov 2025 - Dec 2025) */}
                                            <div className="relative group">
                                                <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-primary/50 transition-colors"></div>
                                                <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--primary)]"></div>

                                                <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-primary/40 transition-colors">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                        <h4 className="font-medium text-foreground text-lg">Web Dashboard & Landing Page</h4>
                                                        <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Nov 2025 - Dec 2025</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Built the web dashboard from scratch using React, integrating REST APIs with Axios. Designed and shipped the corporate landing page on Framer.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {["React", "Framer", "Axios", "REST API", "Figma"].map((tech, i) => (
                                                            <span key={i} className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Role 4 (Jan 2026 - Feb 2026) */}
                                            <div className="relative group">
                                                <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-primary/50 transition-colors"></div>
                                                <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--primary)]"></div>

                                                <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-primary/40 transition-colors">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                        <h4 className="font-medium text-foreground text-lg">Performance Refinement & API Testing</h4>
                                                        <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Jan 2026 - Feb 2026</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Optimized React Native rendering performance to eliminate frame drops. Wrote unit tests and mock API integrations using Jest to secure core flows.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {["Jest", "UI Performance", "React Native", "API Testing"].map((tech, i) => (
                                                            <span key={i} className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Role 5 (Mar 2026 - May 2026) */}
                                            <div className="relative group">
                                                <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-primary/50 transition-colors"></div>
                                                <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--primary)]"></div>

                                                <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-primary/40 transition-colors">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                        <h4 className="font-medium text-foreground text-lg">Event & Webinar Module Architecture</h4>
                                                        <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Mar 2026 - May 2026</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Spearheaded the technical architecture and interface design of the upcoming live event and medical webinar module, mapping state schemas and event routing.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {["System Architecture", "Figma", "Feature Ownership", "API Design"].map((tech, i) => (
                                                            <span key={i} className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ExpandableExperience>
                                </div>

                                {/* Company 2 Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6 mt-8 md:mt-12">
                                    <div
                                        onClick={() =>
                                            window.open(
                                                "https://www.figma.com/design/IjCiARPScq2kN5yHSVdU8o/AI-powered-Nutrition-App?node-id=0-1&p=f&t=n0I38EAIBKzSnqlF-0",
                                                "_blank",
                                                "noopener,noreferrer"
                                            )
                                        }
                                        className="group flex items-center gap-4 cursor-pointer"
                                    >
                                        <div className="w-16 h-16 rounded-2xl border border-dotted border-foreground/40 bg-muted/10 flex items-center justify-center text-xl font-mono shadow-sm text-foreground group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                            <Palette className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform" />
                                        </div>

                                        <div>
                                            <h3 className="font-medium text-foreground text-lg md:text-xl group-hover:text-primary transition-colors">
                                                Freelance
                                            </h3>

                                            <p className="text-sm text-muted-foreground font-mono mt-1">
                                                Product Design • Global
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/blogs/product-design-thinking"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/30 hover:border-primary transition-all shadow-sm w-fit sm:self-center"
                                    >
                                        <span>View Design Case Study</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                                {/* Tree Branch Timeline */}
                                <div className="ml-4 md:ml-8 border-l-2 border-border/50 pl-6 md:pl-8 pb-4 relative space-y-4 md:space-y-6">
                                    {/* Role 1 */}
                                    <div className="relative group">
                                        {/* Connector Line & Dot */}
                                        <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-foreground/50 transition-colors"></div>
                                        <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-foreground group-hover:bg-foreground/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--foreground)]"></div>

                                        <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-foreground/40 transition-colors">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                <h4 className="font-medium text-foreground text-lg">AI Nutrition App</h4>
                                                <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Phase 1</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Conducted comprehensive UX research and competitor analysis to establish the foundation and architecture of the application's design system.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {["UX Research", "Competitor Analysis", "Design System"].map((tech, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Role 2 */}
                                    <div className="relative group">
                                        <div className="absolute -left-6 md:-left-8 top-8 w-6 md:w-8 h-[2px] bg-border/50 group-hover:bg-foreground/50 transition-colors"></div>
                                        <div className="absolute -left-[29px] md:-left-[37px] top-[27px] w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-foreground group-hover:bg-foreground/20 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--foreground)]"></div>

                                        <div className="bg-muted/5 border border-border/50 rounded-xl p-5 hover:border-foreground/40 transition-colors">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                <h4 className="font-medium text-foreground text-lg">UI Design & Dev Handoff</h4>
                                                <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border/50 w-fit">Phase 2</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Created high-fidelity UI designs in Figma and ensured a seamless development handoff with detailed specifications.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {["UI Design", "Figma", "Dev Handoff"].map((tech, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    Featured Projects
                                </h2>

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
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center justify-between mb-3 gap-2">
                                                <h3 className="text-lg font-medium text-foreground">askNow</h3>
                                                <span className="shrink-0 px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">Live Platform</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                                                An end-to-end survey platform for creating, managing, and analyzing responses, built with a Dockerized Prisma backend to handle concurrent users.
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    {["Next.js", "React", "Tailwind", "Prisma", "Docker"].map((tech, i) => (
                                                        <span key={i} className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">{tech}</span>
                                                    ))}
                                                </div>
                                                <a
                                                    href="https://asknow.vercel.app/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                >
                                                    Live Site <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* zyra Project Card */}
                                    <div className="group relative flex flex-col rounded-2xl border border-dotted border-foreground/20 bg-muted/5 overflow-hidden hover:border-foreground/30 transition-all shadow-sm">
                                        {/* Image Container */}
                                        <div className="aspect-video w-full bg-muted/20 relative overflow-hidden border-b border-dotted border-foreground/20 flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
                                            <Image
                                                src="/zyra.png"
                                                alt="zyra Project Preview"
                                                fill
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center justify-between mb-3 gap-2">
                                                <h3 className="text-lg font-medium text-foreground">zyra</h3>
                                                <span className="shrink-0 px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">Editor Core</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                                                A sleek, minimalist rich-text editor designed to deeply explore Tiptap's extensible node architectures and Framer Motion interactions.
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    {["Next.js", "Tiptap", "Framer Motion", "Prisma", "Tailwind"].map((tech, i) => (
                                                        <span key={i} className="text-[10px] font-mono text-foreground bg-foreground/5 px-2 py-1 rounded-md border border-border">{tech}</span>
                                                    ))}
                                                </div>
                                                <a
                                                    href="https://github.com/yashanand167/zyra"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                >
                                                    GitHub <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlight Project: Inertia UI */}
                                <div className="mt-8 border border-dotted border-foreground/20 rounded-2xl overflow-hidden bg-muted/5 relative group hover:border-foreground/30 transition-colors">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10 flex flex-col md:flex-row">
                                        {/* Image */}
                                         <div className="md:w-[40%] relative bg-gradient-to-br from-primary/5 to-primary/0 overflow-hidden aspect-video md:aspect-auto min-h-[200px]">
                                            <Image
                                                src="/Landing Page.png"
                                                alt="Inertia UI Preview"
                                                fill
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                             <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-t md:border-l md:border-t-0 border-dotted border-foreground/20">
                                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                <h3 className="text-lg md:text-xl font-medium text-foreground">
                                                    Inertia-UI
                                                </h3>
                                                <span className="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">
                                                    In Active Dev
                                                </span>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-6">
                                                A high-performance component library built from scratch, prioritizing hardware-accelerated fluid motion, design token constraints, and a perceptually uniform OKLCH color system.
                                            </p>

                                            <a
                                                href="https://www.figma.com/design/PBv5vZwApM9jznIO8coAFs/Inertia?node-id=67-46&t=RM7kbxONhidMbwo0-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:scale-105 transition-transform w-fit group/btn"
                                            >
                                                <span>Figma Design Token Spec</span>
                                                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* "People I worked with" Section */}
                        <section className="relative w-full overflow-hidden">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    People I worked with
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                                    {/* Founder Card */}
                                    <div className="md:col-span-2 border border-dotted border-primary/30 p-6 md:p-8 flex flex-col justify-between bg-primary/5 hover:bg-primary/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-primary/30 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Nikhila.jpg"
                                                        alt="Nikhila CR"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/nikhila-c-r-925190197/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Nikhila CR
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-primary font-mono uppercase tracking-wider">Founder at Dseide</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                "Yash is a visionary engineer who doesn't just write code, but understands the soul of the product. His ability to anticipate user needs and implement them flawlessly is rare."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-primary/20 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Strategic Partner</span>
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                                    </div>

                                    {/* Co-founder Card */}
                                    <div className="md:col-span-2 border border-dotted border-primary/30 p-6 md:p-8 flex flex-col justify-between bg-primary/5 hover:bg-primary/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-primary/30 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Cap.png"
                                                        alt="Bharath M"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/bharath-dseide/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Bharath M
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-primary font-mono uppercase tracking-wider">Co-founder at Dseide</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                "Working with Yash has been an absolute game-changer for our technical roadmap. He brings a level of craftsmanship and architectural thinking that elevated our entire platform."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-primary/20 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Technical Partner</span>
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                                    </div>
                                    {/* Card 1: Luvkush (Large) */}
                                    <div className="md:col-span-2 border border-dotted border-foreground/20 p-6 md:p-8 flex flex-col justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-foreground/20 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Luvkush.jpg"
                                                        alt="Luvkush Sharma"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/luvkushsharma/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Luvkush Sharma
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground font-mono">Product Lead @ Dseide</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                "Working with Yash has been an amazing experience because he is both highly knowledgeable and very approachable. He always takes the time to explain coding concepts clearly. Whenever I needed help, he was patient, supportive, and willing to guide me. His passion for coding has inspired me to grow as a developer."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-border/50 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Project Lead 2025</span>
                                        </div>
                                        {/* Subtle background decoration */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-dot opacity-[0.03] -mr-16 -mt-16 rounded-full"></div>
                                    </div>

                                    {/* Card 2: Sahan (Large) */}
                                    <div className="md:col-span-2 border border-dotted border-foreground/20 p-6 md:p-8 flex flex-col justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-foreground/20 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Sahan.jpg"
                                                        alt="Sahan Angadi"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/sahanangadi39/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Sahan Angadi
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground font-mono">Software Engineer @ Dseide</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                "A versatile engineer who isn't afraid to dive deep into the stack. A joy to work with on complex design systems. His code is clean, documented, and highly performant."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-border/50 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Engineering Partner</span>
                                        </div>
                                    </div>

                                    {/* Card 3: Jotham (Large) */}
                                    <div className="md:col-span-2 border border-dotted border-foreground/20 p-6 md:p-8 flex flex-col justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-foreground/20 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Jotham.png"
                                                        alt="Jotham"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/jp69/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Jotham
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground font-mono">FrontEnd Developer @Dseide</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                "Exceptional eye for design and performance. Yash delivers high-quality code consistently and is always willing to help."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-border/50 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Collaborator</span>
                                        </div>
                                    </div>

                                    {/* Card 4: Deepu (Large) */}
                                    <div className="md:col-span-2 border border-dotted border-foreground/20 p-6 md:p-8 flex flex-col justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-foreground/20 overflow-hidden relative shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                                    <Image
                                                        src="/Deepu.jpg"
                                                        alt="Jnyandeep Chevula"
                                                        fill
                                                        sizes="48px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">
                                                        <a
                                                            href="https://www.linkedin.com/in/chevula-jnyandeep/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline inline-flex items-center gap-1"
                                                        >
                                                            Jnyandeep Chevula
                                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground font-mono">Software Engineer</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                “His work on the frontend was pivotal. He combines strong engineering execution with a sharp eye for design detail, resulting in highly polished user experiences.”                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-border/50 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">UI Contributor</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                        <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal" />

                        <section className="relative w-full">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    Let's Connect
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                                    {/* Twitter */}
                                    <a
                                        href="https://x.com/yashanand167"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                            </div>
                                            <span className="font-medium text-foreground">Twitter</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/yash-anand-b7264b308/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                            </div>
                                            <span className="font-medium text-foreground">LinkedIn</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/yashanand167"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                            </div>
                                            <span className="font-medium text-foreground">GitHub</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>

                                    {/* Mail */}
                                    <a
                                        href="mailto:yash.anand167@gmail.com"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <Mail className="w-4 h-4 text-foreground" />
                                            </div>
                                            <span className="font-medium text-foreground">Mail</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </section>

                    </main>

                    <VerticalStripes />
                </div>
            </section>

        </div>
    );
}

const techStack = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "React Native" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Bun" },
    { name: "Docker" },
    { name: "Github" },
    { name: "Gitlab" },
    { name: "Figma" },
    { name: "Three.js" },
    { name: "GraphQL" },
    { name: "Supabase" },
    { name: "shadcn" },
    { name: "Jest" }
];

const getTechIcon = (name: string) => {
    const className = "w-3.5 h-3.5 shrink-0";
    switch (name) {
        case "React":
        case "React Native":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            );
        case "Next.js":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.882 18.067L11.533 9.778v8.289H9.778V7.111h1.778l6.322 8.289v-8.289h1.778v10.956z" />
                </svg>
            );
        case "TypeScript":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm12.923 12.388c0-2.83 2.115-3.836 4.908-3.836 2.474 0 4.197 1.026 4.197 1.026l-.82 2.05s-1.385-.82-2.718-.82c-1.487 0-2.513.513-2.513 1.59 0 2.513 5.95 2.154 5.95 6.05 0 2.923-2.154 4.092-4.974 4.092-2.82 0-4.718-1.282-4.718-1.282l.872-2.154s1.744.974 3.282.974c1.59 0 2.564-.615 2.564-1.744 0-2.82-5.95-2.205-5.95-6.05v.005zm-1.897 10.359H9.333V9.077H5.692V6.667h9.692v2.41H11.74v13.67h.411z" />
                </svg>
            );
        case "Node.js":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            );
        case "Tailwind CSS":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
            );
        case "Framer Motion":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M12 0L24 12H12l12 12H0L12 12H0z" />
                </svg>
            );
        case "PostgreSQL":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
            );
        case "Redis":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <polygon points="12,2 22,8 12,14 2,8" />
                    <polygon points="12,10 22,16 12,22 2,16" />
                </svg>
            );
        case "Bun":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5" />
                </svg>
            );
        case "Docker":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M13.962 8.224h-2.43c-.171 0-.312.14-.312.312v2.43c0 .171.141.312.312.312h2.43c.172 0 .312-.141.312-.312V8.536c0-.171-.14-.312-.312-.312zm-3.41 0H8.121c-.171 0-.312.14-.312.312v2.43c0 .171.14.312.312.312h2.43c.172 0 .312-.141.312-.312V8.536c0-.171-.14-.312-.312-.312zm-3.41 0H4.712c-.171 0-.312.14-.312.312v2.43c0 .171.14.312.312.312h2.43c.171 0 .312-.141.312-.312V8.536c0-.171-.14-.312-.312-.312zm9.13 5.122H2.43c-.171 0-.312.14-.312.312v2.43c0 .171.14.312.312.312h13.84c.172 0 .312-.141.312-.312v-2.43c0-.171-.14-.312-.312-.312z" />
                </svg>
            );
        case "Github":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            );
        case "Gitlab":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M23.953 11.07a.64.64 0 00-.22-.47L12 2 1.27 10.6a.64.64 0 00-.22.47c0 .28.16.53.4.65L12 17.5l10.55-5.78a.72.72 0 00.4-.65z" />
                </svg>
            );
        case "Figma":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M12 12a4 4 0 0 0-4-4H4v4a4 4 0 0 0 4 4h4zM12 12a4 4 0 0 0 4-4H12zM12 12v8a4 4 0 0 0 4-4v-4zM8 4a4 4 0 0 0-4 4h4zM16 4a4 4 0 0 0-4 4h4z" />
                </svg>
            );
        case "GraphQL":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                    <polygon points="12,7 17,10 17,14 12,17 7,14 7,10" />
                </svg>
            );
        case "Supabase":
            return (
                <svg className={`${className} fill-current`} viewBox="0 0 24 24">
                    <path d="M13.9 2L5 12h7l-1.9 10L19 12h-7z" />
                </svg>
            );
        case "shadcn":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6v6H9z" />
                </svg>
            );
        case "Jest":
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 2l9 4.9v10.2L12 22l-9-4.9V6.9z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            );
        default:
            return (
                <svg className={`${className} fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
                </svg>
            );
    }
};



const VerticalStripes = () => {
    return (
        <div className="relative z-10 w-6 md:w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}