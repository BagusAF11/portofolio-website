"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n/context"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const skills = [
    {
      category: t.skills.categories.design,
      items: [
        { name: t.skills.items.photoshop, level: 85 },
        { name: t.skills.items.graphic_design, level: 80 },
        { name: t.skills.items.visual_communication, level: 75 },
        { name: t.skills.items.layout_typography, level: 70 },
      ],
    },
    {
      category: t.skills.categories.management,
      items: [
        { name: t.skills.items.customer_service, level: 90 },
        { name: t.skills.items.project_management, level: 75 },
        { name: t.skills.items.team_communication, level: 85 },
        { name: t.skills.items.strategic_planning, level: 70 },
      ],
    },
    {
      category: t.skills.categories.digital,
      items: [
        { name: t.skills.items.digital_marketing, level: 70 },
        { name: t.skills.items.content_creation, level: 80 },
        { name: t.skills.items.social_media, level: 85 },
        { name: t.skills.items.data_analysis, level: 65 },
      ],
    },
    {
      category: t.skills.categories.technical,
      items: [
        { name: t.skills.items.printing_operations, level: 90 },
        { name: t.skills.items.office_suite, level: 85 },
        { name: t.skills.items.file_management, level: 80 },
        { name: t.skills.items.quality_control, level: 75 },
      ],
    },
  ]

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
            {t.skills.section_label}
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            {t.skills.heading}{" "}
            <span className="font-serif italic">{t.skills.heading_italic}</span>
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
