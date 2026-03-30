'use client'

import CommandPromptLayout from '@/components/CommandPromptLayout'
import Link from 'next/link'
import MatrixBackground from '@/components/MatrixBackground'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const projectsTranslations = {
  en: {
    title: 'Projects',
    moreProjects: '> More projects coming soon...',
    projects: [
      {
        title: 'Portfolio Website',
        description: 'Online web portfolio with information about the author',
      },
      {
        title: 'Mods & Patches Creator',
        description: 'Creates mods and patches for Fallout, Far Cry, Resident Evil, and Squad game series',
      },
      {
        title: 'Network & System Administration',
        description: 'Maintenance and work with network equipment, workstations, and more',
      },
      {
        title: 'College Diploma',
        description: 'Personal diploma project of general education program',
      },
      {
        title: 'Your Task',
        description: 'Ready to complete any task in my field of expertise',
      },
    ],
  },
  ru: {
    title: 'Проекты',
    moreProjects: '> Больше проектов в скором времени...',
    projects: [
      {
        title: 'Портфолио сайт',
        description: 'Онлайн веб-портфолио с информацией об авторе',
      },
      {
        title: 'Создатель модов и патчей',
        description: 'Создаёт моды и патчи для серий игр Fallout, Far Cry, Resident Evil и Squad',
      },
      {
        title: 'Сетевое и системное администрирование',
        description: 'Обслуживание и работа с сетевым оборудованием, рабочими станциями и др.',
      },
      {
        title: 'Колледж диплом',
        description: 'Персональная дипломная работа общеобразовательной программы',
      },
      {
        title: 'Ваша задача',
        description: 'Готов выполнить любую поставленную задачу в моей сфере',
      },
    ],
  },
}

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Online web portfolio with information about the author',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    status: 'Completed',
    link: 'https://github.com/EarthWaIker/EarthWalker',
  },
  {
    title: 'Mods & Patches Creator',
    description: 'Creates mods and patches for Fallout, Far Cry, Resident Evil, and Squad game series',
    tech: ['NexusModManager', 'Vortex'],
    status: 'In Progress',
    link: 'https://www.nexusmods.com/profile/EarthWalkerNex',
  },
  {
    title: 'Network & System Administration',
    description: 'Maintenance and work with network equipment, workstations, and more',
    tech: ['Tools', 'Technical Skills'],
    status: 'In Progress',
    link: '#',
  },
  {
    title: 'College Diploma',
    description: 'Personal diploma project of general education program',
    tech: ['Word', 'Tools', 'Knowledge'],
    status: 'In Progress',
    link: '#',
  },
  {
    title: 'Your Task',
    description: 'Ready to complete any task in my field of expertise',
    tech: ['Everything'],
    status: 'Planned',
    link: '#',
  },
]

export default function ProjectsPage() {
  const { lang } = useLanguage()
  const t = projectsTranslations[lang]

  return (
    <CommandPromptLayout title="Projects - Command Prompt">
      <div className="space-y-6">
        <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#00FF00] font-mono">
            <span className="text-gray-500">//</span> {t.title}
          </h1>
          <LanguageSwitcher />
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border border-gray-700 bg-[#0a0a0a] p-4 hover:border-[#00FF00] transition-colors ${
                index === 0 ? 'relative overflow-hidden' : ''
              } ${
                index === 1 ? 'relative overflow-hidden' : ''
              } ${
                index === 2 ? 'relative overflow-hidden' : ''
              } ${
                index === 3 ? 'relative overflow-hidden' : ''
              }`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
              }}
            >
              {index === 0 && <MatrixBackground />}
              {index === 1 && <MatrixBackground image="/project2.png" brightness={0.3} />}
              {index === 2 && <MatrixBackground image="/project3.png" brightness={0.3} />}
              {index === 3 && <MatrixBackground image="/project4.png" brightness={0.3} />}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      <span className="text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                      {t.projects[index].title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{t.projects[index].description}</p>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 whitespace-nowrap ${
                    project.status === 'Completed' ? 'bg-[#00FF00] text-black' :
                    project.status === 'In Progress' ? 'bg-[#FFB800] text-black' :
                    'bg-gray-600 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-[#00FF00] bg-[#003300] px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {index !== 2 && index !== 3 && index !== 4 && (
                  <div className="mt-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-[#00FF00] hover:text-[#33FF33] inline-flex items-center gap-1"
                    >
                      View Project
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs font-mono">
            <span className="text-[#00FF00]">{'>'}</span> {t.moreProjects.replace('> ', '')}
          </p>
        </div>
      </div>
    </CommandPromptLayout>
  )
}
