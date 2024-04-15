import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Competence } from "./pages/Competence";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { ShowSkills } from "./pages/ShowSkills";
import { Skills } from "./pages/Skills";

function App() {
  return (
    <>
      <div className="overflow-hidden bg-site bg-no-repeat bg-cover mx-auto">
        <Navbar />
        <main>
          <About />
          <Competence />
          <Skills />
          <ShowSkills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
