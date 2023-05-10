import React from "react";

export default function Cmd() {

  const parseInput = (input) => {
    switch (input) {
      default: 
    }
  };

  return (
    <div className="bg-black bottom-0 absolute w-full">
      <input
        type="text"
        className="bg-black w-full outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            parseInput(e.target.value);
            e.target.value = ""
          }
        }}
      />
    </div>
  );
}
