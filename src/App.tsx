import "./App.css";
import {
  Hero,
  Skills,
  Projects,
  Experience,
  Education,
  Contact,
  Footer,
} from "./components";
import { Header, About } from "./components/app";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
