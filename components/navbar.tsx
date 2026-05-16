"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/context"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, toggle, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-foreground text-lg font-medium tracking-tight">
            BD<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-sm tracking-wide transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle locale={locale} onToggle={toggle} />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                    mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                    mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-foreground text-2xl font-light tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LanguageToggle({
  locale,
  onToggle,
}: {
  locale: "id" | "en"
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Switch language"
      className="group relative flex h-8 w-16 items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/5 px-1 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
    >
      <motion.span
        className="absolute top-0.5 h-7 w-7 rounded-full bg-accent/20 backdrop-blur-sm"
        animate={{ left: locale === "en" ? "calc(100% - 1.875rem)" : "0.125rem" }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
      <span
        className={`relative z-10 w-7 text-center text-[10px] font-semibold tracking-wider transition-colors duration-300 ${
          locale === "id" ? "text-accent" : "text-muted-foreground"
        }`}
      >
        ID
      </span>
      <span
        className={`relative z-10 w-7 text-center text-[10px] font-semibold tracking-wider transition-colors duration-300 ${
          locale === "en" ? "text-accent" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
    </button>
  )
}
