'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MatrixRainBackground from '@/components/MatrixRainBackground'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    research: 'Research',
    personalInfo: '// Personal Information',
    name: 'Name',
    surname: 'Surname',
    age: 'Age',
    dateOfBirth: 'Date of birth',
    town: 'Town',
    maritalStatus: 'Marital status',
    professionalInfo: '// Professional Info',
    role: 'ROLE',
    specialization: 'Specialization',
    experience: 'Experience',
    level: 'Level',
    technicalSkills: '// Technical Skills',
    primary: 'Primary',
    secondary: 'Secondary',
    status: '// Status',
    availability: 'Availability',
    location: 'Location',
    // Values
    nameValue: 'Andrew',
    surnameValue: 'Ivanov',
    townValue: 'Slavyansk-on-Kuban',
    maritalStatusValue: 'Single',
    roleName: 'IT Engineer',
    specializationName: 'Frontend Development',
    experienceValue: '3 years',
    levelValue: 'Middle',
    primarySkills: 'React, Next.js, TypeScript',
    secondarySkills: 'Node.js, PostgreSQL',
    availabilityValue: 'Open for work',
    locationValue: 'Remote / Relocate',
    section01: '// Section 01 - Personal Data',
    section01Text: '1. This section contains all the information about this person, including their education, work experience, and biography.',
    section01Hint: 'To view the information, click on the button or scan the QR code.',
    section01Contains: '> Contains: education, work experience, biography, skills',
    section02: '// Section 02 - Portfolio',
    section02Text: '2. This section lists all the projects that the author has previously worked on.',
    section02Hint: 'This includes the work of the general education program and personal achievements to date.',
    section02Contains: '> Contains: commercial projects, pet projects, achievements',
    section03: '// Section 03 - Communication',
    section03Text: '3. If you want to contact the author, use the button or scan the QR.',
    section03Hint: 'Available via email, telegram, github, and other social networks.',
    section03Contains: '> Contains: email, telegram, github, linkedin',
    aboutMe: 'About me',
    projects: 'Projects',
    link: 'Link',
    sysOnline: 'SYS: ONLINE',
    verifyingCredentials: 'Verifying credentials...',
  },
  ru: {
    research: 'Исследование',
    personalInfo: '// Персональная информация',
    name: 'Имя',
    surname: 'Фамилия',
    age: 'Возраст',
    dateOfBirth: 'Дата рождения',
    town: 'Город',
    maritalStatus: 'Семейное положение',
    professionalInfo: '// Профессиональная информация',
    role: 'РОЛЬ',
    specialization: 'Специализация',
    experience: 'Опыт работы',
    level: 'Уровень',
    technicalSkills: '// Технические навыки',
    primary: 'Основные',
    secondary: 'Дополнительные',
    status: '// Статус',
    availability: 'Доступность',
    location: 'Локация',
    // Values
    nameValue: 'Андрей',
    surnameValue: 'Иванов',
    townValue: 'Славянск-на-Кубани',
    maritalStatusValue: 'Не женат',
    roleName: 'IT Инженер',
    specializationName: 'Frontend Разработка',
    experienceValue: '3 года',
    levelValue: 'Средний',
    primarySkills: 'React, Next.js, TypeScript',
    secondarySkills: 'Node.js, PostgreSQL',
    availabilityValue: 'Открыт для работы',
    locationValue: 'Удалённо / Релокация',
    section01: '// Раздел 01 - Персональные данные',
    section01Text: '1. Этот раздел содержит всю информацию о человеке, включая образование, опыт работы и биографию.',
    section01Hint: 'Чтобы просмотреть информацию, нажмите на кнопку или отсканируйте QR-код.',
    section01Contains: '> Содержит: образование, опыт работы, биографию, навыки',
    section02: '// Раздел 02 - Портфолио',
    section02Text: '2. В этом разделе перечислены все проекты, над которыми автор работал ранее.',
    section02Hint: 'Это включает работы общеобразовательной программы и личные достижения на данный момент.',
    section02Contains: '> Содержит: коммерческие проекты, пет-проекты, достижения',
    section03: '// Раздел 03 - Связь',
    section03Text: '3. Если вы хотите связаться с автором, используйте кнопку или отсканируйте QR.',
    section03Hint: 'Доступен через email, telegram, github и другие социальные сети.',
    section03Contains: '> Содержит: email, telegram, github, linkedin',
    aboutMe: 'Обо мне',
    projects: 'Проекты',
    link: 'Связь',
    sysOnline: 'СИСТЕМА: ОНЛАЙН',
    verifyingCredentials: 'Проверка учётных данных...',
  },
}

export default function HomePage() {
  const { lang, setLang } = useLanguage()
  const [typedText, setTypedText] = useState('Research')
  const [isLoaded, setIsLoaded] = useState(false)
  const [systemLog, setSystemLog] = useState('')
  const [systemStats, setSystemStats] = useState({ mem: 64, cpu: 12 })

  const t = translations[lang]

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
    setIsLoaded(true)
    setTypedText('')
    let index = 0
    const timer = setInterval(() => {
      setTypedText(t.research.slice(0, index + 1))
      index++
      if (index >= t.research.length) clearInterval(timer)
    }, 150)
    return () => clearInterval(timer)
  }, [lang, t.research])

  useEffect(() => {
    let msgIndex = 0
    const timer = setInterval(() => {
      setSystemLog(systemMessages[lang][msgIndex])
      msgIndex = (msgIndex + 1) % systemMessages[lang].length
    }, 2000)
    return () => clearInterval(timer)
  }, [lang])

  // Simulate real-time system stats
  useEffect(() => {
    const timer = setInterval(() => {
      setSystemStats({
        mem: Math.floor(Math.random() * 150) + 120, // 120-270 MB
        cpu: Math.floor(Math.random() * 25) + 8,    // 8-33%
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const handleMinimize = () => {
    window.close()
    // Fallback для браузеров которые блокируют window.close()
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  const handleMaximize = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log('Fullscreen error:', e)
      })
    } else {
      document.exitFullscreen().catch((e) => {
        console.log('Exit fullscreen error:', e)
      })
    }
  }

  const handleClose = () => {
    window.close()
    // Fallback для браузеров которые блокируют window.close()
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRainBackground />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex justify-center p-0">
        {/* Command Prompt Window */}
        <div className="w-[90vw] max-w-5xl h-screen bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-lg flex flex-col">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-1 py-0.5 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center p-[1px]">
                <div className="bg-black w-full h-full flex items-center justify-center">
                  <span className="text-[5px] text-white font-mono leading-none">C:\</span>
                </div>
              </div>
              <span className="text-white text-xs font-bold">Command Prompt</span>
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

          {/* Window Content - Black Console Area */}
          <div className="flex-1 bg-[#151515] m-1 flex flex-col overflow-hidden">
            <div className="flex flex-col md:flex-row p-4 gap-4 flex-1 overflow-auto scrollbar-hide">
              {/* Left Column - Photo and Info */}
              <div className="flex flex-col gap-4 md:w-1/3 h-full overflow-auto pr-2">
                {/* Photo */}
                <div className="border border-gray-600 p-1 flex-shrink-0">
                  <img
                    src="/Face.png"
                    alt="Andrew Ivanov"
                    className="w-full h-[400px] object-cover grayscale contrast-125"
                  />
                </div>

                {/* Personal Info */}
                <div className="font-mono text-sm space-y-2 border-t border-gray-700 pt-4">
                  <p className="text-gray-500 text-base">{t.personalInfo}</p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.name}:</span> <span className="text-white">{t.nameValue}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.surname}:</span> <span className="text-white">{t.surnameValue}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.age}:</span> <span className="text-white">20</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.dateOfBirth}:</span> <span className="text-white">06.03.2006</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.town}:</span> <span className="text-white">{t.townValue}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.maritalStatus}:</span> <span className="text-white">{t.maritalStatusValue}</span></p>
                  <p className="text-gray-500 text-base mt-4">{t.professionalInfo}</p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.role}:</span> <span className="text-white">{t.roleName}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.specialization}:</span> <span className="text-white">{t.specializationName}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.experience}:</span> <span className="text-white">{t.experienceValue}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.level}:</span> <span className="text-white">{t.levelValue}</span></p>
                  <p className="text-gray-500 text-base mt-4">{t.technicalSkills}</p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.primary}:</span> <span className="text-white">{t.primarySkills}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.secondary}:</span> <span className="text-white">{t.secondarySkills}</span></p>
                  <p className="text-gray-500 text-base mt-4">{t.status}</p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.availability}:</span> <span className="text-white">{t.availabilityValue}</span></p>
                  <p className="text-base"><span className="text-[#00FF00]">{t.location}:</span> <span className="text-white">{t.locationValue}</span></p>
                  <p className="text-gray-400 text-lg mt-6">
                    {typedText}<span className="cursor-blink">_</span>
                  </p>
                </div>
              </div>

              {/* Right Column - Sections and Buttons */}
              <div className="flex-1 font-mono text-sm">
                <div className="space-y-8">
                  {/* Section 1 - About */}
                  <div className="flex items-start gap-6">
                    <div className="flex-1 text-white">
                      <p className="text-gray-500 text-xs">{t.section01}</p>
                      <p className="mt-2 text-base">{t.section01Text}</p>
                      <p className="mt-2 text-gray-400 text-base">{t.section01Hint}</p>
                      <p className="mt-3 text-[#00FF00] text-sm">{t.section01Contains}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="border border-[#0066FF] p-2 bg-white w-fit">
                        <img src="/qr-about-main.png" alt="QR About" className="w-32 h-32 invert" />
                      </div>
                      <Link
                        href="/about"
                        className="bg-black border border-gray-600 px-10 py-4 text-white hover:bg-gray-900 hover:border-[#00FF00] transition-colors min-w-[180px] text-center block text-lg font-bold font-mono"
                      >
                        {t.aboutMe}
                      </Link>
                    </div>
                  </div>

                  {/* Section 2 - Projects */}
                  <div className="flex items-start gap-6">
                    <div className="flex-1 text-white">
                      <p className="text-gray-500 text-xs">{t.section02}</p>
                      <p className="mt-2 text-base">{t.section02Text}</p>
                      <p className="mt-2 text-gray-400 text-base">{t.section02Hint}</p>
                      <p className="mt-3 text-[#00FF00] text-sm">{t.section02Contains}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="border border-[#0066FF] p-2 bg-white w-fit">
                        <img src="/qr-projects.png" alt="QR Projects" className="w-32 h-32 invert" />
                      </div>
                      <Link
                        href="/projects"
                        className="bg-black border border-gray-600 px-10 py-4 text-white hover:bg-gray-900 hover:border-[#00FF00] transition-colors min-w-[180px] text-center block text-lg font-bold font-mono"
                      >
                        {t.projects}
                      </Link>
                    </div>
                  </div>

                  {/* Section 3 - Contact */}
                  <div className="flex items-start gap-6">
                    <div className="flex-1 text-white">
                      <p className="text-gray-500 text-xs">{t.section03}</p>
                      <p className="mt-2 text-base">{t.section03Text}</p>
                      <p className="mt-2 text-gray-400 text-base">{t.section03Hint}</p>
                      <p className="mt-3 text-[#00FF00] text-sm">{t.section03Contains}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="border border-[#0066FF] p-2 bg-white w-fit">
                        <img src="/qr-contact.png" alt="QR Contact" className="w-32 h-32 invert" />
                      </div>
                      <Link
                        href="/contact"
                        className="bg-black border border-gray-600 px-10 py-4 text-white hover:bg-gray-900 hover:border-[#00FF00] transition-colors min-w-[180px] text-center block text-lg font-bold font-mono"
                      >
                        {t.link}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="border-t border-gray-700 py-2 px-4 flex justify-between items-center text-xs font-mono flex-shrink-0">
              <div className="text-[#00FF00]">
                <span className="animate-pulse">●</span> {systemLog}
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <LanguageSwitcher />
                <span>{t.sysOnline} | MEM: {systemStats.mem}MB | CPU: {systemStats.cpu}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
