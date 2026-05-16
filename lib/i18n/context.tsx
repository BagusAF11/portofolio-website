"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { id } from "./translations/id"
import { en } from "./translations/en"

export type Locale = "id" | "en"

type Translations = typeof id

const translations: Record<Locale, Translations> = { id, en }

interface LanguageContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id")

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggle = useCallback(() => {
    setLocaleState((prev) => (prev === "id" ? "en" : "id"))
  }, [])

  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale], setLocale, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
