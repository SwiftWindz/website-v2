import Head from "./components/Heads";
import NavBar from "./components/NavBar";
import "./app.css";
import Heads from "./components/Heads";
import Home from "./components/Home";

function App() {
  return (
    <div className="font-code h-screen w-screen bg-[#1e2326] text-white">
      <Heads></Heads>
      <NavBar></NavBar>
      {/* <Home></Home> */}
    </div>

  );
}

export default App;
