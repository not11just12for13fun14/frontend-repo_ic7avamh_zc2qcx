import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold">IoT Engineer Portfolio</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name — Based in Indonesia & Melbourne. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
