"use client"

import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <a href="#" className="text-lg font-medium tracking-tight text-foreground">
              BD<span className="text-accent">.</span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            {["LinkedIn", "Instagram", "Dribbble", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bagus Darmawan. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
