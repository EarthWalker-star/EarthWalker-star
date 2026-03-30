import MatrixRainBackground from './MatrixRainBackground'

const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'HTML5 / CSS3 / SCSS',
  'Tailwind CSS',
  'Git / GitHub',
  'REST API',
  'Webpack / Vite',
  'Jest / Testing Library',
]

const experiences = [
  {
    period: '2024 — Наст. время',
    title: 'Frontend-разработчик',
    company: 'Компания XYZ',
    description: 'Разработка современных веб-приложений на React и Next.js',
  },
  {
    period: '2022 — 2024',
    title: 'Junior разработчик',
    company: 'Студия ABC',
    description: 'Создание лендингов и корпоративных сайтов',
  },
  {
    period: '2022 — 2026',
    title: 'Обучение',
    company: 'СИ РУДН',
    description: 'Получение высшего образования по направлению разработки ПО',
  },
]

export default function About() {
  return (
    <section id="about" className="section-about relative section-padding overflow-hidden">
      <MatrixRainBackground />
      <div className="container mx-auto px-4 relative" style={{ zIndex: 20 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text matrix-glow-strong">./about_me</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Навыки */}
            <div className="terminal-card">
              <h3 className="text-xl font-semibold mb-6 text-[#00FF00] flex items-center gap-2 font-mono">
                <span className="matrix-glow">◈</span>
                <span className="mr-2">$</span>Технические навыки
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="terminal-card px-4 py-3 text-[#00CC00] hover:text-[#33FF33] hover:border-[#33FF33] transition-all duration-300 font-mono text-sm"
                  >
                    {'>'} {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Опыт - MacOS Style */}
            <div className="terminal-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00FF00]/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[#00CC00] text-xs font-mono ml-2">experience.txt</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-6 text-[#00FF00] font-mono">
                <span className="mr-2">$</span>Опыт работы
              </h3>
              
              <div className="space-y-4 font-mono text-sm">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border-l-2 border-[#00FF00]">
                    <p className="text-[#00FF00] mb-2">
                      <span className="text-[#33FF33]">{exp.period}</span>
                    </p>
                    <p className="text-[#F1FA8C]">
                      <span className="text-[#50FA7B]">Должность:</span> {exp.title}
                    </p>
                    <p className="text-[#F1FA8C]">
                      <span className="text-[#50FA7B]">Компания:</span> {exp.company}
                    </p>
                    <p className="text-[#00CC00] mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Обо мне текст */}
          <div className="mt-8 terminal-card">
            <h3 className="text-xl font-semibold mb-4 text-[#00FF00] flex items-center gap-2 font-mono">
              <span className="matrix-glow">✦</span>
              <span className="mr-2">$</span>Немного о себе
            </h3>
            <p className="text-[#00CC00] leading-relaxed font-mono">
              Я увлечённый frontend-разработчик с опытом создания современных 
              веб-приложений. Люблю решать сложные задачи и постоянно изучаю 
              новые технологии. В своей работе уделяю особое внимание качеству 
              кода, производительности и удобству пользовательского интерфейса.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
