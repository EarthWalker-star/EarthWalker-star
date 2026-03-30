'use client'

import { useEffect, useState, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MatrixRainBackground from './MatrixRainBackground'
import { useLanguage } from '@/contexts/LanguageContext'

const layoutTranslations = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    system: '// System',
    mem: 'MEM',
    cpu: 'CPU',
    status: 'Status',
    online: 'ONLINE',
    sysOnline: 'SYS: ONLINE',
  },
  ru: {
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Проекты',
    contact: 'Связь',
    system: '// Система',
    mem: 'ПАМЯТЬ',
    cpu: 'ПРОЦЕССОР',
    status: 'Статус',
    online: 'ОНЛАЙН',
    sysOnline: 'СИСТЕМА: ОНЛАЙН',
  },
}

interface CommandPromptLayoutProps {
  children: ReactNode
  title: string
}

export default function CommandPromptLayout({ children, title }: CommandPromptLayoutProps) {
  const { lang } = useLanguage()
  const t = layoutTranslations[lang]
  const [systemLog, setSystemLog] = useState('')
  const [systemStats, setSystemStats] = useState({ mem: 120, cpu: 12 })
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/projects', label: t.projects },
    { href: '/contact', label: t.contact },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const systemMessages = {
    en: [
      'System initialized...',
      'Loading user profile...',
      'Connection established...',
      'Access granted...',
      'Encrypting data...',
      'Syncing with server...',
      'Updating database...',
      'Processing request...',
      'Verifying credentials...',
      'Session active...',
    ],
    ru: [
      'Система инициализирована...',
      'Загрузка профиля пользователя...',
      'Соединение установлено...',
      'Доступ разрешён...',
      'Шифрование данных...',
      'Синхронизация с сервером...',
      'Обновление базы данных...',
      'Обработка запроса...',
      'Проверка учётных данных...',
      'Сеанс активен...',
    ],
  }

  useEffect(() => {
    let msgIndex = 0
    const timer = setInterval(() => {
      setSystemLog(systemMessages[lang][msgIndex])
      msgIndex = (msgIndex + 1) % systemMessages[lang].length
    }, 2000)
    return () => clearInterval(timer)
  }, [lang])

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemStats({
        mem: Math.floor(Math.random() * 150) + 120,
        cpu: Math.floor(Math.random() * 25) + 8,
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const handleMinimize = () => {
    window.close()
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  const handleMaximize = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => console.log('Fullscreen error:', e))
    } else {
      document.exitFullscreen().catch((e) => console.log('Exit fullscreen error:', e))
    }
  }

  const handleClose = () => {
    window.close()
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MatrixRainBackground />

      <div className="relative z-10 min-h-screen flex justify-center p-0">
        <div className="w-[90vw] max-w-5xl h-screen bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-lg flex flex-col">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-1 py-0.5 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center p-[1px]">
                <div className="bg-black w-full h-full flex items-center justify-center">
                  <span className="text-[5px] text-white font-mono leading-none">C:\</span>
                </div>
              </div>
              <span className="text-white text-xs font-bold">{title}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <button 
                onClick={handleMinimize}
                className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-gray-400"
              >
                <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="4" strokeLinecap="square"/>
                </svg>
              </button>
              <button 
                onClick={handleMaximize}
                className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-gray-400"
              >
                <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M4 4h16v16H4z" />
                </svg>
              </button>
              <button 
                onClick={handleClose}
                className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-red-600"
              >
                <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="flex-1 bg-[#151515] m-1 flex flex-col overflow-hidden">
            <div className="flex flex-col md:flex-row p-4 gap-4 flex-1 overflow-auto scrollbar-hide">
              {/* Left Sidebar - Navigation */}
              <div className="md:w-48 flex-shrink-0 border-r border-gray-700 pr-4">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-mono border transition-all ${
                        isActive(item.href)
                          ? 'text-[#00FF00] bg-[#0a0a0a] border-[#00FF00]'
                          : 'text-gray-400 border-transparent hover:text-[#00FF00] hover:bg-[#0a0a0a] hover:border-[#00FF00]'
                      }`}
                    >
                      {'>'} {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mini Stats */}
                <div className="mt-8 p-3 border border-gray-700 bg-[#0a0a0a]">
                  <p className="text-xs font-mono text-gray-500">{t.system}</p>
                  <p className="text-xs font-mono text-[#00FF00] mt-1">
                    <span className="text-gray-500">{t.mem}:</span> {systemStats.mem}MB
                  </p>
                  <p className="text-xs font-mono text-[#00FF00]">
                    <span className="text-gray-500">{t.cpu}:</span> {systemStats.cpu}%
                  </p>
                  <p className="text-xs font-mono text-[#00FF00]">
                    <span className="text-gray-500">{t.status}:</span> {t.online}
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-auto">
                {children}
              </div>
            </div>

            {/* Status Bar */}
            <div className="border-t border-gray-700 py-2 px-4 flex justify-between items-center text-xs font-mono flex-shrink-0">
              <div className="text-[#00FF00]">
                <span className="animate-pulse">●</span> {systemLog}
              </div>
              <div className="text-gray-500">
                {t.sysOnline} | {t.mem}: {systemStats.mem}MB | {t.cpu}: {systemStats.cpu}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
