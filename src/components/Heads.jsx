import React from "react";
import fire from "../assets/fire-gif.gif";

export default function Heads() {
  return (
    <div className="sm:pt-4 text-center">
      <div className="w-full justify-center flex space-x-4 self-end">
        <img src={fire} alt="fire" className="min-w-[40px] min-h-[60px]"></img>
        <div className="mt-auto">
          <h1 className="text-4xl font-bold">Phil Ganem</h1>
        </div>
        <img src={fire} alt="fire" className="min-w-[40px] min-h-[60px] "></img>
      </div>
      <div className="text-2xl flex justify-center">
        <h2>Software Engineer/</h2>
        <h2
          className="text-2xl font-semibold 
                  bg-gradient-to-r bg-clip-text text-transparent 
                  from-[#a7c080] via-[#DBBC7F] to-[#a7c080]
                  animate-text"
        >
          Wizard
        </h2>
      </div>
    </div>
  );
}
