'use client'

import { useEffect, useState } from 'react'
import CommandPromptLayout from '@/components/CommandPromptLayout'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const aboutTranslations = {
  en: {
    title: '// About Me',
    personalInfo: '// Personal Information',
    name: 'Name',
    age: 'Age',
    town: 'Town',
    location: 'Location',
    email: 'Email',
    // Values
    nameValue: 'Andrew Ivanov',
    ageValue: '20',
    townValue: 'Slavyansk-on-Kuban',
    locationValue: 'Sochi, Russia',
    emailValue: 'EarthWalker@mail.ru',
    professionalSummary: '// Professional Summary',
    summaryText: 'Frontend Developer with 3 years of experience in building modern web applications. Passionate about creating intuitive and performant user interfaces. He has professional technical skills in working with computer systems, servers, and workstations.',
    technicalSkills: '// Technical Skills',
    education: '// Education',
    educationItem: {
      title: 'Network and System Administration',
      school: 'RUDN University, Sochi - 2022-2026',
    },
    experience: '// Experience',
    experienceItems: [
      {
        title: 'Industrial Practice',
        company: 'RUDN University - 2023-2026',
        description: 'Enrollment of incoming applicants',
      },
      {
        title: 'Computer Technician',
        company: 'Freelance - 2021-Present',
        description: 'Repair and maintenance of electronics',
      },
    ],
    languages: '// Languages',
    russian: 'Russian (Native)',
    english: 'English (B1)',
  },
  ru: {
    title: '// Обо мне',
    personalInfo: '// Персональная информация',
    name: 'Имя',
    age: 'Возраст',
    town: 'Город',
    location: 'Локация',
    email: 'Email',
    // Values
    nameValue: 'Андрей Иванов',
    ageValue: '20',
    townValue: 'Славянск-на-Кубани',
    locationValue: 'Сочи, Россия',
    emailValue: 'EarthWalker@mail.ru',
    professionalSummary: '// Профессиональная информация',
    summaryText: 'Frontend разработчик с 3-летним опытом создания современных веб-приложений. Страстно увлечён созданием интуитивных и производительных пользовательских интерфейсов. Имеет профессиональные технические навыки работы с компьютерными системами, серверами и рабочими станциями.',
    technicalSkills: '// Технические навыки',
    education: '// Образование',
    educationItem: {
      title: 'Сетевое и системное администрирование',
      school: 'РУДН Университет, Сочи - 2022-2026',
    },
    experience: '// Опыт работы',
    experienceItems: [
      {
        title: 'Производственная практика',
        company: 'РУДН Университет - 2023-2026',
        description: 'Зачисление поступающих абитуриентов',
      },
      {
        title: 'Компьютерный мастер',
        company: 'Фриланс - 2021-Настоящее время',
        description: 'Ремонт и обслуживание электроники',
      },
    ],
    languages: '// Языки',
    russian: 'Русский (Родной)',
    english: 'Английский (B1)',
  },
}

interface SkillBarProps {
  name: string
  level: number
  delay: number
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, delay)
    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <div>
      <p className="text-white mb-1">{name}</p>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00FF00] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = aboutTranslations[lang]

  return (
    <CommandPromptLayout title="About - Command Prompt">
      <div className="space-y-6">
        <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#00FF00] font-mono">
            <span className="text-gray-500">//</span> {t.title.replace('// ', '')}
          </h1>
          <LanguageSwitcher />
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-32 h-32 object-cover border border-gray-700"
              >
                <source src="/look.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex-1 space-y-1">
              <p><span className="text-[#00FF00]">{t.name}:</span> <span className="text-white">{t.nameValue}</span></p>
              <p><span className="text-[#00FF00]">{t.age}:</span> <span className="text-white">{t.ageValue}</span></p>
              <p><span className="text-[#00FF00]">{t.town}:</span> <span className="text-white">{t.townValue}</span></p>
              <p><span className="text-[#00FF00]">{t.location}:</span> <span className="text-white">{t.locationValue}</span></p>
              <p><span className="text-[#00FF00]">{t.email}:</span> <span className="text-white">{t.emailValue}</span></p>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">{t.professionalSummary}</p>
            <p className="text-white">{t.summaryText}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">{t.technicalSkills}</p>
            <div className="space-y-3">
              <SkillBar name="System Administration" level={100} delay={100} />
              <SkillBar name="Node.js / React / Next.js" level={60} delay={300} />
              <SkillBar name="Python" level={40} delay={500} />
              <SkillBar name="Java" level={25} delay={700} />
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">{t.education}</p>
            <div className="space-y-2">
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FF00] animate-pulse"></div>
                <p className="text-white font-bold">{t.educationItem.title}</p>
                <p className="text-gray-400 text-xs">{t.educationItem.school}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">{t.experience}</p>
            <div className="space-y-3">
              {t.experienceItems.map((exp, index) => (
                <div key={index} className="relative pl-3">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FF00] animate-pulse"></div>
                  <p className="text-white font-bold">{exp.title}</p>
                  <p className="text-gray-400 text-xs">{exp.company}</p>
                  <p className="text-gray-500 text-xs mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">{t.languages}</p>
            <div className="flex gap-4">
              <span className="text-white">{t.russian}</span>
              <span className="text-white">{t.english}</span>
            </div>
          </div>
        </div>
      </div>
    </CommandPromptLayout>
  )
}
