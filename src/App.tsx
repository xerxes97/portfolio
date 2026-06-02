import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Contact,
  Footer,
} from "./components/app";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
