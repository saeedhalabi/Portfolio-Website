import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
