import About from "./components/About";
import Socials from "./components/Socials";
import ProjectsList from "./components/ProjectsList";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-inter">
      <About />
      <ProjectsList />
      <Skills />
      <Socials />
    </div>
  );
}

export default App;
