import React, { useState } from "react";

export default function About() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className="w-screen flex flex-row mt-4">
      <div className="md:w-[20%] ">{/* <h1 className="">1</h1> */}</div>

      <div className=" md:w-[60%] flex-row">
        <div className="flex">
          <button
            onClick={() => {
              setIsFolded(!isFolded);
            }}
          >
            <h1 className="hover:animate-pulse">{isFolded ? "[+]" : "[-]"}</h1>
          </button>
          <div id="home" className="hover:animate-pulse flex text-xl">
            <p>[A]</p>
            <p className="hover:animate-pulse text-[#DBBC7F]">bout</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="m-2">
            <p>
              My name is Phil Ganem and I'm a student software engineer,
              activist, and coffee snob based out of Rochester, New York. I am
              currently in my third year of the{" "}
              <a
                href="https://www.rit.edu/"
                className="text-[#D699b6] font-bold hover:opacity-50"
              >
                Rochester Institute of Technology
              </a>
              's five year software engineering BS program.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:w-[20%] "></div>
    </div>
  );
}
