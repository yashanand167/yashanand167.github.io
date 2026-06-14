"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { BlogPost } from "@/lib/blog";

const TABS = [
    { id: "design-engineering", label: "Design & Engineering" },
    { id: "personal", label: "Personal" }
];

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
    const [activeTab, setActiveTab] = useState("design-engineering");

    const filteredPosts = posts.filter((post) => {
        const category = post.category?.toLowerCase() || "";
        if (activeTab === "design-engineering") {
            return category === "design" || category === "engineering";
        } else {
            return category === "personal";
        }
    });

    return (
        <div className="space-y-4 md:space-y-8">
            {/* Tabs Selector */}
            <div className="flex justify-center md:justify-start px-4 md:px-12">
                <div className="relative flex p-1 bg-muted/30 border border-border/50 rounded-full">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer outline-none ${
                                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-blog-tab"
                                        className="absolute inset-0 bg-background border border-border/50 shadow-sm rounded-full z-0"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Posts Grid/List */}
            <div className="p-4 md:px-12 md:py-6 space-y-12 min-h-[400px]">
                <motion.div 
                    layout 
                    className="grid grid-cols-1 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Link
                                        href={`/blogs/${post.slug}`}
                                        className="group block relative"
                                    >
                                        <div className="flex flex-col md:flex-row border border-border rounded-2xl overflow-hidden bg-muted/5 hover:bg-muted/10 transition-all hover:border-primary/50">
                                            {/* Image Container */}
                                            <div className="w-full md:w-[40%] aspect-[16/10] md:aspect-auto relative overflow-hidden shrink-0">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                    priority={index === 0}
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Content Container */}
                                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-center mb-4">
                                                        <span className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                            {post.category} <span className="text-primary">•</span> {post.date}
                                                        </span>
                                                    </div>

                                                    <h2 className="text-lg md:text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors mb-4">
                                                        {post.title}
                                                    </h2>

                                                    <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                </div>

                                                <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                                                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{post.readingTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                        Read now
                                                        <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 text-center w-full"
                            >
                                <p className="text-muted-foreground">No posts found in this category.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
