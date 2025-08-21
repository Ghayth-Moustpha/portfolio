"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface LanguageSelectorProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

const languages = {
  en: {
    name: "English",
    flag: "🇺🇸",
    code: "EN",
  },
  ar: {
    name: "العربية",
    flag: "🇦🇪",
    code: "AR",
  },
}

export function LanguageSelector({ currentLocale, onLocaleChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/50 transition-all duration-200"
        >
          <span className="text-lg">{languages[currentLocale].flag}</span>
          <span className="font-medium">{languages[currentLocale].code}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-background/95 backdrop-blur-sm border-border/50">
        {Object.entries(languages).map(([locale, lang]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              onLocaleChange(locale as Locale)
              setIsOpen(false)
            }}
            className={`gap-3 cursor-pointer transition-colors ${
              currentLocale === locale ? "bg-accent/50" : "hover:bg-accent/30"
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{lang.name}</span>
              <span className="text-xs text-muted-foreground">{lang.code}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
