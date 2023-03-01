import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="min-h-screen bg-slate-200 text-center">
        <Sidebar>
          <Intro />
          <Projects />
          <Experience />
        </Sidebar>
    </div>
  )
}

export default App
