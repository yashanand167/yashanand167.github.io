"use client"

import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react'
import { FileCode, Mail, MailOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./theme-toggle";
import { RotateWords } from "./rotate-words";
import { Marquee } from "./marquee";

export default function HeroWithScale() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden border-b border-border">
            {/* Full-width Top Bar with Horizontal Lines */}
            <div className="w-full h-14 border-b border-border relative">
                <div className="max-w-5xl mx-auto w-full h-full relative flex">
                    {/* Left Crossing Box */}
                    <div className="w-14 bg-background bg-stripe border-l border-r border-border h-full shrink-0" />

                    <div className="flex flex-1 items-center justify-between px-4 ">
                        <nav className="flex items-center gap-4 md:gap-8">
                            <a href="#about" className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                            <a href="#blogs" className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                Blogs
                            </a>
                        </nav>

                        <div className="flex items-center gap-2">
                            <ResumeButton />
                            <div className="h-4 w-[1px] bg-border mx-1 md:mx-2" />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Right Crossing Box */}
                    <div className="w-14 bg-background bg-stripe border-l border-r border-border h-full shrink-0" />
                </div>
            </div>

            {/* Main Content Area with Vertical Stripes */}
            <div className="max-w-5xl mx-auto w-full h-full flex">
                <VerticalStripes />

                <main className="flex-1 min-w-0">
                    {/* Dot Pattern Section (The "Canvas") */}
                    <section className="bg-dot w-full h-48 md:h-80 border-b border-border flex items-center justify-center p-8">
                        <div 
                            className="relative w-fit h-fit group"
                        >
                            <Image
                                src={isDark ? "/LightLogo.png" : "/Logo.png"}
                                alt="Logo"
                                width={320}
                                height={320}
                                priority
                                className="w-40 md:w-80 h-auto drop-shadow-sm transition-all"
                            />

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
                                <div className="mt-5">
                                    <p>Currently building Inertia-UI</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Social Connectivity Row */}
                        {/* <div className="w-full p-4 md:px-8 md:py-6 flex flex-wrap items-center gap-3 md:gap-5 bg-dot/[0.05]">
                            <SocialIcon src="/Github.jpg" alt="Github" />
                            <SocialIcon src="/LinkedIn.png" alt="LinkedIn" />
                            <SocialIcon src="/X.jpg" alt="X" />
                            <MailButton email="yash.anand167@gmail.com" />
                        </div> */}
                    </section>

                    <section className="relative w-full border-b border-border overflow-hidden">
                        <div className="h-12 md:h-14 bg-stripe border-b border-border " />
                        <div className="p-4 md:px-8 md:py-6">
                            <h2 className="text-xl md:text-2xl font-medium tracking-tight">Stacks I am familiar with</h2>
                        </div>
                        
                        <div className="py-5 space-y-2">
                            <Marquee items={techStack1} direction="left" speed={40} />
                            <Marquee items={techStack2} direction="right" speed={35} />
                        </div>
                    </section>

                </main>

                <VerticalStripes />
            </div>
        </section>
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

const ResumeButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] md:text-sm font-medium transition-all hover:ring-2 hover:ring-primary/20"
        >
            <span>Resume</span>
            <AnimatePresence mode="popLayout">
                {isHovered && (
                    <motion.span
                        initial={{ width: 0, opacity: 0, scale: 0.5 }}
                        animate={{ width: "auto", opacity: 1, scale: 1 }}
                        exit={{ width: 0, opacity: 0, scale: 0.5 }}
                        className="overflow-hidden"
                    >
                        <FileCode className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

const VerticalStripes = () => {
    return (
        <div className="relative z-10 h-full w-14 border-l border-r border-border shrink-0 bg-background">
            <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-border bg-stripe" />
        </div>
    )
}