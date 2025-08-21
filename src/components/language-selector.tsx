"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { Locale } from "../lib/i18n"

interface LanguageSelectorProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSelector({ currentLocale, onLocaleChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    {
      code: "en" as Locale,
      name: "English",
      flag: "🇺🇸",
      country: "USA",
    },
    {
      code: "ar" as Locale,
      name: "العربية",
      flag: "🇦🇪",
      country: "UAE",
    },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLocale)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3 gap-2 font-medium">
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="text-xs font-semibold tracking-wide">{currentLanguage?.country}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              onLocaleChange(language.code)
              setIsOpen(false)
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-lg">{language.flag}</span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{language.name}</span>
              <span className="text-xs text-muted-foreground">{language.country}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
