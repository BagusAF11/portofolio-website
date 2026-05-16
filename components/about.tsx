"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              01 &mdash; About
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Who I <span className="font-serif italic">am</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-xl leading-relaxed text-muted-foreground lg:text-2xl lg:leading-relaxed">
              A detail-oriented individual with experience in customer service, printing operations,
              Photoshop, communication, and digital work. Passionate about bridging the gap between
              management strategy and creative digital solutions.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I believe in the power of thoughtful design and strategic thinking to transform ideas
              into impactful experiences. Currently pursuing my Management degree while actively
              exploring the intersection of business and digital creativity.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "15+", label: "Projects Done" },
                { number: "10+", label: "Happy Clients" },
                { number: "5+", label: "Skills Mastered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="border-t border-border pt-4"
                >
                  <p className="text-3xl font-light text-foreground">{stat.number}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
