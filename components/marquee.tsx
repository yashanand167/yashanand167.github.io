"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: { name: string; icon?: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({
  items,
  direction = "left",
  speed = 30,
  className,
}: MarqueeProps) {
  // Duplicate items to ensure seamless looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("relative flex w-full overflow-hidden py-4", className)}>
      {/* Gradient Overlays for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center gap-6 md:gap-8 px-4"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 md:gap-3 rounded-full border border-border bg-muted/30 px-4 py-2 md:px-6 md:py-3 backdrop-blur-sm transition-colors hover:bg-muted/50"
          >
            {item.icon && <span className="h-4 w-4 md:h-5 md:w-5">{item.icon}</span>}
            <span className="text-xs md:text-sm font-medium tracking-tight text-foreground whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
