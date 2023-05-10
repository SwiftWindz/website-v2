import NavBar from "./components/NavBar";
import "./app.css";
import Heads from "./components/Heads";
import Home from "./components/Home";
import Cmd from "./components/Cmd";
import Experience from "./components/Experience";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container h-screen flex flex-col">
      <div className=" font-code h-full w-full bg-[#1e2326] text-white flex flex-col">
        <Heads></Heads>
        <NavBar></NavBar>
        <div className="flex-grow">
          <About></About>
          <Experience></Experience>
          <Blog></Blog>
          <Contact></Contact>
        </div>
        <Cmd></Cmd>
      </div>
    </div>
  );
}

export default App;
