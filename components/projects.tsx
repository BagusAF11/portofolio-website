"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Brand Identity System",
    category: "Design",
    description:
      "Complete brand identity design including logo, color palette, typography system, and brand guidelines for a local startup.",
    year: "2024",
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description:
      "Strategic social media campaign that increased engagement by 200% through compelling visual content and targeted messaging.",
    year: "2024",
  },
  {
    title: "Print Catalog Design",
    category: "Print Design",
    description:
      "Premium product catalog design featuring modern layout, professional photography editing, and print-ready production files.",
    year: "2023",
  },
  {
    title: "Event Poster Series",
    category: "Graphic Design",
    description:
      "A series of event posters combining bold typography with creative visual compositions for university cultural events.",
    year: "2023",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="border-t border-border py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              04 &mdash; Projects
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Selected <span className="font-serif italic">work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A curated selection of projects showcasing my range in design, digital strategy, and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-8 transition-colors duration-500 hover:border-accent/30 hover:bg-secondary/50 lg:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-foreground lg:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                View project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
