"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="contact" className="border-t border-border py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {t.contact.section_label}
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              {t.contact.heading}{" "}
              <span className="font-serif italic">{t.contact.heading_italic}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {t.contact.email_label}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">hello@bagusdarmawan.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {t.contact.location_label}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{t.contact.location_value}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {t.contact.form.name_label}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.contact.form.name_placeholder}
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {t.contact.form.email_label}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.contact.form.email_placeholder}
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {t.contact.form.subject_label}
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t.contact.form.subject_placeholder}
                  className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {t.contact.form.message_label}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.form.message_placeholder}
                  className="w-full resize-none border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-background"
              >
                {t.contact.form.submit}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
