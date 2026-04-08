export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
          Sangam
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}