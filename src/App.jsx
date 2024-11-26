import Education from "./Component/Education"
import Experience from "./Component/Experience"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import Projects from "./Component/Projects"
import Skills from "./Component/Skills"
import Contact from "./Component/Contact"
function App() {
  return (
   <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
    <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
    <div>
      <Navbar />
      <Hero/>
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
   </main>
  )
}

export default App
