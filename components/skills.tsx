"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    category: "Design",
    items: [
      { name: "Adobe Photoshop", level: 85 },
      { name: "Graphic Design", level: 80 },
      { name: "Visual Communication", level: 75 },
      { name: "Layout & Typography", level: 70 },
    ],
  },
  {
    category: "Management",
    items: [
      { name: "Customer Service", level: 90 },
      { name: "Project Management", level: 75 },
      { name: "Team Communication", level: 85 },
      { name: "Strategic Planning", level: 70 },
    ],
  },
  {
    category: "Digital",
    items: [
      { name: "Digital Marketing", level: 70 },
      { name: "Content Creation", level: 80 },
      { name: "Social Media", level: 85 },
      { name: "Data Analysis", level: 65 },
    ],
  },
  {
    category: "Technical",
    items: [
      { name: "Printing Operations", level: 90 },
      { name: "Office Suite", level: 85 },
      { name: "File Management", level: 80 },
      { name: "Quality Control", level: 75 },
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="border-t border-border py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            02 &mdash; Skills
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            What I <span className="font-serif italic">do</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + groupIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-col gap-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-px w-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + groupIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
