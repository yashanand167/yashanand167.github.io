"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { useState, useEffect } from "react";
import { FileCode } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem = ({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) => (
    <Link
        href={href}
        className={`relative h-full flex items-center text-xs md:text-sm font-medium transition-colors px-1 ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
    >
        <span>{children}</span>
        {active && (
            <motion.div
                layoutId="header-nav-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
        )}
    </Link>
);

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const { scrollY } = useScroll();
    const [scrolling, setScrolling] = useState(false);

    // This hook is much more reliable than manual listeners for SPA navigation
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (isHome) {
            setScrolling(latest > 240);
        }
    });

    // Check initial position on mount
    useEffect(() => {
        if (!isHome) {
            setScrolling(true);
        } else {
            setScrolling(window.scrollY > 240);
        }
    }, [isHome]);

    return (
        <header className="sticky top-0 z-50 w-full h-14 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto w-full h-full relative flex">
                {/* Left Crossing Box */}
                <div className="w-14 bg-background bg-stripe border-l border-r border-border h-full shrink-0" />

                <div className="flex flex-1 items-center justify-between px-4 h-full">
                    <nav className="flex items-center gap-4 md:gap-8 h-full">
                        <AnimatePresence>
                            {scrolling && (
                                <motion.a
                                    key="logo"
                                    href="/"
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
                                    <div className="relative w-8 md:w-8 h-8 md:h-8">
                                        <Image
                                            src="/Logo.png"
                                            alt="Logo"
                                            fill
                                            sizes="32px"
                                            priority
                                            className="object-contain drop-shadow-sm transition-all dark:hidden"
                                        />
                                        <Image
                                            src="/LightLogo.png"
                                            alt="Logo"
                                            fill
                                            sizes="32px"
                                            priority
                                            className="object-contain drop-shadow-sm transition-all hidden dark:block"
                                        />
                                    </div>
                                </motion.a>
                            )}
                        </AnimatePresence>
                        <NavItem href="/blogs" active={pathname.startsWith("/blogs")}>
                            Blogs
                        </NavItem>
                        <NavItem href="/personal" active={pathname.startsWith("/personal")}>
                            Personal
                        </NavItem>
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
