export default function Footer() {
  return (
    <footer className="py-8 glass border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Портфолио разработчика. Все права защищены.
          </p>
          <p className="text-slate-500 text-sm">
            Создано с использованием Next.js и Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
