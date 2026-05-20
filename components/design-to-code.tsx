import { motion } from "motion/react"

export default function DesignJourney() {

    return (

        <section className="relative mx-auto max-w-5xl px-8 md:px-16 py-8 md:py-16">

            <div className="mb-12 md:mb-16">
                <p className="text-sm text-neutral-500">
                    My Work Process
                </p>
                <h2 className="mt-2 text-2xl md:text-2xl font-medium tracking-tight">
                    How ideas become interfaces
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
            left-6 md:left-1/2
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
                    w-[calc(100%-4rem)] md:w-[45%]
                    rounded-3xl
                    border border-border
                    bg-muted/50
                    p-6
                    backdrop-blur
                    transition-all
                    hover:scale-[1.02]
                  `}
                                >
                                    <p className="mb-2 text-sm font-mono text-muted-foreground">
                                        0{index + 1}
                                    </p>
                                    <h3 className="text-xl font-medium text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>

                                <motion.div

                                    whileHover={{

                                        scale: 1.3

                                    }}

                                    className="
                    absolute
                    left-6 md:left-1/2
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
        title: "Question",
        desc:
            "Every project starts with understanding the problem before opening any design tool. I focus on what users are trying to achieve, why the feature exists, and what success should look like."
    },

    {
        title: "Research",
        desc:
            "I gather context through references, patterns, competitor analysis, and user behavior. The goal is not copying ideas but identifying opportunities and understanding expectations."
    },

    {
        title: "Structure",
        desc:
            "Before creating screens, I break the experience into systems. I map user flows, identify reusable patterns, define content hierarchy, and think through possible states and edge cases."
    },

    {
        title: "Wireframe",
        desc:
            "I start shaping the experience with low-fidelity layouts. This stage helps me focus on navigation, information placement, and interactions without getting distracted by visual details."
    },

    {
        title: "Design System",
        desc:
            "Rather than designing isolated screens, I create reusable building blocks. Components, spacing rules, typography, and variants establish consistency and make scaling easier."
    },

    {
        title: "Build",
        desc:
            "Design and code begin connecting here. I translate interfaces into reusable components while considering responsiveness, accessibility, loading states, and maintainability."
    },

    {
        title: "Refine",
        desc:
            "Implementation often reveals things static designs miss. I iterate on spacing, interactions, animations, performance, and edge cases until the experience feels polished."
    },

    {
        title: "Ship",
        desc:
            "Shipping is where learning starts. I use feedback and real usage to improve the product, making each iteration more informed than the previous one."
    }
]