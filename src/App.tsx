import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <Nav isDark={isDark} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-400 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800">
        © 2026 · Built with React + TypeScript
      </footer>
    </>
  );
}
