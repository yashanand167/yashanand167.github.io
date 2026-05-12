"use client"

import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react'
import { FileCode, Mail, MailOpen } from "lucide-react";
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
                                        priority
                                        className="object-contain drop-shadow-sm transition-all dark:hidden"
                                    />
                                    <Image
                                        src="/LightLogo.png"
                                        alt="Logo"
                                        fill
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
                            <section className="border-t border-border p-4 md:p-8">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-4">
                                    About
                                </h2>
                                <div className="space-y-6">
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

                        <section className="relative w-full border-b border-border overflow-hidden">
                            <div className="h-12 md:h-12 bg-stripe border-b border-border " />
                            <div className="p-4 md:px-8 md:py-6">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight">Stacks I am familiar with</h2>
                            </div>

                            <div className="py-3 space-y-2">
                                <Marquee items={techStack1} direction="left" speed={40} />
                                <Marquee items={techStack2} direction="right" speed={35} />
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border">
                            {/* <div className="h-12 md:h-14 bg-stripe border-b border-border " /> */}
                            <div className="p-4 md:px-8 md:py-6">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight">Work Experience so far</h1>
                            </div>
                            <div className="p-4 md:px-8 md:py-6">
                                <p></p>
                            </div>
                        </section>

                        <section className="relative w-full border-b border-border overflow-hidden">
                            <div className="h-12 md:h-12 bg-stripe border-b border-border " />
                            <div className="p-4 md:px-8 md:py-6">
                                <h1 className="text-xl md:text-2xl font-medium tracking-tight">People who worked with me</h1>
                            </div>
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                
                            </section>
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
    { name: "Python" },
    { name: "Go" },
    { name: "Rust" },
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