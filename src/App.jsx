import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Accomplishments from './components/Achievements'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Accomplishments />
        <Education />
        <Contact />
      </main>
    </>
  )
}
