"use client"

import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react'
import { FileCode, Mail, MailOpen, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./theme-toggle";
import { RotateWords } from "./rotate-words";
import { Marquee } from "./marquee";
import Header from "./Header";

export default function HeroWithScale() {

    return (
        <div className="w-full flex flex-col min-h-screen">
            <section className="relative w-full border-b border-border flex-1 flex flex-col">
                {/* Main Content Area with Vertical Stripes */}
                <div className="max-w-5xl mx-auto w-full flex flex-1 items-stretch">
                    <VerticalStripes />

                    <main className="flex-1 min-w-0">
                        {/* Dot Pattern Section (The "Canvas") */}
                        <section className="bg-dot w-full h-48 md:h-60 border-b border-border flex items-center justify-center p-8">
                            <div
                                className="relative w-fit h-fit group"
                            >
                                <div className="relative w-40 md:w-80 aspect-square">
                                    <Image
                                        src="/Logo.png"
                                        alt="Logo"
                                        fill
                                        sizes="(max-width: 768px) 160px, 320px"
                                        priority
                                        className="object-contain drop-shadow-sm transition-all dark:hidden"
                                    />
                                    <Image
                                        src="/LightLogo.png"
                                        alt="Logo"
                                        fill
                                        sizes="(max-width: 768px) 160px, 320px"
                                        priority
                                        className="object-contain drop-shadow-sm transition-all hidden dark:block"
                                    />
                                </div>

                            </div>
                        </section>

                        {/* Integrated Bio Grid Section */}
                        <section className="w-full flex flex-col border-b border-border">
                            {/* Row 1: Profile & Name */}
                            <div className="flex flex-row items-stretch border-b border-border">
                                {/* Profile Image Cell */}
                                <div className="p-4 md:p-8 flex items-center justify-center border-r border-border shrink-0 bg-muted/5">
                                    <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-border overflow-hidden shadow-sm bg-background">
                                        <Image
                                            src="/Image.jpg"
                                            alt="Yash Anand"
                                            width={128}
                                            height={128}
                                            priority
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Name and Animated Title Cell */}
                                <div className="flex-1 flex flex-col justify-center p-4 md:p-8 bg-stripe-horizontal/[0.02]">
                                    <h1 className="text-xl md:text-4xl font-medium tracking-tight text-foreground">
                                        Yash Anand
                                    </h1>
                                    <div className="text-[10px] md:text-base font-mono text-muted-foreground mt-1 md:mt-2">
                                        <RotateWords words={["Product-Focused Engineer", "Frontend Developer", "Open Source Contributor", "Product Designer", "Creative Technologist"]} />
                                    </div>

                                </div>

                            </div>
                            <section className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-4">
                                    About
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                                        I'm a product-focused engineer dedicated to bridging the gap between design and code.
                                        I specialize in building high-performance web interfaces and contributing to open-source
                                        projects that empower developers to create beautiful digital experiences.
                                    </p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { title: "Product-First Thinking", desc: "Crafting interfaces that balance business goals with user delight." },
                                            { title: "Modern Tech Stack", desc: "Next.js, TypeScript, and Framer Motion for fluid experiences." },
                                            { title: "Open Source", desc: "Contributing to the ecosystem through tools like Inertia-UI." },
                                            { title: "Design Systems", desc: "Building scalable, maintainable component libraries from scratch." }
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
                            </section>

                            {/* Row 2: Social Connectivity Row */}
                            {/* <div className="w-full p-4 md:px-8 md:py-6 flex flex-wrap items-center gap-3 md:gap-5 bg-dot/[0.05]">
                            <SocialIcon src="/Github.jpg" alt="Github" />
                            <SocialIcon src="/LinkedIn.png" alt="LinkedIn" />
                            <SocialIcon src="/X.jpg" alt="X" />
                            <MailButton email="yash.anand167@gmail.com" />
                        </div> */}
                        </section>

                        <section className="relative w-full border-b border-border">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-4">
                                    Stacks I am familiar with
                                </h2>
                                <div className="py-3 space-y-2">
                                    <Marquee items={techStack1} direction="left" speed={40} />
                                    <Marquee items={techStack2} direction="right" speed={35} />
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-4">
                                    Work Experience so far
                                </h2>
                                <div className="p-0">
                                    <p className="text-sm md:text-base text-muted-foreground"></p>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border overflow-hidden">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    People who worked with me
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {/* Card 1: Jotham (Large) */}
                                    <div className="md:col-span-2 md:row-span-2 border border-dotted border-foreground/20 p-6 md:p-8 flex flex-col justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center text-sm font-mono shadow-sm group-hover:scale-110 transition-transform">JO</div>
                                                <div>
                                                    <h3 className="font-medium text-foreground text-lg">Jotham</h3>
                                                    <p className="text-xs text-muted-foreground font-mono">Product Manager @ Stealth</p>
                                                </div>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                                                "Yash has an incredible ability to translate complex product requirements into seamless user experiences. His attention to detail in the frontend is unmatched, and he consistently delivers high-quality work under tight deadlines."
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-3 relative z-10">
                                            <div className="h-px flex-1 bg-border/50 border-dotted border-t"></div>
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Project Lead 2024</span>
                                        </div>
                                        {/* Subtle background decoration */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-dot opacity-[0.03] -mr-16 -mt-16 rounded-full"></div>
                                    </div>

                                    {/* Card 2: Sarah (Tall) */}
                                    <div className="md:col-span-1 md:row-span-2 border border-dotted border-foreground/20 p-6 flex flex-col bg-muted/5 hover:bg-muted/10 transition-all duration-300 group">
                                        <div className="flex flex-col h-full">
                                            <div className="mb-6">
                                                <div className="w-10 h-10 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center text-xs font-mono mb-3 group-hover:rotate-12 transition-transform">SC</div>
                                                <h3 className="font-medium text-foreground">Sarah Chen</h3>
                                                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Senior Engineer</p>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                                "A versatile engineer who isn't afraid to dive deep into the stack. A joy to work with on complex design systems. His code is clean, documented, and highly performant."
                                            </p>
                                            <div className="pt-6 mt-auto">
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3: Michael (Small) */}
                                    <div className="md:col-span-1 border border-dotted border-foreground/20 p-6 bg-muted/5 hover:bg-muted/10 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center text-[10px] font-mono group-hover:scale-110 transition-transform">MS</div>
                                            <h3 className="font-medium text-foreground text-sm">Michael Scott</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            "Exceptional eye for design and performance. Yash delivers high-quality code consistently and is always willing to help."
                                        </p>
                                    </div>

                                    {/* Card 4: Elena (Small) */}
                                    <div className="md:col-span-1 border border-dotted border-foreground/20 p-6 bg-muted/5 hover:bg-muted/10 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center text-[10px] font-mono group-hover:scale-110 transition-transform">EV</div>
                                            <h3 className="font-medium text-foreground text-sm">Elena Vance</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            "His contribution to our core UI library was pivotal. He understands the balance between speed and quality."
                                        </p>
                                    </div>

                                    {/* Card 5: Alex Rivera (Wide) */}
                                    <div className="md:col-span-4 border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group overflow-hidden relative">
                                        <div className="flex items-center gap-6 relative z-10">
                                            <div className="w-10 h-10 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center text-xs font-mono group-hover:bg-primary/5 transition-colors">AR</div>
                                            <div>
                                                <p className="text-sm md:text-base text-muted-foreground italic max-w-2xl">
                                                    "Yash is one of those rare developers who truly cares about the end-to-end user journey. Working with him was a highlight of the project."
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <h3 className="font-medium text-foreground text-xs uppercase tracking-wider">Alex Rivera</h3>
                                                    <span className="text-[10px] text-muted-foreground">• Lead Designer @ Nova</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-stripe opacity-[0.02]"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border">
                            <div className="p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-8">
                                    Connect
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Twitter */}
                                    <a 
                                        href="https://twitter.com/yashanand167" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                            </div>
                                            <span className="font-medium text-foreground">Twitter</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>

                                    {/* LinkedIn */}
                                    <a 
                                        href="https://linkedin.com/in/yashanand167" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="border border-dotted border-foreground/20 p-6 flex items-center justify-between bg-muted/5 hover:bg-muted/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-dotted border-foreground/20 bg-background flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
                                                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
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

const techStack1 = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Bun" },
];

const techStack2 = [
    { name: "Docker" },
    { name: "AWS" },
    { name: "Figma" },
    { name: "Three.js" },
    { name: "GraphQL" },
    { name: "Supabase" },
];

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl border border-border overflow-hidden bg-background shadow-sm hover:border-primary/50 transition-all cursor-pointer shrink-0 relative group active:scale-95">
        <Image src={src} alt={alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
);

const MailButton = ({ email }: { email: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ width: isHovered ? "auto" : "" }}
            className="h-10 md:h-14 w-10 md:w-14 rounded-lg md:rounded-xl border border-border flex items-center justify-center bg-background shadow-sm hover:border-primary/50 cursor-pointer overflow-hidden transition-all shrink-0 px-2 md:px-5 active:scale-95"
            style={{ width: isHovered ? "auto" : undefined }}
        >
            <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
                <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
                    <AnimatePresence mode="wait" initial={false}>
                        {isHovered ? (
                            <motion.div
                                key="open"
                                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MailOpen className="w-full h-full text-primary" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="closed"
                                initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0.5, opacity: 0, rotate: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Mail className="w-full h-full text-muted-foreground" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-[10px] md:text-sm font-medium text-foreground tracking-tight"
                        >
                            {email}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};



const VerticalStripes = () => {
    return (
        <div className="relative z-10 min-h-full w-14 border-l border-r border-border shrink-0 bg-background" />
    )
}