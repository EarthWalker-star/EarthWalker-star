import { projects } from '@/data/projects'
import MatrixRainBackground from './MatrixRainBackground'

export default function Projects() {
  return (
    <section id="projects" className="section-projects relative section-padding overflow-hidden">
      <MatrixRainBackground />
      <div className="container mx-auto px-4 relative" style={{ zIndex: 20 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text matrix-glow-strong">./projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="terminal-card overflow-hidden group"
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 font-mono text-sm text-[#00FF00] matrix-glow">
                  {'>'} project_{index + 1}.exe
                </div>
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-150 group-hover:hue-rotate-[30deg]"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00FF00] mb-2 group-hover:text-[#33FF33] transition-colors font-mono matrix-glow">
                  {project.title}
                </h3>
                <p className="text-[#00CC00] mb-4 font-mono text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 terminal-card text-[#00FF00] text-xs font-mono border-[#00FF00]/50 hover:border-[#33FF33] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoUrl}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-transparent border-2 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black hover:matrix-glow transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть проект"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
