import React from "react";

export default function Heads() {
  return (
    <div className="pt-6 text-center">
      <h1 className="text-3xl font-bold">Phil Ganem</h1>
      <div className="text-xl flex justify-center">
        <h2>Software Engineer/</h2>
        <h2
          className="text-xl font-semibold 
                  bg-gradient-to-r bg-clip-text text-transparent 
                  from-[#a7c080] via-[#DBBC7F] to-[#a7c080]
                  animate-text"
        >
          wizard
        </h2>
      </div>
    </div>
  );
}
