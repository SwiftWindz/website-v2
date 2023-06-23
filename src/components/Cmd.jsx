import React from "react";

export default function Cmd() {
  const parseInput = (input) => {
    switch (input.toLowerCase().trim()) {
      case "cd h" : {
        window.location.href = '#home'
        break
      }
      case "cd a" : {
        window.location.href = '#about'
        break
      }
      case "cd s" : {
        window.location.href = '#stats'
        break
      }
      case "cd t" : {
        window.location.href = '#timeline'
        break
      }
      case "cd c" : {
        window.location.href = '#contact'
        break
      }
      default:
    }
  };

  return (
    <div className="bg-black w-full hidden md:flex">
      <input
        type="text"
        className="bg-black w-full outline-none"
        placeholder="Input a command..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            parseInput(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
