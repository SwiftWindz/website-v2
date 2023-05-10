import NavBar from "./components/NavBar";
import "./app.css";
import Heads from "./components/Heads";
import Home from "./components/Home";
import Cmd from "./components/Cmd";

function App() {
  return (
    <div className="font-code h-full w-screen bg-[#1e2326] text-white flex flex-col">
      <Heads></Heads>
      <NavBar></NavBar>
      <Home></Home>
      <Home></Home>
      <Home></Home>
      <Cmd></Cmd>
    </div>

  );
}

export default App;
