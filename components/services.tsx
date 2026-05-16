"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Monitor, Megaphone, Printer } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Brand identity, logos, visual systems, and marketing materials crafted with precision and purpose.",
  },
  {
    icon: Monitor,
    title: "Digital Content",
    description:
      "Engaging digital content for social media, websites, and online platforms that drives audience connection.",
  },
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    description:
      "Data-informed marketing strategies that align brand messaging with business objectives for measurable growth.",
  },
  {
    icon: Printer,
    title: "Print Production",
    description:
      "End-to-end print production management from design to delivery, ensuring quality at every stage.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="border-t border-border py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              05 &mdash; Services
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              How I can <span className="font-serif italic">help</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Offering a blend of creative and strategic services to help bring your vision to life with quality and attention to detail.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-lg border border-border p-8 transition-colors duration-500 hover:border-accent/30"
              >
                <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
