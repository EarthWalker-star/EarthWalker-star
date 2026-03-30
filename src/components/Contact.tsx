'use client'

import { useState } from 'react'
import MatrixRainBackground from './MatrixRainBackground'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Flowseal', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.24 0-1.38.495-2.52 1.305-3.42-.135-.315-.57-1.68.12-3.495 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.69 1.815.255 3.18.12 3.495.81.9 1.305 2.04 1.305 3.42 0 4.92-2.805 5.94-5.475 6.24.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )},
  { name: 'Telegram', url: 'https://t.me/EarthNGGWalker', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    </svg>
  )},
  { name: 'VK', url: 'https://vk.ru/id1', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.073 2H8.937C5.001 2 2 5.009 2 8.937v6.126C2 18.999 5.001 22 8.937 22h6.136c3.936 0 6.947-3.001 6.947-6.937V8.937C22.02 5.009 19.009 2 15.073 2zM17.8 13.806c.458 1.516 1.427 2.055 1.956 2.055h1.322c.438 0 .584-.22.584-.594 0-.428-.229-.866-.594-1.24-.325-.335-.866-.69-1.075-.738-.21-.05-.269-.14-.15-.498.11-.348.497-1.343.677-1.916.19-.608.09-1.045-.408-1.045h-2.68c-.687 0-1.005.368-1.185.776 0 0-1.332 3.255-3.159 5.36-.628.687-.916.906-1.254.906-.17 0-.418-.219-.418-.817V9.228c0-.717-.209-1.035-.607-1.035-.329 0-.598.299-.598.627 0 .658.338.986.338 3.255v2.209c0 .578-.259.687-.418.687-.747 0-2.583-1.105-3.668-3.16-.737-1.414-1.264-2.488-1.264-2.866 0-.219.089-.418.528-.418h2.68c.548 0 .717.249.916.717.667 1.545 1.792 2.897 2.25 2.897.17 0 .249-.388.249-1.504V9.773c-.05-.797-.478-.856-.478-1.135 0-.338.289-.697.747-.697h2.79c.567 0 .756.299.756.647v3.468c0 .378.169.508.279.508.229 0 .418-.189.846-.617 1.294-1.444 2.21-3.668 2.21-3.668.11-.259.318-.508.866-.508h2.68c.797 0 .966.408.797.966-.328 1.515-3.418 6.004-3.806 6.462-.338.398-.488.528 0 1.304z"/>
    </svg>
  )},
  { name: 'Email', url: 'mailto:Ivanov06@mail.ru', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )},
  { name: 'Яндекс Музыка', url: 'https://music.yandex.ru/artist/5781113', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  )},
  { name: 'Кинопоиск', url: 'https://hd.kinopoisk.ru/film/48609c673b79f2e589e08b9cb9c4faf5?episode=1&from_block=kp-button-suggest&playingContentId=47c085c7bd8e13258bbd69dd8942bb41&season=1&watch=', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
    </svg>
  )},
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-contact relative section-padding overflow-hidden">
      <MatrixRainBackground />
      <div className="container mx-auto px-4 relative" style={{ zIndex: 20 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text matrix-glow-strong">./contact</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Форма */}
          <div className="terminal-card">
            <h3 className="text-xl font-semibold mb-6 text-[#00FF00] flex items-center gap-2 font-mono">
              <span className="matrix-glow">✉</span>
              <span className="mr-2">$</span>Напишите мне
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#00CC00] mb-2 text-sm font-mono">
                  {'>'} Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 terminal-card text-[#00FF00] placeholder-[#006600] focus:outline-none focus:border-[#33FF33] focus:matrix-glow transition-all duration-300 font-mono bg-black/50"
                  placeholder="Введите имя..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#00CC00] mb-2 text-sm font-mono">
                  {'>'} Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 terminal-card text-[#00FF00] placeholder-[#006600] focus:outline-none focus:border-[#33FF33] focus:matrix-glow transition-all duration-300 font-mono bg-black/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#00CC00] mb-2 text-sm font-mono">
                  {'>'} Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 terminal-card text-[#00FF00] placeholder-[#006600] focus:outline-none focus:border-[#33FF33] focus:matrix-glow transition-all duration-300 resize-none font-mono bg-black/50"
                  placeholder="Введите сообщение..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-terminal btn-terminal-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Отправка...' : submitted ? '[OK] Отправлено!' : 'Отправить'}
              </button>
            </form>
          </div>

          {/* Соцсети */}
          <div className="space-y-6">
            <div className="terminal-card">
              <h3 className="text-xl font-semibold mb-6 text-[#00FF00] flex items-center gap-2 font-mono">
                <span className="matrix-glow">◇</span>
                <span className="mr-2">$</span>Я в соцсетях
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-card flex items-center gap-3 p-4 hover:border-[#33FF33] transition-all duration-300 group"
                  >
                    <span className="text-[#00FF00] group-hover:text-[#33FF33] group-hover:matrix-glow group-hover:scale-110 transition-all duration-300">{link.icon}</span>
                    <span className="text-[#00CC00] text-sm group-hover:text-[#33FF33] transition-colors font-mono">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="terminal-card p-6">
              <h4 className="text-lg font-semibold mb-3 text-[#00FF00] flex items-center gap-2 font-mono">
                <span className="matrix-glow">✦</span>
                <span className="mr-2">$</span>Прямая связь
              </h4>
              <p className="text-[#00CC00] mb-2 font-mono">Email: Ivanov06@mail.ru</p>
              <p className="text-[#00CC00] font-mono">Telegram: @EarthNGGWalker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
