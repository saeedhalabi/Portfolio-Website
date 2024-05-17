import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
