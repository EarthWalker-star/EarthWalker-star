import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-hero relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <ParticleBackground
        primaryColor="#3B82F6"
        secondaryColor="#60A5FA"
        tertiaryColor="#93C5FD"
        particleCount={80}
        connectionDistance={180}
        particleSpeed={0.6}
      />
      
      <div className="container mx-auto px-4 text-center relative" style={{ zIndex: 20 }}>
        <div className="max-w-3xl mx-auto">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full p-1 glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src="/avatar.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-slate-100">Привет, я </span>
            <br />
            <span className="gradient-text glow-text">Агент Шпрот 2007</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Создаю цифровые решения будущего уже сегодня
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2"
            >
              <span>🚀</span>
              <span>Смотреть работы</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
            >
              <span>✨</span>
              <span>Связаться</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Flowseal"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.24 0-1.38.495-2.52 1.305-3.42-.135-.315-.57-1.68.12-3.495 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.69 1.815.255 3.18.12 3.495.81.9 1.305 2.04 1.305 3.42 0 4.92-2.805 5.94-5.475 6.24.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://t.me/ItsKristalix"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
            <a
              href="mailto:a.d.i.k.a.n.k.o.8@googlemail.com"
              className="glass p-3 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
