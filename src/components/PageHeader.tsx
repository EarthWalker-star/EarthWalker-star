'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Главная', icon: '✦' },
  { href: '/about', label: 'Обо мне', icon: '◈' },
  { href: '/projects', label: 'Проекты', icon: '◇' },
  { href: '/contact', label: 'Контакты', icon: '✉' },
]

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'terminal-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-[#00FF00] matrix-glow tracking-wider font-mono"
          >
            {'>'} ANDREY_IVANOV
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-5 py-2.5 terminal-card text-sm font-bold font-mono transition-all duration-300 flex items-center gap-2 ${
                    pathname === item.href
                      ? 'border-[#33FF33] text-[#33FF33] matrix-glow bg-[#003300]'
                      : 'text-[#00CC00] hover:text-[#00FF00] hover:border-[#00FF00]/50'
                  }`}
                >
                  <span className={pathname === item.href ? 'matrix-glow' : ''}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00FF00] terminal-card p-2.5"
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
          <ul className="md:hidden mt-4 space-y-2 terminal-card rounded-none p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 transition-all duration-300 flex items-center gap-3 font-mono ${
                    pathname === item.href
                      ? 'text-[#33FF33] bg-[#003300]'
                      : 'text-[#00CC00] hover:text-[#00FF00] hover:bg-[#002200]'
                  }`}
                >
                  <span className={pathname === item.href ? 'matrix-glow' : ''}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
