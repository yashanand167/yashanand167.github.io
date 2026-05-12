"use client";

import { FileCode } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'motion/react'
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [scrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";
    return (
        <header className="sticky top-0 z-50 w-full h-14 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto w-full h-full relative flex">
                {/* Left Crossing Box */}
                <div className="w-14 bg-background bg-stripe border-l border-r border-border h-full shrink-0" />

                <div className="flex flex-1 items-center justify-between px-4 ">
                    <nav className="flex items-center gap-4 md:gap-8">
                        <AnimatePresence>
                            {scrolling && (
                                <motion.a
                                    key="logo"
                                    href="#home"
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 260, 
                                        damping: 20,
                                        mass: 0.5
                                    }}
                                    className="flex items-center"
                                >
                                    <Image
                                        src={isDark ? "/LightLogo.png" : "/Logo.png"}
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        priority
                                        className="w-8 md:w-8 h-auto drop-shadow-sm transition-all"
                                    />
                                </motion.a>
                            )}
                        </AnimatePresence>
                        <a href="#blogs" className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Blogs
                        </a>
                        <a href="#personal" className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Personal
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
        </header>
    );
}

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
