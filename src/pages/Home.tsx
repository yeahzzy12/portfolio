import Header from '../components/Header'
import Hero from '../sections/Hero'
import Highlights from '../sections/Highlights'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import AIEngineering from '../sections/AIEngineering'
import Contact from '../sections/Contact'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Highlights />

        <div className="section-light">
          <About />
        </div>

        <div className="section-muted">
          <Experience />
        </div>

        <div className="section-light">
          <Projects />
        </div>

        <div className="section-muted">
          <Skills />
        </div>

        <div className="section-light">
          <AIEngineering />
        </div>

        <Contact />
      </main>
    </>
  )
}

export default Home