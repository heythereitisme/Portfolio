import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="min-h-screen bg-slate-100 text-center">
        <Intro />
        <Projects />
        <Experience />
    </div>
  )
}

export default App
