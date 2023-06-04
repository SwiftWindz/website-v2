import NavBar from "./components/NavBar";
import "./app.css";
import Heads from "./components/Heads";
import Cmd from "./components/Cmd";
import Experience from "./components/Experience";
import About from "./components/About";
import Blog from "./components/Stats";
import Contact from "./components/Contact";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row font-code bg-[#1e2326] text-white overflow-y-auto justify-center">
      
      {/* <div className="hidden max-w-[15rem] sm:visible sm:flex-col sm:flex">
        <img src={fire} alt="fire" className="w-10 h-10 "></img>
      </div> */}

      <div className="flex flex-col max-w-[70rem] w-full">
        <div>
          <Heads></Heads>
          <NavBar></NavBar>
        </div>
        <div className="space-y-6 h-full w-full">
          <div className="mx-4 pb-4">
            <div id="home" className="flex text-2xl md:text-3xl justify-center md:justify-start pt-4">
              <h2 className="font-bold">Character Sheet</h2>
            </div>
            <div className="space-y-4 py-4">
              <About></About>
              <Stats></Stats>
              <Experience></Experience>
              <Contact></Contact>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hidden max-w-[15rem] flex-wrap sm:visible sm:flex-col sm:flex">
        <img src={fire} alt="fire" className="w-10 h-10"></img>
      </div> */}

      <div className="fixed bottom-0 w-full">
        <Cmd></Cmd>
      </div>
    </div>
  );
}

export default App;
