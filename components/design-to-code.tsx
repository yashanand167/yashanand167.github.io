import { motion } from "motion/react"

export default function DesignJourney() {

    return (

        <section className="relative mx-auto max-w-5xl px-4 md:px-16 py-8 md:py-16">

            <div className="mb-12 md:mb-16">
                <p className="text-sm text-neutral-500 font-mono">
                    System Architecture
                </p>
                <h2 className="mt-2 text-2xl md:text-2xl font-medium tracking-tight">
                    My Design to Development Loop
                </h2>
            </div>
            <div className="relative">
                <motion.div

                    initial={{ height: 0 }}

                    whileInView={{ height: "100%" }}

                    transition={{

                        duration: 1.5

                    }}

                    viewport={{ once: true }}

                    className="
            absolute
            left-3 md:left-1/2
            top-0
            w-px
            -translate-x-1/2
            bg-border
          "

                />

                <div className="space-y-24">

                    {process.map((item, index) => {

                        const isEven = index % 2 === 0

                        return (

                            <motion.div

                                key={item.title}

                                initial={{

                                    opacity: 0,

                                    y: 40

                                }}

                                whileInView={{

                                    opacity: 1,

                                    y: 0

                                }}

                                transition={{

                                    delay: index * .1

                                }}

                                viewport={{ once: true }}

                                className={`
                  relative flex items-center
                  justify-end ${isEven ? "md:justify-start" : "md:justify-end"}
                `}

                            >

                                <div
                                    className={`
                    w-[calc(100%-2rem)] md:w-[45%]
                    rounded-3xl
                    border border-border
                    bg-muted/50
                    p-6
                    backdrop-blur
                    transition-all
                    hover:scale-[1.02]
                  `}
                                >
                                    <p className="mb-2 text-sm font-mono text-primary">
                                        STEP_0{index + 1}
                                    </p>
                                    <h3 className="text-lg font-medium text-foreground tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <motion.div

                                    whileHover={{

                                        scale: 1.3

                                    }}

                                    className="
                    absolute
                    left-3 md:left-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    border
                    border-border
                    bg-background
                  "

                                />

                            </motion.div>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}

const process = [
    {
        title: "Goal Parsing & Deconstruction",
        desc:
            "Receiving prompt instructions and code objectives. Parsing semantic intent, mapping workspace boundaries, and programmatically defining success constraints."
    },

    {
        title: "Context Retrieval (RAG)",
        desc:
            "Performing dependency mapping and structural schema checks. Analyzing existing code designs, directory states, and active types to prevent redundant implementations."
    },

    {
        title: "Orchestrated Architecture Planning",
        desc:
            "Coordinating specialized execution paths (Planning, Structuring, Reasoning). Drafting technical specs, UI component layouts, and state management schemas before writing code."
    },

    {
        title: "Iterative Code Synthesis",
        desc:
            "Writing modular, semantic React & React Native code. Binding designs directly to unified theme tokens (spacing grids, OKLCH scales, Tailwind configurations) to build high-performance components."
    },

    {
        title: "Self-Reflection & Diagnostic Loop",
        desc:
            "Executing dry-runs, analyzing rendering diagnostics, and self-linting. Debugging state regressions, optimizing re-render loops, and securing smooth 60fps animations."
    },

    {
        title: "Rigorous Build Verification",
        desc:
            "Conducting local build checks and compilation tests. Verifying responsive flex structures across standard device viewports and checking styling alignment."
    },

    {
        title: "Production Release & Feedback",
        desc:
            "Deploying verified code, compiling changes, and logging metrics. Collecting real-world user logs and human-in-the-loop feedback to iterate on the next lifecycle cycle."
    }
]