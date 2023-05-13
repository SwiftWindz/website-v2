import NavBar from "./components/NavBar";
import "./app.css";
import Heads from "./components/Heads";
import Cmd from "./components/Cmd";
import Experience from "./components/Experience";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col font-code bg-[#1e2326] text-white overflow-y-auto">
      <div>
        <Heads></Heads>
        <NavBar></NavBar>
      </div>
      <div className=" space-y-6 h-full">
        <div className="lg:mx-40 space-y-6 pb-8 pt-4">
          <About></About>
          <Experience></Experience>
          <Blog></Blog>
          <Contact></Contact>
        </div>
        <div className="fixed bottom-0 w-full">
          <Cmd></Cmd>
        </div>
      </div>
    </div>
  );
}

export default App;
