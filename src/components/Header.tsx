'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'hero', label: 'Главная', icon: '✦' },
  { id: 'about', label: 'Обо мне', icon: '◈' },
  { id: 'projects', label: 'Проекты', icon: '◇' },
  { id: 'contact', label: 'Контакты', icon: '✉' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl md:text-2xl font-bold gradient-text glow-text tracking-wider"
          >
            АГЕНТ ШПРОТ 2007
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 glass-card text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-primary glass p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 glass rounded-xl p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
