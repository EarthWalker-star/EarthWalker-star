'use client'

import CommandPromptLayout from '@/components/CommandPromptLayout'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import PongGame from '@/components/PongGame'
import { useLanguage } from '@/contexts/LanguageContext'

const contactTranslations = {
  en: {
    title: 'Contact',
    getInTouch: '// Get In Touch',
    intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: 'Email',
    location: 'Location',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    sendMessage: '// Send a Message',
    name: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'Your message...',
    sendButton: 'Send Message_',
    responseTime: '> Response time: ~24 hours',
  },
  ru: {
    title: 'Связь',
    getInTouch: '// Связаться со мной',
    intro: "Всегда открыт для обсуждения новых проектов, креативных идей или возможностей стать частью ваших замыслов.",
    email: 'Email',
    location: 'Локация',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    sendMessage: '// Отправить сообщение',
    name: 'Имя',
    namePlaceholder: 'Ваше имя',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Сообщение',
    messagePlaceholder: 'Ваше сообщение...',
    sendButton: 'Отправить_',
    responseTime: '> Время ответа: ~24 часа',
  },
}

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = contactTranslations[lang]

  return (
    <CommandPromptLayout title="Contact - Command Prompt">
      <div className="space-y-6">
        <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#00FF00] font-mono">
            <span className="text-gray-500">//</span> {t.title}
          </h1>
          <LanguageSwitcher />
        </div>

        <div className="space-y-6 font-mono text-sm">
          <div>
            <p className="text-gray-500 text-xs mb-3">{t.getInTouch}</p>
            <p className="text-white">{t.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-700 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">{t.email}</span>
              </div>
              <p className="text-white ml-8">EarthWalker@mail.ru</p>
            </div>

            <div className="border border-gray-700 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">{t.location}</span>
              </div>
              <p className="text-white ml-8">Sochi, Russia</p>
            </div>

            <div className="border border-gray-700 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-[#00FF00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-gray-400">{t.github}</span>
              </div>
              <p className="text-white ml-8">github.com/EarthWaIker</p>
            </div>

            <div className="border border-gray-700 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-[#00FF00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-gray-400">{t.linkedin}</span>
              </div>
              <p className="text-white ml-8">linkedin.com/in/EarthWaIker</p>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-3">{t.sendMessage}</p>
            <form onSubmit={(e) => {
              e.preventDefault()
              window.open('https://mail.ru', '_blank')
            }} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-xs mb-1">{t.name}</label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-gray-700 text-white px-3 py-2 font-mono text-sm focus:border-[#00FF00] focus:outline-none"
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1">{t.emailLabel}</label>
                <input
                  type="email"
                  className="w-full bg-[#0a0a0a] border border-gray-700 text-white px-3 py-2 font-mono text-sm focus:border-[#00FF00] focus:outline-none"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1">{t.message}</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-gray-700 text-white px-3 py-2 font-mono text-sm focus:border-[#00FF00] focus:outline-none resize-none"
                  placeholder={t.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="bg-[#003300] border border-[#00FF00] text-[#00FF00] px-6 py-2 font-mono text-sm hover:bg-[#00FF00] hover:text-black transition-colors"
              >
                {t.sendButton}
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs font-mono">
              <span className="text-[#00FF00]">{'>'}</span> {t.responseTime.replace('> ', '')}
            </p>
          </div>

          <PongGame />
        </div>
      </div>
    </CommandPromptLayout>
  )
}
