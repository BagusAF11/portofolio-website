"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    period: "2024 — Present",
    role: "Digital Creative Assistant",
    company: "Freelance",
    description:
      "Providing creative digital solutions for clients including graphic design, content creation, and visual communication services.",
    tags: ["Photoshop", "Design", "Content"],
  },
  {
    period: "2023 — 2024",
    role: "Customer Service Representative",
    company: "Retail Operations",
    description:
      "Managed customer interactions, resolved inquiries, and maintained high satisfaction ratings through effective communication and problem-solving.",
    tags: ["Communication", "Service", "Management"],
  },
  {
    period: "2022 — 2023",
    role: "Printing Operations Specialist",
    company: "Print Services",
    description:
      "Operated printing equipment, managed quality control processes, and ensured timely delivery of print materials meeting client specifications.",
    tags: ["Operations", "Quality Control", "Production"],
  },
  {
    period: "2021 — Present",
    role: "Management Student",
    company: "University",
    description:
      "Pursuing a degree in Management with focus on business strategy, organizational behavior, and digital transformation in modern enterprises.",
    tags: ["Strategy", "Leadership", "Analysis"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="border-t border-border py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              03 &mdash; Experience
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Where I&apos;ve <span className="font-serif italic">been</span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:col-span-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-t border-border py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-accent">{exp.company}</p>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
