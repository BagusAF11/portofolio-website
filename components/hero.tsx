"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 right-0 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 rounded-full bg-accent/3 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                {t.hero.badge}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-foreground text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-balance">Bagus</span>
              <br />
              <span className="font-serif italic text-accent">Darmawan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex items-center gap-6"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-background"
              >
                {t.hero.cta_primary}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {t.hero.cta_secondary}
                <span className="text-accent">&rarr;</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden items-end justify-end lg:col-span-4 lg:flex"
          >
            <div className="flex flex-col items-end gap-6 text-right">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.hero.location_label}
                </p>
                <p className="mt-1 text-sm text-foreground">{t.hero.location_value}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.hero.focus_label}
                </p>
                <p className="mt-1 text-sm text-foreground">{t.hero.focus_value}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.hero.status_label}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-foreground">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  {t.hero.status_value}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-6 lg:left-8"
        >
          <a
            href="#about"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            {t.hero.scroll}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
