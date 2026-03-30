'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang('ru')}
        className={`w-8 h-5 flex items-center justify-center text-xs border ${
          lang === 'ru' ? 'border-[#00FF00] bg-[#003300]' : 'border-gray-600 hover:border-gray-400'
        }`}
        title="Русский"
      >
        🇷🇺
      </button>
      <button
        onClick={() => setLang('en')}
        className={`w-8 h-5 flex items-center justify-center text-xs border ${
          lang === 'en' ? 'border-[#00FF00] bg-[#003300]' : 'border-gray-600 hover:border-gray-400'
        }`}
        title="English"
      >
        🇺🇸
      </button>
    </div>
  )
}
