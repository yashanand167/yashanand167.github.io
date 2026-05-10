'use client'

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen relative"> 
      <div className="max-w-3xl mx-auto px-7 py-16 relative z-10">
        <section className="hero-section">
          <div>
            <motion.div 
              className="relative group w-[50px] h-[50px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image 
                src="/Profile.jpg" 
                alt="hero image" 
                width={50} 
                height={50} 
                className="rounded-xl object-cover border border-black/5 dark:border-white/10 shadow-sm"
              />
            </motion.div>
            <div className=""></div>
          </div>
        </section>
      </div>

    </main>
  ); 
}
