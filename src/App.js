import NavBar from "./components/NavBar";
import "./App.css";
import Heads from "./components/Heads";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="computerScreen h-full w-screen font-code text-white overflow-y-auto">
      <div className="scanLines w-full h-full justify-center flex flex-row overflow-y-auto">
        <body className="flex flex-col max-w-[70rem] w-full">
          <div>
            <Heads></Heads>
            <NavBar></NavBar>
          </div>
          <div className="space-y-6 h-full w-full">
            <div className="mx-4 pb-4">
              <div
                id="home"
                className="flex text-2xl md:text-3xl justify-center md:justify-start pt-4"
              >
                <h2>Character Sheet</h2>
              </div>
              <div className="space-y-4 py-4">
                <About></About>
                <Experience></Experience>
                <Projects></Projects>
                <Contact></Contact>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
