"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

export function RotateWords({
    words = ["Product Focused Engineer", "UI Developer", "Open Source Contributor", "Product Designer", "Creative Technologist"],
}: {
    words: string[]
}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2000)
        // Clean up interval on unmount
        return () => clearInterval(interval)
    }, [words.length])

    return (
        <div className="inline-flex h-5 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="block"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}